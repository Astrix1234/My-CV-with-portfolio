('use strict');
const form = document.querySelector('.contact__form');
const btnSubmit = document.querySelector('.contact__btn');
const inputName = document.querySelector('.contact__name');
const inputEmail = document.querySelector('.contact__email');
const textarea = document.querySelector('.contact__message');
const warningMessageName = document.querySelector('.contact__warning-name');
const warningMessageEmail = document.querySelector('.contact__warning-email');
const warningMessageMessage = document.querySelector(
  '.contact__warning-message'
);

const regexName = /^[\p{L}\s]+$/u;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexTextarea = /^[\p{L}\p{N}\p{P}\p{S}\p{Z}\s]{5,1000}$/u;

const validateButton = (button, elements) => {
  const allValid = elements.every(element =>
    element.classList.contains('valid')
  );
  if (allValid) {
    button.disabled = false;
    button.classList.remove('disabled');
  } else {
    button.disabled = true;
    button.classList.add('disabled');
  }
};

const doValidation = (element, message, regex, button, elements) => {
  if (!regex.test(element.value)) {
    element.classList.remove('valid');
    element.classList.add('invalid');
    message.classList.remove('warning-valid');
    message.classList.add('warning-invalid');
  } else {
    element.classList.add('valid');
    element.classList.remove('invalid');
    message.classList.add('warning-valid');
    message.classList.remove('warning-invalid');
  }
  validateButton(button, elements);
};

const allElementsToValidate = [inputName, inputEmail, textarea];

inputName.addEventListener('input', () =>
  doValidation(
    inputName,
    warningMessageName,
    regexName,
    btnSubmit,
    allElementsToValidate
  )
);
inputName.addEventListener('blur', () =>
  doValidation(
    inputName,
    warningMessageName,
    regexName,
    btnSubmit,
    allElementsToValidate
  )
);
inputEmail.addEventListener('input', () =>
  doValidation(
    inputEmail,
    warningMessageEmail,
    regexEmail,
    btnSubmit,
    allElementsToValidate
  )
);
inputEmail.addEventListener('blur', () =>
  doValidation(
    inputEmail,
    warningMessageEmail,
    regexEmail,
    btnSubmit,
    allElementsToValidate
  )
);
textarea.addEventListener('input', () =>
  doValidation(
    textarea,
    warningMessageMessage,
    regexTextarea,
    btnSubmit,
    allElementsToValidate
  )
);
textarea.addEventListener('blur', () =>
  doValidation(
    textarea,
    warningMessageMessage,
    regexTextarea,
    btnSubmit,
    allElementsToValidate
  )
);

document.addEventListener('DOMContentLoaded', event => {
  form.reset();
});
