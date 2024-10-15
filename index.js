function toggleMenu() {
  const sidebar = document.querySelector(".side-bar");
  const overlay = document.querySelector(".overlay");
  overlay.classList.toggle("show");
  sidebar.classList.toggle("open");
  overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
  });
}

const themeToggle = document.querySelector(".theme-toggle");
const body = document.querySelector("body");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  themeToggle.classList.toggle("moon-toggle");
});
