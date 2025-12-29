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

interface Patient {
  id: string
  name: string
  dateOfBirth: string
  ssn: string
  gender: Gender
  occupation: string
}
type PatientSafe = Omit<Patient, "ssn">;
type NewPatient = Patient;
type InitPatient = Patient;

export { Gender, Diagnosis, PatientSafe, NewPatient, InitPatient };
