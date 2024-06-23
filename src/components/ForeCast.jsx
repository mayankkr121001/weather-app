import React from 'react'
import cloud from "../assets/cloud.png"
import rainy from "../assets/rainy.png"
import sun from "../assets/sun.png"
import snowy from "../assets/snowy.png"

const ForeCast = ({foreCastDays, minMaxThreeDays, imageThreeDays}) => {
  return (
    <div>
      <div className="foreCast">
        <div className='forecast5daysH2'>
        <h2>ForeCast</h2>
        <h2>3 days</h2>
        </div>
        <div className="forecastInfo">
          <div className="foreCastDay">
            <img src={imageThreeDays[0]} alt="img" />
            <p>{minMaxThreeDays[0]}° / {minMaxThreeDays[1]}°</p>
            <p>{foreCastDays[0]}</p>
          </div>
          <div className="foreCastDay">
            <img src={imageThreeDays[1]} alt="img" />
            <p>{minMaxThreeDays[2]}° / {minMaxThreeDays[3]}°</p>
            <p>{foreCastDays[1]}</p>
          </div>
          <div className="foreCastDay">
            <img src={imageThreeDays[2]} alt="img" />
            <p>{minMaxThreeDays[4]}° / {minMaxThreeDays[5]}°</p>
            <p>{foreCastDays[2]}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForeCast;