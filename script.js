// Navbar Animation
const navbar = document.querySelector('nav');
window.onscroll = () => {
    if(window.scrollY >= 3){
        navbar.classList.add('sticky-nav')
    }
    else{
        navbar.classList.remove('sticky-nav')
    }
}

// Read-More Animation
let read_more_button = document.querySelector('.read-more-btn')
const icon = document.querySelector('.fa-angle-down')
const hidden_paragraph = document.querySelector(".para-hidden")
const about_container = document.getElementById('about')

function display_para(){
    hidden_paragraph.classList.toggle('visible-para');
    icon.classList.toggle('icon-rotate')
    const txt = read_more_button.firstElementChild
    if(txt.innerHTML == 'Read More'){
        txt.innerHTML = 'Read Less'
    }
    else{
        txt.innerHTML = 'Read More'
    }
}