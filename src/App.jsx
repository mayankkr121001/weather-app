import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { getName } from 'country-list'

import CurrentWeather from "./components/CurrentWeather"
import AirConditions from "./components/AirConditions"
import Temperature from "./components/Temperature"
import ForeCast from "./components/ForeCast"

import rainyImg from "./assets/rainnyImg.jpg"
import sunnyImg from "./assets/sunnyImg.jpg"
import lessCloudyImg from "./assets/lessCloudyImg.jpg"
import cloudyImg from "./assets/cloudyImg.jpg"
import stormImg from "./assets/stormImg.jpg"
import snowyImg from "./assets/snowyImg.jpg"
import mistImg from "./assets/mistImg.jpg"
import searchIcon from "./assets/searchIcon2.png"

function App() {
  const [backImg, setBackImg] = useState(mistImg);
  const [searchCity, setSeatchCity] = useState("Dhanbad");
  const [currTemp, setCurrTemp] = useState(0);
  const [currConditionIcon, setCurrConditionIcon] = useState('');
  const [city, setCity] = useState("Dhanbad");
  const [country, setCountry] = useState("India");

  const [currDay, setCurrDay] = useState("");
  const [currHour, setCurrHour] = useState(0);
  const [currMinute, setCurrMinute] = useState(0);
  const [meridian, setMeridian] = useState("");
  const [weatherDescription, setWeatherDescription] = useState("");
  const [feelsLike, setFeelsLike] = useState("")
  const [wind, setWind] = useState("")
  const [humidity, sethumidity] = useState("")
  const [airPressure, setAirPressure] = useState("")

  const [foreCastDays, setForeCastDays] = useState([]);
  const [tempPer3HourArray, setTempPer3HourArray] = useState([]);
  const [minMaxThreeDays, setminMaxThreeDays] = useState([]);
  const [imageThreeDays, setimageThreeDays] = useState([]);


  useEffect(() => {
    onSearchClick();
  }, [])


  function setBackgroundImageFunc(description) {
    if (description.toLowerCase().includes("sun") || description.toLowerCase().includes("clear")) {
      setBackImg(sunnyImg);
    }
    else if (description.toLowerCase().includes("cloud")) {
      setBackImg(lessCloudyImg);
    }
    else if (description.toLowerCase().includes("overcast")) {
      setBackImg(cloudyImg);
    }
    else if (description.toLowerCase().includes("rain") || description.toLowerCase().includes("drizzle")) {
      setBackImg(rainyImg);
    }
    else if (description.toLowerCase().includes("snow") || description.toLowerCase().includes("ice") || description.toLowerCase().includes("sleet")) {
      setBackImg(snowyImg);
    }
    else if (description.toLowerCase().includes("thunder")) {
      setBackImg(stormImg);
    }
    else if (description.toLowerCase().includes("mist") || description.toLowerCase().includes("fog")) {
      setBackImg(mistImg);
    }
    else {
      setBackImg(cloudyImg)
    }

  }

  function capitalizeFirst(string) {
    const newString = string[0].toUpperCase() + string.slice(1);
    return newString;
  }

  function getDayTime() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date();
    setCurrDay(days[date.getDay()]);
    setCurrMinute(date.getMinutes().toString().padStart(2, 0));

    (date.getHours() > 12) ? setMeridian("pm") : setMeridian("am");
    (date.getHours() > 12) ? setCurrHour(date.getHours() - 12) : setCurrHour(date.getHours().toString().padStart(2, 0));
  }



  function cityInputFunc(e) {
    setSeatchCity(e.target.value);
  }

  function getNextThreeDays() {
    let datesArray = [];
    let currentDate = new Date();

    for (let i = 0; i < 3; i++) {
      let nextDate = new Date(currentDate.getTime() + (i * 24 * 60 * 60 * 1000));
      datesArray.push(nextDate.toDateString().slice(0, 10));
    }
    setForeCastDays(datesArray);
  }

  function getHoursForecast(items) {
    let tempArray = [];
    items.forEach(element => {
      if (element.time.slice(11, 13) == "00") {
        tempArray.push(element.temp_c);
      }
      else if (element.time.slice(11, 13) == "03") {
        tempArray.push(element.temp_c);
      }
      else if (element.time.slice(11, 13) == "06") {
        tempArray.push(element.temp_c);
      }
      else if (element.time.slice(11, 13) == "09") {
        tempArray.push(element.temp_c);
      }
      else if (element.time.slice(11, 13) == "12") {
        tempArray.push(element.temp_c);
      }
      else if (element.time.slice(11, 13) == "15") {
        tempArray.push(element.temp_c);
      }
      else if (element.time.slice(11, 13) == "18") {
        tempArray.push(element.temp_c);
      }
      else if (element.time.slice(11, 13) == "21") {
        tempArray.push(element.temp_c);
      }
    });
    setTempPer3HourArray(tempArray);
  }



  async function onSearchClick() {

    await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_NEW_WEATHER_API_KEY}&q=${searchCity}&days=1&aqi=no&alerts=no`)
      .then((response) => {
        // console.log(response);
      
        setCity(capitalizeFirst(response.data.location.name));
        setCurrConditionIcon(response.data.current.condition.icon)
        setCurrTemp(response.data.current.temp_c);
        setCountry(response.data.location.country);
        setWeatherDescription(response.data.current.condition.text);
        setFeelsLike(response.data.current.feelslike_c);
        setWind(response.data.current.wind_kph);
        sethumidity(response.data.current.humidity);
        setAirPressure(response.data.current.pressure_mb);

        getHoursForecast(response.data.forecast.forecastday[0].hour);
        setBackgroundImageFunc(response.data.current.condition.text);
      })
      .catch((error) => {
        console.log(error);
      })

    await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_NEW_WEATHER_API_KEY}&q=${city}&days=5&aqi=no&alerts=no`)
      .then((response) => {
        // console.log(response);
        let minMaxArray = [];
        let imageArray = [];

        response.data.forecast.forecastday.forEach((elem) => {
          minMaxArray.push(elem.day.maxtemp_c)
          minMaxArray.push(elem.day.mintemp_c)
          imageArray.push(elem.day.condition.icon)
        })
        // console.log(minMaxArray);
        setminMaxThreeDays(minMaxArray);
        setimageThreeDays(imageArray);
      })
      .catch((error) => {
        console.log(error);
        alert("Enter the correct city")
      })


    getDayTime();
    getNextThreeDays();
  }



  return (
    <>
      <div className='mainDiv'>
        <img className='backImg' src={backImg} alt="rain" />

        <div className="weatherSection">
          <div className="weatherSectionLeftDiv">
            <div className="searchDiv">
              <input onInput={cityInputFunc} onKeyDown={(e) => {if(e.key == "Enter"){onSearchClick()}}} type="text" spellcheck="false" placeholder='Search for cities' />
              <button onClick={onSearchClick}><img src={searchIcon} alt="search" /></button>
            </div>
            <div className='currWeatherSection'>

              <CurrentWeather currConditionIcon={currConditionIcon} currTemp={currTemp} city={city} country={country} currDay={currDay} currHour={currHour} currMinute={currMinute} meridian={meridian} weatherDescription={weatherDescription} />
            </div>
            <div className='temperatureSection'>
              <Temperature tempPer3HourArray={tempPer3HourArray} />
            </div >
          </div>
          <div className="weatherSectionRightDiv">
            <div className='airConditionsSection'>
              <AirConditions feelsLike={feelsLike} wind={wind} humidity={humidity} airPressure={airPressure} />
            </div>
            <div className='forecastSection'>
              <ForeCast foreCastDays={foreCastDays} minMaxThreeDays={minMaxThreeDays} imageThreeDays={imageThreeDays} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
