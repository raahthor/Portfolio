// overlay and side bar functioning

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
// theme chnage functioning

const themeToggle = document.querySelector(".theme-toggle");
const body = document.querySelector("body");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  themeToggle.classList.toggle("moon-toggle");
});

//  menu options class toggling to clicked

document.addEventListener("DOMContentLoaded", function () {
  const clickedItems = document.querySelectorAll(".side-bar ul li a");

  function handleNavigation() {
    clickedItems.forEach((el) => el.classList.remove("clicked"));
    this.classList.add("clicked");

    sidebar.classList.remove("open");
    overlay.classList.remove("show");

    const targetSection = this.getAttribute("href");
    window.location.hash = targetSection;
  }

  // Add click and touchend events
  clickedItems.forEach((item) => {
    item.addEventListener("click", handleNavigation);
    item.addEventListener("touchend", handleNavigation);
  });
});

// const clickedItems = document.querySelectorAll(".side-bar ul li a");
// for (let i = 0; i < clickedItems.length; i++) {
//   clickedItems[i].addEventListener("click", function () {
//     for (let j = 0; j < clickedItems.length; j++) {
//       clickedItems[j].classList.remove("clicked");
//     }
//     this.classList.add("clicked");
//     sidebar.classList.remove("open");
//     overlay.classList.remove("show");
//   });
// }

// for profile icon

const pfpopen = document.querySelector("body .pfp");
function pfp_open() {
  pfpopen.classList.toggle("pfp-opened");
  const pfpopened = document.querySelector("body .pfp-opened");
  pfpopened.addEventListener("click", () => {
    pfpopen.classList.remove("pfp-opened");
  });
}

// for menu options changing class dynamically
//... to be added
