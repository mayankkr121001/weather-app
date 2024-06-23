import React from 'react'
import AreaChart from './AreaChart'

const Temperature = ({tempPer3HourArray}) => {
  return (
    <div>
      <div className="temperature">
        <h2>Temperature</h2>
        {/* <div className='underline'></div> */}
        <div className="temperatureInfo">
          <AreaChart tempPer3HourArray={tempPer3HourArray}/>
        </div>

      </div>
    </div>
  )
}

export default Temperature