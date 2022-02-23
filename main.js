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