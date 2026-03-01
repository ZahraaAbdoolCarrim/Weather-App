import logo from './logo.svg';
import './App.css';
import './mobile.css';
import { useEffect } from 'react';

function Window() {
  return (
    <div className='window pixel' >
      <img src={require('./assets/window.png')}></img>
    </div>
  )
}

function ScrollableForcast() {
  return (
    <div className='scrollableForecast pixel'>
      <img src={require('./assets/Forecast BG.png')}></img>
      <div className='blocks'>
        <ForecastBlock theme={'Blue'} selected={'Yes'}/>
        <ForecastBlock theme={'Blue'} selected={'No'}/>
        <ForecastBlock theme={'Blue'} selected={'No'}/>
        <ForecastBlock theme={'Blue'} selected={'No'}/>
      </div>
    </div>
  )
}

function ForecastBlock({theme, selected}) {
  return (
    <div className='forecastBlock pixel'>
      <img src={require('./assets/' + theme + ' Theme ' + selected + ' Bar.png')}></img>
      
    </div>
  )
}


function App() {
  let theme = "Blue"
  let themeText = require("./assets/" + theme + " Wallpaper.png")
  return (
    <div className="App" style={{
      background: 'url(' + themeText + ')',
      width: '100vw',
      height: '100vh',
      margin: '0',
      backgroundSize: '15rem',
      imageRendering: 'pixelated',
      }}>
        
      <h1>Temporary Text</h1>

      <Window />
      <ScrollableForcast />

    </div>
  );
}

export default App;
