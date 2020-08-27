import React, { useState, useEffect } from 'react';
import './weather.scss';
import secret from './secret.json';

const Weather = ({ location }) => {
  const [weatherTo, setWeatherTo] = useState();

  useEffect(() => {
    const currentWeather = async () => {
      const TO_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${Math.round(
        location[1][0]
      )}&lon=${Math.round(location[1][1])}&appid=${secret.key}`;
      const response = await fetch(TO_URL);
      const data = await response.json();
      setWeatherTo(data);
    };
    currentWeather();
  }, [location]);

  if (weatherTo !== undefined) {
    let details = {
      city: '',
      iconID: '',
      temprature: 0,
      tempratureFeels: 0,
    };

    details.city = '';
    details.iconID = weatherTo.weather[0].icon;
    details.main = weatherTo.weather[0].main;
    details.temprature = Math.round(weatherTo.main.temp - 272.15);
    details.pressure = weatherTo.main.pressure;

    return (
      <div className="weather">
        <h1>Weather</h1>
        <div className="weather__details">
          <p>{details.main}</p>
          <div className="weather__icon">
            <img
              alt="icon"
              src={`http://openweathermap.org/img/wn/${details.iconID}@2x.png`}
            />
          </div>
          <p>Temprature: {details.temprature} &deg;C</p>
          <p>Pressure: {details.pressure} hPa</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Weather;
