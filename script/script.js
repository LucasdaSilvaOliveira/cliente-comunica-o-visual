const title = document.getElementById('main_title');
const target = document.querySelectorAll('[data-scroll-revell]');
const toggleMenu = document.getElementById('toggle_menu');
const menu = document.querySelector('nav');
const itensMenu = Array.from(document.querySelectorAll('.itens_menu'));
const fotosItem = document.querySelectorAll('.fotos_item');
console.log(fotosItem)

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

toggleMenu.addEventListener('click', () => {
   menu.classList.toggle('aparecer_menu')

   toggleMenu.classList.toggle('rotate_toggle')

   itensMenu.forEach(item =>  {

    item.classList.toggle('aparecer_itens_menu')

    
   })
})