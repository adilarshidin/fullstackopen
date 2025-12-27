import express from "express";
import { Response } from "express";
import cors from "cors";

import { Diagnosis } from "./types";
import data from "./data/diagnoses";

const app = express();
app.use(cors());

app.get('/api/ping', (_req, res) => {
  res.send('pong');
});

app.get('/api/patients', (_req, res) => {
  res.send({ "patient1": { "id": "1", "name": "guy", "gender": "m", "occupation": "dunno" } });
});

app.get('/api/diagnoses', (_req, res: Response<Diagnosis[]>) => {
  res.send(data);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
