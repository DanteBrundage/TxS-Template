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

var resultBox = document.getElementById('result');
var titleBox = document.getElementById('title');
var gifPanel = document.getElementById('gif-panel');
var mainImage = document.getElementById('main-image');
var youImage = document.getElementById('you-image');
var spotifyImage = document.getElementById('spotify-image');
var yrImage = document.getElementById('yr-image');
var youScore = document.getElementById('you-score');
var spotifyScore = document.getElementById('spotify-score');
var yrScore = document.getElementById('yr-score');
var resultButton = document.getElementById('result-button');
var nextSongButton = document.getElementById('next-song');
var finishButton = document.getElementById('finish');
var pleaseVote = document.getElementById('vote-box');
var songTitle = document.getElementById('title');

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
var songs = [

  "spotify:track:0KhM1c2bkqEAdxydjmZQPs", //First light hidden orchestra
  "spotify:track:2vmGgEn95r2rNAzN5v3h4X", // Homebody
  "spotify:track:0NVNmybggOg7HqjcxCkvpq"
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
var spotifyScores = [2,4,8];
var userRatings = [];
var iframeElement = document.querySelector("#song-iframe"); //select Iframe
var slider = document.getElementById("range");
var progress = 0;
var SongInfo = [
  {
SONG:"spotify:track:0KhM1c2bkqEAdxydjmZQPs",
SRATE:2,
TITLE:"First Light",
ARTIST:"Hidden Orchestra",
URATINGS: null
},
{
  SONG:"spotify:track:2vmGgEn95r2rNAzN5v3h4X",
  SRATE:4,
  TITLE:"Homebody",
  ARTIST:"Nai Palm",
  URATINGS: null
},
{
  SONG:"spotify:track:0NVNmybggOg7HqjcxCkvpq",
  SRATE:8,
  TITLE:"Macho",
  ARTIST:"Jaakko Eino Kalevi",
  URATINGS: null
}
]
songTitle.innerHTML = "<h1> How <span class='s'> <em> 'dancible'</em></span> is " + SongInfo[progress].TITLE + " by " + SongInfo[progress].ARTIST + "? </h1>";

iframeElement.src = getSpotifySrc(SongInfo[progress].SONG);
setAlbumCover(SongInfo[progress].SONG , mainImage)


//mainImage.style.backgroundImage = "url(https://i.giphy.com/media/1d5KHhOA1oTpX7ROOi/giphy.gif)"

// this is how we hide the resultBox element
resultBox.hidden = true;
resultButton.hidden = true;
pleaseVote.hidden = false;

// this is how you create a function
function testClickFunction() {
  alert('clickedddd');
}

function buttons() {
  resultButton.hidden = false;
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

function sliderChange()
{
  userRating = slider.value;
  mainImage.style.backgroundImage = gifs[userRating - 1];
  gifPanel.style.background = colors[userRating - 1];
  resultButton.hidden = false;
  pleaseVote.hidden = true;
}

function onClick(page) {
  if ( page == "results") {
  userRatings.push(slider.value);
  spotifyScore.innerHTML = SongInfo[progress].SRATE;
  youScore.innerHTML = userRating;
  gifPanel.hidden = true;
  resultBox.hidden = false;
  if(userRatings.length == spotifyScores.length){
    nextSongButton.hidden = true;
    finishButton.hidden = false;
  }
  else
  {
    nextSongButton.hidden = false;
    finishButton.hidden = true;
  }
  youImage.style.backgroundImage = gifs[userRating - 1];
  spotifyImage.style.backgroundImage = gifs[(SongInfo[progress].SRATE) - 1];
  progress += 1;
  console.log("user has completed: " + progress + " songs");
  console.log(userRatings);

  }

  else
  {
    userRating = null;
    resultButton.hidden = true;
    gifPanel.style.background = 'white';
    youScore.innerHTML = userRating;
    gifPanel.hidden = false;
    songTitle.innerHTML = "How Dancible is " + SongInfo[progress].TITLE + " by " + SongInfo[progress].ARTIST + "?";
    resultBox.hidden = true;
    iframeElement.src = getSpotifySrc(SongInfo[progress].SONG);
    setAlbumCover(SongInfo[progress].SONG , mainImage);

  }
}




//you have to select the iframe element/
//copy the next line to the top of your code


//this is how you set the new src for your Spotify oembed/


//this is how you set a new album cover


//copy this to your file once at the end of your scripts.js
//Special Functions
function getSpotifySrc(song) {
  const songCode = song.split(':')[2];
  return `https://open.spotify.com/embed/track/${songCode}`;
}

async function setAlbumCover(song, element){
  var aa = await getAlbumCover(song);
  element.style.backgroundImage = `url(${aa})`;
}

async function getAlbumCover(song) {
  //return the Image for a specific song ID
  const songCode = song.split(':')[2];
  const data = await fetch(`https://cors-anywhere.herokuapp.com/https://embed.spotify.com/oembed?url=http://open.spotify.com/track/${songCode}`)
    .then(r => r.json());
  return data.thumbnail_url;
}


// 5. The function should, hide the element voteBox and show resultBox
// 5.1 Show User score replacing youScore.innerHTML = content
// 5.2. Change youImage with appropriated Gif image
