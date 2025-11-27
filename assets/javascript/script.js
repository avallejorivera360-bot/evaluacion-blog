document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector("button.menu-toggle");
    const nav = document.querySelector("nav");
  
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("mobile-nav");
  
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", !expanded);
  
      menuToggle.classList.toggle("is-active");
    });
  });
  