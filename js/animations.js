('use strict');

const letters = document.querySelectorAll('.portfolio__title span');

letters.forEach((letter, index) => {
  letter.style.animationDelay = `${index * 0.2}s`;
});
