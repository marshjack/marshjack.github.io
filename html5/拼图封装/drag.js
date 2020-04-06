function Drag(ul, lis, array,button) {
    this.ul = ul;
    this.lis = lis;
    this.array = array;
    this.button = button;
    this.init();
    this.drag();
}
Drag.prototype.init = function () {
    var that = this;
    this.lis.forEach(function (elem, index) {
        elem.style.backgroundPosition = that.array[index];
    });
    // 乱序
    this.arr1 = this.array.concat();
    this.arr1.sort(function () {
        return Math.random() - 0.5;
    });
};
Drag.prototype.drag = function () {
    var that = this;
    this.button.onclick = function () {
        that.lis.forEach(function (elem, index) {
            // 打乱数据放入页面
            elem.style.backgroundPosition = that.arr1[index];
            // 允许拖拽
            elem.draggable = true;
            // 开始拖拽
            elem.ondragstart = function (e) {
                // console.log(this.style.backgroundPosition);
                // 数组保存 数据
                var arr = [this.style.backgroundPosition, index];
                e.dataTransfer.setData("Text", arr);
            };
            elem.ondrop = function (e) {
                //新数据
                var newData = this.style.backgroundPosition;
                var data1 = e.dataTransfer.getData('Text');
                // 字符串转数组

                var data2 = data1.split(',', 2);
                // console.log(newData);
                // console.log(data1);
                //新数据替换原位置的
                that.lis[data2[1]].style.backgroundPosition = newData;
                this.style.backgroundPosition = data2[0];
            };
            // 经过 和 离开 阻止默认事件
            elem.ondragover = function (e) {
                e.preventDefault();
            };
            elem.ondragleave = function (e) {
                e.preventDefault();
            };
        });
    };
};