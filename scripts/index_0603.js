// hamburger toggle

const mainNavi = document.getElementById("main-navi");
const hamburgerToggle = document.getElementById("hamburger-toggle");

hamburgerToggle.addEventListener("click", ()=>{
    const visibility = mainNavi.getAttribute("data-visible");

    if(visibility=="off"){
        mainNavi.setAttribute("data-visible","on");
        hamburgerToggle.setAttribute("aria-expanded","true");
    } else if(visibility=="on"){
        mainNavi.setAttribute("data-visible","off");
        hamburgerToggle.setAttribute("aria-expanded","false");
    }
});

// info image handling

// get list objects
const infoFirst = document.getElementById("first");
const infoSecond = document.getElementById("second");
const infoThird = document.getElementById("third");
const infoFourth = document.getElementById("fourth");
const infoFifth = document.getElementById("fifth");

// show class holder
let currentInfo=document.querySelector(".show");

// get img object
const imgFirst = document.getElementById("first-img");
const imgSecond = document.getElementById("second-img");
const imgThird = document.getElementById("third-img");
const imgFourth = document.getElementById("fourth-img");
const imgFifth = document.getElementById("fifth-img");

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



