type Result = {
  daysTotal: number;
  trainingDays: number;
  targetValue: number;
  averageTime: number;
  targetReached: boolean;
  rating: number;
  explanation: string;
};

type ArgsProcessingResult = Result | string;

const calculateExercises = (
  dailyExerciseHours: number[],
  target: number,
): Result => {
  const daysTotal = dailyExerciseHours.length;
  const trainingDays = dailyExerciseHours.reduce(
    (accumulator, currentDayHours) => {
      return currentDayHours > 0 ? accumulator + 1 : accumulator;
    },
    0,
  );
  const totalTime = dailyExerciseHours.reduce(
    (accumulator, currentDayHours) => {
      return currentDayHours > 0 ? accumulator + currentDayHours : accumulator;
    },
    0,
  );
  const averageTime = totalTime / trainingDays;
  const targetReached = averageTime > target;

  let rating = 0;
  let explanation = "";
  if (averageTime > target + 0.5) {
    rating = 3;
    explanation = "keep it up";
  } else if (averageTime < target - 1) {
    rating = 1;
    explanation = "bad";
  } else {
    rating = 2;
    explanation = "you need to do better";
  }

  return {
    daysTotal,
    trainingDays,
    targetValue: target,
    averageTime,
    targetReached,
    rating,
    explanation,
  };
};

const processArgs = (args: string[]): ArgsProcessingResult => {
  if (args.length < 4) throw new Error("Not enough arguments");

  for (let i = 2; i < args.length; i++) {
    if (isNaN(Number(args[i]))) throw new Error("Argument can not be NaN");
  }

  const target = args[2];
  const dailyExerciseHoursString = args.slice(3);
  const dailyExerciseHours = [];
  for (let i = 0; i < dailyExerciseHoursString.length; i++) {
    dailyExerciseHours[i] = Number(dailyExerciseHoursString[i]);
  }

  return calculateExercises(dailyExerciseHours, Number(target));
};

if (require.main === module) {
  try {
    console.log(processArgs(process.argv));
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
  }
}

export default calculateExercises;
