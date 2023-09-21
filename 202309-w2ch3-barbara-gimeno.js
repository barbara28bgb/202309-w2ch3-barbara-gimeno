const songs = [
  {
    id: 1,
    title: "We are the champion",
    artist: "Queen",
    genre: "Rock",
    duration: 280,
    year: 1977,
    wasHit: true,
  },
  {
    id: 2,
    title: "Macarena",
    artist: "Los del rio",
    genre: "Pop",
    duration: 198,
    year: 1962,
    wasHit: true,
  },
  {
    id: 3,
    title: "Soy peor",
    artist: "Soy peor",
    genre: "Reggeaton",
    duration: 220,
    year: 2016,
    wasHit: true,
  },
  {
    id: 4,
    title: "Sensaciones",
    artist: "Sen Senra",
    genre: "Pop",
    duration: 240,
    year: 2019,
    wasHit: false,
  },
  {
    id: 4,
    title: "Sensaciones",
    artist: "Sen Senra",
    genre: "Pop",
    duration: 240,
    year: 2019,
    wasHit: false,
  },
];

const newSong = {
  id: 5,
  title: "Fuego",
  artist: "Sen Senra",
  genre: "Pop",
  duration: 250,
  year: 2018,
  wasHit: false,
};
//primera funcion
const addNewSong = (newSong) => songs.push(newSong);

addNewSong(newSong);

//segunda cancion
const delatedSongList = (title) =>
  song.splice(
    (song.indexOf(
      song.find(
        (delatedSong) =>
          delated.song.title.toLowerCase() === title.toLowerCase()
      )
    ),
    1)
  );

return delatedSongList("Sensaciones");

//tercera fucnion
const getFullSong = (title) =>
song.find((song) => song.title.toLowerCase () === title.toLowerCase());
getFullSong("sensaciones");

//cuarta funcion 

const getGenreSong = (songs, genre)
=> songs.filtre ((song) => song.genre () === genre());

getGenreSong(song,title);


//Quinta funcion
const wasHitSong = (songs) => songs.includes(wasHit.true === true);
return wasHitSong;
