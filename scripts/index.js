

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

// events image handling

// get list objects
const infoFirst = document.getElementById("first");
const infoSecond = document.getElementById("second");
const infoThird = document.getElementById("third");
const infoFourth = document.getElementById("fourth");
const infoFifth = document.getElementById("fifth");

// show class holder
let currentInfo=document.querySelector(".show");

// get img object
const imgFirst = document.getElementById("first-container");
const imgSecond = document.getElementById("second-container");
const imgThird = document.getElementById("third-container");
const imgFourth = document.getElementById("fourth-container");
const imgFifth = document.getElementById("fifth-container");


infoFirst.addEventListener("mouseover", ()=>{
    currentInfo.classList.remove("show");
    imgFirst.classList.add("show");
    currentInfo = imgFirst;
});

infoSecond.addEventListener("mouseover", ()=>{
    currentInfo.classList.remove("show");
    imgSecond.classList.add("show");
    currentInfo = imgSecond;
});

infoThird.addEventListener("mouseover", ()=>{
    currentInfo.classList.remove("show");
    imgThird.classList.add("show");
    currentInfo = imgThird;
});

infoFourth.addEventListener("mouseover", ()=>{
    currentInfo.classList.remove("show");
    imgFourth.classList.add("show");
    currentInfo = imgFourth;
});

infoFifth.addEventListener("mouseover", ()=>{
    currentInfo.classList.remove("show");
    imgFifth.classList.add("show");
    currentInfo = imgFifth;
});

//  adding observer to h-one

const hOne = document.querySelector(".h-one");
const beliefRight= document.querySelector(".belief-right");

const observer = new IntersectionObserver(
    entries =>{
        // entries[0].target.classList.toggle("on");
        console.log(entries[0].isIntersecting);
        
        if(entries[0].isIntersecting){
            hOne.classList.add("on");
            observer.unobserve(entries[0].target);
        }
    },
    {
        rootMargin:"-300px",
    }
)

observer.observe(beliefRight);


const body = document.querySelector('body');
const artist = document.querySelector('.artist');

const observerArtist = new IntersectionObserver(entries=>{
     if(entries[0].isIntersecting){
            body.classList.add("bgcolor");
        }else if(!entries[0].isIntersecting){
            body.classList.remove("bgcolor");
        }
},{
    rootMargin:"-150px"
});

observerArtist.observe(artist);




