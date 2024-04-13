'use strict';
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-01

      Project to create a drag and drop jigsaw puzzle
      Author: Bernice Templeman
      Date: 04/13/2024

      Filename: project10-01.js
*/

// Reference to the puzzle board
let puzzleBoard = document.getElementById('puzzleBoard');
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
// Array of integers from 1 to 48
let intList = new Array(48);
// pointerX and pointerY will contain the initial coordinates of the pointerX
// pieceX and pieceY will contain the initial coordinates of a puzzle piece
let pointerX, pointerY, pieceX, pieceY;

// Sort the integers from 1 to 48 in random order
for (let i = 0; i < 48; i++) {
  intList[i] = i + 1;
}
intList.sort(function () {
  return 0.5 - Math.random();
});

// generate randomly-sorted puzzle pieces
for (let i = 0; i < 48; i++) {
  let piece = document.createElement('img');
  piece.src = 'piece' + intList[i] + '.png';
  let rowNum = Math.ceil((i + 1) / 8);
  let colNum = i + 1 - (rowNum - 1) * 8;
  piece.style.top = (rowNum - 1) * 98 + 7 + 'px';
  piece.style.left = (colNum - 1) * 98 + 7 + 'px';
  piece.draggable = false; // override the default draggability of images
  puzzleBoard.appendChild(piece);
}

// Node list representing the puzzle pieces
let pieces = document.querySelectorAll('div#puzzleBoard img');

// for loop that iterates through every item in the pieces node list.
for (let i = 0; i < pieces.length; i++) {
  // For each item,
  //add an event listener that runs the grabPiece() function in response to the pointerdown event.
  pieces[i].addEventListener('pointerdown', grabPiece);
}

function grabPiece(e) {
  // Set the value of the pointerX and pointerY variables to the values of the clientX and clientY properties of the event object.
  pointerX = e.clientX;
  pointerY = e.clientY;

  // Set the value of the touchAction style for the event target to “none”.
  e.target.style.touchAction = 'none';

  // Increase the value of the zCounter variable by 1 and apply that value to the zIndex style of the event target.
  e.target.style.zIndex = ++zCounter;

  // Set the value of the pieceX and pieceY variables to the values of the offsetLeft and offsetTop  properties of the event target.
  pieceX = e.target.offsetLeft;
  pieceY = e.target.offsetTop;

  // Add an event listener to the event target that runs the movePiece() function in response to the  pointermove event.
  // Add an event listener to the event target that runs the dropPiece() function in  response to the pointerup method.
  e.target.addEventListener('pointermove', movePiece);
  e.target.addEventListener('pointerup', dropPiece);
}

// Create the movePiece() function. Within the function do the following:
function movePiece(e) {
  // Declare the diffX variable, setting it equal to the difference between e.clientX and pointerX.
  let diffX = e.clientX - pointerX;
  // Declare  the diffY variable setting it equal to the difference between e.clientY and pointerY.
  let diffY = e.clientY - pointerY;

  // Set the value of the left style property of the event target to sum of pieceX and diffX plus the text string  “px”.
  e.target.style.left = pieceX + diffX + 'px';
  // Set the value of the top style property of the event target to sum of pieceY and diffY plus the text  string “px”.
  e.target.style.top = pieceY + diffY + 'px';
}

// Create the dropPiece() function. Within the function do the following:
function dropPiece(e) {
  //Remove the movePiece() function from the event listener for the pointermove event.
  e.target.removeEventListener('pointermove', movePiece);
  //Remove the dropPiece() function from the event listener for the pointerup event.
  e.target.removeEventListener('pointerup', dropPiece);
}
