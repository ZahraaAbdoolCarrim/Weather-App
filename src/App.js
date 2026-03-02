import logo from './logo.svg';
import './App.css';
import './mobile.css';
import { useEffect, useState } from 'react';

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


      <Window />
      <ScrollableForcast />

    </div>
  );
}

export default App;
