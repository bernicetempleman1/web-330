/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author:Bernice Templeman
  Date: 03/30/2024
  Filename: script.js
*/

'use strict';

//  JavaScript function that creates a new character.
// The function takes the character name, gender, and class as formal parameters and returns an object
function createCharacter(hname, hgender, hClass) {
  // TODO: Implement this function

  // private variables
  let name = hname;
  let gender = hgender;
  let charClass = hClass;

  return {
    // getName: Returns the character’s name
    getName: function () {
      return name;
    },

    // getGender: Returns the character’s gender.
    getGender: function () {
      return gender;
    },

    // getClass: Returns the character’s class.
    getClass: function () {
      return charClass;
    },

    displayWelcome: function () {
      return `Hello, ${name}. You are a ${gender}  ${charClass} in this game.`;
    },
  };
}

document.getElementById('generateHero').addEventListener('click', function (e) {
  e.preventDefault();

  // TODO: Get form values
  let hName = document.getElementById('heroName').value; // get name
  let hGender = document.getElementById('heroGender').value; // get gender
  let hCharacterClass = document.getElementById('heroClass').value; // get characterClass

  let feedback = document.getElementById('feedback');

  if (hName.length == '') {
    feedback.textContent = 'Name must be filled out';
    return false;
  } else if (hGender.length == '') {
    feedback.textContent = 'A gender must be selected';
    return false;
  } else if (hCharacterClass.length == '') {
    feedback.textContent = 'A character class must be selected';
    return false;
  } else {
    //valid data
    feedback.textContent = '';
    // TODO: Create character
    const heroCharacter = createCharacter(hName, hGender, hCharacterClass);

    // TODO: Display character information (name, gender, and class) on the page.
    let welcome = document.getElementById('welcome');
    welcome.textContent = heroCharacter.displayWelcome(); // Hello, <name>. You are a <gender> <class> in this game.
    return true;
  }
});
