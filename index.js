const timerElement = document.querySelector(".timer"); // Use ".timer" to select by class
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
let intervalId;
let currentTime = 0;

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

function updateTimer() {
    timerElement.textContent = formatTime(currentTime);
    currentTime++;
}

startButton.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = setInterval(updateTimer, 1000);
    updateTimer();
});

stopButton.addEventListener("click", () => {
    clearInterval(intervalId);
    currentTime = 0;
    timerElement.textContent = formatTime(currentTime);
});
