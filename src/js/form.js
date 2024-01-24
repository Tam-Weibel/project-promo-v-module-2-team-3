"use strict";

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
const errorEmail = document.querySelector(".js-errorEmail");
const errorPhone = document.querySelector(".js-errorPhone");
const errorLinkedin = document.querySelector(".js-errorLinkedin");
const errorGithub = document.querySelector(".js-errorGithub");

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
    formData.email = inputEmail.value;
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail.value)) {
      previewEmail.href = "mailto:" + inputEmail.value;
      errorEmail.classList.add("hidden");
    } else {
      errorEmail.classList.remove("hidden");
    }
  } else if (inputId === "phone") {
    formData.phone = inputPhone.value;
    if (/^\d{9}$/.test(inputPhone.value)) {
      previewPhone.href = "tel:" + inputPhone.value;
      errorPhone.classList.add("hidden");
    } else {
      errorPhone.classList.remove("hidden");
    }
  } else if (inputId === "linkedin") {
    const username = inputLinkedin.value;
    // const username = extractLinkedinUsername(fullLinkedinUrl);
    formData.linkedin = username;
    if (
      /^linkedin\.com\/in\/[a-zA-Z0-9-]+(?:-[a-zA-Z0-9]+)*\/?$/.test(
        inputLinkedin.value
      )
    ) {
      previewLinkedin.href = "https://" + inputLinkedin.value;
      errorLinkedin.classList.add("hidden");
    } else {
      errorLinkedin.classList.remove("hidden");
    }
  } else if (inputId === "github") {
    const githubValue = inputGithub.value;
    if (/^@[a-zA-Z\d](?:[a-zA-Z\d]|-(?=[a-zA-Z\d])){0,38}$/.test(githubValue)) {
      previewGithub.href = "https://github.com/" + githubValue.substring(1);
      formData.github = githubValue.substring(1);
      errorGithub.classList.add("hidden");
    } else {
      errorGithub.classList.remove("hidden");
    }
  } else if (
    inputId === "one" ||
    inputId === "two" ||
    inputId === "three" ||
    inputId === "four" ||
    inputId === "five"
  ) {
    formData.palette = parseInt(event.target.value);
  }
};

// function extractLinkedinUsername(linkedinUrl) {
//   const match = linkedinUrl.match(/\/in\/([^\/]+)\/?/);
//   return match ? match[1] : '';
// }

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
  localStorage.setItem("localForm", JSON.stringify(formData));
  fetch("https://dev.adalab.es/api/card/", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: { "Content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      openCreate();
      renderUrl(data.cardURL);
      tweetUrl(data.cardURL);
    });
}

createCard.addEventListener("click", handleCreate);
form.addEventListener("input", handleForm);

const renderLocal = () => {
  const storedForm = JSON.parse(localStorage.getItem("localForm"));
  if (storedForm) {
    inputName.value = storedForm.name;
    inputJob.value = storedForm.job;
    inputEmail.value = storedForm.email;
    inputPhone.value = storedForm.phone;
    inputLinkedin.value = storedForm.linkedin;
    inputGithub.value = storedForm.github;
    const radioOptions = document.querySelectorAll(".radio");
    for (const radio of radioOptions) {
      if (parseInt(radio.value) === storedForm.palette) {
        radio.checked = true;
      }
    }
  }
};

renderLocal();
