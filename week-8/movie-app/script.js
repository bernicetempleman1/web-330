/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Bernice Templeman
  Date: 05/09/2024
  Filename: script.js
*/

'use strict';

// Define an array of movie objects. Each object should have properties for the title, director, release year, and synopsis.
const movies = [
  // Add your movie objects here
  {
    title: 'WONDER WOMAN',
    director: 'Patty Jenkins',
    releaseYear: '2017',
    synopsis: 'The story of Diana Prince.',
  },
  {
    title: 'FANTASTIC FOUR',
    director: 'Tim Story',
    releaseYear: '2005',
    synopsis: 'Astronauts gain superpowers.',
  },
  {
    title: 'CAT WOMAN',
    director: 'Strong',
    releaseYear: '2004',
    synopsis: 'Many lives.',
  },
];

// Define a function named fetchMovie(title).
// This function should return a Promise that simulates fetching data for the given title from the array.
// Use setTimeout to simulate the delay of a network request.

// Your fetchMovie function should reject with an error message if the movie title is not found in the array.
function fetchMovie(title) {
  // Implement this function
  return new Promise((resolve, reject) => {
    let index = movies.findIndex((x) => x.title === title);
    let found = true;
    let movie = movies[index];
    setTimeout(() => {
      if (found) {
        resolve(
          movie // The resolved value should be the movie object that matches the title.
        );
      } else {
        reject('fetchMovie: Data gathering did not complete');
      }
    }, 1);
  });
}

// Define an async function named displayMovie.
// This function should be called when the user submits the form.
// It should use await to wait for fetchMovie to complete,
// then update the HTML of the page to display the movie information
// displayMovie function should handle these errors and display an appropriate message on the webpage.
async function displayMovie(title) {
  // Implement this function
  try {
    let movie = await fetchMovie(title);
    /*
    <h2 id="movie-title"></h2>
        <p id="movie-director"></p>
        <p id="movie-year"></p>
        <p id="movie-synopsis"></p>
    */
    document.getElementById('movie-title').textContent = movie.title;
    document.getElementById('movie-director').textContent =
      'Director: ' + movie.director;
    document.getElementById('movie-year').textContent =
      'Release Year: ' + movie.releaseYear;
    document.getElementById('movie-synopsis').textContent =
      'Synopsis: ' + movie.synopsis;
  } catch (error) {
    //console.error(error); // This will run if the Promise is rejected
    document.getElementById('error-message').textContent =
      'Display Movie error';
  }
}

document
  .getElementById('movie-form')
  .addEventListener('submit', async (event) => {
    // Implement this function
    event.preventDefault();
    let movieTitle = document.getElementById('title-input').value;

    if (movieTitle.length == '') {
      document.getElementById('movie-title').textContent = '';
      document.getElementById('movie-director').textContent = '';
      document.getElementById('movie-year').textContent = '';
      document.getElementById('movie-synopsis').textContent = '';
      document.getElementById('error-message').textContent =
        'Movie title must be filled out';
      return false;
    } else {
      //check if movie exists
      let titleUC = movieTitle.toUpperCase();
      let index = movies.findIndex((x) => x.title === titleUC);
      if (index < 0) {
        document.getElementById('error-message').textContent =
          'Error: Movie does not exist.';
        return false;
      } else {
        document.getElementById('error-message').textContent = '';
        //call the displayMovie function
        displayMovie(titleUC);
      }
    }
  });
