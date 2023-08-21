let container = document.querySelector('.container');
let containerMenu = document.querySelector('.containerMenu');
let nav = document.querySelector('nav');


function rotate() {
    containerMenu.style.transform = "rotate(-90deg)";
    container.style.transform = "rotate(-20deg)";
    nav.style.left = "0px";
}
function rotateBack() {
    containerMenu.style.transform = "rotate(0deg)";
    container.style.transform = "rotate(0deg)";
    nav.style.left = "-250px";
}