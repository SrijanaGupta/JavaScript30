const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

skipButtons.forEach((skip) => {
  skip.addEventListener("click", skipClick);
});

function togglePlay() {
    if (video.paused) {
      video.play();
      progressVideo();
    } else video.pause();
  }


function videoControl(e) {
    progressVideo();
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
  }

  function skipClick() {
      console.log(this.dataset);
    const skip = this.dataset.skip;
    video.currentTime += parseFloat(skip);
    }

    function handleRange(){
        video[this.name] = this.value;
    }

    function progressVideo(){
        const percentVideo = (video.currentTime / video.duration) *100;
        progressBar.style.flexBasis = `${percentVideo}%`;
    }

    function addProgress(e){
        const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
        video.currentTime = scrubTime;
    }

toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
ranges.forEach(range=>range.addEventListener('change',handleRange))
ranges.forEach(range=>range.addEventListener('mousemove',handleRange))
video.addEventListener("timeupdate", videoControl);
progress.addEventListener('click',addProgress);

let mousedown = false;
progress.addEventListener('mousemove', (e) => mousedown && addProgress(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
