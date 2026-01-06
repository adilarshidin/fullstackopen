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

type PatientSafe = Omit<InitPatient, "ssn">;

export { Diagnosis, Gender, PatientSafe, InitPatient, NewPatientSchema, NewPatient };
