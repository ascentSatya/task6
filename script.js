const form = document.getElementById('contactForm');
const container = document.getElementById('form-container');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Inputs
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Errors
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const successMessage = document.getElementById('successMessage');

  let valid = true;

  // Reset
  nameError.style.display = 'none';
  emailError.style.display = 'none';
  messageError.style.display = 'none';
  successMessage.style.display = 'none';

  // Validation
  if (name === "") {
    nameError.style.display = 'block';
    valid = false;
  }

  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailRegex.test(email)) {
    emailError.style.display = 'block';
    valid = false;
  }

  if (message === "") {
    messageError.style.display = 'block';
    valid = false;
  }

  if (!valid) {
    container.classList.add('shake');
    setTimeout(() => container.classList.remove('shake'), 300);
  } else {
    successMessage.style.display = 'block';
    form.reset();
  }
});
