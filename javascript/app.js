particlesJS.load("particles-js", "javascript/particles.json", function() {
  console.log("callback - particles.js config loaded");
});

//Navigation menu
const menu = document.getElementById("menu");
const navBar = document.querySelector(".nav-elements");
const nav = document.querySelector(".nav-bar");

nav.classList.add("show");
let isOpen = false;

menu.addEventListener("click", triggerNav);

function triggerNav() {
  if (!isOpen) {
    nav.classList.remove("show");

    //Set menu state
    isOpen = true;
  } else {
    nav.classList.add("show");
    //Set menu state
    isOpen = false;
  }
}
