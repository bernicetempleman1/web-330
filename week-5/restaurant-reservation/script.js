/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Bernice Templeman
  Date: 04/18/2024
  Filename: script.js
*/
'use strict';
// Create an in-memory object array for each table in the restaurant
let tables = [
  // Add your table objects here table number, capacity, and isReserved
  {
    tableNumber: '1',
    capacity: 4,
    isReserved: false,
  },
  {
    tableNumber: '2',
    capacity: 4,
    isReserved: false,
  },
  {
    tableNumber: '3',
    capacity: 4,
    isReserved: true,
  },
  {
    tableNumber: '4',
    capacity: 4,
    isReserved: false,
  },
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  // Add your code here

  let message = '';
  //https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

  let index = tables.findIndex((x) => x.tableNumber == tableNumber);
  if (tables[index].isReserved) {
    //  not available, it should immediately call the callback function with an error message.
    message = 'Error: can not make reservation for Table ' + tableNumber;
    callback(message);
  } else {
    // update the isReserved property of the table
    tables[index].isReserved = true;

    // use setTimeout to wait for the time specified in the formal parameter,
    setTimeout(() => {
      // call the callback function with a success message.
      message = 'Success! Making reservation for Table ' + tableNumber;
      callback(message);
    }, time);
  }
}

function goRestaurant(message) {
  document.getElementById('message').textContent = message;
}

// When the form is submitted, call the reserveTable function
document
  .getElementById('reservationForm')
  .addEventListener('submit', function (e) {
    // Add your code here
    e.preventDefault();

    const time = 1000;
    let tableNumber = document.getElementById('tableNumber').value;
    let name = document.getElementById('name').value;

    if (name.length == '') {
      message.textContent = 'Name must be filled out';
      return false;
    } else if (tableNumber.length == '') {
      message.textContent = 'A table number must be selected';
      return false;
    } else {
      let index = tables.findIndex((x) => x.tableNumber === tableNumber);
      if (index <0) {
        message.textContent = 'Error: table number does not exist.';
        return false;
      } else {
        message.textContent = '';
        //call the reserveTable function
        reserveTable(tableNumber, goRestaurant, time);
      }
    }
  });
