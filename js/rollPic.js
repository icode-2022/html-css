
const img = document.querySelector(".rollPic_list img");
const bt_left = document.querySelector(".left_but");
const bt_right = document.querySelector(".right_but");
const rollPic = document.querySelector(".rollPic");
const bt_Big = document.querySelector(".toBig");

let jerry = 1;

bt_left.addEventListener("click", function (){
    setTimeout(function () {
        rollPic.classList.remove("disappear");
        rollPic.classList.remove("appear");
    }, 500);
    jerry--;
    if (jerry <= 0) {
        jerry = 15;
    }
    if (jerry >= 16) {
        jerry = 1;
    }
    rollPic.classList.add("disappear");
    img.src = `../img/p${jerry}.png`;
    rollPic.classList.add("appear");
});
bt_right.addEventListener("click", function (){
    setTimeout(function () {
        rollPic.classList.remove("disappear");
        rollPic.classList.remove("appear");
    }, 500);
    jerry++;
    if (jerry <= 0) {
        jerry = 15;
    }
    if (jerry >= 16) {
        jerry = 1;
    }
    rollPic.classList.add("disappear");
    img.src = `../img/p${jerry}.png`;
    rollPic.classList.add("appear");
});

const auto = setInterval("autoRoll()", 2000);
function autoRoll() {
    setTimeout(function () {
        rollPic.classList.remove("disappear");
        rollPic.classList.remove("appear");
    }, 500);
    jerry++;
    if (jerry <= 0) {
        jerry = 15;
    }
    if (jerry >= 16) {
        jerry = 1;
    }
    rollPic.classList.add("disappear");
    img.src = `../img/p${jerry}.png`;
    rollPic.classList.add("appear");
}

bt_Big.addEventListener("click",function (){
    clearInterval(auto);

});