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

const addNewSong = (newSong) => songs.push(newSong);

const getTitleDelate = (title) => {
  const findTitle = songs.find((song) => songs.title === title);
  return findTitle;
};

const findPosition = (songs) => {
  let index = 0;
  const findTitleSong = songs.find((title, position) => {
    index = position;
    return songs.title === title;
  });
  return index;
};
console.log(getTitleDelate("sensaciones"));
