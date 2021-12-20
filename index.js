const event = document.querySelector(".nav_box");
const hiddenBar =document.querySelector(".nav_box_hamburger");
const hiddenBarContents = document.querySelector("#hamburger_menu");
const c = document.querySelector("#close");

function open(){
    hiddenBarContents.style.display = "block";  
}

function close(){
    hiddenBarContents.style.display = "none";  
}


hiddenBar.addEventListener("click", open);
c.addEventListener("click", close);