type Result = {
  daysTotal: number
  trainingDays: number
  targetValue: number
  averageTime: number
  targetReached: boolean
  rating: number
  explanation: string
};

const calculateExercises = (dailyExerciseHours: number[], target: number): Result => {
  const daysTotal = dailyExerciseHours.length;
  const trainingDays = dailyExerciseHours.reduce((accumulator, currentDayHours) => {
    return currentDayHours > 0 ? accumulator + 1 : accumulator;
  }, 0);
  const totalTime = dailyExerciseHours.reduce((accumulator, currentDayHours) => {
    return currentDayHours > 0 ? accumulator + currentDayHours : accumulator;
  }, 0);
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
  };

  return {
    daysTotal,
    trainingDays,
    targetValue: target,
    averageTime,
    targetReached,
    rating,
    explanation
  }
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))
