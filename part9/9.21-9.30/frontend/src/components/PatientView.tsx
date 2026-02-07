import { useMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";

import { getPatientRequest, updatePatient } from "../services/patients";
import { Diagnosis, EntryFormValues, Patient } from "../types";
import { getDiagnosesRequest } from "../services/diagnoses";

import AddEntryModal from "./AddEntryModal";
import EntryView from "./EntryView";

const PatientView = () => {
  const [patient, setPatient] = useState<Patient>();
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>();
  const matchedPatient = useMatch("/patients/:id");

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const openModal = (): void => setModalOpen(true);

  const closeModal = (): void => {
    setModalOpen(false);
    setError(undefined);
  };

  useEffect(() => {
    const getPatient = async () => {
      if (matchedPatient?.params.id) {
        const foundPatient = await getPatientRequest(matchedPatient.params.id);
        if (foundPatient) setPatient(foundPatient); 
      }
    };

    const getDiagnoses = async () => {
      const diagnoses = await getDiagnosesRequest();
      if (diagnoses) setDiagnoses(diagnoses);
    };

    getPatient();
    getDiagnoses();
  }, [matchedPatient?.params.id, patient]);

  if (!patient || !diagnoses) return <div>Not found.</div>;

  const submitNewEntry = async (id: string, values: EntryFormValues) => {
    try {
      const entry = await updatePatient(id, values);
      const newPatient = { ...patient, entries: patient.entries.concat(entry) };
      setPatient(newPatient);
      setModalOpen(false);
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        if (e?.response?.data && typeof e?.response?.data === "string") {
          const message = e.response.data.replace('Something went wrong. Error: ', '');
          console.error(message);
          setError(message);
        } else {
          setError("Unrecognized axios error");
        }
      } else {
        console.error("Unknown error", e);
        setError("Unknown error");
      }
    }
  };

  return (
    <div>
      <h2>{patient.name}</h2>
      <p>{patient.gender} {patient.dateOfBirth}</p>
      <p>{patient.occupation}</p>
      <h3>Entries</h3>
      {patient.entries.map(entry => (
        <EntryView key={entry.id} entry={entry} diagnoses={diagnoses} />
      ))}
      <AddEntryModal
        modalOpen={modalOpen}
        onSubmit={submitNewEntry}
        error={error}
        onClose={closeModal}
      />
      <Button variant="contained" onClick={() => openModal()}>
        Add New Entry
      </Button>
    </div>
  );
};

export default PatientView;
