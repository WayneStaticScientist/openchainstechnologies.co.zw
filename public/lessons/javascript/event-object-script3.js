document
  .getElementById("eventButton")
  .addEventListener("click", function (event) {
    console.log("Event Type:", event.type); // e.g., 'click'
    console.log("Target Element:", event.target); // The element that triggered the event
    console.log("Mouse X Coordinate:", event.clientX); // X coordinate of the mouse pointer
    console.log("Mouse Y Coordinate:", event.clientY); // Y coordinate of the mouse pointer
    console.log("Shift Key Pressed:", event.shiftKey); // true if Shift key was down
    event.preventDefault(); // Prevents default action (e.g., submitting a form)
    console.log("Default action prevented!");
  });

document
  .getElementById("linkExample")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior (navigating to a new page)
    alert("Link click prevented! You would not be redirected.");
  });
