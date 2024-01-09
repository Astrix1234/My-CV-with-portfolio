('use strict');

const letters = document.querySelectorAll('.portfolio__title span');

letters.forEach((letter, index) => {
  letter.style.animationDelay = `${index * 0.2}s`;
});

document.querySelectorAll('.text__see-more').forEach(button => {
  button.addEventListener('click', function () {
    this.parentElement.classList.toggle('expanded');
  });
});
