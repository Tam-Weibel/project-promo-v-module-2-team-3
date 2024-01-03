'use strict';

const section = document.querySelector('.js-section');
const arrow = document.querySelector('.icon');

function handleClick() {
    arrow.classList.toggle('fa-angle-up');
    arrow.classList.toggle('fa-angle-down');
}

section.addEventListener('click', handleClick);
