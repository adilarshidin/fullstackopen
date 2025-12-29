import data from "../../data/patients";
import { toPatient, toNewPatient } from "../utils";
import { InitPatient, PatientSafe } from "../types";

const patients = data.map(entry => toPatient(entry));

const returnSafePatients = (): PatientSafe[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => (
    { id, name, dateOfBirth, gender, occupation }
  ));
};

const addPatient = (data: unknown): PatientSafe => {
  const newPatient: InitPatient = toNewPatient(data);
  patients.push(newPatient);
  return {
    id: newPatient.id,
    name: newPatient.name,
    dateOfBirth: newPatient.dateOfBirth,
    gender: newPatient.gender,
    occupation: newPatient.occupation
  };
};

export { returnSafePatients, addPatient };
