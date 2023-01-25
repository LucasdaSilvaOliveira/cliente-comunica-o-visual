const title = document.getElementById('main_title');

const target = document.querySelectorAll('[data-scroll-revell]')

function animateTitle(elemento) {

    const arrayLetters = elemento.innerHTML.split('')
    elemento.innerHTML = ''

    arrayLetters.forEach((letter, index) => {
        setTimeout(() => {
            title.innerHTML += letter
        }, 60 * index)
    })
}

animateTitle(title)

function animarScroll() {
    const windowTop = (window.pageYOffset).toFixed(0) + ((window.innerHeight * 3) / 4)

    target.forEach(element => {
        if(element.offsetTop < windowTop) {
            element.classList.add('animate')
        } else {
            element.classList.remove('animate')
        }
    })
}

animarScroll()

window.addEventListener('scroll', () => {
    animarScroll()
})