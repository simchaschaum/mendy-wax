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
            // navLink.forEach(item => {
            //     item.style.height = "30px"
            // });
            // brand.style.width = "7em";
            // navbar.style.height = "60px";
            // navbar.style.fontSize = "1.25em";
            navbar.classList.add("nav-shrink")
    } else {
            // navLink.forEach(item => {
            //     item.style.height = "52px"
            // });
            // brand.style.width = "10em";
            // navbar.style.height = "125px";
            // navbar.style.fontSize = "1.50em";
            navbar.classList.remove("nav-shrink")

    }
}
