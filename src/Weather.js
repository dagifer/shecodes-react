import "./App.css";
import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const searchLocation = (event) => {
    event.preventDefault();
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=842b36d55cb28eba74a018029d56b04c&units=metric`;
    axios.get(baseUrl).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };

  const updateCity = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="weather">
      <form className="search" onSubmit={searchLocation}>
        <input
          type="text"
          value={location}
          onChange={updateCity}
          placeholder="Search city"
          onKeyPress={updateCity}
        />
      </form>
      <div className="container">
        <div className="top-weather">
          <div className="location">
            <h1>{data.name}</h1>
          </div>
          <div className="temperature">
            {data.main ? <h2>{data.main.temp.toFixed()}°C</h2> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.name !== undefined && (
          <div className="details">
            <div className="feels">
              {data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
              <p className="bold">Feels Like </p>
            </div>
            <div className="humidity">
              {data.main ? <p>{data.main.humidity}%</p> : null}
              <p className="bold">Humidity</p>
            </div>
            <div className="wind">
              {data.main ? <p>{data.wind.speed.toFixed()}km/h</p> : null}
              <p className="bold">Wind</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
