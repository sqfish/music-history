
var songs = [];


// Song object container
function Song(title, artist, album) {
  this.songName = title;
  this.artistName = artist;
  this.albumName = album;
}

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("The Song That Never Ends > by Lamb Chop on the album Sing-Along, Play-Along");
songs.push("Do Your Ears Hang Low? > by Unknown on the album Unknown");



// 
// Remove illegal characters and edit string
// Update song item strings in array
// 
for (var i = 0; i < songs.length; i++) {
  var currentValue = songs[i]; //get current song item
  var illegalChar = /[*@(!]/g;
  if (illegalChar.test(currentValue)) {
    currentValue = currentValue.replace(illegalChar, "");
  }
  currentValue = currentValue.replace(/>/, "-");
  songs[i] = currentValue;
}



// 
// Parse song item string into component parts.
// Create new song object and assign appropriate
// name/value pairs.
// 
function parseSongInfo(currentValue) {
  var query = " - ";
  var x = currentValue.indexOf(query);
  var songName = currentValue.slice(0, x);
  query = "by ";
  x = currentValue.indexOf(query);
  x = x + query.length
  query = " on the album ";
  var y = currentValue.indexOf(query);
  var artistName = currentValue.slice(x, y);
  y = y + query.length;
  var albumName = currentValue.slice(y);
  return new Song(songName, artistName, albumName);
}




//
// Create new array containing to hold song objects
// Add song objects with corresponding property/value pairs
//
var songArray = [];
for (var i = 0; i < songs.length; i++) {
  var currentValue = songs[i];
  songArray[i] = parseSongInfo(currentValue);
}

var playlistHTML = document.getElementById("right-flex-item");
var songHTML = playlistHTML.firstElementChild;



//
// Update a single song element with information from a song object
// Accepts an existing song object and an existing song element
// Returns updated song element
//
function updateSongElement(song, songHTML) {
  var songName = song.songName;
  var artistName = song.artistName;
  var albumName = song.albumName;
  var songHeader = songHTML.firstElementChild;
  var songParagraph = songHTML.lastElementChild;
  songHeader.innerHTML = songName;
  songParagraph.innerHTML = artistName + " | " + albumName + " | " + "Genre";
  return songHTML;
}


//
// Update the playlist DOM element with a song
// Accepts a single existing song object and 
// an index value specifying which playlist child element to update
//
function updatePlaylist(song, whichChild) {
  var song = song;
  var childNumber = whichChild;
  var playlistHTML = document.getElementById("right-flex-item");
  var songHTML = playlistHTML.children[childNumber];
  songHTML = updateSongElement(song, songHTML);
}

//
// Parse through new song array and add/update songs to playlist
// Update existing playlist children song elements
// Add new playlist children song elements if needed
//
for (var i = 0; i < songArray.length; i++) {
  var song = songArray[i];
  var playlistHTML = document.getElementById("right-flex-item");
  var childrenCount = playlistHTML.children.length;
  if (i < childrenCount) {
    updatePlaylist(song, i);
  } else {
    var newSong = document.createElement("DIV");
    var newHeader = document.createElement("H3");
    var newSongParagraph = document.createElement("P");
    newSong.appendChild(newHeader);
    newSong.appendChild(newSongParagraph);
    playlistHTML.appendChild(newSong);
    updatePlaylist(song, i);
  }
}