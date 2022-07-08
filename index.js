const body = document.querySelector("body")
const toggle = document.querySelector(".toggle")

toggle.onclick = function(){
    body.classList.toggle("dark")
}

// gsap.registerPlugin(scrollSmoother)

// let smoother = scrollSmoother({
//     wrapper: "#smooth-wrapper",
//     content: "#smooth-wrapper",
//     effects: true,
//     smooth: 2
// })