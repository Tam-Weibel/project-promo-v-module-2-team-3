const btnResetFormOutside = document.querySelector ('.js-btnReset');

//Guardo el estdo inical para que no se me borre todo de la tarjeta
const initialInsideCard =document.querySelector ('.btnClean').innerHTML;

function handleResetFormOutside (){
    const resetForm = document.getElementById('Form');
    resetForm.reset();

    const insideTextIcon=document.querySelector('.btnClean');
    insideTextIcon.innerHTML= initialInsideCard;
  }
  btnResetFormOutside.addEventListener('click', handleResetFormOutside);
