"use-strict";

const menuIcon = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

const sectionHero = document.querySelector(".section-hero");

menuIcon.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// //* Faltan tantos pixeles para que esto este o deje de ester 100% visible
// //* Si el elemento no se esta interceptando, poner clase
// //* Si lo esta, quitar clase

// //* El sticky hace que se pegue a una posición del padre, en este caso al top del body cuando el scroll llega a esa posición

// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) header.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null /* Donde el elemento debería aparecer, en este caso en el viewport */,
    threshold: 0 /* Cuando se disparara, al tanto porciento del viewport */,
    rootMargin: "-80px" /* Cuanto antes o cuanto después se aplica */,
  }
);
obs.observe(sectionHero);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  const flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  const isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
