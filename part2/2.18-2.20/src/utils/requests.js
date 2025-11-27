const getAllCountriesRequest = async () => {
  return await fetch("https://studies.cs.helsinki.fi/restcountries/api/all")
    .then(response => response.json())
    .catch(error => false)
};

const getWeatherForLocationRequest = async (cityName) => {
  let lat = null;
  let lon = null;
  const APIKey = import.meta.env.VITE_APIKey;

  await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${APIKey}`)
    .then(response => response.json())
    .then(data => {
      lat = data[0].lat;
      lon = data[0].lon;
    });

  return await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`)
    .then(response => response.json());
};

export {
  getAllCountriesRequest,
  getWeatherForLocationRequest
};
