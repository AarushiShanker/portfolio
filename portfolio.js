//responsive javascript
burger=document.querySelector(".burger");
nav=document.querySelector(".nav");
navbar=document.querySelector(".navbar");


burger.addEventListener("click",()=>{
    nav.classList.toggle("v-class");
    navbar.classList.toggle("h-nav");
})

//end

var navlinks=document.getElementsByClassName("nav-links");
function opentab(tabname){
    for(navlink of navlinks){
        navlink.classList.remove("active-link");
    }
    event.currentTarget.classList.add("active-link");
}

var skill_links=document.getElementsByClassName("skill-links");
var skill_contents=document.getElementsByClassName("skill-contents");

function openskill(skillname){
    for(skill_link of skill_links){
        skill_link.classList.remove("active-link");
    }
    for(skill_content of skill_contents){
        skill_content.classList.remove("active-skill");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(skillname).classList.add("active-skill");
}

var see_project=document.getElementById("see-project");

see_project.addEventListener("click",()=>{
    if (see_project.innerHTML === "See More") {
        see_project.innerHTML = "See Less";
    } else {
        see_project.innerHTML = "See More";
    }
});

function myFunction(x) {
    if (x.matches) { // If media query matches
        main.style.backgroundImage = "url('./assets/bg-small.jpg')";
    } else {
        main.style.backgroundImage = "url('./assets/bg.png')";
    }
  }
  function myFunction2(x) { 
    if (x.matches) { // If media query matches
     main.style.backgroundImage = "url('./assets/bg-light-small.png')";
    }else {
            main.style.backgroundImage = "url('./assets/bg-light.png')";
    }   
  }
var x = window.matchMedia("(max-width: 700px)")
  
 
var mode=document.getElementById("mode");
const main=document.getElementById("main");

mode.addEventListener("click",()=>{
    document.body.classList.toggle("light-theme");
    
    if(document.body.classList.contains("light-theme")){
        mode.classList.add("fa-regular");
        mode.classList.remove("fa-solid");
        myFunction2(x);
    }
    else{
        mode.classList.remove("fa-regular");
        mode.classList.add("fa-solid");
        myFunction(x);
    }
})