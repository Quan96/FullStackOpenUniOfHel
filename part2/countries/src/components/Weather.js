import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {
    const [ weather, setWeather ] = useState([])
  
    useEffect(() => {
      axios
        .get('http://api.weatherstack.com/current', {
            params: {
                access_key: process.env.WEATHER_APP_API_KEY,
                query: capital
              }
        })
        .then(response => {
          setWeather(response.data.current)
        })
    }, [capital])
  
    return (
      <div>
        <h2>Weather in {capital}</h2>
        <div>
          <b>temperature: </b>{weather.temperature} Celsius
        </div>
        <img src={weather.weather_icons} alt="weather_icon" />
        <div>
          <b>wind: </b> {weather.wind_speed} mph direction {weather.wind_dir}
        </div>
      </div>
    )
  }

  export default Weather;