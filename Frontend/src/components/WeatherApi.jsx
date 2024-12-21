import { useState } from "react";
import Loading from "./Loading";

const api = {
  key: "197b0159c6160574e90902c15ba4eefc",
  base: "https://api.openweathermap.org/data/2.5/",
};

export default function WeatherApi() {
  const [search, setSearch] = useState("msila");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const searchPressed = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${api.base}weather?q=${search}&units=metric&APPID=${api.key}`
      );
      const result = await response.json();
      setWeather(result);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center p-5">
      <div>
        <input
          className="btn rounded-none focus:outline-none my-1 p-2 bg-slate-900"
          type="text"
          placeholder="Wilaya / city"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchPressed} className="btn rounded-none btn-info">
          ↻
        </button>
      </div>
      {loading && (
        <p className="my-1">
          <Loading />
        </p>
      )}{" "}
      {/* Show loading message */}
      {!loading && weather.name && (
        <>
          {/* Weather Icon */}
          {weather.weather?.[0]?.icon && (
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="Weather Icon"
              className="inline-block"
            />
          )}
          {/* Weather Icon */}
          {/* Weather Details */}
          <p className="my-1 font-bold ">{weather.name}</p>
          <p className="my-1 text-teal-600">
            {Math.round(weather.main?.temp)} °C
          </p>
          <p className="my-1 text-teal-600">
            {weather.weather?.[0]?.description}
          </p>
          {/* Weather Details */}
        </>
      )}
    </div>
  );
}
