type Diagnosis = {
  code: string
  name: string
  latin?: string
};

interface Patient {
  id: string
  name: string
  dateOfBirth: string
  ssn: string
  gender: string
  occupation: string
}
type PatientSafe = Omit<Patient, "ssn">;

export { Diagnosis, PatientSafe };
