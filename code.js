const APi_URL = "https://swapi.dev/api";

// people
(function (){

let people = document.getElementById('slc1');
let option;
axios
  .get(`${APi_URL}/people`)
  .then((data) => {
    data = data.data;
    data.results.forEach((person) => {
      option = document.createElement('option');
      option.innerHTML = person.name
      people.add(option)
    })
  })
  .catch((err) => console.log(err));


// films
let films = document.getElementById('slc2');

axios
  .get(`${APi_URL}/films`)
  .then((data) => {
    data = data.data;
    data.results.forEach((film) => {
      option = document.createElement('option');
      option.innerHTML = film.title
      films.add(option)
    });
  })
  .catch((err) => console.log(err));

// starships
let starships = document.getElementById('slc3');
axios
  .get(`${APi_URL}/starships`)
  .then((data) => {
    data = data.data;
    data.results.forEach((starship) => {
      option = document.createElement('option');
      option.innerHTML = starship.name
      starships.add(option)
    });
  })
  .catch((err) => console.log(err));

// vehicles
let vehicles = document.getElementById('slc4');
axios
  .get(`${APi_URL}/vehicles`)
  .then((data) => {
    data = data.data;
    data.results.forEach((vehicle) => {
      option = document.createElement('option');
      option.innerHTML = vehicle.name
      vehicles.add(option)
    });
  })
  .catch((err) => console.log(err));

// species
let species = document.getElementById('slc5');
axios
  .get(`${APi_URL}/species`)
  .then((data) => {
    data = data.data;
    data.results.forEach((specie) => {
      option = document.createElement('option');
      option.innerHTML = specie.name
      species.add(option)
    });
  })
  .catch((err) => console.log(err));

// planets
let planets = document.getElementById('slc6');
axios
  .get(`${APi_URL}/planets`)
  .then((data) => {
    data = data.data;
    data.results.forEach((planet) => {
      option = document.createElement('option');
      option.innerHTML = planet.name
      planets.add(option)
    });
  })
  .catch((err) => console.log(err));

})()