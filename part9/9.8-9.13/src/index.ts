import express, { NextFunction, Response, Request } from "express";
import cors from "cors";

import { Diagnosis, NewPatientSchema, PatientSafe, NewPatient } from "./types";
import data from "../data/diagnoses";
import { addPatient, returnSafePatients } from "./services/patients";

const app = express();
app.use(cors());
app.use(express.json());

const newPatientParser = (req: Request, _res: Response, next: NextFunction) => {
  try {
    NewPatientSchema.parse(req.body);
    next();
  } catch (error: unknown) {
    next(error);
  }
};

app.get('/api/ping', (_req, res) => {
  res.send('pong');
});

app.get('/api/patients', (_req, res: Response<PatientSafe[]>) => {
  res.send(returnSafePatients());
});

app.post(
  "/api/patients",
  newPatientParser,
  (
    req: Request<unknown, unknown, NewPatient>,
    res: Response<PatientSafe>
  ) => {
  const addedPatient = addPatient(req.body);
  res.json(addedPatient);
});

app.get('/api/diagnoses', (_req, res: Response<Diagnosis[]>) => {
  res.send(data);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
