const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');

function validateName() {
  const name = document.getElementById('full-name').value;
  if(name.length == 0) {
    nameError.innerHTML = 'name is required';
    return false;
  }
  if(!name.match(/^[A-Za-z\.]*[\s][A-Za-z\s]+$/)) {
    nameError.innerHTML = 'invalid name';
    return false;
  }
  nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validatePhone() {
  const phone = document.getElementById('phone').value;
  if(phone.length == 0) {
    phoneError.innerHTML = 'Phone is required';
    return false;
  }
  if(!(/^\d+$/.test(phone))) {
    phoneError.innerHTML = 'only digits are allowed';
    return false;
  }
  if(phone.length != 11) {
    phoneError.innerHTML = 'must be 11 digits';
    return false;
  }
  phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateEmail() {
  const email = document.getElementById('email').value;

  if(email.length == 0) {
    emailError.innerHTML = 'Email required';
    return false;
  }
  if(!email.match(/^[A-Za-z]{1,1}[A-Za-z\.\_\-0-9]*[\@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = 'invalid email';
    return false;
  }
  emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateMessage() {
  const message = document.getElementById('message').value;
  const remaining = 30 - message.length;

  if(remaining > 0) {
    const show = remaining + ' character(s) remaining';
    messageError.innerHTML = show;
    return false;
  }
  messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateSubmit() {
  if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
    submitError.style.display = 'block';
    submitError.style.color = 'red';
    submitError.innerHTML = 'Fill all the fields';
    setTimeout(function(){submitError.style.display = 'none';}, 3000);
    return false;
  }
  submitError.style.display = 'block';
  submitError.style.color = 'green';
  submitError.innerHTML = 'Successfull  <i class="fas fa-check-circle"></i>';
  setTimeout(function(){submitError.style.display = 'none';}, 3000);
  return false;
}