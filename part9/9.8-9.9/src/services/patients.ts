import data from "../../data/patients";
import { PatientSafe } from "../types";

const returnSafePatients = (): PatientSafe[] => {
  return data.map(({ id, name, dateOfBirth, gender, occupation }) => (
    { id, name, dateOfBirth, gender, occupation }
  ));
};

export { returnSafePatients };
