const getPersonsRequest = async () => {
  return await fetch("/api/persons")
    .then(response => response.json())
};

const addPersonRequest = async (name, number) => {
  const body = { name: name, number: number };

  return await fetch("/api/persons", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  })
    .then(async response => {
      const data = await response.json();
      return !!data.result;
    })
    .catch(error => false)
};

export { getPersonsRequest, addPersonRequest };
