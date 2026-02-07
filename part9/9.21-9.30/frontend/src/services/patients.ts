import axios from "axios";
import { Entry, EntryFormValues, Patient, PatientFormValues } from "../types";

import { apiBaseUrl } from "../constants";

const getAll = async () => {
  const { data } = await axios.get<Patient[]>(
    `${apiBaseUrl}/patients`
  );

  return data;
};

const create = async (object: PatientFormValues) => {
  const { data } = await axios.post<Patient>(
    `${apiBaseUrl}/patients`,
    object
  );

  return data;
};

const updatePatient = async (id: string, object: EntryFormValues) => {
  const { data } = await axios.post<Entry>(
    `${apiBaseUrl}/patients/${id}/entries`,
    object
  );

  return data;
};

const getPatientRequest = async (id: string) => {
  const response = await fetch(`${apiBaseUrl}/patients/${id}`);
  const data = await response.json();
  return data;
};

export default {
  getAll, create
};

export {
  getPatientRequest,
  updatePatient
};
