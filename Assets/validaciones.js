const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido")
const inputTelefono = document.getElementById("telefono")
const inputEmail = document.getElementById("email")
const inputContraseña= document.getElementById("contraseña")




const isEmpty = (value) =>{
    return !value.lenght;

};

const showError = (input, mensaje) => {
    const inputBox = input.parentElement;
    inputBox.classList.add ("error");
    const error = inputBox.querySelector("small")
    error.textContent = mensaje;
}
const clearError = (input) =>{
const inputBox = input.parentElement
inputBox.classList.remove ("error")
const error = inputBox.querySelector("small")
error.textContent = "";
};

const isEmailValid = (email) =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email)
};

const isValidPhone = (telefono) =>{
const re = /^[0-9]{10}$/;
return re.test (telefono)
};

const checkTextInput = (input) =>{
    let valid = false;
    const content = input.value.trim()

    if(isEmpty(content)){
        showError(input, "El nombre es obligatorio");

    } else{
        clearError(input);
        valid = true;
    }
    return valid;
}


const checkEMail = ( ) =>{
    let valid = false;
    const emailValue = input.value.trim();
    if (isEmpty(emailValue)) {
        showError (input, "El email es obligatorio");

    } else if(!isEmailValid(emailValue)){ 
        showError(emailInput, "el email no es valido");


    }else{
        clearError(emailInput)
        valid = true
    }
    return valid;

    
}

const checkPhone = () =>{
    let valid = false;
    const phoneValue = phoneInput.value.trim()

    if (isEmpty (phoneValue)){
        showError (input, "El telefono es obligatorio")
    } else if(!isValidPhone(phoneValue)){
        showError (phoneInput, "El telefono no es valido")
    }else{
        clearError(phoneInput);
        valid = true
    }
}


const checkPass = () =>{
    let valid = false;
    const passValue = passInput.vale

    if (isEmpty (passValue)){
        showError (input, "La contraseña es obligatoria")
    }else if (!isValidPass (passValue)){
        showError (passInput, "La contraseña no es valida")
    }else{
        clearError (passInput);
        valid = true
    }
}







const isValidForm = () =>{
    const isValidForm =() =>{
        const isValidName = checkTextInput (inputNombre);
        const isValidSurname = checkTextInput(inputApellido);
        const isValidPhone = checkPhone (inputTelefono);
        const isValidEmail = checkEMail (inputEmail);

        return (
            isValidName && isValidSurname && isValidPhone && isValidEmail
        )
    }
}