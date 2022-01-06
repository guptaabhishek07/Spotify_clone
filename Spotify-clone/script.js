console.log("Welcome to Spotify");

// Initialiize the variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItems"));

let songs = [
  {
    songName: "Heat Waves - Glass Animals",
    filePath: "song/1.mp3",
    coverPath: "covers/c1.jpg",
  },
  { songName: "Closer - Chainsmoker ", filePath: "song/2.mp3", coverPath: "covers/c2.jpg" },
  {
    songName: "Jugnu - Badshah",
    filePath: "song/3.mp3",
    coverPath: "covers/c3.jpg",
  },
  {
    songName: "Money - LISA",
    filePath: "song/4.mp3",
    coverPath: "covers/c4.jpg",
  },
  {
    songName: "On The Ground - ROSE",
    filePath: "song/5.mp3",
    coverPath: "covers/c5.jpg",
  },
  {
    songName: "Nadiyon Paar - Rashmeet kaur",
    filePath: "song/6.mp3",
    coverPath: "covers/c6.jpg",
  },
  {
    songName: "Panghat - (From Roohi)",
    filePath: "song/7.mp3",
    coverPath: "covers/c7.jpg",
  },
  {
    songName: "Raataan Lambiyan - (From shershaah)",
    filePath: "song/8.mp3",
    coverPath: "covers/c8.jpg",
  },
  {
    songName: "Param Sundari - A.R. Rahmaan",
    filePath: "song/9.mp3",
    coverPath: "covers/c9.jpg",
  },
];

songItems.forEach((element) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.play();

// handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  // update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-remove-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
