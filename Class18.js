// fetch api

// global.fetch = require("https://swapi.dev/api/films/1/")

const myDiv = document.getElementById("planet");
const myBotton = myDiv.querySelector("button");

myBotton.addEventListener("click", getPlanet)

function getPlanet(){
    // const fetch = require("node-fetch");
    const randomNum = (Math.floor(Math.random() * 10)+1)
    fetch(`https://swapi.dev/api/films/${randomNum}/`)
        .then(data => data.json())
        .then(d => populatePlanet(d))
        .catch(err => console.log('error:',err.message));
    console.log(randomNum);
}

function populatePlanet(objplanet){
    // console.log(title);
    // const newParagrafh = document.createElement("p");
    // newParagrafh.innerHTML = title;
    // myDiv.appendChild(newParagrafh);
    const {title,episode_id,director,producer} = objplanet;
    const planetDiv = `
    <div>
        <h1>${title}</h1>
        <p>Episodio numero ${episode_id}</p>
        <p>Director ${director}</p>
        <p>Productor ${producer}</p>
    </div>
    `
    myDiv.innerHTML += planetDiv;
}