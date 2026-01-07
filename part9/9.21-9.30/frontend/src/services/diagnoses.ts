const getDiagnosesRequest = async () => {
  const response = await fetch("http://localhost:3001/api/diagnoses");
  return await response.json();
};

export { getDiagnosesRequest };
