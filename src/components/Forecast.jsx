
import React from 'react';
import './forecast.css';

const ForecastCard = ({ data, isCelsius }) => {
    const { dt, main, weather } = data;
    const dateTime = new Date(dt * 1000);

    return (
        <div className="forecast-card">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Day</th>
                        <th>Average Temperature</th>
                        <th>Description</th>
                        <th>Weather Icon</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{formatDate(dateTime)}</td>
                        <td>{getDayOfWeek(dateTime)}</td>
                        <td>{convertTemperature(main.temp, isCelsius)} {isCelsius ? '°C' : '°F'}</td>
                        <td>{weather[0].description}</td>
                        <td>
                            {weather && weather[0] && (
                                <img
                                    src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
                                    alt="Weather Icon"
                                />
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ForecastCard;

function convertTemperature(temp, isCelsius) {
    return isCelsius ? temp : (temp * 9 / 5) + 32;
}

function formatDate(date) {
    const options = { month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function getDayOfWeek(date) {
    const options = { weekday: 'short' };
    return date.toLocaleDateString('en-US', options);
}
