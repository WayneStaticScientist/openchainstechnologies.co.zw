// Get elements
const myButton = document.getElementById("myButton");
const myInput = document.getElementById("myInput");
const myDiv = document.getElementById("myDiv");

// 1. addEventListener(eventType, callbackFunction) - The recommended way
// Click Event
myButton.addEventListener("click", function () {
  alert("Button was clicked!");
  console.log("Button clicked!");
});

// Input Event (fires when the value of an <input>, <select>, or <textarea> element changes)
myInput.addEventListener("input", function (event) {
  // The 'event' object contains details about the event
  console.log("Input value changed:", event.target.value);
  // You can also access the element directly: this.value
});

// Mouseover and Mouseout Events
myDiv.addEventListener("mouseover", function () {
  this.style.backgroundColor = "lightblue";
  this.textContent = "You are hovering!";
});

myDiv.addEventListener("mouseout", function () {
  this.style.backgroundColor = "white";
  this.textContent = "Hover over me!";
});

// 2. removeEventListener(eventType, callbackFunction)
// To remove an event listener, you MUST pass the exact same function reference.
function sayHello() {
  console.log("Hello from a removable listener!");
}

myButton.addEventListener("click", sayHello); // Add the function

// After 3 seconds, remove the 'sayHello' listener
setTimeout(() => {
  myButton.removeEventListener("click", sayHello);
  console.log("The 'sayHello' listener has been removed from the button.");
}, 3000);

// 3. Event Object: Provides information about the event
// When an event listener's callback function is called, it receives an 'event' object as its first argument.
document.addEventListener("mousemove", function (event) {
  // console.log("Mouse X:", event.clientX, "Mouse Y:", event.clientY);
  // console.log("Target element:", event.target);
});

// Prevent Default Behavior
const myLink = document.createElement("a");
myLink.href = "https://www.google.com";
myLink.textContent = "Go to Google (but I'll prevent it)";
document.body.appendChild(myLink);

myLink.addEventListener("click", function (event) {
  event.preventDefault(); // Stops the default action (navigating to Google)
  console.log("Navigation to Google prevented!");
});

// 4. Event Bubbling vs. Capturing (Brief mention)
const grandParent = document.createElement("div");
grandParent.textContent = "Grandparent";
grandParent.style.border = "2px solid black";
grandParent.style.padding = "10px";
const parent = document.createElement("div");
parent.textContent = "Parent";
parent.style.border = "2px solid blue";
parent.style.padding = "10px";
const child = document.createElement("div");
child.textContent = "Child";
child.style.border = "2px solid red";
child.style.padding = "10px";

parent.appendChild(child);
grandParent.appendChild(parent);
document.body.appendChild(grandParent);

grandParent.addEventListener(
  "click",
  () => console.log("Grandparent clicked!"),
  false
); // Bubbling (default)
parent.addEventListener("click", () => console.log("Parent clicked!"), false); // Bubbling (default)
child.addEventListener(
  "click",
  (e) => {
    console.log("Child clicked!");
    // e.stopPropagation(); // Prevents bubbling up to parent/grandparent
  },
  false
); // Bubbling (default)

// When you click 'Child', you'll see: Child clicked! -> Parent clicked! -> Grandparent clicked! (bubbling)
// If you change 'false' to 'true' for the third argument (useCapture):
// grandParent.addEventListener('click', () => console.log('Grandparent captured!'), true);
// parent.addEventListener('click', () => console.log('Parent captured!'), true);
// child.addEventListener('click', () => console.log('Child captured!'), true);
// Clicking 'Child' would then show: Grandparent captured! -> Parent captured! -> Child captured! (capturing)
