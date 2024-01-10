'use strict';

const btnResetFormOutside = document.querySelector ('.js-btnReset');

//Guardo el estdo inical para que no se me borre todo de la tarjeta
//const initialInsideCard = document.querySelector ('.btnClean').innerHTML;


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
