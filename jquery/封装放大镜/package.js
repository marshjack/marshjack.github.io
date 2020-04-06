/**
 *图片放大镜效果
 *
 * @param {*} selector
 * @param {*} option
 * @param {*} times
 */
function BigGlass(selector, option, times) {
    this.$root = $(selector);
    // 原图盒子
    this.$smallBox = this.$root.find('.smallBox');
    // 工具框
    this.$tool = this.$smallBox.find('.tool');
    // 放大图盒子
    this.$bigBox = this.$root.find('.bigBox');
    // 选择图片
    this.$chosePic = this.$root.find('.chosePic li');
    // 原图
    this.$smallPic = this.$smallBox.find('img');
    // 放大图
    this.$bigPic = this.$bigBox.find('img');
    // 放大倍数
    this.$times = times;
    // 初始运行函数
    this.init();
    this.choseClick();
    this.hoverBox();
    this.run();
}
//初始化
BigGlass.prototype.init = function () {
    var _this = this;
    // 小图设置图片
    // console.log(this.$chosePic.eq(0).children());
    // 原图获取图片地址
    this.$smallPic.attr('src', this.$chosePic.eq(0).children().attr('src'));
    // 放大图获取图片地址
    this.$bigPic.attr('src', this.$smallPic.attr('src'));
    this.$smallBox.css({
        'width':_this.$root.height()-100+'px',
        'height':_this.$root.height()-100+'px'
    });
    // 获取原图宽高
    this.w = this.$smallBox.width();
    this.h = this.$smallBox.height();
    // 设置放大图盒子宽高、位置
    // console.log(this.w,_this.$smallBox.offset().top);
    this.$bigBox.css({
        'left': _this.w + 50 + _this.$smallBox.offset().left + 'px',
        'top': _this.$smallBox.offset().top + 'px',
        'width': _this.w + 'px',
        'height': _this.h + 'px'
    });
};
// 图片选择时点击效果
BigGlass.prototype.choseClick = function () {
    var _this = this;
    this.$chosePic.click(function () {
        // console.log(this);
        $(this).addClass('active').siblings().removeClass('active');
        _this.$smallPic.attr('src', $(this).children().attr('src'));
        _this.$bigPic.attr('src', _this.$smallPic.attr('src'));
    });
};
// 鼠标覆盖显示,移出隐藏
BigGlass.prototype.hoverBox = function () {
    var _this = this;
    this.$smallBox.hover(
        function () {
            _this.$tool.css('display', 'block');
            _this.$bigBox.css('display', 'block');
        },
        function () {
            _this.$tool.css('display', 'none');
            _this.$bigBox.css('display', 'none');
        }
    );
};
BigGlass.prototype.run = function () {
    var _this = this;
    this.$smallBox.mousemove(function (ev) {
        var e = ev || window.event;
        // 给放大图和工具框设置宽高
        _this.$bigPic.css({
            'width': _this.w * _this.$times + 'px',
            'height': _this.h * _this.$times + 'px'
        });
        _this.$tool.css({
            'width': _this.w / _this.$times + 'px',
            'height': _this.h / _this.$times + 'px'
        });
        // 工具框的位置
        var left = e.pageX - $(this).offset().left-_this.$tool.width()/2;
        var top = e.pageY - $(this).offset().top-_this.$tool.height()/2;
        // console.log(left,top);
        //最大获取区域限制
        var tw =_this.w-_this.$tool.width();
        var th = _this.h-_this.$tool.height();
        // 范围的限制
        if(left<=0){
            left=0;
        }else if(left>=tw){
            left = tw;
        }
        if(top<=0){
            top=0;
        }else if(top>=th){
            top = th;
        }
        // 改变在页面的位置 实现效果
        _this.$tool.css({
            'left':left+'px',
            'top':top+'px'
        });
        _this.$bigPic.css({
            'left':-left*_this.$times+'px',
            'top':-top*_this.$times+'px'
        });
    });

}