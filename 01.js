let timer ="";
let isRunning = false;
let [minutes, seconds, milliseconds] = [0, 0, 0];

const minuteElement = document.getElementById('minutes');
const secondElement = document.getElementById('seconds');
const millisecondElement = document.getElementById('milliseconds');

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function updateDisplay() {
    minuteElement.textContent = String(minutes).padStart(2, '0');
    secondElement.textContent = String(seconds).padStart(2, '0');
    millisecondElement.textContent = String(Math.floor(milliseconds)).padStart(2, '0');
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            milliseconds += 1;
            if (milliseconds >= 100) {
                milliseconds = 0;
                seconds++;
                if (seconds >= 60) {
                    seconds = 0;
                    minutes++;
                }
            }
            updateDisplay();
        }, 10); 
    }
}

function stopTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}

function resetTimer() {
    stopTimer();
    [minutes, seconds, milliseconds] = [0, 0, 0];
    updateDisplay();
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

updateDisplay();
