function Slider(main, piece, slider, mask, sliderBox, icon, pic) {
    this.main = main;
    this.piece = piece;
    this.slider = slider;
    this.mask = mask;
    this.sliderBox = sliderBox;
    this.icon = icon;
    this.pic = pic;
    this.offset = 0;
    this.id = {};
    var randomNumber;
    this.init();
    this.sliderMove();
    // this.check();
    this.load();
}
Slider.prototype.init = function () {
    this.drawMain();
    this.drawPiece();
    this.sliderBox.style.left = 0 + "px";
    this.mask.style.width = 0 + 40 + "px";
    // 移动 piece
    this.piece.style.left = 0 + "px";
    this.offset = 0;
    this.slider.className = "slider";
    clearInterval(this.id);
};
Slider.prototype.sliderMove = function () {
    var that = this;
    this.sliderBox.onmousedown = function (e) {
        if (e.which !== 1) {
            return;
        }
        that.slider.onmousemove = function (event) {
            var x = event.pageX - this.offsetLeft - e.offsetX;
            if (x > 300 - 50 || x < 0) {
                return;
            }
            that.offset = x;
            that.sliderBox.style.left = x + 'px';
            that.mask.style.width = x + 40 + 'px';
            that.piece.style.left = that.offset + 'px';
            that.mouseup();
        };

    };
};
Slider.prototype.randomNum = function (i, j) {
    return Math.floor(Math.random() * (j - i)) + i;
};
Slider.prototype.drawMain = function () {
    //  随机出现的范围
    randomNumber = this.randomNum(80, 220);
    // console.log(randomNumber);
    var context = this.main.getContext('2d');
    context.drawImage(this.pic, 0, 0);
    // 随机生成三角形
    context.beginPath();
    context.moveTo(randomNumber, 75 - 25);
    context.lineTo(randomNumber - 25, 75 + 25);
    context.lineTo(randomNumber + 25, 75 + 25);
    context.closePath();

    context.fillStyle = "white";
    context.fill();
};
Slider.prototype.drawPiece = function () {
    var context = this.piece.getContext('2d');
    context.clearRect(0, 0, 300, 150);

    // 截取拼图三角形
    context.beginPath();
    context.moveTo(25, 75 - 25);
    context.lineTo(0, 75 + 25);
    context.lineTo(25 + 25, 75 + 25);
    context.closePath();

    context.clip();
    context.drawImage(this.pic, randomNumber - 25, 50, 50, 50, 0, 50, 50, 50);
};
Slider.prototype.check = function (obj) {
    console.log(obj);
    // console.log(this);
    obj.slider.onmousemove = null;
    // console.log("offset", offset, "RandomNum", randomNumber);
    if (Math.abs(obj.offset - (randomNumber - 25)) < 5) {
        obj.slider.classList.add('success');
        obj.id = setInterval(function () {
            obj.pic.src = "https://i.picsum.photos/id/" + obj.randomNum(10, 100) + "/300/150.jpg";
            obj.init();
        }, 2000);
    } else {
        obj.slider.classList.add('error');
        obj.id = setInterval(function () {
            obj.pic.src = "https://i.picsum.photos/id/" + obj.randomNum(10, 100) + "/300/150.jpg";
            obj.init();
        }, 2000);
    }
};
Slider.prototype.load = function () {
    var that = this;
    this.pic.onload = function () {
        that.init();
    };
};
Slider.prototype.mouseup = function () {
    var that = this;
    this.sliderBox.onmouseup = function () {
        that.check(that);
    }
};