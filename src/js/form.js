'use strict';

const section = document.querySelector('.js-section');
const arrow = document.querySelectorAll('.icon');

function handleClick() {
    arrow.classList.toggle('fa-angle-up');
    arrow.classList.toggle('fa-angle-down');
}

section.addEventListener('click', handleClick);
