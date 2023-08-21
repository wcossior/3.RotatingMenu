let container = document.querySelector('.container');
let containerMenu = document.querySelector('.containerMenu');
let nav = document.querySelector('nav');


function rotate() {
    containerMenu.classList.add('rotateMenu');
    container.style.transform = "rotate(-20deg)";
    nav.style.left = "0px";
}
function rotateBack() {
    containerMenu.classList.remove('rotateMenu');
    container.style.transform = "rotate(0deg)";
    nav.style.left = "-250px";
}