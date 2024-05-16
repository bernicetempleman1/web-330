'use strict';
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Bernice Templeman
      Date: 05/16/2024

      Filename: project12-03.js
*/

//apply the click() method to the article > h2 selector
$('article > h2').click((e) => {
  // Declare the following variables using jQuery.
  // Declare the heading variable referencing the target of the click event.
  let heading = $(e.target);

  // Declare the list variable referencing the next sibling element of the heading variable.
  let list = heading.next();

  // Declare the headingImage variable referencing the children of the heading variable whose tag name is “img"
  let headingImage = heading.children('img');

  // Alternate between hiding and showing the content of the lists by applying the slideToggle() method to the list variable over a half-second interval.
  // 1 second = 1000 milliseconds
  list.slideToggle(500);

  // Change the symbol displayed in the headings by applying the attr() method to headingImage variable to get the value of the src attribute.
  if (headingImage.attr('src') === 'plus.png') {
    //If src attribute value is equal to “plus.pg”,
    // apply the attr() method to headingImage to set the src attribute value to “minus.png”;
    headingImage.attr('src', 'minus.png');
  } else {
    // otherwise set the src attribute value to “plus.png”.
    headingImage.attr('src', 'plus.png');
  }
});
