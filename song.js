/*
favorite song - first 
javascript ES6 task in PIRPLE
*/
var song = {
    name : "New Light",
    artist : "John Mayer",
    genre : "Rock",
    durationInSec : "208.8",
    durationInMin : "3.48"
};
console.log(song.name)
console.log(song.artist)
console.log(song.genre)
console.log(song.durationInSec)
console.log(song.durationInMin)

function song2(name,artist,genre, durationInSec,durationInMin){
    this.name = name;
    this.artist = artist;
    this.genre = genre;
    this.durationInSec = durationInSec;
    this.durationInMin = durationInMin;
}

var content = new song2("New Light","John Mayer","Rock","208.8","3.48")
console.log("-----------DIV-----------");
console.log("Name: ",content.name);
console.log("Artist: ",content.artist);