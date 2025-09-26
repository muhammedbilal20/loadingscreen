let progress = 0;
const loadingText = document.getElementById("loading-text");
const progressFill = document.getElementById("progress-fill");
const subtext = document.getElementById("subtext");

const messages = [
  "Analyzing nonsense...",
  "Rebooting logic systems...",
  "Polishing pixels...",
  "Looking busy...",
  "Pretending to load...",
  "Doing absolutely nothing...",
  "Restarting... again...",
  "Wasting CPU cycles...",
  "Buffering imaginary files...",
];

function updateSubtext() {
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  subtext.innerText = randomMsg;
}

function fakeLoad() {
  if (progress >= 99.9999) {
    progress = 0.1000;
    loadingText.innerText = "Restarting... " + progress.toFixed(4) + "%";
    updateSubtext();
  } else {
    progress += Math.random() * 0.17;
    loadingText.innerText = "Loading... " + progress.toFixed(4) + "%";
  }
  progressFill.style.width = Math.min(progress, 100) + "%";
  setTimeout(fakeLoad, 90);
}

fakeLoad();
setInterval(updateSubtext, 5000);