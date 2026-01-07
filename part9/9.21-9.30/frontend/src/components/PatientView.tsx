import { useMatch } from "react-router-dom";

import { getPatientRequest } from "../services/patients";
import { useEffect, useState } from "react";
import { Patient } from "../types";

const PatientView = () => {
  const [patient, setPatient] = useState<Patient>();
  const matchedPatient = useMatch("/patients/:id");

  useEffect(() => {
    const getPatient = async () => {
      if (matchedPatient?.params.id) {
        const foundPatient = await getPatientRequest(matchedPatient.params.id);
        if (foundPatient) setPatient(foundPatient); 
      }
    };

    getPatient();
  }, [matchedPatient?.params.id]);

  if (!patient) return <div>Not found.</div>;

  return (
    <div>
      <h2>{patient.name}</h2>
      <p>{patient.gender} {patient.dateOfBirth}</p>
      <p>{patient.occupation}</p>
    </div>
  );
};

export default PatientView;
