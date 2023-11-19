const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function startColorChange() {
  // Disable the "Start" button to prevent multiple clicks
  startButton.disabled = true;

  // Start changing the background color every second
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

// Function to stop changing the background color
function stopColorChange() {
  // Enable the "Start" button
  startButton.disabled = false;

  // Stop the interval (background color change)
  clearInterval(intervalId);
}

// Variable to store the interval ID for later clearing
let intervalId;

// Add click event listeners to the buttons
startButton.addEventListener('click', startColorChange);
stopButton.addEventListener('click', stopColorChange);
