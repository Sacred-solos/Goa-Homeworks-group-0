import React, { useState, useEffect } from 'react';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null); // მდგომარეობა ამინდის მონაცემებისთვის
  const [error, setError] = useState(null); // მდგომარეობა შეცდომების დასამუშავებლად

  useEffect(() => {
    const apiKey = '5350cfdb394e4f52a53170224242408';
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Tbilisi`
        );

        const data = await response.json();
        setWeatherData(data); // 
      } catch (err) {
        setError(err.message); 
      }
    };

    fetchWeather(); 
  }, []); 

  return (
    <div>
      <h1>weather</h1>
      {weatherData && (
        <div>
          <p>location: {weatherData.location.name}</p>
          <p>temperature: {weatherData.current.temp_c}°C</p>
          <p>condition: {weatherData.current.condition.text}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;