/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Bernice Templeman
  Date: 05/04/2024
  Filename: script.js

  Description: a Superhero dashboard that displays information about a
  superhero and handles errors when a superhero’s data cannot be fetched
  using JavaScript promises, HTML and CSS.

*/

'use strict';

let heroes = [
  // TODO: Create superhero objects
  {
    name: 'Superhero 1',
    superpower: 'power',
    weakness: 'weakness',
    city: 'city',
  },
  {
    name: 'Superhero 2',
    superpower: 'power2',
    weakness: 'weakness2',
    city: 'city2',
  },
  {
    name: 'Superhero 3',
    superpower: 'power 3',
    weakness: 'weakness 3',
    city: 'city3',
  },
];

let data1 = document.getElementById('data1');
let data2 = document.getElementById('data2');
let data3 = document.getElementById('data3');

let htmlCode1 = 'No data found';
let htmlCode2 = 'No data found';
let htmlCode3 = 'No data found';

// Create three functions, each function should return a promise that “fetches” the data for a different superhero in the object array.
// Use the setTimeout to simulate a delay in fetching the data.
// Set each function’s timer to a different value starting with 2 seconds and expanding from there.
// To simulate a promise rejection, you can randomly reject promises in your fetch
// functions using Math.random()
// or you could replace one of the resolves with a rejection.
// Just make sure you uncomment the resolve line and comment the reject
// line when you want to test fulfilled states.

function fetchHero1() {
  // TODO: Implement this function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve(
          `Name: ${heroes[0].name} <br>SuperPower: ${heroes[0].superpower}<br>Weakness: ${heroes[0].weakness} <br>City: ${heroes[0].city}`
        );
      } else {
        reject('Hero 1: Data gathering did not complete');
      }
    }, 2000);
  });
}

function fetchHero2() {
  // TODO: Implement this function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve(
          `Name: ${heroes[1].name} <br>SuperPower: ${heroes[1].superpower}<br>Weakness: ${heroes[1].weakness} <br>City: ${heroes[1].city}`
        );
      } else {
        reject('Hero 2: Data gathering did not complete');
      }
    }, 3000);
  });
}

function fetchHero3() {
  // TODO: Implement this function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve(
          `Name: ${heroes[2].name} <br>SuperPower: ${heroes[2].superpower}<br>Weakness: ${heroes[2].weakness} <br>City: ${heroes[2].city}`
        );
      } else {
        reject('Hero 3: Data gathering did not complete');
      }
    }, 4000);
  });
}

// TODO: Use Promise.allSettled to fetch all heroes and update the webpage

// Call the functions concurrently
Promise.allSettled([fetchHero1(), fetchHero2(), fetchHero3()]).then(
  (results) => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        if (index === 0) {
          document.getElementById('data1').innerHTML = result.value;
        } else if (index == 1) {
          document.getElementById('data2').innerHTML = result.value;
        } else {
          document.getElementById('data3').innerHTML = result.value;
        }
      } else {
        if (index === 0) {
          document.getElementById('data1').innerHTML = result.reason;
        } else if (index == 1) {
          document.getElementById('data2').innerHTML = result.reason;
        } else {
          document.getElementById('data3').innerHTML = result.reason;
        }
      }
    });
  }
);
