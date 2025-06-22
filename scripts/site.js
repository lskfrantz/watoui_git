

const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () =>{
    const visibility = primaryNav.getAttribute("data-visible");
    if(visibility=="false"){
        primaryNav.setAttribute('data-visible', "true");
        navToggle.setAttribute('aria-expended', "true");
        navToggle.classList.toggle("toggle-icon");
        
    } else if(visibility=="true") {
         primaryNav.setAttribute('data-visible', "false");
         navToggle.setAttribute('aria-expended', "false");
         navToggle.classList.toggle("toggle-icon");
        
          
    }
 
})

// map pointer handler

const sigaraki = document.getElementById("kaga");
const mino = document.getElementById("mino");
const seto = document.getElementById("seto");
const tokoname = document.getElementById("tokoname");
const pointer = document.querySelector('.pointer-container');



sigaraki.addEventListener('mouseover', function(){
    pointer.classList.add('pnt-position-kaga');
});

sigaraki.addEventListener('mouseout', function(){
    pointer.classList.remove('pnt-position-kaga');
});

mino.addEventListener('mouseover', function(){
    pointer.classList.add('pnt-position-toki');
});

mino.addEventListener('mouseout', function(){
    pointer.classList.remove('pnt-position-toki');
});

seto.addEventListener('mouseover', function(){
    pointer.classList.add('pnt-position-seto');
});

seto.addEventListener('mouseout', function(){
    pointer.classList.remove('pnt-position-seto');
});

tokoname.addEventListener('mouseover', function(){
    pointer.classList.add('pnt-position-tokoname');
});

tokoname.addEventListener('mouseout', function(){
    pointer.classList.remove('pnt-position-tokoname');
});



