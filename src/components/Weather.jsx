
import React from 'react';
import { WiThermometer, WiHumidity, WiDirectionUp } from 'react-icons/wi';
import { MdSpeed } from "react-icons/md";
import { AiOutlineAim } from "react-icons/ai";
import './weather.css';

const Weather = ({ data, isCelsius }) => {
    if (!data) {
        return null;
    }

    const { main, weather, wind } = data;

    return (
        <div className="current-weather">
            <div className="temperature-box">
                <WiThermometer size={50} />
                <div>
                    <strong>Temperature:</strong> {convertTemperature(main.temp, isCelsius)}
                </div>
            </div>
            <div>
                <h2>Current Weather</h2>
                <div className='weather-table'>
                    <div className="info-box">
                        <WiThermometer size={40} />
                        <div>
                            <strong>Min Temperature </strong> {convertTemperature(main.temp_min, isCelsius)}
                        </div>
                    </div>
                    <div className="info-box">
                        <WiThermometer size={40} />
                        <div>
                            <strong>Max Temperature</strong> {convertTemperature(main.temp_max, isCelsius)}
                        </div>
                    </div>
                    <div className="info-box">
                        <WiHumidity size={40} />
                        <div>
                            <strong>Humidity:</strong> {main.humidity}%
                        </div>
                    </div>
                    <div className="info-box">
                        <AiOutlineAim size={40} />
                        <div>
                            <strong>Description:</strong> {weather[0].description}
                        </div>
                    </div>
                    <div className="info-box">
                        <MdSpeed size={40} />

                        <div>
                            <strong>Wind Speed:</strong> {wind.speed} m/s
                        </div>
                    </div>
                    <div className="info-box">
                        <WiDirectionUp size={40} />
                        <div>
                            <strong>Wind Direction:</strong> {wind.deg}°
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Weather;

function convertTemperature(temp, isCelsius) {
    return isCelsius ? `${temp}°C` : `${(temp * 9 / 5) + 32}°F`;
}
