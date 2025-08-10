// main.js - mobile toggle + small resize handling to enforce correct social-link visibility
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav");
  const navToggle = document.querySelector(".nav-toggle");
  const socialLinks = nav ? nav.querySelector(".social-links") : null;
  const cta = document.querySelector(".cta");

  // Toggle menu open/close
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      const expanded = nav.classList.contains("open");
      navToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
  }

  // Enforce social-links display state on resize (ensures consistent behaviour across browsers)
  function handleResize() {
    const isDesktop = window.innerWidth > 820;

    // Remove mobile drawer if switching to desktop
    if (nav && isDesktop) {
      nav.classList.remove("open");
      if (socialLinks) socialLinks.style.display = "none"; // explicitly hide on desktop
      if (cta) cta.style.display = ""; // reset inline style so CSS controls it
    } else {
      if (socialLinks) socialLinks.style.display = ""; // remove inline override to let mobile CSS show it
      if (cta && window.innerWidth <= 820) cta.style.display = "none";
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize();
});
