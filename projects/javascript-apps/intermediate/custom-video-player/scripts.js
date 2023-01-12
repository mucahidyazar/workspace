/* Get Our Elements */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

/* Build out functions */
function togglePlay() {
  //like video.play() video.pause()
  const method = video.paused ? "play" : "pause";
  video[method](); //like video.play()
}

function updateButton() {
  //this => video elementi
  //this.paused => video elementinin bir property'si ve methodu
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

function skip() {
  //this.dataset => skipButtons'larin ozel attributeleri
  //<button data-skip="25" ...> icin this.dataset.skip ile erisebiliriz.
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  //offsetWidth => progress barin tum genisligini verir
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

/* Hook up the event listeners */
video.addEventListener("click", togglePlay);

/* Changing play button icon */
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

/* Updating Progress Bar */
//Video player bu sayede nerede oldugunu gosteren bari anlik guncelleyebilecek
video.addEventListener("timeupdate", handleProgress);

/* Playing and pausing video */
toggle.addEventListener("click", togglePlay);

/* Skip Buttons Events */
skipButtons.forEach((button) => {
  button.addEventListener("click", skip);
});

/* Volume */
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);

//Progressbardan ileri geriye sarmak
let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
