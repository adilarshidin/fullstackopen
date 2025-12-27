const calculateBMI = (height: number, weight: number): string => {
  const result = weight / (((height / 100) * height) / 100);
  if (result >= 25.0) {
    return "Overweight";
  } else if (result >= 18.5) {
    return "Normal";
  } else {
    return "Underweight";
  }
};

const processArgs = (args: string[]): string => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return calculateBMI(Number(args[2]), Number(args[3]));
  } else throw new Error("The arguments must be numbers");
};

if (require.main === module) {
  try {
    console.log(processArgs(process.argv));
  } catch (error: unknown) {
    if (error instanceof Error) console.error(error.message);
  }
}

export default calculateBMI;
