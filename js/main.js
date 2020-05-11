
window.addEventListener('scroll',()=>{
    let navBar = document.querySelector('#nav-bar');
    let section = document.querySelector('#section--baner');
    let posicion = section.getBoundingClientRect().top;
    let logo = document.querySelector("#img--logo");


    if(posicion < 0){
        navBar.style.background = "rgba(0,0,0,0.9)";
        logo.style.width = "55px";
    }else{
        logo.style.width = "70px";
        navBar.style.background = "rgba(255,255,255,0)";
    }

});

ScrollReveal().reveal('.scr-rev', { delay: 300 });
ScrollReveal().reveal('#gallery-footer', { delay: 1500 });

