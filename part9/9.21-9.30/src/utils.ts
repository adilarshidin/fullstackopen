import { v1 as uuid } from "uuid";

import {
  Gender,
  InitPatient,
  Diagnosis,
  Entry,
  EntryType,
  HealthCheckRating,
  HealthCheckEntry,
  HospitalEntry,
  OccupationalHealthcareEntry
} from "./types";

const assertNever = (): never => {
  throw new Error("Invalid entry type");
};

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

const toNewPatient = (patient: unknown): InitPatient => {
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

const isEntryType = (field: unknown): field is EntryType => {
  return Boolean(Object.values(EntryType).find(value => value === field));
};
const isNumber = (field: unknown): field is number => {
  return typeof field === "number" || field instanceof Number;
};
const isObject = (field: unknown): field is object => {
  return typeof field === "object" || field instanceof Object;
};

const isHealthCheckRating = (healthCheckRating: number): healthCheckRating is HealthCheckRating => {
  return Boolean(Object.values(HealthCheckRating).find(value => Number(value) === healthCheckRating));  
};
const parseDiagnosisCodes = (object: unknown): Array<Diagnosis['code']> =>  {
  if (!object || typeof object !== 'object' || !('diagnosisCodes' in object)) {
    return [] as Array<Diagnosis['code']>;
  }

  return object.diagnosisCodes as Array<Diagnosis['code']>;
};

const descriptionValid = (description: unknown): string => {
  if (isString(description)) {
    return description;
  } else {
    throw new Error("Description field is invalid");
  }
};
const dateValid = (date: unknown): string => {
  if (isString(date) && isDate(date)) {
    return date;
  } else {
    throw new Error("Date is invalid");
  }
};
const specialistValid = (specialist: unknown): string => {
  if (isString(specialist)) {
    return specialist;
  } else {
    throw new Error("Specialist field is invalid");
  }
};
const dischargeValid = (discharge: unknown): object => {
  if (
    isObject(discharge) &&
    "date" in discharge &&
    "criteria" in discharge &&
    isString(discharge.criteria) &&
    isString(discharge.date) &&
    isDate(discharge.date)
  ) {
    return discharge;
  } else {
    throw new Error("Discharge field is invalid");
  }
};
const sickLeaveValid = (sickLeave: unknown): object => {
  if (
    isObject(sickLeave) &&
    "startDate" in sickLeave &&
    isString(sickLeave.startDate) &&
    isDate(sickLeave.startDate) &&
    "endDate" in sickLeave &&
    isString(sickLeave.endDate) &&
    isDate(sickLeave.endDate)
  ) {
    return sickLeave;
  } else {
    throw new Error("SickLeave field is invalid");
  }
};

const toEntry = (entry: unknown): Entry => {
  if (!entry || !(entry instanceof Object || !(typeof entry !== "object"))) {
    throw new Error("Incorrect or missing entry data");
  };

  if (
    "type" in entry &&
    "description" in entry &&
    "date" in entry &&
    "specialist" in entry &&
    "diagnosisCodes" in entry
  ) {
    if (!isEntryType(entry.type)) {
      throw new Error("Invalid entry type");
    }

    const newEntry = {
      id: uuid(),
      description: descriptionValid(entry.description),
      date: dateValid(entry.date),
      specialist: specialistValid(entry.specialist),
      diagnosisCodes: parseDiagnosisCodes(entry)
    };

    switch (entry.type) {
      case EntryType.HealthCheck: {
        if ("healthCheckRating" in entry &&
            isNumber(entry.healthCheckRating) &&
            isHealthCheckRating(entry.healthCheckRating)
          ) {
            const newHealthCheckEntry = {
              ...newEntry,
              type: EntryType.HealthCheck,
              healthCheckRating: entry.healthCheckRating
            };
            return newHealthCheckEntry as HealthCheckEntry;
          } else {
            throw new Error("Incorrect HealthCheckEntry data");
          };
        }
      case EntryType.Hospital: {
        if (
          "discharge" in entry &&
          dischargeValid(entry.discharge)
        ) {
          const newHospitalEntry = {
            ...newEntry,
            type: EntryType.Hospital,
            discharge: entry.discharge
          };
          return newHospitalEntry as HospitalEntry;
        } else {
          throw new Error("Incorrect HospitalEntry data");
        }
      }
      case EntryType.OccupationalHealthcare: {
        if (
          "employerName" in entry &&
          "sickLeave" in entry &&
          isString(entry.employerName) &&
          sickLeaveValid(entry.sickLeave)
        ) {
          const newOccupationalHealthcareEntry = {
            ...newEntry,
            type: EntryType.OccupationalHealthcare,
            sickLeave: entry.sickLeave
          };
          return newOccupationalHealthcareEntry as OccupationalHealthcareEntry;
        } else {
          throw new Error("Incorrect OccupationalHealthcareEntry data");
        }
      }
      default:
        return assertNever();
    };
  } else {
    throw new Error("Incorrect patient data");
  }
};

export { toNewPatient, toPatient, toEntry };
