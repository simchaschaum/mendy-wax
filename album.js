const imagesArr = document.querySelectorAll(".cd-insert-img");
const cover = document.querySelector('#cover');

imagesArr.forEach((pic,idx)=>{
    pic.addEventListener("click", ()=>enlarge(idx))
})

const enlarge = (idx) => {
    if(!imagesArr[idx].classList.contains('enlarged')){
        imagesArr[idx].classList.add('enlarged');
        cover.style.display = "block"
    } else {
        imagesArr[idx].classList.remove('enlarged');
        cover.style.display = "none"
    }

}

