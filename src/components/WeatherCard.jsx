import { useState, useEffect } from "react";

function WeatherCard({ city }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      setWeather(null);

      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setWeather(data.current_weather);
      } catch (err) {
        setError("Failed to fetch weather data.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (!city) return null;
  if (loading) return <p>Loading weather data...</p>;
  if (error) return <p>{error}</p>;

  return (
    weather && (
      <div className="weather-card">
        <h2>{city.name}</h2>
        <p>🌡 Temperature: {weather.temperature} ℃</p>
        <p>💨 Wind Speed: {weather.windspeed} km/h</p>
        <p>⛅ Weather Code: {weather.weathercode}</p>
      </div>
    )
  );
}

export default WeatherCard;
