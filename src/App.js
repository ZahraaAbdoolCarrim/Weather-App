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
      {/* <div className='blocks'>
        <ForecastBlock />
        <ForecastBlock />
        <ForecastBlock />
        <ForecastBlock />
      </div> */}
    </div>
  )
}

function ForecastBlock() {
  return (
    <div className='forecastBlock'></div>
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
