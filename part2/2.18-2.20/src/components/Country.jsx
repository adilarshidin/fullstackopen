const Country = ({ chosenCountry, imageStyles }) => {
  if (!chosenCountry) {
    return null;
  };

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
    </div>
  )
};

export default Country;
