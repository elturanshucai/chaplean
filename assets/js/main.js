const menuLeftButton = document.querySelector('#menu-left')
const menuLeft = document.querySelector('.left-aside')
const searchMenu = document.querySelector('.right-aside')
const searchButton = document.querySelector('#search')
const menuButtons = document.querySelector('.header-bottom')
const backButton = document.querySelector("#back")
const menuIcon = document.querySelector('.nav-btn')
const nav = document.querySelector('header nav ul')
const buildLinks = document.querySelectorAll('ul#build li')

menuLeftButton.addEventListener('click', () => {
    menuLeft.classList.add('active')
    menuButtons.classList.add('clicked')
    menuLeft.scrollIntoView()
})

backButton.addEventListener('click', () => {
    menuLeft.classList.remove('active')
    searchMenu.classList.remove('active')
    menuButtons.classList.remove('clicked')
})

searchButton.addEventListener('click', () => {
    searchMenu.classList.add('active')
    menuButtons.classList.add('clicked')
    searchMenu.scrollIntoView()
})

menuIcon.addEventListener('click', () => {
    if (menuIcon.className.includes('active')) {
        menuIcon.classList.remove('active')
        nav.classList.remove('open')
    } else {
        menuIcon.classList.add('active')
        nav.classList.add('open')
    }
})

buildLinks.forEach((item, index) => item.addEventListener('click', () => {
    if (index !== 0) {
        if (item.className.includes('active')) {
            item.classList.remove('active')
        } else {
            item.classList.add('active')
        }
    }
}))