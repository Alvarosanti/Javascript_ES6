// fetch api

// global.fetch = require("https://swapi.dev/api/films/1/")
const fetch = require("node-fetch");
fetch("https://swapi.dev/api/films/1/")
    .then(data => data.json())
    .then(d => console.log('d:',d))
    .catch(err => console.log('error:',err));
