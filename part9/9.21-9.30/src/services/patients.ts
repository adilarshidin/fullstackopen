import data from "../../data/patients";
import { toPatient, toNewPatient } from "../utils";
import { FullPatient, InitPatient, SafePatient } from "../types";

const patients = data.map(entry => toPatient(entry));

const getSafePatients = (): SafePatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => (
    { id, name, dateOfBirth, gender, occupation }
  ));
};

const addPatient = (data: unknown): SafePatient => {
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

const getSafePatient = (id: string): SafePatient | null => {
  const patientFound = patients.find((patient) => patient.id === id);
  if (patientFound) {
    const { ssn, ...rest } = patientFound;
    return rest;
  }
  return null;
};

const getPatientFull = (id: string): FullPatient | null => {
  const patientFound = data.find((patient) => patient.id === id);
  if (patientFound) return patientFound;
  return null;
};

export { getSafePatients, addPatient, getSafePatient, getPatientFull };
