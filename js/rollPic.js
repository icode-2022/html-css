
const img = document.querySelector(".rollPic_list img");
const bt_left = document.querySelector(".left_but");
const bt_right = document.querySelector(".right_but");
const rollPic = document.querySelector(".rollPic");
const bt_Big = document.querySelector(".toBig");
const smallPic = document.getElementById("smallList");
const smallPics = document.getElementsByClassName("small_p");
const smallX = 94;
let jerry = 1;
let auto = setInterval("autoRoll()", 2500);

bt_left.addEventListener("click", function (){
    clearInterval(auto);
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
    smallPic.setAttribute('style',`left:${-1*(jerry-1)*smallX}px`);
    for (let i= 0 ; i < 15 ; i++) {
        smallPics.item(i).style.removeProperty("border");
    }
    smallPics.item(jerry-1).setAttribute("style","border:5px solid chocolate;");
    auto = setInterval("autoRoll()", 2500);
});
bt_right.addEventListener("click", function (){
    clearInterval(auto);
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
    smallPic.setAttribute('style',`left:${-1*(jerry-1)*smallX}px`);
    for (let i= 0 ; i < 15 ; i++) {
        smallPics.item(i).style.removeProperty("border");
    }
    smallPics.item(jerry-1).setAttribute("style","border:5px solid chocolate;");
    auto = setInterval("autoRoll()", 2500);
});
function autoRoll() {
    clearInterval(auto);
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
    smallPic.setAttribute('style',`left:${-1*(jerry-1)*smallX}px;`);
    for (let i= 0 ; i < 15 ; i++) {
        smallPics.item(i).style.removeProperty("border");
    }
    smallPics.item(jerry-1).setAttribute("style","border:5px solid chocolate;");
    auto = setInterval("autoRoll()", 2500);
}
smallPic.addEventListener("click",function (){
    clearInterval(auto);
    let src = window.event.target.src;
    if (src === undefined) {
        return;
    }
    const str = /(?<=p)[0-9]+(?=.png)/g;
    jerry = src.match(str);
    setTimeout(function () {
        rollPic.classList.remove("disappear");
        rollPic.classList.remove("appear");
    }, 500);
    rollPic.classList.add("disappear");
    img.src = `../img/p${jerry}.png`;
    rollPic.classList.add("appear");
    smallPic.setAttribute('style',`left:${-1*(jerry-1)*smallX}px;`);
    for (let i= 0 ; i < 15 ; i++) {
        smallPics.item(i).style.removeProperty("border");
    }
    smallPics.item(jerry-1).setAttribute("style","border:5px solid chocolate;");
    auto = setInterval("autoRoll()", 2500);
});

bt_Big.addEventListener("click",function (){
    // clearInterval(auto); 停止滚动
    //TODO 网页全屏显示图片
});