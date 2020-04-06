    var left = document.getElementById('car_lt');
    var right = document.getElementById('car_rt');
    var box = document.getElementById("carousel");
    var imgsrc = box.getElementsByTagName("img");
    var icon = document.getElementById("carsel_icon");
    var list = icon.getElementsByTagName("li");
    var timer;
    var index = 0;


    // 圆点选择 显示对应图片以及对应圆点
    for(var i=0; i<list.length;i++){
		list[i].r =i;
		list[i].onclick = function(){
			for(var j=0;j<list.length;j++){
				list[j].className="";
				imgsrc[j].className="";
			}
			this.className="on";
			imgsrc[this.r].className ="on";
		}
    }
    
    // 左按钮选择
    left.onclick = function() {
		index--;
		if (index < 0) {
			index = list.length - 1;
		}
		common();
    }
    // 右按钮选择
    right.onclick = function () { 
        index++;
        if(index>=list.length){
            index = 0;
        }
        common();
     }
     // 自动轮播实现
	timer = setInterval("setIntervalTimer()",2000);
	// 鼠标覆盖上去 轮播结束
	box.onmouseover = function(){
		clearInterval(timer);
    }
    // 鼠标移开 轮播继续
	box.onmouseleave = function(){
		timer = setInterval("setIntervalTimer()",2000);
    }
        // 循环函数 加入到时间里面
	function setIntervalTimer(){
		index++;
		if (index >= list.length) {
			index = 0;
		}
		common();
    }
        //通用函数 绑定对应的图片和圆点
	function common(){
		for(var j=0;j<list.length;j++){
			list[j].className="";
			imgsrc[j].className="";
		}
		list[index].className="on";
		imgsrc[index].className="on";
	}