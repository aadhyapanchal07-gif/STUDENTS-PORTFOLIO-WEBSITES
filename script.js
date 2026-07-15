// ============================
// NAVBAR SCROLL EFFECT
// ============================


let links =
document.querySelectorAll("nav a");


window.addEventListener("scroll",()=>{


let current="";


sections.forEach(section=>{


let top =
window.scrollY;


let offset =
section.offsetTop-150;


let height =
section.offsetHeight;



if(top >= offset &&
top < offset+height)

{

current = section.id;

}


});



links.forEach(link=>{


link.style.color="white";


if(link.getAttribute("href")
==
"#"+current)

{

link.style.color="#00e5ff";

}


});


});



// ============================
// BUTTON CLICK EFFECT
// ============================


let button = document.querySelector("button");


button.addEventListener("click",()=>{


    document
    .querySelector("#contact")
    .scrollIntoView({

        behavior:"smooth"

    });


});





// ============================
// SCROLL REVEAL ANIMATION
// ============================


const sections = document.querySelectorAll("section");



window.addEventListener("scroll",()=>{


sections.forEach(section=>{


let position =
section.getBoundingClientRect().top;


let screenHeight =
window.innerHeight;



if(position < screenHeight - 100){


section.style.opacity="1";

section.style.transform=
"translateY(0)";


}


});


});




// ============================
// INITIAL SECTION STYLE
// ============================


sections.forEach(section=>{


section.style.opacity="0";

section.style.transform=
"translateY(50px)";

section.style.transition=
"all 0.8s ease";


});



// ============================
// ACTIVE NAV LINK
// ============================


let links =
document.querySelectorAll("nav a");



window.addEventListener("scroll",()=>{


let current="";


sections.forEach(section=>{


let top =
window.scrollY;


let offset =
section.offsetTop-150;


let height =
section.offsetHeight;



if(top >= offset &&
top < offset+height)

{

current = section.id;

}


});



links.forEach(link=>{


link.style.color="white";


if(link.getAttribute("href")
==
"#"+current)

{

link.style.color="#00e5ff";

}


});


});