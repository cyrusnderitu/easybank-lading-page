const menuOpen = document.querySelector('.menu_open')
const menu = document.querySelector('.nav_menu')
const menuClose = document.querySelector('.menu_close')

menuOpen.addEventListener('click', ()=> {
    menu.classList.add('open')
    menuOpen.style.display='none'
    menuClose.style.display='block'
})
menuClose.addEventListener('click', ()=> {
    menu.classList.remove('open')
    menuClose.style.display='none'
    menuOpen.style.display='block'
})