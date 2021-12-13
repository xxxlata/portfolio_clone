const event = document.querySelector(".nav_box");
const hiddenBar =document.querySelector(".nav_box_hamburger");
const hiddenBarContents = document.querySelector("#hamburger_menu");
const c = document.querySelector("#close");

function clickEvent(){
    hiddenBarContents.style.display = "block";  
}

function closedEvent(){
    hiddenBarContents.style.display = "none";  
}

function scrollevent() {
    
}

hiddenBar.addEventListener("click", clickEvent);
c.addEventListener("click", closedEvent);
window.addEventListener("scroll", scrollevent);