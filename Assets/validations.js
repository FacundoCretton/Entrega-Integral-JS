const form = document.querySelector('#form');
const nameInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#telefono');
const surnameInput = document.querySelector('#apellido');
const passwordInput = document.querySelector('#contrasena');
const password2Input = document.querySelector('#contrasena2');
const inputField = document.querySelectorAll('.inputbox');
const inputFields = document.querySelectorAll('.inputbox input');
const eyeIcons = document.querySelectorAll('.eye-icon');





const checkName = () => {
    let valid = false;

    const min = 3,
        max = 25;

    const name = nameInput.value.trim();

    if (!isRequired(name)) {
        showError(nameInput, 'El nombre es requerido.');
    } else if (!isBetween(name.length, min, max)) {
        showError(nameInput, `El nombre debe debe contener entre ${min} y ${max} caracteres.`);
    } else {
        showSuccess(nameInput);
        valid = true;
    }
    return valid; 
}


const checkSurname = () => {
    let valid = false;

    const min = 3,
        max = 25;

    const surname = surnameInput.value.trim();

    if (!isRequired(surname)) {
        showError(surnameInput, 'El apellido es requerido.');
    } else if (!isBetween(surname.length, min, max)) {
        showError(surnameInput, `El apellido debe debe contener entre ${min} y ${max} caracteres.`);
    } else {
        showSuccess(surnameInput);
        valid = true;
    }
    return valid; 
}


const checkEmail = () => {
    let valid = false;
    const email = emailInput.value.trim();
    if (!isRequired(email)) {
        showError(emailInput, 'El email es requerido.');
    } else if (!isEmailValid(email)) {
        showError(emailInput, 'El email no es válido.')
    } else {
        showSuccess(emailInput);
        valid = true;
    }
    return valid;
}

const checkPhone = () => {
    let valid = false;

    const min = 3,
        max = 25;

    const phone = phoneInput.value.trim();

    if (!isRequired(phone)) {
        showError(phoneInput, 'El teléfono es requerido.');
    } else if (!isValidPhone(phone)) {
        showError(phoneInput, `El teléfono no es valido.`);
    } else {
        showSuccess(phoneInput);
        valid = true;
    }
    return valid; 
}

const checkPassword = () => {
    let valid = false;

    const password = passwordInput.value.trim();

    if (!isRequired(password)) {
        showError(passwordInput, 'La contraseña es requerida.');
    } else if (!isValidPassword(password)) {
        showError(passwordInput, `La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.`);
    }
    else {
        showSuccess(passwordInput);
        valid = true;
    }
    return valid; 
}


const checkPassword2 = () => {
    let valid = false;
  
    const password = passwordInput.value.trim();
    const password2 = password2Input.value.trim();
  
    if (password === '') {
      showError(passwordInput, 'La contraseña es requerida');
    } else if (password !== password2) {
      showError(password2Input, 'Las contraseñas no coinciden.');
    } else {
      showSuccess(password2Input);
      valid = true;
    }
  
    return valid;
};
  



isRequired = value => value === '' ? false : true; //si el valor es igual a vacio, retorna false, sino true

isBetween = (length, min, max) => length < min || length > max ? false : true; //si el largo es menor al minimo o mayor al maximo, retorna false, sino true

showError = (input, message) => {
    const inputbox = input.parentElement;
    inputbox.classList.remove('success');
    inputbox.classList.add('error');

    const error = inputbox.querySelector('small');
    error.textContent = message;
}


const showSuccess = (input) => {
    const inputbox = input.parentElement;
    inputbox.classList.remove('error');
    inputbox.classList.add('success');
    const error = inputbox.querySelector ('small');
    error.textContent = '';
}

const isEmailValid = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const isValidPhone = (phone) => {
    const re = /^\d{10}$/;
    return re.test(phone);
}

const isValidPassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return re.test(password);
}

eyeIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      const passwordField = icon.previousElementSibling;
  
      if (passwordField.type === 'password') {
        passwordField.type = 'text';
        icon.classList.add('active');
      } else {
        passwordField.type = 'password';
        icon.classList.remove('active');
      }
    });
});
  


inputFields.forEach((input) => {
    input.addEventListener('click', () => {
      const inputbox = input.parentElement;
      const error = inputbox.querySelector('small');
  
      // Borrar el mensaje de error
      inputbox.classList.remove('error');
      inputbox.classList.remove('success');
      error.textContent = '';
    });
});
  








form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    let isNameValid = checkName(),
        isSurnameValid = checkSurname(),
        isEmailValid = checkEmail(),
        isPhoneValid = checkPhone(),
        isPasswordValid = checkPassword(),
        isPassword2Valid = checkPassword2();
  
    let isFormValid = isNameValid &&
        isSurnameValid &&
        isEmailValid &&
        isPhoneValid &&
        isPasswordValid &&
        isPassword2Valid;
  
    if (isFormValid) {
        form.submit();
    }
   
    
});