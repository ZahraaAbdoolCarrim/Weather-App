import './App.css';
import './mobile.css';
import './tasks.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Pet, MenuButton, Menu } from './utils.js';

function CoinTab({theme, colour, coinCount}) {
    return (
        <div className='tab pixel'>
            <img src={require('./assets/Themes/' + theme + '/Tab.png')}></img>
            <div id='tabContainer'>
                <div id='tabInfo'>
                    <img id='coin' className='pixel' src={require('./assets/Coin.png')}></img>
                    <p id='coinCount' style={{color: colour}}>{coinCount}</p>
                </div>
            </div>
        </div>
    )
}

export function Tasks() {
    const[menu, toggleMenu] = useState(false)

    const toggle = () => {
        toggleMenu(menu => !menu);
    }

    let theme = "Blue";
    let themeText = require("./assets/Themes/" + theme + "/Wallpaper.png");
  
    return (
        <div className="App" style={{
            background: 'url(' + themeText + ')',
            width: '100vw',
            height: '100vh',
            backgroundSize: '15rem',
            imageRendering: 'pixelated',}}>

            <div className = 'container'>
                <div className='top'>
                    <MenuButton theme={"Blue"} menu={false} toggle={() => toggle()}/>
                    <CoinTab theme={"Blue"} colour={"#FFDCB3"} coinCount={"0"}/>
                </div>

                {/* CHANGE OPTION TO 'HOME'*/}
                {menu && <Menu theme={"Blue"} menu={true} toggle={() => toggle()} option1={"Inventory"} option2={"Shop"} option3={"Tasks"}/>}
            </div>      
        </div>
    );
}