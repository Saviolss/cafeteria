const inputTema = document.querySelector('#modo-noturno')
const elemento = document.querySelector('body')

inputTema.addEventListener('click', () => {
    const modo = inputTema.checked ? 'dark' : 'linght'
    elemento.setAttribute('data-bs-theme', modo)
})