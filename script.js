const themeToggle = document.getElementById("theme-toggle");
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
