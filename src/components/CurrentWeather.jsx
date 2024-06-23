import React from 'react'
import sun from "../assets/sun.png"

const CurrentWeather = (props) => {

  return (
    <div>
      <div className='currWeather'>
        <div className="currWeatherTemperature">
          <img src={props.currConditionIcon} alt="sun" />
          <h1>{props.currTemp}<sup>&#176;</sup>C</h1>
        </div>
        <div className='currWeatherInfo'>
          <div className="locTime">
            <p className='location'>{props.city}, {props.country}</p>
            <p className='Time'>{props.currDay} {props.currHour}:{props.currMinute} {props.meridian}</p>
          </div>
          <div className="currWeatherDiscription">
            <p>{props.weatherDescription}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather