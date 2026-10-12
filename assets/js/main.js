"use strict";

document.addEventListener("DOMContentLoaded", () => {

  const button =
    document.getElementById("menuToggle");

  const menu =
    document.getElementById("navLinks");

  const year =
    document.getElementById("currentYear");


  // Footer year
  if (year) {
    year.textContent =
      String(new Date().getFullYear());
  }


  // Check navigation elements
  if (!button || !menu) return;


  // Open / close mobile menu
  function setMenu(open) {

    menu.classList.toggle(
      "is-open",
      open
    );

    button.setAttribute(
      "aria-expanded",
      String(open)
    );

    button.setAttribute(
      "aria-label",
      open
        ? "Fermer le menu"
        : "Ouvrir le menu"
    );
  }


  // Menu button
  button.addEventListener("click", () => {

    setMenu(
      !menu.classList.contains("is-open")
    );

  });


  // Close after link click
  menu.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {
      setMenu(false);
    });

  });


  // Escape key
  document.addEventListener("keydown", event => {

    if (
      event.key === "Escape" &&
      menu.classList.contains("is-open")
    ) {

      setMenu(false);
      button.focus();

    }

  });


  // Outside click
  document.addEventListener("click", event => {

    if (
      !button.contains(event.target) &&
      !menu.contains(event.target)
    ) {

      setMenu(false);

    }

  });


  // Reset on desktop
  window.addEventListener("resize", () => {

    if (window.innerWidth >= 1200) {
      setMenu(false);
    }

  });

});