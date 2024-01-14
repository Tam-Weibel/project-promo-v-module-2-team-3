"use strict";

const btnResetFormOutside = document.querySelector(".js-btnReset");

//Guardo el estdo inical para que no se me borre todo de la tarjeta
// const initialInsideCard = document.querySelector ('.btnClean').innerHTML;

function handleResetFormOutside() {
  inputName.value = "";
  inputJob.value = "";
  inputPhoto.value = "";
  inputEmail.value = "";
  inputPhone.value = "";
  inputLinkedin.value = "";
  inputGithub.value = "";
  previewName.innerHTML = "Nombre Apellido";
  previewJob.innerHTML = "Front-end developer";
  previewEmail.href = "";
  previewLinkedin.href = "";
  previewGithub.href = "";
  profileImage.style.backgroundImage = "";
  profilePreview.style.backgroundImage = "";
  shareBtn.classList.add("hidden");
  createBtn.classList.remove("share__grey");
  articlePalettes.classList.remove(
    "palete-1",
    "palete-2",
    "palete-3",
    "palete-4",
    "palete-5"
  );
  articlePalettes.classList.add("palete-1");
  sectionParents[0].classList.remove("collapsable--close");
  sectionParents[1].classList.add("collapsable--close");
  sectionParents[2].classList.add("collapsable--close");
}

function handleResetFormOutside (){
   
   inputName.value = "";
   inputJob.value = "";
   inputPhoto.value= "";
   inputEmail.value= "";
   inputPhone.value= "";
   inputLinkedin.value= "";
   inputGithub.value = "";
   previewName.innerHTML = "Nombre Apellido";
   previewJob.innerHTML = "Front-end developer";
   previewEmail.href = "";
   previewLinkedin.href = "";
   previewGithub.href = "";
   profileImage.style.backgroundImage = ""; 
   profilePreview.style.backgroundImage = "";


  };

  btnResetFormOutside.addEventListener('click', handleResetFormOutside);
