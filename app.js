let btn = document.querySelector("#btn");
let modal = document.querySelector(".modal");
let hamburger = document.querySelector('.hamburger');

btn.addEventListener('click', () => {
    modal.style.visibility = "visible";
})

hamburger.addEventListener('click', () => {
    modal.style.visibility = "hidden";
})