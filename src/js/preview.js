"use strict";

const btnResetFormOutside = document.querySelector(".js-btnReset");

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
  createOpen.classList.add("hidden");
  createCard.classList.remove("share__grey");
  sectionParents[0].classList.remove("collapsable--close");
  sectionParents[1].classList.add("collapsable--close");
  sectionParents[2].classList.add("collapsable--close");
  articlePalettes.classList.remove(
    "palete-1",
    "palete-2",
    "palete-3",
    "palete-4",
    "palete-5"
  );
  articlePalettes.classList.add("palete-1");
  document.getElementById("one").checked = true;
 
  tweet.href = "https://twitter.com/intent/tweet?text=Mira mi nueva tarjeta&url=";
  errorEmail.classList.add('hidden');
  errorPhone.classList.add('hidden');
  errorLinkedin.classList.add('hidden');
  errorGithub.classList.add('hidden');
}

btnResetFormOutside.addEventListener("click", handleResetFormOutside);
