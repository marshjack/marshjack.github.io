var resumePic = {
    0: ['HTML+CSS/美丽说/index.html', 'html静态页面--美丽说'],
    1: ['HTML+CSS/王者荣耀/wzry.html', 'html静态页面--王者荣耀'],
    2: ['HTML+CSS/学成在线/index.html', 'html静态页面--学成在线'],
    3: ['javaScript/九宫格/index.html', 'js九宫格游戏'],
    4: ['javaScript/抽奖/index.html', 'js抽奖'],
    5: ['javaScript/购买界面/index.html', 'js魅族购买页面(放大镜+分类)'],
    6: ['jquery/无缝轮播封装/index.html', 'jquery无缝轮播封装'],
    7: ['jquery/配对游戏封装/index.html', 'jquery配对游戏'],
    8: ['bootstrap/model/index.html', 'bootstrap模特网站'],
    9:  ['bootstrap/Blog/index.html', 'bootstrap个人博客'],
    10: ['html5/拼图封装/index.html', 'html5拖拽拼图游戏'],
    11: ['html5/canvas验证/index.html', 'canvas验证'],
    12: ['html5/播放器/index.html', 'html5音乐播放器'],
    13: ['css3/btn.html', 'css3按钮'],
    14: ['css3/3d视觉.html', '3d视觉'],
    15: ['css3/chart.html', '3Dchart'],
    16:['Vue/网易云音乐/index.html','vue-cli网易云音乐'],
    17:['Vue/场库app/index.html','vant+vue全家桶模仿场库app']
};
for (let key in resumePic) {
    document.querySelector('#resProj .proj').innerHTML +=`<div class="item"><a href="${resumePic[key][0]}" target="_blank"><img src="./resume/images/${resumePic[key][1]}.jpg"><p>${resumePic[key][1]}</p></a>
</div>`;
}

$(document).scroll(function () {
    var topHeight = $(this).scrollTop();
    var height = $('.bigBoxHeight').height();
    topHeight >= height - 10 ? $('#resFix').show() : $('#resFix').hide();
    // 到达指定地方显示动画
    $("#resAbout").children().hide();
    $("#resEduca").children().hide();
    $("#resProj").children().hide();
    $("#resSkill").children().hide();
    $('#resContact').children().hide();
    if (topHeight >= height - 150) {
        $("#resAbout").children().show();
        $("#resAbout").find(".nTitle").addClass('slideInUp animated').end().find('.nHeader').addClass('slideInLeft animated').end().find(".nAboutCon").addClass('slideInRight animated');
    }
    if (topHeight >= height * 2 - 150) {
        $("#resEduca").children().show();
        $("#resEduca").find('.nTitle').addClass('slideInUp animated').end().find('.container').addClass('flipInY animated');
    }
    if (topHeight >= height * 3 - 150) {
        $("#resProj").children().show();
        $("#resProj").find('.nTitle').addClass('slideInUp animated');
        $("#resProj").find('.proj').addClass('jackInTheBox animated');
    }
    if (topHeight >= height * 4 - 150) {
        $("#resSkill").children().show();
        $("#resSkill").find('.nTitle').addClass('slideInUp animated').end().find('p').addClass('zoomInUp animated').end().find(".progress").addClass("zoomInLeft animated");
    }
    if (topHeight >= height * 5 - 150) {
        $("#resContact").children().show();
        $('#resContact').find('.nTitle').addClass('slideInUp animated').end().find('p').addClass('animated fadeInLeftBig').end().find('.code').addClass('animated jello');
    }
    // 导航栏动画
    $('#resFix ul li').each(index => {
        if (topHeight >= height * index - 5 && topHeight <= height * (index + 1)) {
            $("#resFix ul").children().children().removeClass('active');
            $("#resFix ul").children().eq(index).children().addClass('active');
        }
    });
});

// 锚点跳转动画函数
function smooth(selector) {
    $(selector).click(function (e) {
        // 阻止默认事件
        e.preventDefault();
        // 平滑跳转
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });
}

// 引用
$('.nControl').click(function () {
    $('html, body').animate({
        scrollTop: $('#resAbout').offset().top
    }, 1000);
});
smooth('#resNav ul li a');
smooth('#resFix ul li a');
