import logo from './logo.svg';
import './App.css';
import './mobile.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {fetchWeatherByCoords} from './Weather.js';

function Window() {
  return (
    <div className='window pixel' >
      <img id='window' src={require('./assets/Window.png')}></img>
      <Pet pet={"Cat"} colour={"White"}/>
    </div>
  )
}

function ScrollableForcast({theme, weatherData}) {
  const time = new Date().getHours();
  const temp = weatherData ? Math.round(weatherData.main.temp) + "°C" : "N/A";
  return (
    <div className='scrollableForecast pixel'>
      <img src={require('./assets/Themes/' + theme + '/ForecastBG.png')}></img>
      <div id='blocksContainer'>
        <div className='blocks'>
          <ForecastBlock theme={'Blue'} selected={'Yes'} time={time + ":00"} timeColour={"#0D2B45"} cloud={"Cloudy"} precip={"1%"} precipColour={"#203C56"} temp={temp + "°C"} tempColour={"#0D2B45"}/>
          <ForecastBlock theme={'Blue'} selected={'No'} time={time + 1 + ":00"} timeColour={"#F4D3AE"} cloud={"Rain"} precip={"1%"} precipColour={"#D08159"} temp={"°C"} tempColour={"#FB7B3B"}/>
          <ForecastBlock theme={'Blue'} selected={'No'} time={time + 2 + ":00"} timeColour={"#F4D3AE"} cloud={"Light_Rain"} precip={"1%"} precipColour={"#D08159"} temp={"5°C"} tempColour={"#FB7B3B"}/>
          <ForecastBlock theme={'Blue'} selected={'No'} time={time + 3 + ":00"} timeColour={"#F4D3AE"} cloud={"Snow"} precip={"1%"} precipColour={"#D08159"} temp={"5°C"} tempColour={"#FB7B3B"}/>
          <ForecastBlock theme={'Blue'} selected={'No'} time={time + 4 + ":00"} timeColour={"#F4D3AE"} cloud={"Snow"} precip={"1%"} precipColour={"#D08159"} temp={"5°C"} tempColour={"#FB7B3B"}/>
          <ForecastBlock theme={'Blue'} selected={'No'} time={time + 5 + ":00"} timeColour={"#F4D3AE"} cloud={"Snow"} precip={"1%"} precipColour={"#D08159"} temp={"5°C"} tempColour={"#FB7B3B"}/>
        </div>
      </div>
    </div>
  )
}

function ForecastBlock({theme, selected, time, timeColour, cloud, precip, precipColour, temp, tempColour}) {
  return (
    <div className='forecastBlock pixel'>
      <img src={require('./assets/Themes/' + theme + '/' + selected + ' Bar.png')}></img>
      <div id='info'>
        <p id='time' style={{color: timeColour}}>{time}</p>
        <img id='cloud' className='pixel' src={require('./assets/Weather Icons/' + cloud + " Cloud.png")}></img>
        <p id='precipitation' style={{color: precipColour}}>{precip}</p>
        <p id='temp' style={{color: tempColour}}>{temp}</p>
      </div>
    </div>
  )
}

function MenuButton({theme, menu, toggle}) {

  let themeText = require("./assets/Themes/" + theme + "/Menu.png")

  return (
    <div className='menuButton pixel'>
      <button id='menuButton' onClick={toggle} style={{background: 'url(' + themeText + ') 100% / cover no-repeat'}}></button>
    </div>

  )
}

function MenuOption({type}) {
  let buttonPath = require('./assets/Menu/' + type + ' Button.png')
  return (
    <div className='menuOption'>
      <Link to={'/' + type.toLowerCase()}><button className='pixel squareButton' style={{background: 'url(' + buttonPath +') 100% / cover no-repeat'}}>
        <img className='menuIcon pixel' src={require('./assets/Menu/' + type + ' Icon.png')}></img>
      </button></Link>
      <p className='menuText'>{type}</p>
    </div>
  )
}

function Menu({theme, menu, toggle}) {
  let themeText = require("./assets/Themes/" + theme + "/Menu.png")
  return(
    <div className='overlayContainer'>
      <div className='menu pixel'>
        <img src={require('./assets/Menu/Menu Back.png')}></img>
        <div className='menuContainer'>
          <div className='top'>
            <Link to={'/sign-up'}><button className='pixel' id='signUpButton'>Sign Up</button></Link>
            <button id='closeButton' className='squareButton' onClick={toggle}>X</button>
          </div>
          <div className='menuMiddle'>
            <MenuOption type='Inventory'/>
            <MenuOption type='Shop'/>
            <MenuOption type='Tasks'/>
          </div>
        </div>
      </div>
    </div>

  )

}

function Tab({theme, colour, humidity, pollen}) {
  return (
    <div className='tab pixel'>
      <img src={require('./assets/Themes/' + theme + '/Tab.png')}></img>
      <div id='tabContainer'>
        <div id='tabInfo'>
          <img id='raindrop' className='pixel' src={require('./assets/Rain Drop.png')}></img>
          <p style={{color: colour}}>{humidity}</p>
          <img id='flower' className='pixel' src={require('./assets/Flower.png')}></img>
          <p style={{color: colour}}>{pollen}</p>
        </div>
      </div>
    </div>
  )

}

function Location({theme, location, locationColour}) {
  return (
    <div className='location pixel'>
      <img src={require('./assets/Themes/' + theme + '/LocationBG.png')}></img>
      <div id='locationInfo'>
        <img id='pin' className='pixel' src={require('./assets/Location Pin.png')}></img>
        <a id='locationText' href='https://www.google.com' style={{color: locationColour}}>{location}</a>
      </div>
    </div>
  )
}

function Pet({pet, colour}) {
  return (
    <div className='pet pixel'>
      <img src={require('./assets/Pets/' + pet + ' ' + colour + '.gif')}></img>
    </div>
  )
}

export function Home() {

  const [menu, toggleMenu] = useState(false)

  const toggle = () => {
    toggleMenu(menu => !menu);

  }

  const [weatherData, setWeatherData] = useState(null);
  
    useEffect(() => {
  
      let latitude, longitude;
  
      navigator.geolocation.getCurrentPosition(
  
      function(position) {
        longitude = position.coords.longitude;
        latitude = position.coords.longitude;
        fetchWeatherByCoords().then(data => setWeatherData(data));
      },
      function(error) {
        console.error("Error getting geolocation: ", error);
      }
  
      );
    
    }, []);

  let theme = "Blue";
  let themeText = require("./assets/Themes/" + theme + "/Wallpaper.png");
  return (
    <div className="App" style={{
    background: 'url(' + themeText + ')',
    width: '100vw',
    height: '100vh',
    backgroundSize: '15rem',
    imageRendering: 'pixelated',
    }}>




    <div className='container'>

        <div className='top'>
        <MenuButton theme={"Blue"} menu={false} toggle={() => toggle()}/>
        <Tab theme={"Blue"} colour={"#FFDCB3"} humidity={"100%"} pollen={"2"}/>
        </div>

        <Location theme={"Blue"} location={"Current Location"} locationColour={"#203C56"}/>
        <Window />

        <ScrollableForcast theme={"Blue"} weatherData={weatherData}/>
    </div>

    {menu && <Menu theme={"Blue"} menu={true} toggle={() => toggle()}/>}

    </div>
  );
}

