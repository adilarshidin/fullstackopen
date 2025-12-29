import { v1 as uuid } from "uuid";

import { NewPatient, Gender, InitPatient } from "./types";

const isString = (field: unknown): field is string => {
  return typeof field === "string" || field instanceof String;
};
const isDate = (date: string): boolean => Boolean(Date.parse(date));
const isGender = (gender: string): gender is Gender => {
  return Boolean(Object.values(Gender).find(value => value.toString() === gender));
};

const idValid = (id: unknown): string => {
  if (isString(id)) {
    return id;
  } else {
    throw new Error("ID is invalid");
  }
};
const nameValid = (name: unknown): string => {
  if (isString(name)) {
    return name;
  } else {
    throw new Error("Name field is invalid");
  }
};
const dateOfBirthValid = (date: unknown): string => {
  if (isString(date) && isDate(date)) {
    return date;
  } else {
    throw new Error("dateOfBirth is invalid");
  }
};
const ssnValid = (ssn: unknown): string => {
  if (isString(ssn)) {
    return ssn;
  } else {
    throw new Error("ssn is invalid");
  }
};
const genderValid = (gender: unknown): Gender => {
  if (isString(gender) && isGender(gender)) {
    return gender;
  } else {
    throw new Error("gender is invalid");
  }
};
const occupationValid = (occupation: unknown): string => {
  if (isString(occupation)) {
    return occupation;
  } else {
    throw new Error("occupation is invalid");
  }
};

const toNewPatient = (patient: unknown): NewPatient => {
  if (!patient || !(patient instanceof Object || !(typeof patient !== "object"))) {
    throw new Error("Incorrect or missing patient data");
  };

  if (
    "name" in patient &&
    "dateOfBirth" in patient &&
    "ssn" in patient &&
    "gender" in patient &&
    "occupation" in patient
  ) {
    const createdPatient = {
      id: uuid(),
      name: nameValid(patient.name),
      dateOfBirth: dateOfBirthValid(patient.dateOfBirth),
      ssn: ssnValid(patient.ssn),
      gender: genderValid(patient.gender),
      occupation: occupationValid(patient.occupation)
    };

    return createdPatient;
  } else {
    throw new Error("Incorrect patient data, fields are missing");
  }
};

const toPatient = (patient: unknown): InitPatient => {
  if (!patient || !(patient instanceof Object || !(typeof patient !== "object"))) {
    throw new Error("Incorrect or missing patient data");
  };

  if (
    "id" in patient &&
    "name" in patient &&
    "dateOfBirth" in patient &&
    "ssn" in patient &&
    "gender" in patient &&
    "occupation" in patient
  ) {
    const patientEntry = {
      id: idValid(patient.id),
      name: nameValid(patient.name),
      dateOfBirth: dateOfBirthValid(patient.dateOfBirth),
      ssn: ssnValid(patient.ssn),
      gender: genderValid(patient.gender),
      occupation: occupationValid(patient.occupation)
    };

    return patientEntry;
  } else {
    throw new Error("Incorrect patient data");
  }
};

export { toNewPatient, toPatient };
