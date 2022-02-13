const APi_URL = "https://swapi.dev/api";
const slt = document.querySelector(".container");

const axios = require("axios");

// people
let people = [];
const select1 = document.querySelector("#slc1");
axios
  .get(`${APi_URL}/people`)
  .then((data) => {
    data = data.data;
    data.results.forEach((person) => {
      // people.push(person.name));
      const select1 = document.createElement('select');
      const option = document.createElement('option')
  })
  .catch((err) => console.log(err));



// films
let films = [];
axios
  .get(`${APi_URL}/films`)
  .then((data) => {
    data = data.data;
    data.results.forEach((film) => films.push(film.title));
  })
  .catch((err) => console.log(err));

// starships
let starships = [];
axios
  .get(`${APi_URL}/starships`)
  .then((data) => {
    data = data.data;
    data.results.forEach((starship) => starships.push(starship.name));
  })
  .catch((err) => console.log(err));

// vehicles
let vehicles = [];
axios
  .get(`${APi_URL}/vehicles`)
  .then((data) => {
    data = data.data;
    data.results.forEach((vehicle) => vehicles.push(vehicle.name));
  })
  .catch((err) => console.log(err));

// species
let species = [];
axios
  .get(`${APi_URL}/species`)
  .then((data) => {
    data = data.data;
    data.results.forEach((specie) => species.push(specie.name));
  })
  .catch((err) => console.log(err));

// planets
let planets = [];
axios
  .get(`${APi_URL}/planets`)
  .then((data) => {
    data = data.data;
    data.results.forEach((planet) => planets.push(planet.name));
  })
  .catch((err) => console.log(err));
