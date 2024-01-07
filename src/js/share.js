'use strict'

const createBtn = document.querySelector('.js-create');
const created = document.querySelector('.js-click');

function handleCreate() {
    console.log('click');
    createBtn.classList.add('share__grey');
    created.classList.remove('hidden');
};

createBtn.addEventListener('click', handleCreate)