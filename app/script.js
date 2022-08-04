$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// DOM Selectors
const body = document.querySelector("body");
const switchBtn = document.getElementById("switch");
const root = document.querySelector(":root");

// Change theme
switchBtn.addEventListener("change", () => {
  toggleRootClass();
});

function toggleRootClass() {
  document.querySelector(":root").classList.toggle("dark"); // background nero
  document.querySelector(":root").classList.toggle("color"); // gestisco il colore del main
  document.querySelector(":root").classList.toggle("invert");
  document.querySelector(":root").classList.toggle("opt");
}