import Insults from './Insults.js';

const buttonElem = document.querySelector('button');
const insultElem = document.querySelector('#Insult');
const playElem = document.querySelector('#play');

let allInsults = [...Insults];

function resetInsult() {
    if (allInsults.length === 0) {
        allInsults = [...Insults];
    }
}

function removeInsult(randomNumber) {
    allInsults.splice(randomNumber, 1);
}

function displayInsult(insultObj) {
    insultElem.innerHTML = insultObj.insult;
    playElem.innerHTML = insultObj.play;
}

buttonElem.addEventListener('click', () => {
    if (allInsults.length === 0) {
        resetInsult();
    }

    const randomNumber = Math.floor(Math.random() * allInsults.length);
    const insultObj = allInsults[randomNumber];

    displayInsult(insultObj);
    removeInsult(randomNumber);

    console.log(allInsults);
});