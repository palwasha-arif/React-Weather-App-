import { useState } from "react";
import WeatherCard from "./components/WeatherCard";

const cities = [
  { name: "Peshawar", lat: 34.015, lon: 71.524 },
  { name: "Islamabad", lat: 33.684, lon: 73.047 },
  { name: "Lahore", lat: 31.549, lon: 74.343 }
];

function App() {
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  return (
    <div className="app">
      <h1>React Weather App</h1>
      <div className="buttons">
        {cities.map((c) => (
          <button
            key={c.name}
            onClick={() => setSelectedCity(c)}
          >
            {c.name}
          </button>
        ))}
      </div>
      <WeatherCard city={selectedCity} />
    </div>
  );
}

export default App;
