const calculateBMI = (height: number, weight: number): string => {
  const result = weight / (height / 100 * height / 100)
  if (result >= 25.0) {
    return "Overweight"
  } else if (result >= 18.5) {
    return "Normal"
  } else {
    return "Underweight"
  }
}

console.log(calculateBMI(180, 74))