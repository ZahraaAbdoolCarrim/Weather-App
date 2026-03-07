import './App.css';
import './mobile.css';
import './sign-up-css.css'
import './index.css'
import { useEffect, useState } from 'react';


function animalSelection(catGif, dogGif, catImg, dogImg){
    const path = "./sign-up assets"
    return (
        <button onclick={displayAnimalColours(catGif)}> {animal_button("cat",catGif,catImg)}</button>,
        <button onclick={displayAnimalColours(dogGif)}> {animal_button("dog",dogGif,dogImg)}</button>
    )
}


/*button for selecting an animal species (dog/cat)*/
function animal_button(animalType, animalGif, animalImg,w,h){
    let selected = false;
    if (!selected){
            <img src = {animalImg} alt = {animalType} className = "animalButtonImg"> </img>
        }
    /*still trying to figure it out*/
    <div className = "animalButton">
    </div>

}

/*displays the correct colour selection depending on which animal button is pressed*/

function displayAnimalColours(animalGif){

    
}

function displaySelection(animalType){
    if (animalType == "cat"){
        return AnimalSelection(["first,second image etc"], ["first, second image"])
    }
    return AnimalSelection(["first,second image etc"], ["first, second image"])
}

/*general function to display options for colours of whatever animal*/
function AnimalSelection(animalColours,options){
    /*if options[1] clicked, display animalColours[1] and the pawprint etc*/
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

export function SignUp() {
    let colour = "brown"
    const [selected, toggleSelected] = useState(false);
    const toggle = ()=>{
        toggleSelected(selected=>!selected)
        if (selected){
            colour = "white"
            console.log("WORK OR ELSE")
        }
        
    }
    return (
    <div className="SignBackground pixel">
        <div className="container">
            {/* PUT EVERYTHING HERE IN THE CONTAINER DIV PLEASE */}
            <Heading text={"Cat or Dog?"}/>
            <div className = "ButtonContainer">
                <button id='CatButton' className='petButton pixel'><img src={require("./assets/sign-up assets/"+colour+"-cat-silhouette.png")} onClick={toggle}></img></button>
                <button id='CatButton' className='petButton pixel'><img src={require("./assets/sign-up assets/"+colour+"-dog-silhouette.png")} onClick={toggle}></img></button>
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