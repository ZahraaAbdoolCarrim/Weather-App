import './App.css';
import './mobile.css';
import './sign-up-css.css'
import './index.css'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


<h1>hi</h1>

function CatColourSelection({toggle}){
    return(
        <div className = "colours">
            <button className="colourOption"><img src={require("./assets/sign-up assets/Grey Option.png")}></img></button>
            <button className="colourOption"><img src={require("./assets/sign-up assets/Black Option.png")}></img></button>
            <button className="colourOption"><img src={require("./assets/sign-up assets/White Option.png")}></img></button>
            <button className="colourOption"><img src={require("./assets/sign-up assets/Orange Option.png")}></img></button>
        </div>
    )
}



function Heading({text}){

    return(
        <div className = "headingContainer">
            <img src={require("./assets/sign-up assets/Neutral header-outline.png")}></img>
            <div className="headingText">
                <p>{text}</p>
            </div>
        </div>
    )
}

function displayPet({colNum}){
    
}
function animalButton({animal, colour,toggle}){
    return (
        <button className='petButton pixel'><img src={require("./assets/sign-up assets/"+colour+"-"+animal+"-silhouette.png")} onClick={toggle}></img></button>
    )
}

export function SignUp() {
    const path = "./assets/sign-up assets/"
    const [selected, toggleSelected] = useState(false);
    const toggle = ()=>{
        toggleSelected(selected=>!selected);
    }
    let petName = "";

    const [colourIndex, setColourIndex] = useState(0);

    return (
    <div className="SignBackground pixel">
        <div className="container">
            {/* CAT OR DOG*/}
            <Heading text={"Cat or Dog?"}/>
            <div className = "ButtonContainer">
                <button className={selected ? 'petButtonSelected pixel' : 'petButtonUnselected pixel'}><img src={selected ? require(path+"white-cat-silhouette.png") : require(path+"brown-cat-silhouette.png")} onClick={toggle}></img></button>
                <button className={+ selected ? 'petButtonUnselected pixel' : 'petButtonSelected pixel'}><img src={selected ? require(path+"brown-dog-silhouette.png") : require(path+"white-dog-silhouette.png")} onClick={toggle}></img></button>
            </div>

            {/* NAME INPUT */}
            <Heading text={<input name={petName} className ="inputName" placeholder="Name your pet"/>}/>

            {/* COLOUR SELECTION */}
            <div className = "colourBackground">
                <div className = "colourContainer">
                    <div>
                        <displayPet colNum = {colourSelected}/>
                    </div>
                    <div className = "colours">
                        <button className="colourOption" onclick={colourSelected =0}><img src={require("./assets/sign-up assets/Grey Option.png")}></img></button>
                        <button className="colourOption" onclick={colourSelected =1}><img src={require("./assets/sign-up assets/Black Option.png")}></img></button>
                        <button className="colourOption" onclick={colourSelected =2}><img src={require("./assets/sign-up assets/White Option.png")}></img></button>
                        <button className="colourOption" onclick={colourSelected =3}><img src={require("./assets/sign-up assets/Orange Option.png")}></img></button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

/*
    const backStyle = {
        backgroundImage: "./assets/sign-up assets/beige wallpaper.png",
        backgroundSize : "cover",
        backgroundRepeat : 'no-repeat'
    };
*/

/*
            <h1>Sign Up</h1>
            <img src={require("./assets/sign-up assets/beige wallpaper.png")} class="background"></img>
*/

/*
    let Sbackground = require("./assets/sign-up assets/beige wallpaper.png");
    return (
        <div class="SignBackground" style={{
        background: 'url(' + Sbackground + ')',
        width: '100vw',
        height: '100vh',
        backgroundSize: '15rem',
        imageRendering: 'pixelated',
        }}>
            <h1>Hi</h1>

        </div>*/


            //         <div className = "ButtonContainer">
            //     <animalButton animal={"cat"} colour={iconColour} toggle={toggle} /> 
            //     <animalButton animal={"dog"} colour={iconColour} toggle={toggle} /> 
            // </div>