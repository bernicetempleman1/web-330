'use strict';
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to read field values from web storage
      Author: Bernice Templeman
      Date: 03/31/2024

      Filename: project09-02a.js
*/

/* Page Objects */

let riderName = document.getElementById('riderName');
let ageGroup = document.getElementById('ageGroup');
let bikeOption = document.getElementById('bikeOption');
let routeOption = document.getElementById('routeOption');
let accOption = document.getElementById('accOption');
let region = document.getElementById('region');
let miles = document.getElementById('miles');
let comments = document.getElementById('comments');

// insert an onclick button that runs the showData() function when the Submit button is clicked.
document.getElementById('submitButton').onclick = showData;

/*
Add the showData() function and within the function insert the following commands:
 // Insert a command to the store the value of the riderName object in a session storage object named  riderName.
 // Repeat the previous step for the ageGroup, bikeOption, routeOption, accOption, region, miles,  and comments objects.
 // Add a command that changes the value of the location.href object to the project09-02b.html file.
*/
function showData() {
  // Insert a command to the store the value of the riderName object in a session storage object named riderName.
  sessionStorage.setItem("riderName", riderName.value);
  // Repeat the previous step for the ageGroup, bikeOption, routeOption, accOption, region, miles, and comments objects.
  sessionStorage.setItem("ageGroup", ageGroup.value);
  sessionStorage.setItem("bikeOption", bikeOption.value);
  sessionStorage.setItem("routeOption", routeOption.value);
  sessionStorage.setItem("accOption", accOption.value);
  sessionStorage.setItem("region", region.value);
  sessionStorage.setItem("miles", miles.value);
  sessionStorage.setItem("comments", comments.value);

  // Add a command that changes the value of the location.href object to the project09-02b.html file.
  location.href = "project09-02b.html";
}
