const image = document.querySelector('img');
const title = document.querySelector('#title');
const artist = document.querySelector('#artist');
const music = document.querySelector('audio');
const prevBtn = document.querySelector('#prev');
const play = document.querySelector('#play');
const nextBtn = document.querySelector('#next');
const progressContainer = document.querySelector('#progress-container');
const progress = document.querySelector('#progress');
const currentTimeEl = document.querySelector('#current-time');
const durationEl = document.querySelector('#duration');

// Song
const songs = [
    {
        name : 'Song-1',
        displayName : 'Main Theme',
        artist : 'Tetris 99',
    },
    {
        name : 'Song-2',
        displayName : 'Game Theme',
        artist : 'Tetris 99',
    },
    {
        name : 'Song-3',
        displayName : 'Game Theme (50)',
        artist : 'Tetris 99',
    },
]

// Check if song is playing
let isPlaying = false;

// Play
function playSong(){
    isPlaying = true;
    play.classList.replace('fa-play', 'fa-pause');
    play.setAttribute('title', 'Pause');
    music.play();
}

// Pause
function pauseSong(){
    isPlaying = false;
    play.classList.replace('fa-pause', 'fa-play');
    play.setAttribute('title', 'Play');
    music.pause();
}

// Play or pause event listener
play.addEventListener('click', function(){(isPlaying ? pauseSong() : playSong())});

// Update DOM
function loadSong(song){
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}

// Current Song
let songIndex = 0;

// Prev Song
function prevSong(){
    songIndex--;
    (songIndex < 0 ? songIndex = songs.length - 1 : ''); //Ternary Operator
    loadSong(songs[songIndex]);
    playSong();
}

// Next Song
function nextSong(){
    songIndex++;
    (songIndex > songs.length - 1 ? songIndex = 0 : ''); //Ternary Operator
    loadSong(songs[songIndex]);
    playSong();
}

// On load select first song
loadSong(songs[songIndex]);

// Update progress bar and time
function progressUpdate(event){
    if (isPlaying){
        const { currentTime, duration} = event.srcElement;
        // update progress bar width in percent along with duration
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
        const durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(durationMinutes % 60);
        (durationSeconds < 10 ? durationSeconds = `0${durationSeconds}` : '');
        // Delay switching between duration element to avoid NaN
        (durationSeconds ? durationEl.textContent = `${durationMinutes}:${durationSeconds}` : '');
        const currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);
        (currentSeconds < 10 ? currentSeconds = `0${currentSeconds}` : '');
        currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
    }
}

// Set progress bar
function setProgressBar(event){
    const width = this.clientWidth;
    const clickX = event.offsetX;
    const {duration} = music;
    music.currentTime = (clickX / width) * duration;
}

// Event Listeners Prev and Next
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('ended', nextSong);
music.addEventListener('timeupdate', progressUpdate);
progressContainer.addEventListener('click', setProgressBar);