const form = document.querySelector('#form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#contrasena');
const inputField = document.querySelectorAll('.inputbox');
const inputFields = document.querySelectorAll('.inputbox input');


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

isRequired = value => value === '' ? false : true; //si el valor es igual a vacio, retorna false, sino true

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

const isValidPassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return re.test(password);
}

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
    checkEmail();
    checkPassword();
});