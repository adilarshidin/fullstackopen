import { useState, useEffect } from "react";

import Weather from "./Weather";

import { getWeatherForLocationRequest } from "../utils/requests";


const Country = ({ chosenCountry, imageStyles }) => {
  const [weatherData, setWeatherData] = useState(null);

  if (!chosenCountry) {
    return null;
  };

  const getWeatherForLocation = () => {
    getWeatherForLocationRequest(chosenCountry.capital[0])
      .then(data => {
        setWeatherData(data)
      });
    };

  useEffect(getWeatherForLocation, []);

  return (
    <div>
      <h2>{chosenCountry.name.official}</h2>
      <p>Capital: {chosenCountry.capital[0]}</p>
      <p>Area: {chosenCountry.area}</p>
      <label htmlFor="languagesList">Languages:</label>
      <ul id="languagesList">
        {Object.values(chosenCountry.languages).map(language =>
          <li key={language}>{language}</li>
        )}
      </ul>
      <img style={imageStyles} src={chosenCountry.flags.png} />
      <Weather weatherData={weatherData} />
    </div>
  )
};

export default Country;
