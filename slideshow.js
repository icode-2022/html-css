const left = document.querySelector(".left")
const right = document.querySelector(".right")
const small = document.querySelectorAll(".small")
const images = document.querySelector(".big-img")
const smallImg = document.querySelector(".small-img")
let index = 0
let time
function position() {
    images.style.left = (index * -100) + "%"
    smallImg.style.left = (index * -9) + "%"
}
function add() {
    if (index >= small.length - 1) {
        index = 0

    }
    else {
        index++
    }
}
function desc() {
    if (index < 1) {
        index = small.length - 1
    }
    else {
        index--
    }
}
function timer() {
    time = setInterval(() => {
        index++;
        desc()
        add()
        position()
    }, 3000)
}
left.addEventListener("click", () => {
    desc()
    position()
    clearInterval(time)
    timer()
})
right.addEventListener("click", () => {
    add()
    position()
    clearInterval(time)
    timer()
})
for (let i = 0; i < small.length; i++) {
    small[i].addEventListener("click", () => {
        index = i
        position()
        clearInterval(time)
        timer()
    })
}
timer()