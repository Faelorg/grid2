const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav')
burger.onclick = function() {
nav.classList.toggle('opened')
}