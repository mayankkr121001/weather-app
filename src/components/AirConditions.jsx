import React from 'react'

const AirConditions = (props) => {
  return (
    <div>
      <div className="airConditions">
        <h2>Air Conditions</h2>
        {/* <div className='underline'></div> */}
        <div className="airConditionsInfo">
          <div className="feelsLikeDiv">
            <p>Feels Like</p>
            <p>{props.feelsLike}<sup>&#176;</sup>C</p>
          </div>
          <div className="windDiv">
            <p>Wind</p>
            <p>{props.wind} kph</p>
          </div>
          <div className="humidityDiv">
            <p>Humidity</p>
            <p>{props.humidity} %</p>
          </div>
          <div className="airPressureDiv">
            <p>Air Pressure</p>
            <p>{props.airPressure} mBar</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AirConditions