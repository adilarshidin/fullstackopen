import express from "express";

const app = express();

app.get('/api/ping', (_req, res) => {
  res.send('pong');
});

const PORT = 3000;
app.listen(3000, () => {
  console.log(`App listening on ${PORT}`);
});
