"use strict";

// down button
const down = document.querySelector('.hint');
down.addEventListener('click', (event) => {
  const scrollTo = document.querySelector('#explain');
  scrollTo.scrollIntoView({ behavior: "smooth" });
});

// FAQ answer
const accordion = document.querySelectorAll('.faq__accordion-btn');
accordion.forEach((value, index) => {
  value.addEventListener('click', function() {
    value.classList.toggle('active');
    const child = this.nextElementSibling;
    if (child.style.maxHeight) {
      child.style.maxHeight = null;
    } else {
      child.style.maxHeight = child.scrollHeight + 'px';
    }
  });
});

// Navbar
const navbar = document.querySelector('#navbar');
const subnavbar = document.querySelector('#subnavbar');
document.addEventListener('scroll', () => {
  if (window.scrollY > 700) {
    navbar.style.opacity = 1;
  } else {
    navbar.style.opacity = 0;
  }
});