"use strict";

const number = Math.floor(Math.random() * 100);
console.log("number", number);

document.querySelector("button").addEventListener("click", clickButton);

function clickButton() {
    const guess = parseInt(document.querySelector("#guess").value);
    console.log("guess", guess);
    const resultText = document.querySelector("#result");
    
    if (guess === number) {
        resultText.textContent = "Det er rigtigt! Tillykke";
    } 
    else if (guess > number) {
        resultText.textContent = "Tallet er for højt";
    }
    else {
        resultText.textContent = "Tallet er for lavt";
    }

}