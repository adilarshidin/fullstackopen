import data from "../../data/patients";
import { toPatient, toNewPatient } from "../utils";
import { InitPatient, PatientSafe } from "../types";

const patients = data.map(entry => toPatient(entry));

const getSafePatients = (): PatientSafe[] => {
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
    occupation: newPatient.occupation,
  };
};

const getSafePatient = (id: string): PatientSafe | null => {
  const patientFound = patients.find((patient) => patient.id === id);
  if (patientFound) {
    const { ssn, ...rest } = patientFound;
    return rest;
  }
  return null;
};

export { getSafePatients, addPatient, getSafePatient };
