import { useState, useEffect } from 'react'

import FindCountry from './components/FindCountry';
import Countries from './components/Countries';

import { getAllCountriesRequest } from './utils/requests';


const App = () => {
  const [countries, setCountries] = useState(null);
  const [countryInput, setCountryInput] = useState('');

  const getAllCountries = () => {
    getAllCountriesRequest()
      .then(data => {
        if (!data) {
          alert("Could not fetch countries' data.")
        } else {
          setCountries(data);
        };
      })
  };

  useEffect(getAllCountries, []);

  return (
    <div>
      <FindCountry countryInput={countryInput} setCountryInput={setCountryInput} />
      <Countries countries={countries} countryInput={countryInput} />
    </div>
  )
};

export default App;
