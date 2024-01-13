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

document.addEventListener('DOMContentLoaded', function () {
  const aboutMeSection = document.getElementById('about');
  const textElement = document.querySelector('.text');
  const shortTextItems = document.querySelectorAll('.text__item--short');

  function isTopEdgeVisible() {
    const rect = aboutMeSection.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.top >= 0;
  }

  function updateTextVisibility() {
    if (isTopEdgeVisible()) {
      textElement.classList.add('visible');
    } else {
      textElement.classList.remove('visible');
      shortTextItems.forEach(item => {
        item.classList.remove('expanded');
      });
    }
  }

  window.addEventListener('scroll', updateTextVisibility);

  updateTextVisibility();
});
