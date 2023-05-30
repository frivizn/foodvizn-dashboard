let menuIcon = document.querySelector(".menu-icon");
let mainContainer = document.querySelector(".main-container");
let mainPanel = document.querySelector(".main-panel");
let mainPanelCard = document.querySelectorAll(".main-panel--card");
let tableRow = document.querySelector("table tr");

/* Sidebar navigation slider */

menuIcon.addEventListener("click", () => {
  mainContainer.classList.toggle("active");
});

/* Dark/Light mode */

const toggleBtn = document.querySelector(".night-toggle");
const theme = document.getElementById("theme");
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  moon.className = "sun";
  document.getElementById("theme-style").href = "css/dark-theme.css";
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  moon.className = "moon";
  document.getElementById("theme-style").href = "";
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode(); // et state of darkMode on page load
}

toggleBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
