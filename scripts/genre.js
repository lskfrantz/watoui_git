
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

