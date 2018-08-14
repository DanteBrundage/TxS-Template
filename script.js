// List of gifs from document

/*
1 'https://i.giphy.com/media/BCXMSiVZeo8xy/giphy.gif',
2 'https://i.giphy.com/media/1d5KHhOA1oTpX7ROOi/giphy.gif',
3 'https://i.giphy.com/media/3o6Zt5nSYQa0czSmnm/giphy.gif',
4 'https://i.giphy.com/media/2tKCVxXIkBgqUZGDJb/giphy.gif',
5 'https://i.giphy.com/media/KtfjlVSFI8EVO/giphy.gif',
6 'https://i.giphy.com/media/xUPGGDgB1ZlUduRov6/giphy.gif',
7 'https://i.giphy.com/media/wAxlCmeX1ri1y/giphy.gif',
8 'https://i.giphy.com/media/MhHcCN6PoTdL2/giphy.gif',
9 'https://i.giphy.com/media/1TJB4TPjtaEJq/giphy.gif',
10 'https://i.giphy.com/media/xe9csf50g4SqY/giphy.gif',

*/

// those are variables selecting main elements on the page

var resultBox = document.getElementById('result')
var titleBox = document.getElementById('title')
var gifPanel = document.getElementById('gif-panel')
var mainImage = document.getElementById('main-image')
var youImage = document.getElementById('you-image')
var spotifyImage = document.getElementById('spotify-image')
var yrImage = document.getElementById('yr-image')
var youScore = document.getElementById('you-score')
var spotifyScore = document.getElementById('spotify-score')
var yrScore = document.getElementById('yr-score')
var resultButton = document.getElementById('result-button')
var gifs = [
  "url(https://i.giphy.com/media/BCXMSiVZeo8xy/giphy.gif)",
  "url(https://i.giphy.com/media/1d5KHhOA1oTpX7ROOi/giphy.gif)",
  "url(https://i.giphy.com/media/3o6Zt5nSYQa0czSmnm/giphy.gif)",
  "url(https://i.giphy.com/media/2tKCVxXIkBgqUZGDJb/giphy.gif)",
  "url(https://i.giphy.com/media/KtfjlVSFI8EVO/giphy.gif)",
  "url(https://i.giphy.com/media/xUPGGDgB1ZlUduRov6/giphy.gif)",
  "url(https://i.giphy.com/media/wAxlCmeX1ri1y/giphy.gif)",
  "url(https://i.giphy.com/media/MhHcCN6PoTdL2/giphy.gif)",
  "url(https://i.giphy.com/media/1TJB4TPjtaEJq/giphy.gif)",
  "url(https://i.giphy.com/media/xe9csf50g4SqY/giphy.gif)"
];

var colors = [
  '#4286f4',
  '#4286f4',
  '#f46241',
  '#6d615e',
  '#7bf2ec',
  '#db15a6',
  '#db1515',
  '#15db1b',
  '#7ff4bd',
  '#dd11b5'
];
// this is how you replace the image from the background
//mainImage.style.backgroundImage = "url(https://i.giphy.com/media/1d5KHhOA1oTpX7ROOi/giphy.gif)"

// this is how we hide the resultBox element
resultBox.hidden = true;
resultButton.hidden = true;

// this is how you create a function
function testClickFunction() {
  alert('clickedddd')
}

function buttons() {
  resultButton.hidden = false
}

// Activity today will be

// 1. Create a variable to store the user selected Rating  userRating
var userRating;
// 2. Create 10 different functions to update the userRating score
function gifFunction(rate) {
  userRating = rate
  mainImage.style.backgroundImage = gifs[userRating - 1];

  gifPanel.style.background = colors[userRating - 1];
}

// 3. Add the functions to the correpondent HTML elements, using the onclick="functionName()" attribute
// 4. Create a function to process the click on Compare button


function onClick() {
  youScore.innerHTML = userRating;
  gifPanel.hidden = true;
  resultBox.hidden = false;
  if (userRating === 1) {
    youImage.style.backgroundImage = "url(https://i.giphy.com/media/BCXMSiVZeo8xy/giphy.gif)";
  }
  if (userRating === 2) {
    youImage.style.backgroundImage = "url(https://i.giphy.com/media/1d5KHhOA1oTpX7ROOi/giphy.gif)";
  }
  if (userRating === 3) {
    youImage.style.backgroundImage = "url(https://i.giphy.com/media/3o6Zt5nSYQa0czSmnm/giphy.gif)";
  }
  if (userRating === 4) {
    youImage.style.backgroundImage = "url(https://i.giphy.com/media/2tKCVxXIkBgqUZGDJb/giphy.gif)";
  }
  if (userRating === 5) {
    youImage.style.backgroundImage = "url(https://i.giphy.com/media/KtfjlVSFI8EVO/giphy.gif)";
  }
  if (userRating === 6) {
    youImage.style.backgroundImage = "url(https://i.giphy.com/media/xUPGGDgB1ZlUduRov6/giphy.gif)";
  }
  if (userRating === 7) {
    youImage.style.backgroundImage = "url(https://i.giphy.com/media/wAxlCmeX1ri1y/giphy.gif)";
  }
  if (userRating === 8) {
    youImage.style.backgroundImage = "url(https://i.giphy.com/media/MhHcCN6PoTdL2/giphy.gif)";
  }
  if (userRating === 9) {
    youImage.style.backgroundImage = "url(https://i.giphy.com/media/1TJB4TPjtaEJq/giphy.gif)";
  }
  if (userRating === 10) {
    youImage.style.backgroundImage = "url(https://i.giphy.com/media/xe9csf50g4SqY/giphy.gif)";
  }
}



// 5. The function should, hide the element voteBox and show resultBox
// 5.1 Show User score replacing youScore.innerHTML = content
// 5.2. Change youImage with appropriated Gif image
