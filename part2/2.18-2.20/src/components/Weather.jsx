const Weather = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  };
  const iconId = weatherData.weather[0].icon;

  return (
    <div>
      <p>Temperature: {weatherData.main.temp} Celcius</p>
      <p>Wind speed: {weatherData.wind.speed}</p>
      <img src={`https://openweathermap.org/img/wn/${iconId}@2x.png`} />
    </div>
  )
};

export default Weather;
