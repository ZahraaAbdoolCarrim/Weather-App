import './App.css';
import './mobile.css';
import './sign-up-css.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


<h1>hi</h1>

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

export function SignUp() {
    return (
        <div className='signUp'>
            <h1>Sign Up</h1>
        </div>
    )
}