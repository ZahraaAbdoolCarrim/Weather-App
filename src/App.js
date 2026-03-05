import logo from './logo.svg';
import './App.css';
import './mobile.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './home';

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

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {

    let latitude, longitude;

    navigator.geolocation.getCurrentPosition(

    function(position) {
      longitude = position.coords.longitude;
      latitude = position.coords.longitude;
      fetchWeatherByCoords(latitude, longitude).then(data => setWeatherData(data));
    },
    function(error) {
      console.error("Error getting geolocation: ", error);
    }

    );
  
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
