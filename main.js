var songs = [];

function song(title, artist, album) {
	this.songName = title;
	this.artistName = artist;
	this.albumName = album;
}

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("Song > by Artist on the album Album");
songs.push("Song > by Artist on the album Album");

// Remove illegal characters and edit string
// Update song item strings in array
for (var i = 0; i < songs.length; i++) {
	var currentValue = songs[i];	//get current song item
	var illegalChar = /[*@(!]/g;	
	if (illegalChar.test(currentValue)) {			//remove illegal characters
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
	return new song(songName, artistName, albumName);
}

// Create new array containing song objects
var songArray = [];
for (var i = 0; i < songs.length; i++) {
	var currentValue = songs[i];
	songArray[i] = parseSongInfo(currentValue);
}


document.getElementById("right-flex-item")


