//  Create a button and a 100x100 black coloured squared.
//  On clicking this button, generate a random hex colour and 
//  assign it to the square
const button = document.querySelector('#changeColor');
const square = document.querySelector('#square');

button.addEventListener('click', function() {
  const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  square.style.backgroundColor = color;
});