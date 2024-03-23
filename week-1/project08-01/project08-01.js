'use strict';
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Bernice Templeman
      Date: 03/23/2024

      Filename: project08-01.js
*/

// Add a constructor function for the timer object with two parameters (min,sec)
function timer(min, sec) {
  this.minutes = min; // Set the timer.minutes property equal to min
  this.seconds = sec; // timer.seconds property equal to sec
  this.timeID = null; // timer.timeID property equal to null.
}

// Add the runPause() method to the timer object class prototype.
timer.prototype.runPause = function (timer, minBox, secBox) {
  // anonymous function for runPause() method
  if (timer.timeID) {
    // timer.timedID is truthy (has a value).
    window.clearInterval(timer.timeID); // pause the timer by applying the window.clearInterval() method using timer.timeID as the parameter value
    timer.timeID = null; // set timer.timeID equal to null.
  } else {
    // run the window.setInterval() method to start the timer,  running the countdown() function every 1000 milliseconds
    timer.timeID = window.setInterval(countdown, 1000); // store the id of the setInterval() method in the timer.timeID property
  }

  // Add the countdown() function function that updates the timer every second.
  function countdown() {
    if (timer.seconds > 0) {
      // If timer.seconds is greater than 0,
      timer.seconds--; // decrease the value of timer.seconds by 1.
    } else if (timer.minutes > 0) {
      // Else, if timer.minutes is greater than 0,
      timer.minutes--; // decrease the value of timer.minutes by 1
      timer.seconds = 59; // set the value of  timer.seconds to 59.
    } else {
      // Else the timer has reached 0:0
      window.clearInterval(timer.timeID); // stop the timer by running the window.clearInterval() method with  timer.timeID as the parameter value
      timer.timeID = null; // set the value of timer.timeID to null.
    }

    // After the if else statement, write the value of timer.minutes to minBox.value and  timer.seconds to secBox.value
    minBox.value = timer.minutes;
    secBox.value = timer.seconds;
  }
};

/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById('minutesBox');
let secBox = document.getElementById('secondsBox');
let runPauseTimer = document.getElementById('runPauseButton');

// Declare an instance of the timer object and name it myTimer using  minBox.value and secBox.value as the parameter values for the initial value of the timer.
let myTimer = new timer(minBox.value, secBox.value);

// Create an onchange event handler for minBox that sets myTimer.minutes to minBox.value.
minBox.onchange = function () {
  myTimer.minutes = minBox.value;
};

// Create an onchange event handler for secBox that sets myTimer.seconds to secBox.value.
secBox.onchange = function () {
  myTimer.seconds = secBox.value;
};

// Create an onclick event handler for the runPauseTimer button
// that runs an anonymous function that pplies the runPause() method to myTimer using myTimer, minBox, and secBox as the parameter values
runPauseTimer.onclick = function () {
  myTimer.runPause(myTimer, minBox, secBox);
};
