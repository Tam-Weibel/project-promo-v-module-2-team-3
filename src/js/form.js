'use strict';

/* const { preview } = require("vite"); */

const section = document.querySelector('.js-section');
const arrow = document.querySelector('.icon');
const designSection = document.querySelector('.form_designs-div');
const form = document.querySelector('.js-form');
const inputName = document.getElementById('name');
const inputJob = document.getElementById('job');
const inputPhoto = document.getElementById('photo');
const inputEmail = document.getElementById('email');
const inputPhone = document.getElementById('phone');
const inputLinkedin = document.getElementById('linkedin');
const inputGithub = document.getElementById('github');
const previewPhoto = document.querySelector('.js-photo'); // hay que ver cómo se hace en el html
const previewName = document.querySelector('.preview__text--title');
const previewJob = document.querySelector('.preview__text--p');
const previewEmail = document.querySelector('.social__email');
const previewLinkedin = document.querySelector('.social__linkedin');
const previewGithub = document.querySelector('.social__github');
const previewPhone = document.querySelector('.social__phone');
const shareBtn = document.querySelector('.js-click');
const createCard = document.querySelector('.js-create-card');


function handleClick() {
    arrow.classList.toggle('fa-angle-up');
    arrow.classList.toggle('fa-angle-down');
    designSection.classList.toggle('hidden');
};

section.addEventListener('click', handleClick);

const formData = {
    palette: 1,
    name: '',
    job:'',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: '',   
};

const handleForm = (event) => {
    const inputId = event.target.id;
    formData[inputId] = event.target.value;
    

    if(inputId === "name") {
        previewName.innerHTML = inputName.value;
    }
    
    else if (inputId === "job") {
        previewJob.innerHTML = inputJob.value;
    }

    /* else if (inputId === "photo") {
        previewPhoto.innerHTML = inputPhoto.value;
    } */

    else if (inputId === "email") {
        previewEmail.href = inputEmail.value; // meter enlace en el icono
    }

    else if (inputId === "phone") {
        previewPhone.href = inputPhone.value; //revisar para meter la foto
    }

    else if (inputId === "linkedin") {
        previewLinkedin.href = inputLinkedin.value;
    }

    else if (inputId === "github") {
        previewGithub.href = inputGithub.value;  //revisar el enlace a github con el usuario
    }


    
    
};

form.addEventListener('input', handleForm);





