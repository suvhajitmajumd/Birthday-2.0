// ============================
// SONG LIST
// ============================
const songs = [
  { file: "music/song1.mp3", name: "Tokyo Lo-Fi Nights" },
  { file: "music/song2.mp3", name: "Frozen Winter Love" },
  { file: "music/song3.mp3", name: "Chillhop Sunset" },
  { file: "music/song4.mp3", name: "Study & Focus Beats" }
];

let audio = new Audio();
let currentSong = null;
let isUserSeeking = false;

// ============================
// PLAY RANDOM TRACK
// ============================
function playRandomSong() {
  let newSong;

  // ensure next song isn't the same as current one
  do {
    newSong = Math.floor(Math.random() * songs.length);
  } while (newSong === currentSong && songs.length > 1);

  currentSong = newSong;

  audio.src = songs[currentSong].file;
  audio.play();
  updateNowPlaying();
  updatePlayPauseBtn();
}

// ============================
// DISPLAY SONG NAME
// ============================
function updateNowPlaying() {
  document.getElementById("nowPlaying").textContent =
    songs[currentSong].name;
}

// ============================
// PLAY / PAUSE BUTTON
// ============================
document.getElementById("playPauseBtn").onclick = () => {
  if (!audio.src) {
    playRandomSong();
  } else {
    if (audio.paused) audio.play();
    else audio.pause();
  }
  updatePlayPauseBtn();
};

function updatePlayPauseBtn() {
  document.getElementById("playPauseBtn").textContent =
    audio.paused ? "▶" : "⏸";
}

// ============================
// AUTOPLAY NEXT SONG
// ============================
audio.onended = function() {
  playRandomSong();
};

// ============================
// PROGRESS BAR
// ============================
const progressBar = document.getElementById("progressBar");

// when audio is playing, update progress
audio.ontimeupdate = function() {
  if (!isUserSeeking && audio.duration) {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
  }
};

// while user is dragging the bar
progressBar.oninput = function() {
  isUserSeeking = true;
};

// when user releases the bar
progressBar.onchange = function() {
  audio.currentTime = (this.value / 100) * audio.duration;
  isUserSeeking = false;
};

// ============================
// VOLUME BAR
// ============================
document.getElementById("volumeBar").oninput = function() {
  audio.volume = this.value / 100;
};
