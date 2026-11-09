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


  // Project filters
  setupProjectFilters();

  // Project screenshots (thumbnails + lightbox)
  setupProjectGalleries();


  // Animations
  setupScrollReveal();
  setupScrollSpy();
  setupHoverTilt();


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


// Filter project cards by category (data-filter / data-category)
function setupProjectFilters() {

  const buttons =
    document.querySelectorAll(".filter[data-filter]");

  const cards =
    document.querySelectorAll(".project-card[data-category]");

  if (!buttons.length || !cards.length) return;

  buttons.forEach(filterButton => {

    filterButton.addEventListener("click", () => {

      const filter = filterButton.dataset.filter;

      buttons.forEach(other => {
        const active = other === filterButton;
        other.classList.toggle("is-active", active);
        other.setAttribute("aria-pressed", String(active));
      });

      cards.forEach(card => {
        const show =
          filter === "all" ||
          card.dataset.category === filter;

        card.hidden = !show;
      });

      // Count text depends on the current language (i18n.js)
      window.portfolioI18n?.updateProjectCount();

    });

  });
}


// Fade elements in when they enter the screen.
// Content stays visible without JS or with "reduce motion".
function setupScrollReveal() {

  const reduceMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) return;

  const groups = [
    ".section-head",
    ".about-content > *",
    ".about-stats li",
    ".about-item",
    ".skill-card",
    ".filter-bar",
    ".project-card",
    ".journey-card",
    ".cert-card",
    ".contact-grid > *"
  ];

  const elements = [];

  groups.forEach(selector => {
    document.querySelectorAll(selector).forEach((element, index) => {
      element.dataset.reveal = "";
      // Small stagger between siblings of the same group
      element.style.setProperty("--reveal-delay", `${(index % 4) * 90}ms`);
      elements.push(element);
    });
  });

  document.documentElement.classList.add("reveal-ready");

  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const element = entry.target;
      element.classList.add("is-visible");
      observer.unobserve(element);

      // Give back the element's own hover transitions after the reveal
      setTimeout(() => {
        delete element.dataset.reveal;
        element.classList.remove("is-visible");
        element.style.removeProperty("--reveal-delay");
      }, 1200);
    });

  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  elements.forEach(element => observer.observe(element));
}


// Highlight the navigation link of the section on screen
function setupScrollSpy() {

  if (!("IntersectionObserver" in window)) return;

  const links =
    document.querySelectorAll('.nav-links a[href^="#"]');

  const sections = [...links]
    .map(link => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const id = `#${entry.target.id}`;
      links.forEach(link => {
        link.classList.toggle("is-current", link.getAttribute("href") === id);
      });
    });

  }, { rootMargin: "-45% 0px -50% 0px" });

  sections.forEach(section => observer.observe(section));
}


// Cards tilt in 3D and a light follows the mouse while it is over them.
// Only on devices with a real mouse, and never with "reduce motion".
function setupHoverTilt() {

  const canHover =
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const reduceMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!canHover || reduceMotion) return;

  const cards = document.querySelectorAll(
    ".skill-card, .project-card, .journey-card, .cert-card, .about-stats li, .about-item"
  );

  const MAX_TILT = 6; // degrees

  cards.forEach(card => {

    card.classList.add("is-tilt");
    let frame = 0;

    card.addEventListener("pointermove", event => {

      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;

        card.style.setProperty("--rx", `${((0.5 - y) * MAX_TILT).toFixed(2)}deg`);
        card.style.setProperty("--ry", `${((x - 0.5) * MAX_TILT).toFixed(2)}deg`);
        card.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
        card.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
      });

    });

    card.addEventListener("pointerleave", () => {
      cancelAnimationFrame(frame);
      ["--rx", "--ry", "--mx", "--my"].forEach(name => card.style.removeProperty(name));
    });

  });
}


// Project galleries: thumbnails change the main screenshot,
// a click on it opens every screenshot in a lightbox (<dialog>).
function setupProjectGalleries() {

  const galleries =
    document.querySelectorAll("[data-gallery]");

  const lightbox =
    document.getElementById("lightbox");

  if (!galleries.length || !lightbox || typeof lightbox.showModal !== "function") return;

  const image = document.getElementById("lightboxImage");
  const caption = document.getElementById("lightboxCaption");
  const index = document.getElementById("lightboxIndex");
  const scroller = document.getElementById("lightboxScroll");

  let slides = [];
  let current = 0;

  function showSlide(position) {
    current = (position + slides.length) % slides.length;
    const slide = slides[current];

    image.src = slide.src;
    image.alt = slide.alt;
    caption.textContent = slide.caption;
    index.textContent = `${current + 1} / ${slides.length}`;

    // Each screenshot starts from the top of the page
    if (scroller) scroller.scrollTop = 0;
  }

  galleries.forEach(gallery => {

    const main = gallery.querySelector(".gallery-main");
    const mainImage = main.querySelector("img");
    const count = main.querySelector(".gallery-count");
    const thumbs = [...gallery.querySelectorAll(".gallery-thumb")];

    let active = 0;

    thumbs.forEach((thumb, position) => {

      thumb.addEventListener("click", () => {
        if (position === active) return;

        active = position;
        main.classList.add("is-switching");

        // Swap once the new image is ready, so it never flashes empty
        const next = new Image();
        next.onload = next.onerror = () => {
          mainImage.src = thumb.dataset.src;
          mainImage.alt = thumb.dataset.alt;
          main.classList.remove("is-switching");
        };
        next.src = thumb.dataset.src;

        count.textContent = `${position + 1} / ${thumbs.length}`;
        thumb.scrollIntoView({ block: "nearest", inline: "nearest" });

        thumbs.forEach(other => {
          const selected = other === thumb;
          other.classList.toggle("is-active", selected);
          other.setAttribute("aria-pressed", String(selected));
        });
      });

    });

    main.addEventListener("click", () => {
      slides = thumbs.map(thumb => ({
        src: thumb.dataset.src,
        alt: thumb.dataset.alt,
        caption: thumb.dataset.caption
      }));

      showSlide(active);
      lightbox.showModal();
    });

  });

  lightbox.querySelector(".lightbox-close")
    .addEventListener("click", () => lightbox.close());

  lightbox.querySelector(".lightbox-prev")
    .addEventListener("click", () => showSlide(current - 1));

  lightbox.querySelector(".lightbox-next")
    .addEventListener("click", () => showSlide(current + 1));

  // Click on the dark background closes the lightbox
  lightbox.addEventListener("click", event => {
    if (event.target === lightbox) lightbox.close();
  });

  // Arrow keys (reversed in Arabic, read right to left)
  lightbox.addEventListener("keydown", event => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

    const rtl = document.documentElement.dir === "rtl";
    const forward = (event.key === "ArrowRight") !== rtl;

    showSlide(current + (forward ? 1 : -1));
  });
}
