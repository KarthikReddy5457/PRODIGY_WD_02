let timer;
let running = false;
let seconds = 0;
let minutes = 0;
let lapTimes = [];

const timeDisplay = document.getElementById('time-display');
const startStopBtn = document.getElementById('start-stop-btn');
const resetBtn = document.getElementById('reset-btn');
const lapBtn = document.getElementById('lap-btn');
const lapTimesDisplay = document.getElementById('lap-times');

startStopBtn.addEventListener('click', toggleTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', recordLap);

function updateDisplay() {
timeDisplay.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
return time < 10 ? '0' + time : time;
}

function toggleTimer() {
if (running) {
clearInterval(timer);
startStopBtn.textContent = 'Start';
} else {
timer = setInterval(updateTime, 1000);
startStopBtn.textContent = 'Stop';
}
running = !running;
}

function updateTime() {
seconds++;
if (seconds >= 60) {
seconds = 0;
minutes++;
}
updateDisplay();
}

function resetTimer() {
clearInterval(timer);
running = false;
seconds = 0;
minutes = 0;
updateDisplay();
startStopBtn.textContent = 'Start';
lapTimes = [];
lapTimesDisplay.innerHTML = '';
}

function recordLap() {
if (running) {
const lapTime = `${formatTime(minutes)}:${formatTime(seconds)}`;
lapTimes.push(lapTime);
lapTimesDisplay.innerHTML = lapTimes.map((lap, index) => `<p>Lap ${index + 1}: ${lap}</p>`).join('');
}
}