const btnResetFormOutside = document.querySelector ('.js-btnReset');

function handleResetFormOutside (){
    const resetForm = document.getElementById('Form');
    resetForm.reset();
  }
  btnResetFormOutside.addEventListener('click', handleResetFormOutside);
