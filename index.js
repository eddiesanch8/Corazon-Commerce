// "use strict";
// // ----------------------------------- NavBar DOM -------------------------------------\\
// // defining variables for nav buttons
// const navOpen = document.querySelector("[data-open-btn]");
// const navClose = document.querySelector("[data-close-btn]");
// const navBar = document.querySelector("[data-nav-bar");
// const overlay = document.querySelector("[data-overlay]");

// // ----------------------------------- NavBar Function -------------------------------------\\
// // creating a function expression for handlers that toggles our classes

// const toggleOverlay = function () {
//   overlay.classList.toggle("display-overlay");
// };

// const toggleNav = function () {
//   navBar.classList.toggle("show");
//   navOpen.toggleAttribute("aria-expanded", "true", "false");
// };

// // ----------------------------------- NavBar Handlers -------------------------------------\\

// // Creating event handlers that call on previous function expression
// navOpen.addEventListener("click", () => {
//   toggleOverlay();
//   toggleNav();
// });

// navClose.addEventListener("click", () => {
//   toggleOverlay();
//   toggleNav();
// });

// overlay.addEventListener("click", () => {
//   toggleOverlay();
//   toggleNav();
// });
