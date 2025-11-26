import { useState } from 'react';

import Country from "./Country";


const Countries = ({ countries, countryInput }) => {
  const [currentCountryShowView, setCurrentCountryShowView] = useState(null);
  const imageStyles = {
    height: "50%",
    width: "50%"
  };
  
  if (!countries) {
    return null
  };

  const filteredCountries = countries.filter(
    country => country.name.official.toLowerCase().includes(String(countryInput))
  );

  const handleCountryView = (event) => {
    const showCountryName = event.target.value;
    const showCountryObject = filteredCountries.find(
      country => country.name.official === showCountryName);
    setCurrentCountryShowView(showCountryObject);
  };

  if (filteredCountries.length > 10) {
    return (
      <div>
        <p>Narrow the filter, too many results.</p>
      </div>
    )
  } else if (filteredCountries.length < 10 && filteredCountries.length > 1) {
    return (
      <div>
        <ul>
          {filteredCountries.map(country =>
            <span>
              <li key={`li-${country.cca2}`}>{country.name.official}</li>
              <button key={`button-${country.cca2}`}
                      value={country.name.official}
                      onClick={handleCountryView}>show</button>
            </span>
          )}
        </ul>
        <h2>Currently showing country</h2>
        <div>
          <Country chosenCountry={currentCountryShowView} imageStyles={imageStyles} />
        </div>
      </div>
    )
  } else if (filteredCountries.length === 1) {
    const chosenCountry = filteredCountries[0];

    return (
      <Country chosenCountry={chosenCountry} imageStyles={imageStyles} />
    )
  } else {
    return (
      <div>
        <p>No country matches your query.</p>
      </div>
    )
  };
};

export default Countries;
