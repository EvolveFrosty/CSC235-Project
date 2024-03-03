// Create a function to toggle the active class on the navigation links
function toggleActiveClass() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
}

// Get the navigation links and add a click event listener to each one
var navLinks = document.getElementsByTagName("a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", toggleActiveClass);
}

// Placeholder for attraction 1
var rollerCoaster = document.querySelector('#scene1 .scene-container');
rollerCoaster.innerHTML = '<img src="https://images.unsplash.com/photo-1612834694481-fde0f0b6f101?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE4MDU4MzI4&ixlib=rb-1.2.1&q=80&w=1200" alt="Roller Coaster">';

// Placeholder for attraction 2
var waterPark = document.querySelector('#scene2 .scene-container');
waterPark.innerHTML = '<img src="https://images.unsplash.com/photo-1521534806166-0b2bcf56fdb1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE4MDU4MzI5&ixlib=rb-1.2.1&q=80&w=1200" alt="Water Park">';

// Placeholder for attraction 3
var ferrisWheel = document.querySelector('#scene3 .scene-container');
ferrisWheel.innerHTML = '<img src="https://images.unsplash.com/photo-1568030098194-8930fe4c0b8a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE4MDU4MzI3&ixlib=rb-1.2.1&q=80&w=1200" alt="Ferris Wheel">';