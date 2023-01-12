// navbar
const hamburger = document.querySelector(".hamburger");
const menuClose = document.querySelector(".menuClose");
const navMenu = document.querySelector("nav");

hamburger.onclick=()=>{
    navMenu.classList.add('activeState')
}
menuClose.onclick=()=>{
    navMenu.classList.remove('activeState')
}







// Slider
let sliderIndex = 1;
showSlides(sliderIndex);
function plusDivs(n){
    showSlides(sliderIndex += n)
}
function showSlides(n){
    let i;
    let x = document.querySelectorAll(".slider");
    if(n > x.length) {sliderIndex = 1}
    if(n < 1) {sliderIndex = x.length}
    for(i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    x[sliderIndex-1].style.display ="grid";
}