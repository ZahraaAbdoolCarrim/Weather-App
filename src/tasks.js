import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Pet, MenuButton, Menu } from './utils.js';

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
                </div>

                {/* CHANGE OPTION TO 'HOME'*/}
                {menu && <Menu theme={"Blue"} menu={true} toggle={() => toggle()} option1={"Inventory"} option2={"Shop"} option3={"Tasks"}/>}

            </div>      
        </div>
    );
}