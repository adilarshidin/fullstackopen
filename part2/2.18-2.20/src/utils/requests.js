const getAllCountriesRequest = async () => {
  return await fetch("https://studies.cs.helsinki.fi/restcountries/api/all")
    .then(response => response.json())
    .catch(error => false)
};

export {
  getAllCountriesRequest
};
