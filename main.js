document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav");
  const navToggle = document.querySelector(".nav-toggle");

  // Toggle mobile menu
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // Ensure menu is closed when switching to desktop view
  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
      nav.classList.remove("open");
    }
  });

  // Close mobile menu when clicking a link
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 820) {
        nav.classList.remove("open");
      }
    });
  });
});
