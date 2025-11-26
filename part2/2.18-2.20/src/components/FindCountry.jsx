const FindCountry = ({ countryInput, setCountryInput }) => {
  const handleCountryInput = (event) => {
    const newCountryInput = event.target.value;
    setCountryInput(newCountryInput);
  };

  return (
    <div>
      <label htmlFor="countryInput">Type the name of the country</label>
      <input id="countryInput" value={countryInput} onChange={handleCountryInput} />
    </div>
  )
};

export default FindCountry;
