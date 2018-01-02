// Get our Elements 

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreen = player.querySelector('.fs_button');

let isFullScreen = false;

// build out functions 
function togglePlay(){
    const method =  video.paused ? 'play' : 'pause';
    video[method]();
};

//update the play and pause icom
function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent =icon;
};

//.dataset allows to read or write "data" made attributes...in this case we are altering "data-skip"
function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
    
};

//adding function to playback rate and volume control
function handleRangeUpdate(){
    //name = volume or playrate which will equal a numerical value
    video[this.name] = this.value;
}

//updating the yellow bar or the progress bar
function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
    
}
function scrub(e){
    const scrubTIme = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTIme;
}

function fullSize (){
        if (!isFullScreen) {
            if (player.requestplayer) {
                player.requestplayer();
            } else if (player.msRequestplayer) {
                player.msRequestplayer();
            } else if (player.mozRequestplayer) {
                player.mozRequestplayer();
            } else if (player.webkitRequestFullscreen) {
                player.webkitRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen){
                document.exitFullscreen();
            } else if (document.exitFullscreen){
                document.mozExitFullscreen();
            } else if (document.webkitExitFullscreen){
                document.webkitExitFullscreen();
            }
        }
    
}

function fullScreenFlag() {
    isFullScreen = !isFullScreen;
}

// hook up the event listners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

fullScreen.addEventListener('click', fullSize);


toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);


['fullscreenchange', 'webkitfullscreenchange'].forEach(e => document.addEventListener(e, fullScreenFlag));