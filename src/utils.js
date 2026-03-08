import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export function Pet({pet, colour}) {
  return (
    <div className='pet pixel'>
      <img src={require('./assets/Pets/' + pet + ' ' + colour + '.gif')}></img>
    </div>
  )
}
function MenuOption({type}) {
  let buttonPath = require('./assets/Menu/' + type + ' Button.png')
  return (
    <div className='menuOption'>
      <Link to={'/' + type.toLowerCase()}><button className='pixel squareButton' style={{background: 'url(' + buttonPath +') 100% / cover no-repeat'}}>
      </button></Link>
      <p className='menuText'>{type}</p>
    </div>
  )
}

export function Menu({theme, menu, toggle, option1, option2, option3}) {
  let themeText = require("./assets/Themes/" + theme + "/Menu.png")
  return(
    <div className='overlayContainer'>
      <div className='menu pixel'>
        <img src={require('./assets/Menu/Menu Back.png')}></img>
        <div className='menuContainer'>
          <div className='top'>
            <Link to={'/sign-up'}><button className='pixel' id='signUpButton'>Sign Up</button></Link>
            <button id='closeButton' className='squareButton pixel' onClick={toggle}>X</button>
          </div>
          <div className='menuMiddle'>
            <MenuOption type={option1}/>
            <MenuOption type={option2}/>
            <MenuOption type={option3}/>
          </div>
        </div>
      </div>
    </div>

  )
}

export function MenuButton({theme, menu, toggle}) {

  let themeText = require("./assets/Themes/" + theme + "/Menu.png")

  return (
    <div className='menuButton pixel'>
      <button id='menuButton' onClick={toggle} style={{background: 'url(' + themeText + ') 100% / cover no-repeat'}}></button>
    </div>

  )
}