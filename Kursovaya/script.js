let slideIndex = 0;
const slides = document.querySelector('.slides');
const slider = document.querySelector('.image-slider');


function changeSlide(n) {
    slideIndex += n;
    if (slideIndex < 0) {
        slideIndex = slides.children.length - 1;
    } else if (slideIndex >= slides.children.length) {
        slideIndex = 0;
    }

    const slideWidth = slider.offsetWidth;
    slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

const form = document.querySelector('.contact-form form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращаем отправку формы по умолчанию

  const nameInput = form.querySelector('input[type="text"]');
  const emailInput = form.querySelector('input[type="email"]');
  const messageInput = form.querySelector('textarea');

  let valid = true;
  clearErrors();

  if(nameInput.value.trim() === "") {
    valid = false;
    showError(nameInput, "Пожалуйста, введите ваше имя");
  }

  if(!isValidEmail(emailInput.value.trim())) {
    valid = false;
    showError(emailInput, "Пожалуйста, введите корректный Email");
  }


  if(messageInput.value.trim() === "") {
    valid = false;
    showError(messageInput, "Пожалуйста, введите сообщение");
  }
  
    if(valid) {
       alert("Спасибо за ваше сообщение!");
        form.reset();
   }

});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(input, message) {
  input.classList.add('error-input');
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = message;
  input.parentElement.insertBefore(errorDiv, input.nextSibling);

}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    const errorInputs = document.querySelectorAll('.error-input');
    errorMessages.forEach(message => message.remove());
    errorInputs.forEach(input => input.classList.remove('error-input'));
}