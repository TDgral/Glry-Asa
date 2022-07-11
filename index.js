const body = document.querySelector("body")
const dk = document.querySelector(".toggle")
const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(){
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

dk.onclick = function() {
    body.classList.toggle("dark")
}

btnMobile.addEventListener('click', toggleMenu)

// gsap.registerPlugin(scrollSmoother)

// let smoother = scrollSmoother({
//     wrapper: "#smooth-wrapper",
//     content: "#smooth-wrapper",
//     effects: true,
//     smooth: 2
// })