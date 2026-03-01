import logo from './logo.svg';
import './App.css';
import './mobile.css';

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
  return (
    <div className="App">
      <h1>Temporary Text</h1>

      <Window />
      <ScrollableForcast />

    </div>
  );
}

export default App;
