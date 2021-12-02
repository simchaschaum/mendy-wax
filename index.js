// Shrink Navbar With Scrolling

const navbar = document.querySelector('.navbar');
const brand = document.querySelector("#navbar-logo");
const navLink = document.querySelectorAll(".nav-link");

let width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

window.onscroll = function(){
    if(width>975){
        scrollFunction()
    } 
}

function scrollFunction(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            navbar.classList.add("nav-shrink")
    } else {
            navbar.classList.remove("nav-shrink")

    }
}
