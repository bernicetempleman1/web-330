'use strict';
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02
      Project to city and state information from a provided postal code
      
      Author: Bernice Templeman
      Date: 04/27/2024

      Filename: project11-02.js
*/

let postalCode = document.getElementById('postalCode');
let place = document.getElementById('place');
let region = document.getElementById('region');
let country = document.getElementById('country');

postalCode.onblur = function () {
  // a. Declare the codeValue and countryValue variables setting them equal to the value of the postalCode and country elements, respectively.
  let codeValue = postalCode.value;
  let countryValue = country.value;

  // b. Set the value of the place and region elements to an empty text string.
  place.value = '';
  region.value = '';

  // c. Use Fetch to access the API at  http://api.zippopotam.us/country/code  where country is the value of the countryValue variable and code is the value of the codeValue variable.
  fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)
    // d. When the Fetch promise is returned, add a then() method to parse the JSON response object.
    .then((response) => response.json())

    // e. Add another then() method using an arrow function with a
    // single parameter named json.
    // Set the value of the place element
    // to place property for the postal code and
    // the region element to the state abbreviation property.
    .then((json) => {
      place.value = json.places[0]['place name'];
      region.value = json.places[0]['state abbreviation'];
    })

    // f. If the response is rejected, write the error text to the console log.
    .catch((error) => console.log(error));
};
