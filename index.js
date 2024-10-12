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
