'use strict';
// popular course js
function openCity(cityName) {
  let i;
  let x = document.getElementsByClassName("popular-course-images-background");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(cityName).style.display = "block";  

}

let tabsButtonEvent = document.querySelectorAll('.tabs-button-event');
tabsButtonEvent.forEach(el => {
    el.addEventListener("click",function(){
        tabsButtonEvent.forEach(el => {
            el.classList.remove('active');
        })
        this.classList.add('active');
    });
})


// mobile view toggler js
let togglerButton = document.querySelector('.toggler-button');
let navbar = document.querySelector('.navbar');
let slideClose = document.querySelector('.slide-close');
let html = document.querySelector('html');
togglerButton.addEventListener('click',function(){
       navbar.classList.add('show');
       html.classList.add("body-disable")
    if(navbar.classList.contains('show')){
       navbar.style.marginLeft = '0';
    }
})
slideClose.addEventListener('click',function(){
  navbar.classList.remove('show');
  html.classList.remove("body-disable")

  if(!navbar.classList.contains('show')){
     navbar.style.marginLeft = '-100%';
  }
})
