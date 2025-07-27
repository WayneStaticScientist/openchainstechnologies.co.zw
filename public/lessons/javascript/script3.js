// script3.js

// Function to handle button clicks
function handleExternalButtonClick() {
  const externalMessage = document.getElementById("externalMessage");
  if (externalMessage) {
    externalMessage.textContent = "External script changed this message!";
    externalMessage.style.color = "blue";
  }
  console.log("Button clicked from external script!");
}

// Function to show coordinates on mouse move
function showCoords(event) {
  const coordsDisplay = document.getElementById("coordsDisplay");
  if (coordsDisplay) {
    coordsDisplay.textContent = `Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`;
  }
}

// Function to log key presses
function logKeyPress(event) {
  console.log(`Key pressed: ${event.key}, Key Code: ${event.keyCode}`);
}

// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
  const externalButton = document.getElementById("externalButton");
  if (externalButton) {
    // Using addEventListener for better practice
    externalButton.addEventListener("click", handleExternalButtonClick);
  }

  const mouseMoveArea = document.getElementById("mouseMoveArea");
  if (mouseMoveArea) {
    mouseMoveArea.addEventListener("mousemove", showCoords);
  }

  document.addEventListener("keydown", logKeyPress);
});

console.log("External script loaded and event listeners are ready!");
