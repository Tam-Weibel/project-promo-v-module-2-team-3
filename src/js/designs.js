'use strict';

//const inputColor1 = document.getElementById('palette1');// nombre los id estaban vacios en designs
//const inputColor2 = document.getElementById('palette2');
//const inputColor3 = document.getElementById('palette3');
//const inputColor4 = document.getElementById('palette4');
//const inputColor5 = document.getElementById('palette5');
 //clase en el preview article
const designs = document.querySelector('.js-designs'); //esta en fieldset

const radiosPalettes = document.querySelectorAll('input[name="color"]');// constante que seleccione todos los input

const colorDisplay = document.querySelector('.js-selectPalette');//clase en el preview donde se tiene que guardar el valor para usarlo

//funcion seleccionadora de paleta
//const UserSelect= () => {
  //  const paletteNumber = radio.id;
    //if (PaletteNumber === movimiento) {


//



//funcion evento
radiosPalettes.forEach(function(radio) {
    radio.addEventListener('click', function() {
      console.log('Radio button seleccionado: ' + radio.id);
      const paletteNumber = radio.id;

      console.log(paletteNumber);
      colorDisplay.classList.remove('preview__text--title', 'preview__text','social__icon');
      colorDisplay.classList.add ('palette'+ paletteNumber);});
         });


   







/*const elementsToApplyClass = colorDisplay.querySelectorAll('.preview__text .preview__text--title .preview__text--p');/*

//añado evento cambio a los radios de paleta
radiosPalettes.forEach(radio=> {
    radio.addEventListener('change', cambiarPaleta);
        });
        console.log(cambiarPaleta);

//funcion para cambiar la paleta seleccionada
function cambiarPaleta() {
    const paletaSeleccionada = document.querySelector('input[name="color"]');
    console.log(paletaSeleccionada);
    // Aplicar la clase de la paleta seleccionada al elemento colorDisplay
elementsToApplyClass.forEach(element => {
    element.className = `palete-${paletaSeleccionada}`;
});
}
cambiarPaleta();

