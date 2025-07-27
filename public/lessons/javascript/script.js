// script.js
console.log("External JavaScript file loaded successfully!");

function showExternalMessage() {
  alert("This message comes from an external JavaScript file!");
  const heading = document.querySelector("h1");
  if (heading) {
    heading.style.color = "blue";
  }
}

// You can add more complex logic here
const currentDate = new Date();
console.log("Current date and time:", currentDate);
