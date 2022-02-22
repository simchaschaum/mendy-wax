// Shrink Navbar With Scrolling

const navbar = document.querySelector('.navbar');
const brand = document.querySelector("#navbar-logo");
const navLink = document.querySelectorAll(".nav-link");

let width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

let height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

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


// Album page: enlarging the CD cover images:
const imagesArr = document.querySelectorAll(".cd-insert-img");
const cover = document.querySelector('#cover');

imagesArr.forEach((pic,idx)=>{
    pic.addEventListener("click", ()=>enlarge(idx))
})

const enlarge = (idx) => {
    if(!imagesArr[idx].classList.contains('enlarged')){
        imagesArr[idx].classList.add('enlarged');
        cover.style.display = "block";
    } else {
        imagesArr[idx].classList.remove('enlarged');
        cover.style.display = "none"
    }
}
