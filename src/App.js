import logo from './logo.svg';
import './App.css';
import './mobile.css';
import { useEffect, useState } from 'react';

function Window() {
  return (
    <div className='window pixel' >
      <img id='window' src={require('./assets/window.png')}></img>
      <Pet pet={"Cat"} colour={"White"}/>
    </div>
  )
}

function ScrollableForcast() {
  return (
    <div className='scrollableForecast pixel'>
      <img src={require('./assets/Forecast BG.png')}></img>
      <div className='blocks'>
        <ForecastBlock theme={'Blue'} selected={'Yes'} time={"13:00"} timeColour={"#0D2B45"} cloud={"Cloudy"} precip={"1%"} precipColour={"#203C56"} temp={"5°C"} tempColour={"#0D2B45"}/>
        <ForecastBlock theme={'Blue'} selected={'No'} time={"14:00"} timeColour={"#F4D3AE"} cloud={"Rain"} precip={"1%"} precipColour={"#D08159"} temp={"5°C"} tempColour={"#FB7B3B"}/>
        <ForecastBlock theme={'Blue'} selected={'No'} time={"15:00"} timeColour={"#F4D3AE"} cloud={"Light_Rain"} precip={"1%"} precipColour={"#D08159"} temp={"5°C"} tempColour={"#FB7B3B"}/>
        <ForecastBlock theme={'Blue'} selected={'No'} time={"16:00"} timeColour={"#F4D3AE"} cloud={"Snow"} precip={"1%"} precipColour={"#D08159"} temp={"5°C"} tempColour={"#FB7B3B"}/>
      </div>
    </div>
  )
}

function ForecastBlock({theme, selected, time, timeColour, cloud, precip, precipColour, temp, tempColour}) {
  return (
    <div className='forecastBlock pixel'>
      <img src={require('./assets/' + theme + ' Theme ' + selected + ' Bar.png')}></img>
      <div id='info'>
        <p id='time' style={{color: timeColour}}>{time}</p>
        <img id='cloud' className='pixel' src={require('./assets/' + cloud + " Cloud.png")}></img>
        <p id='precipitation' style={{color: precipColour}}>{precip}</p>
        <p id='temp' style={{color: tempColour}}>{temp}</p>
      </div>
    </div>
  )
}

function Menu({theme}) {
  let themes = ["Blue", "Purple"];
  let themeNum = 0;

  let themeTextMenu = require("./assets/" + theme + " Menu.png")

  const [wallTheme, setTheme] = useState(themes[themeNum])

  const click = wallTheme => {
    themeNum++;
    if (themeNum >= (themes.length)) {
      themeNum = 0;
    }
    console.log("num: " + themeNum)
    console.log("length: " + (themes.length - 1))
    setTheme(wallTheme);
  }
  useEffect(() => {
    let themeTextWall = require("./assets/" + wallTheme + " Wallpaper.png");
    document.getElementsByClassName("App")[0].style.background = 'url(' + themeTextWall + ')';
    document.getElementsByClassName("App")[0].style.backgroundSize= '15rem';

  })
  return (
    <div className='menu pixel'>
      <button id='menuButton' onClick={() => click(themes[themeNum])} style={{background: 'url(' + themeTextMenu + ') 100% / cover no-repeat'}}></button>
    </div>
  )
}

function Tab({theme}) {
  return (
    <div className='tab pixel'>
      <img src={require('./assets/' + theme + ' Tab.png')}></img>
    </div>
  )

}

function Location({theme, location, locationColour}) {
  return (
    <div className='locationBg pixel'>
      <a id='locationLink' href='https://www.google.com'><img src={require('./assets/' + theme + ' LocationBG.png')}></img></a>
      <div id='locationInfo'>
        <img id='pin' className='pixel' src={require('./assets/Location Pin.png')}></img>
        <p id='location' style={{color: locationColour}}>{location}</p>
      </div>
    </div>
  )
}

function Pet({pet, colour}) {
  return (
    <div className='pet pixel'>
      <img src={require('./assets/' + pet + ' ' + colour + '.gif')}></img>
    </div>
  )
}

let longitude, latitude;

navigator.geolocation.getCurrentPosition(

  function(position) {
    longitude = position.coords.longitude;
    latitude = position.coords.longitude;
    fetchWeatherByCoords(latitude, longitude);
  },
  function(error) {
    console.error("Error getting geolocation: ", error);
  }

);

async function fetchWeatherByCoords(latitude, longitude) {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=672f61843ac0d6c9319f8f381d617cd9&units=metric`;
  try {
    const response = await fetch(apiURL);
    if (!response.ok) throw new Error("Weather data not found.");
    const data = await response.json();
    console.log(data);
  }
  catch(error) {
    console.log(error.message);
  }

}

function App() {

  let theme = "Blue";
  let themeText = require("./assets/" + theme + " Wallpaper.png");
  return (
    <div className="App" style={{
      background: 'url(' + themeText + ')',
      width: '100vw',
      height: '100vh',
      backgroundSize: '15rem',
      imageRendering: 'pixelated',
      }}>
        
      <div id='top'>
        <Menu theme={"Blue"}/>
        <Tab theme={"Blue"}/>
      </div>

      <Location theme={"Blue"} location={"Current Location"} locationColour={"#203C56"}/>
      <Window />

      <ScrollableForcast />

    </div>
  );
}

export default App;
