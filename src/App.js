import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from './components/Search';
import Home from './components/Home';
import Weather from './components/Weather';
import Forecast from './components/Forecast';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

  const apiKey = '3bda6f0a41a66eac8119a1ef2ce115b7';

  const apiUrl = 'https://api.openweathermap.org/data/2.5';

  const handleSearch = async () => {
    try {
      const currentWeatherResponse = await axios.get(
        `${apiUrl}/weather?q=${city}&units=${isCelsius ? 'metric' : 'imperial'}&appid=${apiKey}`
      );

      const forecastResponse = await axios.get(
        `${apiUrl}/forecast?q=${city}&units=${isCelsius ? 'metric' : 'imperial'}&appid=${apiKey}`
      );

      setCurrentWeather(currentWeatherResponse.data);

      const filteredForecast = forecastResponse.data.list.filter((item, index, array) => {
        const date = new Date(item.dt * 1000);
        const nextDate = index === array.length - 1 ? null : new Date(array[index + 1].dt * 1000);
        return nextDate ? date.getDate() !== nextDate.getDate() : true;
      });

      setForecast(filteredForecast);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Please enter a valid city name');
    }
  };

  const toggleUnits = () => {
    setIsCelsius((prevIsCelsius) => !prevIsCelsius);
  };

  return (
    <div className="app">
      <Search city={city} setCity={setCity} onSearch={handleSearch} />

      <button onClick={toggleUnits}>
        {isCelsius ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
      </button>
      <Home />
      {currentWeather && (
        <Weather data={currentWeather} isCelsius={isCelsius} />
      )}
      <h2>5-day Forecast</h2>
      {forecast && forecast.length > 0 && (
        <div className="forecast">
          {forecast.slice(0, 5).map((item) => (
            <Forecast key={item.dt} data={item} isCelsius={isCelsius} />
          ))}
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default App;
