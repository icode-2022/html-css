//获取列表
// 获取 ul 列表元素
var ulElement = document.getElementById("banner-large-img");
var smallUlElement = document.getElementById("small-large-list");
var full_scree = document.getElementById("full-scree");
var button_left = document.getElementById("button-left");
var button_right = document.getElementById("button-right");
// 设置初始偏移量
var smallLiElement = document.getElementsByClassName("small-img");
var offset = 0;
var smallOffset = 0;
var index = 0;
var temp = 0;
smallOffset = -60;
offset = -1244.5;

// 定时器
setInterval(function () {
  // 计算下一个偏移量
  if(index == 15){
    index =0;
  }
  // 设置 ul 元素的 transform 属性
  if(index>15){
    index = 15;
  }
  temp = index;
  index++;
  move()
 
}, 2000);
//移动方法
function move(){
    if(offset*(index)>-17460){
      for(var x = 0;x<smallLiElement.length;x++){
        if(x == index){
          smallLiElement[x].style.borderColor = "rgb(205, 190, 165)";
        }else{
          smallLiElement[x].style.borderColor = "white";
        }
      }
    ulElement.style.transform = "translateX(" + offset*(index) + "px)";
    smallUlElement.style.transform = "translateX(" + smallOffset*(index) + "px)";
  
}
}
// 获取屏幕在页面中的高度


  
const element = document.documentElement; // 获取文档根元素
//全屏显示
full_scree.addEventListener("click", function () {
  console.log("被点击了");
 //const screenHeight = window.pageYOffset;
  //console.log('屏幕在页面中的高度：', screenHeight);
  var body = document.getElementsByTagName('body');
   body[0].style.overflowY = 'hidden';
  var allBigImg = document.getElementById("fullscreen-image");
  var imgElement = document.getElementById("fullscreen-image-img");
  enterFullscreen(element);
  imgElement.src = "img/img (" + (index + 1) + ").png";
  allBigImg.style.display = "block";
  
  //allBigImg.style.top = screenHeight+'px';
});

function enterFullscreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };
  //进入全屏模式
  function go() {
  // 获取文档根元素
  
    if (elem.requestFullscreen) {
      elem.requestFullscreen(); // W3C标准方法
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen(); // Firefox方法
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(); // Chrome、Safari和Opera方法
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen(); // IE/Edge方法
    }
  };
  //退出全屏模式
document.addEventListener("keydown", function (event) {
  if (event.key === 'Escape' || event.keyCode === 27) {
    
    var allBigImg = document.getElementById("fullscreen-image");
    var allBig_img = document.getElementById("fullscreen-image-image");
    allBigImg.style.display = "none";
    allBig_img.style.display = "none";
    allBig_img.src ='';
    allBig_img.style.width = 0;
    allBig_img.style.height = 0;
    console.log("完成修改");
    // 当按下"Escape"键时，退出全屏
  }
});
// 退出全屏模式
function exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
// 监听按键事件
//上一张
button_left.addEventListener("click", function () {
    if(index == 0){
        index = 15;
    }else{
        index -= 1;
    }
    if(index>15){
        index = 15;
    }
  move();
  temp = index;
});

button_right.addEventListener("click", function () {
  if(index == 15){
    index =0;
  }else{
    index += 1;
  }
  
  move();
  temp = index;
});

//监听全屏退出事件
// 监听全屏状态改变事件
document.addEventListener("fullscreenchange", function () {
  if (document.fullscreenElement) {
    // 进入了全屏模式
    console.log("进入了全屏模式");
  } else {
    // 退出了全屏模式
    var allBigImg = document.getElementById("fullscreen-image");
    var allBig_img = document.getElementById("fullscreen-image-image");
    allBigImg.style.display = "none";
    
    var body = document.getElementsByTagName('body');
    body[0].style.overflowY = 'visible';
  }
});

// 监听兼容性前缀事件（某些浏览器需要使用带有前缀的事件）
document.addEventListener("mozfullscreenchange", function () {
  if (document.mozFullScreenElement) {
    // 进入了全屏模式
    console.log("进入了全屏模式");
  } else {
    // 退出了全屏模式ar allBigImg = document.getElementById("fullscreen-image");
    var allBig_img = document.getElementById("fullscreen-image-image");
    allBigImg.style.display = "none";
    var body = document.getElementsByTagName('body');
    body[0].style.overflowY = 'visible';
    allBig_img.style.display = "none";console.log("退出了全屏模式");
  }
});

document.addEventListener("webkitfullscreenchange", function () {
  if (document.webkitFullscreenElement) {
    // 进入了全屏模式
    console.log("进入了全屏模式");
  } else {
    // 退出了全屏模式
    var allBigImg = document.getElementById("fullscreen-image");
    var allBig_img = document.getElementById("fullscreen-image-image");
    allBigImg.style.display = "none";
    var body = document.getElementsByTagName('body');
    body[0].style.overflowY = 'visible';
    allBig_img.style.display = "none";
  }
});

document.addEventListener("msfullscreenchange", function () {
  if (document.msFullscreenElement) {
    // 进入了全屏模式
    console.log("进入了全屏模式");
  } else {
    // 退出了全屏模式
    var allBigImg = document.getElementById("fullscreen-image");
    var allBig_img = document.getElementById("fullscreen-image-image");
      allBigImg.style.display = "none";
      var body = document.getElementsByTagName('body');
    body[0].style.overflowY = 'visible';
    allBig_img.style.display = "none";
  }
});




//点击小图片来切换
var allSmallImg = document.getElementsByClassName('small-img');

    
    allSmallImg[0].addEventListener("click",function(){
        index = 0;
        console.log(index);
        move();
        temp = index;
    })
    allSmallImg[1].addEventListener("click",function(){
        index = 1;
        console.log(index);
        move();
        temp = index;
    })
    allSmallImg[2].addEventListener("click",function(){
        index = 2;
        console.log(index);
        move();
        temp = index;
    })
    allSmallImg[3].addEventListener("click",function(){
        index = 3;
        console.log(index);
        move();
        temp = index;
    })
    allSmallImg[4].addEventListener("click",function(){
        index = 4;
        console.log(index);
        move();
        temp = index;
    })
    allSmallImg[5].addEventListener("click",function(){
        index = 5;
        console.log(index);
        move();
        temp = index;
    })
    allSmallImg[6].addEventListener("click",function(){
        index = 6;
        console.log(index);
        move();
        temp = index;
    })
    allSmallImg[7].addEventListener("click",function(){
        index = 7;
        console.log(index);
        move();
        temp = index;
    })
    allSmallImg[8].addEventListener("click",function(){
        index = 8;
        console.log(index);
        move();
        temp = index;
    })
    allSmallImg[9].addEventListener("click",function(){
        index = 9;
        console.log(index);
        move();
        temp = index;
    })
    allSmallImg[10].addEventListener("click",function(){
        index = 10;
        console.log(index);
        move();
        temp = index;
    })
    allSmallImg[11].addEventListener("click",function(){
        index = 11;
        console.log(index);
        move();
        temp = index;
    })
    allSmallImg[12].addEventListener("click",function(){
        index = 12;
        console.log(index);
        move();
        temp = index;
    })
    allSmallImg[13].addEventListener("click",function(){
        index = 13;
        console.log(index);
        move();
        temp = index;
    })
