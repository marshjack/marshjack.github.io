var canvas = get('.box #pic');
var slider = get('.box .slider');
var sliderBox = get('.box .sliderBox');
var source = get('.box #source1');
var mask = get('.box .mask')
var icon = get('.box .icon');
var context = canvas.getContext('2d');
context.translate(100, 100);
var randomNum = 0
var index = 0;
// 进度条拖动
sliderBox.onmousedown = function (e) {
    var current = 0;
    if (e.which !== 1) {
        return;
    }
    slider.onmousemove = function (event) {
        var x = event.pageX - slider.offsetLeft - e.offsetX;
        if (x > 160 || x < 0) {
            return;
        }
        // console.log(x);
        if (index < x) {
            n = 5;
        } else {
            n = -5;
        }
        index = x;
        current = current + n;
        // console.log(current);
        // console.log(index)
        // 设置sliderBox的定位
        sliderBox.style.left = x + "px";
        mask.style.width = x + 40 + "px";
        drawPic(n);
    }
    slider.onmouseup = function () {
        document.onmousemove = null;
        var num = ((current + randomNum) / 360).toFixed(2);
        console.log(num)
        if (num > 0.95 && num < 1.05) {
            // 成功
            mask.style.backgroundColor = "green";
            sliderBox.style.backgroundColor = "snow";
            icon.style.backgroundPositionY = '-65px';
            setTimeout(() => {
                init();
            }, 1000);
        } else {
            // 失败
            mask.style.backgroundColor = "red";
            sliderBox.style.backgroundColor = "snow";
            icon.style.backgroundPositionY = '-95px';
            setTimeout(() => {
                init();
            }, 1000);
        }
    }
}

function init() {
    mask.style.backgroundColor = "skyblue";
    sliderBox.style.backgroundColor = "skyblue";
    icon.style.backgroundPositionY = '-23px';
    sliderBox.style.left = 0 + "px";
    mask.style.width = 0 + 40 + "px";
    randomNum = generateRandomNum(30, 270);
    drawPic(randomNum);
}

function generateRandomNum(m, n) {
    return Math.floor(Math.random() * (n - m)) + m;
}
source.onload = function () {
    randomNum = generateRandomNum(30, 270);
    drawPic(randomNum)
}
// 图片初始化
/**@type{HTMLCanvasElement}*/
function drawPic(num) {
    context.rotate(num * Math.PI / 180);
    // console.log(num);
    context.clearRect(-100, -100, 100, 100);
    context.beginPath();
    context.arc(0, 0, 100, 0, 2 * Math.PI);
    context.closePath();
    context.clip();
    context.drawImage(source, 0, 0, 200, 200, -100, -100, 200, 200);
}

function get(selector) {
    return document.querySelector(selector)
}