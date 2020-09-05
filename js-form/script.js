const form = document.querySelector('#form');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_password');
const msgContainer = document.querySelector('.message-container');
const message = document.querySelector('#message');

// Global value
let isValid = false;
let passwordMatch = false;

function validateForm(){
    // Using contraint API
    isValid = form.checkValidity();
    if(!isValid){
        // Style main message for an error
        message.textContent = 'Please fill all the fields.';
        message.style.color = 'red';
        msgContainer.style.borderColor = 'red';
        return; //if the condition alrd failing at this first check, we don't want to run the rest of this code
    }
    // Check if password match
    if(password.value === confirmPassword.value){
        passwordMatch = true;
        password.style.boderColor = 'green';
        confirmPassword.style.borderColor = 'green';
    } else {
        passwordMatch = false;
        message.textContent = 'Make sure password match.';
        message.style.color = 'red';
        msgContainer.style.borderColor = 'red';
        password.style.boderColor = 'red';
        confirmPassword.style.borderColor = 'red';
        return; //if the condition alrd failing at this first check, we don't want to run the rest of this code
    }
    // If form is valid and password match
    if(isValid && passwordMatch){
        message.textContent = 'Successfully Registred.';
        message.style.color = 'green';
        msgContainer.style.borderColor = 'green';
    }
}

function storeFormData(){
    const user = {
        name : form.name.value,
        phone : form.phone.value,
        email : form.email.value,
        website : form.website.value,
        password : form.password.value,
    }
    // Do something with user data. ex.) send to the server
    console.log(user);
}

function processFormData(event){
    event.preventDefault();
    // Validate the input form
    validateForm();
    // Submit data if valid
    if(isValid && passwordMatch){
        storeFormData();
    }
}

// Event Listener
form.addEventListener('submit', processFormData);