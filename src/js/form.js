"use strict";

const form = document.querySelector(".js-form");
const inputName = document.getElementById("name");
const inputJob = document.getElementById("job");
const inputPhoto = document.getElementById("photo");
const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("phone");
const inputLinkedin = document.getElementById("linkedin");
const inputGithub = document.getElementById("github");
const previewPhoto = document.querySelector(".js-photo"); // hay que ver cómo se hace en el html
const previewName = document.querySelector(".preview__text--title");
const previewJob = document.querySelector(".preview__text--p");
const previewEmail = document.querySelector(".social__email");
const previewLinkedin = document.querySelector(".social__linkedin");
const previewGithub = document.querySelector(".social__github");
const previewPhone = document.querySelector(".social__phone");
const shareBtn = document.querySelector(".js-click");
const createCard = document.querySelector(".js-create-card");

const containDesign = document.querySelector(".form_designs-div");
const containFill = document.querySelector(".form");
const containShare = document.querySelector(".js-share");
const arrow = document.querySelectorAll(".icon");

const section = document.querySelectorAll(".js-section");
const sectionParents = document.querySelectorAll(".form_box");

const containDesign = document.querySelector('.form_designs-div');
const containFill = document.querySelector('.form');
const containShare = document.querySelector('.share__create');
const arrow = document.querySelectorAll('.icon');

const section = document.querySelectorAll('.js-section');
const sectionParents = document.querySelectorAll('.form_box');

const handleCollapsable =(event) => {
    const clickedHeader=event.currentTarget;
    const clickedParent= clickedHeader.parentNode;
    for (const collapsable of sectionParents){
        if (collapsable===clickedParent) {
            collapsable.classList.remove('collapsable--close');
        }else {
            collapsable.classList.add('collapsable--close');
        }
    }
  }
};

// Open the first section by default
sectionParents[0].classList.remove("collapsable--close");

for (const header of section) {
  header.addEventListener("click", handleCollapsable);
}

/*function applyHidden (event) {
    const clickedSection = event.target;
    console.log(clickedSection);
    if(clickedSection.classList.contains('form_designs-leyend')){
        containDesign.classList.toggle('hidden');
        containFill.classList.add('hidden');
        containShare.classList.add('hidden');
    }else if (clickedSection.classList.contains('fieldset__title')) {
        containFill.classList.toggle('hidden');
        containDesign.classList.add('hidden');
        containShare.classList.add('hidden');
    } else {
        containShare.classList.toggle('hidden');
        containDesign.classList.add('hidden');
        containFill.classList.add('hidden');
    }
}

function changeArrow () {
    for (let i = 0; i < arrow.length; i++) {
        if(arrow[i].classList.contains('form_designs-leyend')){
            arrow[i].classList.toggle('fa-angle-up');
            arrow[i].classList.toggle('fa-angle-down');
            
        } else if (arrow[i].classList.contains('fieldset__title')) {
            arrow[i].classList.toggle('fa-angle-up');
            arrow[i].classList.toggle('fa-angle-down');
            
        } else {
            arrow[i].classList.toggle('fa-angle-up');
            arrow[i].classList.toggle('fa-angle-down');
            
        }
    }
}


function handleClick(event) {
    event.preventDefault();
    applyHidden(event);
    changeArrow();
}

for (const eachSection of section) {
    eachSection.addEventListener('click', handleClick);
}*/

const formData = {
  palette: 1,
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: "",
};
//funcion para rellenar la card con los datos del formulario
const handleForm = (event) => {
  const inputId = event.target.id;
  formData[inputId] = event.target.value;

  if (inputId === "name") {
    previewName.innerHTML = inputName.value;
  } else if (inputId === "job") {
    previewJob.innerHTML = inputJob.value;
  } else if (inputId === "email") {
    previewEmail.href = 'mailto:' + inputEmail.value; // meter enlace en el icono
    console.log(previewEmail.href);
  } else if (inputId === "phone") {
    previewPhone.href = 'tel:' + inputPhone.value;
    console.log(previewPhone.href);
  } else if (inputId === "linkedin") {
    previewLinkedin.href = inputLinkedin.value;
  } else if (inputId === "github") {
    previewGithub.href = inputGithub.value; //revisar el enlace a github con el usuario
  }
};

form.addEventListener("input", handleForm);
