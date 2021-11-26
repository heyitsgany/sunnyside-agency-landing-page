"use strict";

const headerLogo = document.querySelector(".header__logo");
const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav");

headerLogo.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

navToggle.addEventListener("click", toggleMenu);
navMenu.addEventListener("click", function (clickEvent) {
  if (!clickEvent.target.classList.contains("nav__link")) {
    return;
  }

  toggleMenu();
});

function toggleMenu() {
  navMenu.classList.toggle("open");
  navToggle.setAttribute(
    "aria-expanded",
    navToggle.getAttribute("aria-expanded") === "false" ? "true" : "false"
  );
}
