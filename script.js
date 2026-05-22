const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.setAttribute("aria-label", "Switch to light mode");
} else {
  themeToggle.setAttribute("aria-label", "Switch to dark mode");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDarkMode = document.body.classList.contains("dark-mode");

  if (isDarkMode) {
    localStorage.setItem("theme", "dark");
    themeToggle.setAttribute("aria-label", "Switch to light mode");
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.setAttribute("aria-label", "Switch to dark mode");
  }
});const themeToggle = document.getElementById("theme-toggle");
const toggleIcon = document.querySelector(".toggle-icon");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  toggleIcon.textContent = "☾";
} else {
  toggleIcon.textContent = "☀";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDarkMode = document.body.classList.contains("dark-mode");

  if (isDarkMode) {
    localStorage.setItem("theme", "dark");
    toggleIcon.textContent = "☾";
  } else {
    localStorage.setItem("theme", "light");
    toggleIcon.textContent = "☀";
  }
});
