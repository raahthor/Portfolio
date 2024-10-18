const sidebar = document.querySelector(".side-bar");
const overlay = document.querySelector(".overlay");
function toggleMenu() {
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

const clickedItems = document.querySelectorAll(".side-bar ul li");
for (let i = 0; i < clickedItems.length; i++) {
  clickedItems[i].addEventListener("click", function () {
    for (let j = 0; j < clickedItems.length; j++) {
      clickedItems[j].classList.remove("clicked");
    }
    this.classList.add("clicked");
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
  });
}
