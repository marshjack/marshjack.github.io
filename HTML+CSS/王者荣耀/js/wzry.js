// 广告栏
function gg(num) {
	var guangao = document.getElementsByClassName("guangao");
	for (var i = 0; i < guangao.length; i++) {
		guangao[i].classList.remove("active");
	}
	guangao[num - 1].classList.add("active");
	document.getElementById('ggImg').src = "images/banner" + num + ".jpg";
}
// 新闻栏
function nt(num) {
	var nt = document.getElementsByClassName("nt");
	for (var i = 0; i < nt.length; i++) {
		nt[i].classList.remove("active");
		document.getElementById("nl" + (i + 1)).style.cssText = "opacity:0; z-index: 1;";
	}
	nt[num - 1].classList.add('active');
	document.getElementById("nl" + num).style.cssText = "opacity:1; -webkit-transition: opacity 1s ease; z-index: 5;"
}
// 英雄类型选择
function tn(num) {
	var tn = document.getElementsByClassName("tn");
	for (var i = 0; i < tn.length; i++) {
		tn[i].classList.remove("active");
	}
	tn[num - 1].classList.add("active");
	createHero(num);
}
// 全部英雄
var qb = "蒙犽,鲁班大师,西施,马超,曜,云中君,瑶,盘古,猪八戒,嫦娥,上官婉儿,李信,沈梦溪,伽罗,盾山,司马懿,孙策,元歌,米莱狄,狂铁,弈星,裴擒虎,杨玉环,公孙离,明世隐,女娲,梦奇,苏烈,百里玄策,百里守约,铠,鬼谷子,干将莫邪,东皇太一,大乔,黄忠,诸葛亮,哪吒,太乙真人,蔡文姬,雅典娜,杨戬,成吉思汗,钟馗,虞姬,李元芳,张飞,刘备,后羿,牛魔,孙悟空,亚瑟,橘右京,娜可露露,不知火舞,张良,花木兰,兰陵王,王昭君,韩信,刘邦,姜子牙,露娜,程咬金,安琪拉,貂蝉,关羽,老夫子,武则天,项羽,达摩,狄仁杰,马可波罗,李白,宫本武藏,典韦,曹操,甄姬,夏侯惇,周瑜,吕布,芈月,白起,扁鹊,孙膑,钟无艳,阿轲,高渐离,刘禅,庄周,鲁班七号,孙尚香,嬴政,妲己,墨子,赵云,小乔,廉颇";
var qbList = qb.split(",");
// 坦克
var tk = "猪八戒,嫦娥,孙策,梦奇,苏烈,铠,东皇太一,太乙真人,张飞,牛魔,亚瑟,刘邦,程咬金,项羽,达摩,夏侯惇,吕布,芈月,白起,钟无艳,刘禅,庄周,廉颇";
var tkList = tk.split(",");
// 战士
var zs = "马超,曜,云中君,盘古,李信,孙策,狂铁,裴擒虎,苏烈,铠,哪吒,雅典娜,杨戬,钟馗,刘备,孙悟空,亚瑟,橘右京,花木兰,露娜,程咬金,关羽,老夫子,达摩,宫本武藏,典韦,曹操,夏侯惇,吕布,钟无艳,墨子,赵云";
var zsList = zs.split(",");
// 刺客
var ck = "马超,云中君,上官婉儿,司马懿,元歌,裴擒虎,百里玄策,百里守约,孙悟空,橘右京,娜可露露,不知火舞,花木兰,兰陵王,韩信,貂蝉,李白,阿轲,赵云";
var ckList = ck.split(",");
// 法师
var fs = "西施,嫦娥,上官婉儿,沈梦溪,司马懿,米莱狄,弈星,杨玉环,女娲,干将莫邪,诸葛亮,钟馗,不知火舞,张良,王昭君,姜子牙,露娜,安琪拉,貂蝉,武则天,甄姬,周瑜,芈月,扁鹊,孙膑,高渐离,嬴政,妲己,墨子,小乔";
var fsList = fs.split(",");
// 射手
var ss = "蒙犽,伽罗,公孙离,百里守约,黄忠,成吉思汗,虞姬,李元芳,后羿,狄仁杰,马可波罗,鲁班七号,孙尚香";
var ssList = ss.split(",");
// 辅助
var fz = "鲁班大师,瑶,盾山,杨玉环,明世隐,鬼谷子,大乔,太乙真人,蔡文姬,张飞,牛魔,姜子牙,孙膑,刘禅,庄周";
var fzList = fz.split(",");
//创建英雄列表
function createHero(num) {
	var ul = document.getElementById("heroList");
	//清空子元素
	ul.innerHTML = "";
	// 选中类型
	var chList;
	switch (num) {
		case 1:
			chList = qbList;
			break;
		case 2:
			chList = tkList;
			break;
		case 3:
			chList = zsList;
			break;
		case 4:
			chList = ckList;
			break;
		case 5:
			chList = fsList;
			break;
		case 6:
			chList = ssList;
			break;
		case 7:
			chList = fzList;
			break;
	}
	// 创建元素
	for (var i = 0; i < chList.length; i++) {
		var li = document.createElement("li");
		var a = document.createElement("a");
		var img = document.createElement("img");
		img.src = "./images/" + chList[i] + ".jpg";
		a.href = "#";
		a.appendChild(img);
		a.innerHTML += chList[i];
		li.appendChild(a);
		ul.appendChild(li);
	}
}
//英雄搜索框
function findHero() {
	//更改类型为“全部”
	tn(1);
	var ul = document.getElementById("heroList");
	//清空子元素
	ul.innerHTML = "";
	var value = document.getElementById('find').value;
	var arr = [];
	for (var i = 0; i < qbList.length; i++) {
		// 模糊匹配
		if (qbList[i].indexOf(value) >= 0) {
			arr.push(qbList[i]);
		}
	}
	// 创建元素
	if (arr.length > 0) {
		for (var i = 0; i < arr.length; i++) {
			var li = document.createElement("li");
			var a = document.createElement("a");
			var img = document.createElement("img");
			img.src = "./images/" + arr[i] + ".jpg";
			a.href = "#";
			a.appendChild(img);
			a.innerHTML += arr[i];
			li.appendChild(a);
			ul.appendChild(li);
		}
	}
}