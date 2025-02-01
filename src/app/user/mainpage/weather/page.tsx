"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface WeatherData {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    description: string;
  }[];
}

export default function WeatherApp() {
  const [city, setCity] = useState<string>("Ogbomoso");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>("");

  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const getWeather = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setWeather(null);

    if (!city) {
      setError("Please enter a city name");
      return;
    }

    if (!API_KEY) {
      setError("API key is not configured");
      return;
    }

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      if (data.cod !== 200) {
        setError(data.message);
      } else {
        setWeather(data);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch weather data");
    }
  };

  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/sun-shining-dark-clouds-green-field_181624-26064.jpg?uid=R147290862&ga=GA1.1.1457401061.1705098422&semt=ais_hybrid')",
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-lg text-center max-w-lg w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Weather App</h1>
        <form
          onSubmit={getWeather}
          className="flex items-center justify-center space-x-2 mb-6"
        >
          <input
            type="text"
            value={city}
            placeholder="Enter city name"
            onChange={handleCityChange}
            className="p-3 text-lg border border-gray-300 rounded-lg outline-none flex-1 w-72"
          />
          <button
            type="submit"
            className="p-3 text-lg bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Search
          </button>
        </form>

        {error && (
          <p className="text-red-500 mb-4 text-lg bg-white p-3 rounded-lg">
            {error}
          </p>
        )}

        {weather && (
          <div className="bg-blue-100 p-6 rounded-xl shadow-md text-gray-800">
            <h2 className="text-2xl font-semibold">
              {weather.name}, {weather.sys.country}
            </h2>
            <p className="text-6xl font-bold text-blue-500 my-4">
              {Math.round(weather.main.temp)}°C
            </p>
            <p className="text-2xl capitalize font-semibold mb-2">
              {weather.weather[0].description}
            </p>
            <p className="text-lg">Humidity: {weather.main.humidity}%</p>
            <p className="text-lg">Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </div>
  );
}
