"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from session storage
      Author: Bernice Templeman
      Date: 03/31/2024

      Filename: project09-02b.js
*/

/* Page Objects */

let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");

//insert a command to retrieve the value of the riderName key from session storage and store that value in the text content of the riderName object in the web page.
riderName.textContent = sessionStorage.getItem("riderName");
// Repeat for the ageGroup, bikeOption, routeOption, accOption, region, miles, and comments
ageGroup.textContent = sessionStorage.getItem("ageGroup");
bikeOption.textContent = sessionStorage.getItem("bikeOption");
routeOption.textContent = sessionStorage.getItem("routeOption");
accOption.textContent = sessionStorage.getItem("accOption");
region.textContent = sessionStorage.getItem("region");
miles.textContent = sessionStorage.getItem("miles");
comments.textContent = sessionStorage.getItem("comments");