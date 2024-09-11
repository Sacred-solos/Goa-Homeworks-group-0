import React, { useState, useEffect } from 'react';

const WeatherComponent = () => {
  const [city, setCity] = useState('Tbilisi');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = 'a452ce009140a0ca47c1aa11ba3d710d';

  const fetchWeather = async (cityName) => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=351b345ee75751f90aa354413c00b181&q=${city}&aqi=no`
      );
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
      setError(null); 
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <h1>Weather</h1>
      <input 
        type="text" 
        value={city} 
        onChange={handleInputChange} 
        placeholder="Enter city name"
      />
      {error && <p>{error}</p>}
      {weatherData && (
        <div>
          <p>Location: {weatherData.name}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Condition: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;