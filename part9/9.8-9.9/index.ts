import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get('/api/ping', (_req, res) => {
  res.send('pong');
});

app.get('/api/patients', (_req, res) => {
  res.send({ "patient1": { "id": "1", "name": "guy", "gender": "m", "occupation": "dunno" } });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
