import express from "express";
import calculateBMI from "./bmiCalculator";
import calculateExercises from "./exerciseCalculator";

const app = express();
app.use(express.json());

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const queryArgs = req.query;

  try {
    const keys = Object.keys(queryArgs);
    if (keys.length === 0) {
      return res.status(400).json({
        result: false,
        message: "No query parameters provided",
      });
    } else if (!keys.includes("height") || !keys.includes("weight")) {
      return res.status(400).json({
        result: false,
        message: "No height and/or weight parameters provided",
      });
    } else if (
      isNaN(Number(queryArgs["height"])) ||
      isNaN(Number(queryArgs["weight"]))
    ) {
      return res.status(400).json({
        result: false,
        message: "Height and weight must be numbers",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      result: false,
      message: "Error occured",
    });
  }

  return res.send({
    result: true,
    data: calculateBMI(
      Number(queryArgs["height"]),
      Number(queryArgs["weight"]),
    ),
  });
});

app.post('/exercise', (req, res) => {
  try {
    const body = req.body;
    if (!body.target || !body.daily_exercises) {
      return res.status(400).json({
        result: false,
        error: "parameters missing"
      });
    };

    const target = Number(body.target);
    const dailyExercises = body.daily_exercises;
    if (isNaN(target) || !(dailyExercises instanceof Array)) return res.status(400).json({
      result: false,
      error: "malformatted parameters"
    });

    return res.send(calculateExercises(dailyExercises, target));
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      result: false,
      error: "Error occured"
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
