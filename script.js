// Navbar Animation
const navbar = document.querySelector('nav');
window.onscroll = () => {
    if(window.scrollY >= 3){
        navbar.classList.add('sticky-nav')
        hamburger.classList.add('sticky-nav')
    
    }
    else{
        navbar.classList.remove('sticky-nav')
        hamburger.classList.remove('sticky-nav')
    }
}

// Read-More Animation
let read_more_button = document.querySelector('.read-more-btn')
const icon = document.querySelector('.fa-angle-down')
const hidden_paragraph = document.querySelector(".para-hidden")
const about_container = document.querySelector('.about-content')
const about_para = document.querySelector('.about-para')
const about_btns = document.querySelector('.about-btn')
const about_logo = document.querySelector('.about-img')
function display_para(){
    hidden_paragraph.classList.toggle('visible-para');
    icon.classList.toggle('icon-rotate')
    about_container.classList.toggle('read-expanded')
    about_para.classList.toggle('para-expanded')
    about_btns.classList.toggle('about-btn-centered')
    about_logo.classList.toggle('logo-hidden')
    const txt = read_more_button.firstElementChild
    if(txt.innerHTML == 'Read More'){
        txt.innerHTML = 'Read Less'
    }
    else{
        txt.innerHTML = 'Read More'
    }
}

// hamburger icon for mobile

const hamburger = document.querySelector('.hamburger')
function open_nav(){
    navbar.style.transform = 'translateX(0)'
    hamburger.style.display = 'none'
}
function close_nav(){
    navbar.style.transform = 'translateX(-100vw)'
    hamburger.style.display = 'block'    
}
