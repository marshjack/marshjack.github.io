function Couple(selector, arr, grade) {
    this.$root = $(selector);
    // 运行
    this.$run = this.$root.find('.run');
    // 显示的步数
    this.$moveStep = this.$root.find('.move');
    // 改变难度
    this.$cngGrade = this.$root.find('.cngGrade');
    // logo数据
    this.array = arr;
    // 运行函数
    this.init();
    this.cngGrade();
    this.setLevel(4);
    this.run();
}
// 初始化
Couple.prototype.init = function () {
    // 点击步数
    this.index = 0;
    //  成功步数
    this.currentIndex = 0;
    // 标记
    this.flag = true;
    this.$run.empty();
};
// 设置li的宽高
Couple.prototype.rangeList = function (current) {
    if (this.range % current == 0) {
        // console.log(this.$list);
        this.$list.css({
            width: this.range + 'px',
            height: this.range + 'px',
            lineHeight: this.range + 'px'
        });
    } else {
        this.range--;
        this.rangeList(current);
    }
};
// 设置难度
Couple.prototype.setLevel = function (grade) {
    // console.log(this.newArr);
    this.init();
    var a = 0;
    this.newArr = this.array.concat();
    // console.log(this.newArr);
    this.newArr.sort(function () {
        return Math.random() - 0.5;
    });

    // console.log(this.newArr);
    // 根据grade调整显示的方块个数
   console.log(Math.pow(grade, 2));
   
    for (var i = 0; i < Math.pow(grade, 2); i++) {
        this.$run.append("<li><i class='fa " + this.newArr[a] + "'></i></li>");
        a++;
        // console.log(this.newArr.length);
        if (a > (this.newArr.length - 1)) {
            this.newArr.sort(function () {
                return Math.random() - 0.5;
            });
            a = 0;
        }
    }
    // 新增的 得重新获取
    this.$list = this.$run.find('li');
    // console.log(this.$list);
    this.range = parseInt(this.$run.width() / grade);
    if (grade % 10 != 0) {
        // console.log(this.range);
        this.rangeList(10);
    } else {
        this.rangeList(5);
    }
};
Couple.prototype.cngGrade = function () {
    var _this = this;
    this.$cngGrade.change(
        function () {
            switch ($(this).val()) {
                case '1':
                    grade = 4;
                    break;
                case '2':
                    grade = 6;
                    break;
                case '3':
                    grade = 8;
                    break;
                case '4':
                    grade = 10;
                    break;
            }
            console.log(grade);
            _this.setLevel(grade);
            _this.run();
        }
    );
};
Couple.prototype.run = function () {
    var _this = this;
    this.$list.click(function () {
        //  判断是否 点击过 或者是 配对成功
        if ($(this).hasClass('open') || $(this).hasClass('couple')) {
            return false;
        }
        //  是否配对成功
        if (!_this.flag) {
            return false;
        }
        //  步数自增
        _this.index++;
        _this.$moveStep.text(_this.index);
        if (_this.index % 2 == 0) {
            // 设置 标记
            _this.flag = false;
            // 加个open2 的class 区分
            $(this).addClass('open show open2');
            // 内容相等
            if ($('.open1').html() == $('.open2').html()) {
                setTimeout(function () {
                    // 配对成功
                    $('.open,.open2').addClass('couple');
                    $('.open1').removeClass('open1');
                    $('.open2').removeClass('open2');
                    _this.flag = true;
                    // 成功步数自增
                    _this.currentIndex++;
                    // console.log(currentIndex);
                    if (_this.currentIndex == _this.$list.length / 2) {
                        setTimeout(function () {
                            alert('游戏结束，您一共走了' + _this.index + '步！');
                            window.location.reload();
                        }, 500);
                    }
                }, 500);
            } else {
                // 配对不成功 返回原型
                setTimeout(function () {
                    $(".open1").removeClass("open show open1");
                    $(".open2").removeClass("open show open2");
                    _this.flag = true;
                }, 500);
            }
        } else {
            $(this).addClass("open show open1");
        }
    });
};