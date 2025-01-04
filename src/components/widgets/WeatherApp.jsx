import "./WeatherApp.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const WeatherApp = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const apiKey = import.meta.env.VITE_API_KEY;

    const fetchCity = async () => {
        try {
            const response = await axios.get("https://ipapi.co/json/");
            setCity(response.data.city)
        } catch (error) {
            console.error("Failed to fetch city", error);
            setError("Failed to fetch city");
        }
    };

    const fetchWeather = async () => {
        if (!city) return;
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
            );
            setWeatherData(response.data);
            console.log(response.data);
            setError(null);
        } catch (error) {
            console.error(error);
            setError("Failed to fetch weather data");
        }
    };

    useEffect(() => {
        fetchCity();
    }, []);

    useEffect(() => {
        fetchWeather()
    }, [city])

    return (
        <div className="weather-app">
            {weatherData && (
            <>
            <h2>{Math.round(weatherData.main.temp - 273.15)}°C</h2>
            <h1>{weatherData.name}</h1>
            <p>{weatherData.weather[0].description}</p>
            </>
            )}
        </div>
    );
};

export default WeatherApp;