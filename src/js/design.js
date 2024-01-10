const articlePalettes = document.querySelector('.preview');
const radios = document.querySelectorAll('.radio');

for (const eachRadio of radios) {
    eachRadio.addEventListener('click', handlePalette)
};

function handlePalette (event) {
    const targetValue = event.target.value
    articlePalettes.classList.remove('palete-1', 'palete-2', 'palete-3', 'palete-4', 'palete-5')
    articlePalettes.classList.add('palete-' + targetValue);

};




