const form = document.getElementById('form');
const firstname = document.getElementById('name');
const surname = document.getElementById('surname');
const number = document.getElementById('number');
const email = document.getElementById('email');
const msg = document.getElementById('msg');
const popUp = document.querySelector(".pop-up");
const submit = document.getElementById('submit');
const modal_container = document.querySelector('.modal_container');
const close = document.getElementById('close');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkUnputs();
    if (isFirstName(firstname.value)&& isSurName(surname.value) && isNumber(number.value) && isEmail(email.value)) {
    modal_container.classList.add('show');
}
});

//submit.addEventListener('submit', () => {
   // modal_container.classList.add('show');
//})

close.addEventListener('click', (e) => {
  modal_container.classList.remove('show');
});


function checkUnputs() {
    const firstnameValue = firstname.value.trim();
    const surnameValue = surname.value.trim();
    const numberValue = number.value.trim();
    const emailValue = email.value.trim();

    if(firstnameValue === '') {
        setErrorFor(firstname, 'nom incorrect');
    }
    else if(!isFirstName(firstnameValue)) {
        setErrorFor(firstname, 'nom incorrect');
    }
    else {
        setSuccessFor(firstname);
    }
    if(surnameValue === '') {
        setErrorFor(surname, 'nom incorrect');
    }
    else if(!isSurName(surnameValue)) {
        setErrorFor(surname, 'nom incorrect');
    }
    else {
        setSuccessFor(surname);
    }
    if(numberValue === '') {
        setErrorFor(number, 'numero incorrect');
    }    
    else if(!isNumber(numberValue)) {
        setErrorFor(number, 'numero incorrect');
    }
    else {
        setSuccessFor(number);
    }
    if(emailValue === '') {
        setErrorFor(email, 'email incorrect');
    }
    else if(!isEmail(emailValue)) {
        setErrorFor(email, 'email incorrect');
    }
    else {
        setSuccessFor(email);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');
    // add message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isFirstName(firstname) {
    return /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 \.'\-]+$/.test(firstname);
}
function isSurName(surname) {
    return /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 \.'\-]+$/.test(surname);
}
function isNumber(number) {
    return /^((\+61\s?)?(\((0|02|03|04|07|08)\))?)?\s?\d{1,4}\s?\d{1,4}\s?\d{0,4}$/.test(number);
}
function isEmail(email) {
    return /^[A-Za-z0-9\._\-]+@[A-Za-z]+[A-Za-z0-9\-]+[A-Za-z]+(\.[A-Za-z0-9\-]+)+$/.test(email);
}

