'use strict';

const form = document.querySelector(".js-form");
const inputPalette = document.querySelector(".radio");
const inputName = document.getElementById("name");
const inputJob = document.getElementById("job");
const inputPhoto = document.getElementById("photo");
const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("phone");
const inputLinkedin = document.getElementById("linkedin");
const inputGithub = document.getElementById("github");
const previewPhoto = document.querySelector(".js-photo");
const previewName = document.querySelector(".preview__text--title");
const previewJob = document.querySelector(".preview__text--p");
const previewEmail = document.querySelector(".social__email");
const previewLinkedin = document.querySelector(".social__linkedin");
const previewGithub = document.querySelector(".social__github");
const previewPhone = document.querySelector(".social__phone");
const createOpen = document.querySelector(".js-open");
const createCard = document.querySelector(".js-create");

const containDesign = document.querySelector(".form_designs-div");
const containFill = document.querySelector(".form");
const arrow = document.querySelectorAll(".icon");

const section = document.querySelectorAll(".js-section");
const sectionParents = document.querySelectorAll(".form_box");

const tweet = document.querySelector(".js-share");

const handleCollapsable = (event) => {
  const clickedHeader = event.currentTarget;
  const clickedParent = clickedHeader.parentNode;
  for (const collapsable of sectionParents) {
    if (collapsable === clickedParent) {
      collapsable.classList.remove("collapsable--close");
    } else {
      collapsable.classList.add("collapsable--close");
    }
  }
};

// Open the first section by default
sectionParents[0].classList.remove("collapsable--close");

for (const header of section) {
  header.addEventListener("click", handleCollapsable);
}

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
  if (inputId === "name") {
    previewName.innerHTML = inputName.value;
    formData.name = inputName.value;
  } else if (inputId === "job") {
    previewJob.innerHTML = inputJob.value;
    formData.job = inputJob.value;
  } else if (inputId === "email") {
    const emailValue=inputEmail.value;
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    previewEmail.href = "mailto:" + inputEmail.value;
    formData.email = inputEmail.value;
  } else if (inputId === "phone") {
    previewPhone.href = "tel:" + inputPhone.value;
    formData.phone = inputPhone.value;
  } else if (inputId === "linkedin") {
    previewLinkedin.href = 'https://www.linkedin.com/in/' + inputLinkedin.value;
    formData.linkedin = inputLinkedin.value;
  } else if (inputId === "github") {
    const githubValue = inputGithub.value;
    const githubUser = githubValue.slice(1);
    previewGithub.href = "https://github.com/" + githubUser;
    formData.github = githubUser;
  } else if (
    inputId === 'one' ||
    inputId === 'two' ||
    inputId === 'three' ||
    inputId === 'four' ||
    inputId === 'five'
  ) {
    formData.palette = parseInt(event.target.value);
  }
   }
};

function openCreate() {
  createOpen.classList.remove("hidden");
  createCard.classList.add("share__grey");
}

function tweetUrl(url) {
  tweet.href = tweet.href + url;
}

function renderUrl(url) {
  const cardLink = document.querySelector(".created__link");
  const linkText = document.querySelector(".linkText");
  cardLink.href = url;
  linkText.innerHTML = url;
}

function handleCreate(event) {
  event.preventDefault();
  fetch("https://dev.adalab.es/api/card/", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: { "Content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      openCreate();
      renderUrl(data.cardURL);
      tweetUrl(data.cardURL);
    });
}

createCard.addEventListener("click", handleCreate);
form.addEventListener("input", handleForm);
