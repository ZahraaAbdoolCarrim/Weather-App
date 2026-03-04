import logo from './logo.svg';
import './App.css';
import './mobile.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './home';

function App() {

  return (
    <BrowserRouter>
      <div className="App" style={{
        background: 'url(' + themeText + ')',
        width: '100vw',
        height: '100vh',
        backgroundSize: '15rem',
        imageRendering: 'pixelated',
        }}>
          
        <div className='container'>
          <div id='top'>
            <Menu theme={"Blue"}/>
            <Tab theme={"Blue"} colour={"#FFDCB3"} humidity={"100%"} pollen={"2"}/>
          </div>

          <Location theme={"Blue"} location={"Current Location"} locationColour={"#203C56"}/>
          <Window />

          <ScrollableForcast theme={"Blue"}/>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
