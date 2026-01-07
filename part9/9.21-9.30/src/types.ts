import { z } from "zod";

type Diagnosis = {
  code: string
  name: string
  latin?: string
};

enum Gender {
  Male = "male",
  Female = "female",
  Other = "other"
};

export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3
};

interface BaseEntry {
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<Diagnosis["code"]>;
}

interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck";
  healthCheckRating: HealthCheckRating;
}

interface HospitalEntry extends BaseEntry {
  type: "Hospital";
  discharge: {
    date: string;
    criteria: string;
  }
}

interface OccupationalHealthcareEntry extends BaseEntry {
  type: "OccupationalHealthcare";
  employerName: string;
  sickLeave?: {
    startDate: string;
    endDate: string;
  }
}

type Entry = HospitalEntry | OccupationalHealthcareEntry | HealthCheckEntry;
// Define special omit for unions
type UnionOmit<T, K extends string | number | symbol> = T extends unknown ? Omit<T, K> : never;
// Define Entry without the 'id' property
type EntryWithoutId = UnionOmit<Entry, 'id'>;

const NewPatientSchema = z.object({
  name: z.string(),
  dateOfBirth: z.string().date(),
  ssn: z.string(),
  gender: z.nativeEnum(Gender),
  occupation: z.string()
});

type NewPatient = z.infer<typeof NewPatientSchema>;

interface InitPatient extends NewPatient {
  id: string
};

type SafePatient = Omit<InitPatient, "ssn">;

interface FullPatient extends InitPatient {
  entries: Entry[]
}

export {
  Diagnosis,
  Gender,
  SafePatient,
  InitPatient,
  NewPatientSchema,
  NewPatient,
  FullPatient,
  Entry,
  EntryWithoutId
};
