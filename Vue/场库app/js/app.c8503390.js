(function(t){function e(e){for(var n,s,r=e[0],c=e[1],l=e[2],d=0,h=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&h.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(h.length)h.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},o=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"18d5":function(t,e,a){t.exports=a.p+"img/user.42b1e9a9.jpg"},"1f37":function(t,e,a){"use strict";var n=a("55e7"),i=a.n(n);i.a},2395:function(t,e,a){},"279d":function(t,e,a){"use strict";var n=a("d046"),i=a.n(n);i.a},"2ea2":function(t,e,a){},"34b8":function(t,e,a){},4736:function(t,e,a){"use strict";var n=a("f0e6"),i=a.n(n);i.a},"4f1d":function(t,e,a){"use strict";var n=a("d6aa"),i=a.n(n);i.a},"4ff7":function(t,e,a){"use strict";var n=a("5778"),i=a.n(n);i.a},"55e7":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n,i,o=a("2b0e"),s=(a("d3b7"),a("bc3a")),r=a.n(s),c=a("ade3"),l=a("2f62"),u={CALENDAR_DATA:"CALENDAR_DATA",INIT_INDEX_DATA:"INIT_INDEX_DATA",GET_MORE_HISTORY_DATA:"GET_MORE_HISTORY_DATA",CHANNEL_INDEX_DATA:"CHANNEL_INDEX_DATA",CHANNEL_DETAIL_DATA:"CHANNEL_DETAIL_DATA",VIDEO_DETAIL_DATA:"VIDEO_DETAIL_DATA",HOT_SEARCH_GET:"HOT_SEARCH_GET",SEARCH_KEY_WORD:"SEARCH_KEY_WORD"},d=function(){return window.axios.get("/apiv3/index/index").catch((function(t){console.log(t)}))},h=function(t){return window.axios.get(t).catch((function(t){console.log(t)}))},f=function(){return window.axios.get("/apiv3/DayCover/getDayCover").catch((function(t){console.log(t)}))},m=function(t){return window.axios.get("/apiv3/post/view",{params:{postid:t}}).catch((function(t){console.log(t)}))},v=function(){return window.axios.get("/apiv3/cate/getList").catch((function(t){console.log(t)}))},p=function(t,e){return window.axios.get("/apiv3/post/getPostByTab",{params:{p:t,size:10,tab:e}}).catch((function(t){console.log(t)}))},_=function(t,e){return window.axios.get("/apiv3/post/getPostInCate",{params:{p:t,size:10,cateid:e}}).catch((function(t){console.log(t)}))},D=function(){return window.axios.get("apiv3/search/index").catch((function(t){console.log(t)}))},w=function(t){return window.axios.get("apiv3/search",{params:{kw:t}}).catch((function(t){console.log(t)}))};o["a"].use(l["a"]);var g=new l["a"].Store({state:{indexData:{},historyData:[],calendarData:[],channelData:[],tabData:[],detailData:[],hotSearchData:{},searchKeywords:[],loading:!1},mutations:(n={},Object(c["a"])(n,u.CALENDAR_DATA,(function(t,e){t.calendarData=e.result})),Object(c["a"])(n,u.INIT_INDEX_DATA,(function(t,e){t.indexData=e.result})),Object(c["a"])(n,u.GET_MORE_HISTORY_DATA,(function(t,e){t.historyData.push(e.result)})),Object(c["a"])(n,u.CHANNEL_INDEX_DATA,(function(t,e){t.channelData=e.result})),Object(c["a"])(n,u.CHANNEL_DETAIL_DATA,(function(t,e){t.tabData=e.result})),Object(c["a"])(n,u.VIDEO_DETAIL_DATA,(function(t,e){t.detailData=e.result})),Object(c["a"])(n,u.HOT_SEARCH_GET,(function(t,e){t.hotSearchData=e.result})),Object(c["a"])(n,u.SEARCH_KEY_WORD,(function(t,e){t.searchKeywords=e.result})),Object(c["a"])(n,"showLoading",(function(t){t.loading=!0})),Object(c["a"])(n,"hideLoading",(function(t){t.loading=!1})),n),actions:(i={},Object(c["a"])(i,u.CALENDAR_DATA,(function(t){var e=JSON.parse(window.localStorage.getItem("calendarData"));e&&e.expires>Date.now()?t.commit(u.CALENDAR_DATA,{result:e.result}):f().then((function(e){window.localStorage.setItem("calendarData",JSON.stringify({expires:Date.now()+36e5,result:e.data.data})),t.commit(u.CALENDAR_DATA,{result:e.data.data})}))})),Object(c["a"])(i,u.INIT_INDEX_DATA,(function(t){var e=JSON.parse(window.localStorage.getItem("IndexData"));e&&e.expires>Date.now()?t.commit(u.INIT_INDEX_DATA,{result:e.result}):d().then((function(e){window.localStorage.setItem("IndexData",JSON.stringify({expires:Date.now()+6e5,result:e.data.data})),t.commit(u.INIT_INDEX_DATA,{result:e.data.data})}))})),Object(c["a"])(i,u.CHANNEL_INDEX_DATA,(function(t){var e=JSON.parse(window.localStorage.getItem("channelData"));e&&e.expires>Date.now()?t.commit(u.CHANNEL_INDEX_DATA,{result:e.result}):v().then((function(e){window.localStorage.setItem("channelData",JSON.stringify({expires:Date.now()+36e5,result:e.data.data})),t.commit(u.CHANNEL_INDEX_DATA,{result:e.data.data})}))})),Object(c["a"])(i,u.CHANNEL_DETAIL_DATA,(function(t,e){var a=JSON.parse(window.localStorage.getItem("tabData"+e.num));a&&a.expires>Date.now()?t.commit(u.CHANNEL_DETAIL_DATA,{result:a.result}):"0"!=t.state.channelData[e.num].cate_type?p(e.p,e.tab).then((function(a){window.localStorage.setItem("tabData"+e.num,JSON.stringify({expires:Date.now()+36e5,result:a.data.data})),t.commit(u.CHANNEL_DETAIL_DATA,{result:a.data.data})})):_(e.p,e.id).then((function(a){window.localStorage.setItem("tabData"+e.num,JSON.stringify({expires:Date.now()+36e5,result:a.data.data})),t.commit(u.CHANNEL_DETAIL_DATA,{result:a.data.data})}))})),Object(c["a"])(i,u.VIDEO_DETAIL_DATA,(function(t,e){var a=JSON.parse(window.localStorage.getItem("videoData"+e));a&&a.expires>Date.now()?t.commit(u.VIDEO_DETAIL_DATA,{result:a.result}):m(e).then((function(a){window.localStorage.setItem("videoData"+e,JSON.stringify({expires:Date.now()+864e5,result:a.data.data})),t.commit(u.VIDEO_DETAIL_DATA,{result:a.data.data})}))})),Object(c["a"])(i,u.HOT_SEARCH_GET,(function(t){var e=JSON.parse(window.localStorage.getItem("hotSearch"));e&&e.expires>Date.now()?t.commit(u.HOT_SEARCH_GET,{result:e.result}):D().then((function(e){window.localStorage.setItem("hotSearch",JSON.stringify({expires:Date.now()+432e5,result:e.data.data})),t.commit(u.HOT_SEARCH_GET,{result:e.data.data})}))})),Object(c["a"])(i,u.SEARCH_KEY_WORD,(function(t,e){w(e).then((function(e){t.commit(u.SEARCH_KEY_WORD,{result:e.data.data.result.list})}))})),i),modules:{}}),A={baseURL:"https://api.kele8.cn/agent/https://app.vmovier.com"},b=r.a.create(A);b.interceptors.request.use((function(t){return g.commit("showLoading"),t}),(function(t){return Promise.reject(t)})),b.interceptors.response.use((function(t){return g.commit("hideLoading"),t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=b,window.axios=b,Object.defineProperties(t.prototype,{axios:{get:function(){return b}},$axios:{get:function(){return b}}})},o["a"].use(Plugin);Plugin;var T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"},on:{touchstart:t.touchstart,touchend:t.touchend}},[a("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[t.showCalendar?a("Calendar",{attrs:{calendarData:t.calendarData},on:{calendar:function(e){t.showCalendar=e}}}):t._e()],1),t.calendarData.time?a("NavBar",{attrs:{calendarData:t.calendarData.time.day},on:{calendar:function(e){t.showCalendar=e}}}):t._e(),a("router-view"),a("loading",{attrs:{showLoading:this.$store.state.loading}})],1)},O=[],E=a("5530"),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"nav"}},[a("van-nav-bar",{staticClass:"navBar",attrs:{fixed:"",placeholder:!0,"z-index":"2"},on:{"click-left":function(e){return t.$emit("calendar",!0)},"click-right":function(e){t.searchBox=!0}},scopedSlots:t._u([{key:"left",fn:function(){return[a("van-icon",{attrs:{name:"calender-o"}},[a("span",[t._v(t._s(t.calendarData))])])]},proxy:!0},{key:"title",fn:function(){return[a("van-tabs",{on:{click:t.cngTab},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("van-tab",{attrs:{title:"发现",name:"/"}}),a("van-tab",{attrs:{title:"频道",name:"/channel"}}),a("van-tab",{attrs:{title:"我的",name:"/person"}})],1)]},proxy:!0},{key:"right",fn:function(){return[a("van-icon",{attrs:{name:"search","data-name":"search"}})]},proxy:!0}])}),t.searchBox?a("Search",{on:{searchShow:function(e){t.searchBox=e}}}):t._e()],1)},S=[],x=(a("ac1f"),a("5319"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search"},[a("div",{staticClass:"head"},[a("div",{staticClass:"input"},[a("van-icon",{attrs:{name:"search"}}),a("form",{attrs:{action:"javascript:void(0)"},on:{submit:t.getSearchData}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],attrs:{type:"text",placeholder:"请输入要搜索的内容"},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}})]),a("van-icon",{directives:[{name:"show",rawName:"v-show",value:""!=t.searchText,expression:"searchText!=''"}],attrs:{name:"close"},on:{click:function(e){return t.defaultShow()}}})],1),a("span",{on:{click:function(e){return t.$emit("searchShow",!1)}}},[t._v("取消")])]),t.submitData?[a("van-dropdown-menu",[a("van-dropdown-item",{attrs:{options:t.option1},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),a("van-dropdown-item",{attrs:{options:t.option2},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}}),a("van-dropdown-item",{ref:"item",attrs:{title:"全部频道"}},[a("div",{staticClass:"hotBox"},t._l(t.searchFilterCate,(function(e,n){return a("span",{key:n,on:{click:function(a){return t.onConfirm(e.catename)}}},[t._v(t._s(e.catename))])})),0)])],1),a("div",{staticClass:"showSearchData"},t._l(t.searchKeywords,(function(t,e){return a("ViewPart",{key:e,attrs:{item:t}})})),1)]:[a("div",{staticClass:"hotSearch"},[a("h3",[t._v("热门搜索")]),a("div",{staticClass:"hotBox"},t._l(t.hotSearch,(function(e,n){return a("span",{key:n,on:{click:function(a){return t.searchItem(e.kw)}}},[t._v(t._s(e.kw))])})),0)]),a("div",{staticClass:"history"},[a("h3",[t._v("搜索历史")]),t.hasHistory?[a("div",{staticClass:"hotBox"},t._l(t.historyData,(function(e,n){return a("span",{key:n,on:{click:function(a){return t.searchItem(e)}}},[t._v(t._s(e))])})),0),a("div",{staticClass:"none",on:{click:function(e){return t.clearAll()}}},[a("span",[t._v("清除所有搜索记录")])])]:[t._m(0)]],2)]],2)}),y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"none"},[a("span",[t._v("还没有任何搜索记录")])])}],I=(a("4de4"),a("c975"),a("d81d"),a("25f0"),a("498a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"part"},[a("img",{attrs:{src:t.item.image},on:{click:t.getToView}}),a("div",{staticClass:"mask"}),a("div",{staticClass:"con"},[a("p",{staticClass:"text"},[t._l(t.item.cates,(function(e,n){return a("span",{key:n},[t._v(t._s(e.catename))])})),a("span",[t._v("/")]),a("span",[t._v(t._s(t.cngTime(t.item.duration)))])],2),a("p",{staticClass:"title"},[t._v(t._s(t.item.title))])]),a("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated fadeInUpBig\n","leave-active-class":"animated fadeOutDownBig"}},[t.videoDetailShow?a("video-detail",{on:{videoShow:function(e){t.videoDetailShow=e}}}):t._e()],1)],1)}),N=[],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"video"},[a("van-nav-bar",{attrs:{"left-arrow":"",fixed:"","z-index":"7"},on:{"click-left":function(e){return t.$emit("videoShow",!1)}}}),t.VideoData.content_video[0]?a("video",{attrs:{src:t.VideoData.content_video[0].progressive[0].url,controls:"",autoplay:""}}):t._e(),a("div",{staticClass:"con"},[a("h3",[t._v(t._s(t.VideoData.title))]),a("div",{staticClass:"sec"},[a("span",[t._v(t._s(t.showCate(t.VideoData.cate)))]),a("span",[t._v("/")]),a("span",[t._v(t._s(t.cngTime(t.VideoData.duration)))])]),a("p",{staticClass:"van-multi-ellipsis--l3"},[t._v(t._s(t.VideoData.intro))]),a("span",{staticClass:"showArticle"},[t._v("阅读全文->")])]),t.VideoData.author?a("div",{staticClass:"author"},[a("div",{staticClass:"lt"},[a("img",{attrs:{src:t.VideoData.author.profile.avatar,alt:""}})]),a("div",{staticClass:"center"},[a("h3",[t._v(t._s(t.VideoData.author.profile.username))]),a("span",[t._v("片中职务："+t._s(t.VideoData.author.roles))])]),a("div",{staticClass:"rt"},[a("van-icon",{attrs:{name:"arrow"}})],1)]):t._e(),t._l(t.VideoData.relate_video,(function(t,e){return a("SuggestVideo",{key:e,attrs:{relate:t}})})),a("VideoComment",{attrs:{comment:t.VideoData.comment}})],2)},j=[],L=(a("a15b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"suggest"},[a("div",{staticClass:"title"},[a("span",[t._v(t._s(t.relate.name))]),t._v(" "),a("span",[t._v("more")])]),a("van-swipe",{attrs:{loop:!1,width:200,"show-indicators":!1}},t._l(t.relate.list,(function(e,n){return a("van-swipe-item",{key:n,on:{click:function(a){return t.getToView(e.postid)}}},[a("img",{attrs:{src:e.image}}),a("div",{staticClass:"msg"},[a("span",[t._v(t._s(t.cngTime(e.duration)))]),a("h3",{staticClass:"van-ellipsis"},[t._v(t._s(e.title))])])])})),1)],1)}),H=[],$={name:"SuggestVideo",props:["relate"],methods:{cngTime:function(t){var e=parseInt(t/60%60),a=parseInt(t%60);return e=e<10?"0"+e:e,a=a<10?"0"+a:a,e+"'"+a+'"'},getToView:function(t){this.$store.dispatch(u.VIDEO_DETAIL_DATA,t)}}},V=$,R=(a("b4eb"),a("2877")),P=Object(R["a"])(V,L,H,!1,null,null,null),X=P.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment"},[a("h3",[t._v(t._s(t.comment.total)+"条评论")]),t._l(t.comment.list,(function(e,n){return a("div",{key:n,staticClass:"comMsg"},[a("div",{staticClass:"left"},[a("img",{attrs:{src:e.userinfo.avatar,alt:""}})]),a("div",{staticClass:"right"},[a("div",{staticClass:"commentTit"},[a("div",{staticClass:"lt"},[a("h4",[t._v(t._s(e.userinfo.username))]),a("span",[t._v(t._s(t.timeago(e.addtime)))])]),a("div",{staticClass:"rt"},[a("van-icon",{attrs:{name:"good-job-o"}}),a("span",[t._v(t._s(e.count_approve))])],1)]),a("div",{staticClass:"commentCon"},[t._v(" "+t._s(e.content)+" ")])])])}))],2)},J=[],Y={name:"VideoComment",props:["comment"],methods:{timeago:function(t){var e=6e4,a=60*e,n=24*a,i=7*n,o=30*n,s=(new Date).getTime(),r=s-1e3*t;if(r<0)return"传入的时间戳大于当前时间戳";var c,l=r/e,u=r/a,d=r/n,h=r/i,f=r/o;return c=f>=1&&f<=3?" "+parseInt(f)+"月前":h>=1&&h<=3?" "+parseInt(h)+"周前":d>=1&&d<=6?" "+parseInt(d)+"天前":u>=1&&u<=23?" "+parseInt(u)+"小时前":l>=1&&l<=59?" "+parseInt(l)+"分钟前":r>=0&&r<=e?"刚刚":"远古时期",c}}},G=Y,K=(a("c93a"),Object(R["a"])(G,B,J,!1,null,null,null)),M=K.exports,W={name:"VideoDetail",components:{SuggestVideo:X,VideoComment:M},data:function(){return{clickShow:!1}},methods:{cngTime:function(t){var e=parseInt(t/60%60),a=parseInt(t%60);return e=e<10?"0"+e:e,a=a<10?"0"+a:a,e+"'"+a+'"'},showCate:function(t){return t.map((function(t){return t})).join("/")}},computed:Object(E["a"])({},Object(l["c"])({VideoData:function(t){return t.detailData}}))},F=W,z=(a("279d"),Object(R["a"])(F,k,j,!1,null,null,null)),U=z.exports,q={name:"ViewPart",components:{VideoDetail:U},props:{item:Object},data:function(){return{videoDetailShow:!1}},methods:{cngTime:function(t){var e=parseInt(t/60%60),a=parseInt(t%60);return e=e<10?"0"+e:e,a=a<10?"0"+a:a,e+"'"+a+'"'},getToView:function(){this.$store.dispatch(u.VIDEO_DETAIL_DATA,this.item.postid),this.videoDetailShow=!0}}},Q=q,Z=(a("1f37"),Object(R["a"])(Q,I,N,!1,null,"6297e39c",null)),tt=Z.exports,et={name:"Search",components:{ViewPart:tt},data:function(){return{searchText:"",submitData:!1,historyData:[],value1:null,value2:null}},computed:Object(E["a"])(Object(E["a"])({},Object(l["c"])({hotSearch:function(t){return t.hotSearchData.recommend_keywords},searchFilterType:function(t){return t.hotSearchData.filter.type},searchFilterCate:function(t){return t.hotSearchData.filter.cate},searchOrder:function(t){return t.hotSearchData.order},searchKeywords:function(t){return t.searchKeywords}})),{},{hasHistory:function(){return this.historyData.length>0},option1:function(){return this.searchFilterType.map((function(t){return{text:t.key,value:t.value}}))},option2:function(){return this.searchOrder.map((function(t){return{text:t.key,value:t.value}}))}}),methods:{getSearchData:function(){""!=this.searchText.toString().trim()&&(this.submitData=!0,this.$store.dispatch(u.SEARCH_KEY_WORD,this.searchText.toString().trim()),this.historyData.push(this.searchText.toString().trim()),this.historyData=this.historyData.filter((function(t,e,a){return a.indexOf(t)===e})),window.localStorage.setItem("historyData",JSON.stringify(this.historyData)))},defaultShow:function(){this.searchText="",this.submitData=!1},searchItem:function(t){this.searchText=t,this.getSearchData()},clearAll:function(){window.localStorage.removeItem("historyData"),this.historyData=[]},onConfirm:function(t){this.$refs.item.toggle(),this.searchItem(t)}},created:function(){this.$store.dispatch(u.HOT_SEARCH_GET),this.value1=this.searchFilterType[0].value,this.value2=this.searchOrder[0].value;var t=JSON.parse(window.localStorage.getItem("historyData"));t&&(this.historyData=t)}},at=et,nt=(a("4f1d"),Object(R["a"])(at,x,y,!1,null,null,null)),it=nt.exports,ot={name:"NavBar",props:["calendarData"],components:{Search:it},data:function(){return{activeName:"/",searchBox:!1}},methods:{cngTab:function(t){switch(t){case"/":this.$router.replace("/").catch((function(t){})),this.activeName="/";break;case"/channel":this.$router.replace("channel").catch((function(t){})),this.activeName="/channel";break;case"/person":this.$router.replace("person").catch((function(t){})),this.activeName="/person";break}}},watch:{$route:function(t){this.cngTab(t.path)}},created:function(){this.cngTab(this.activeName)}},st=ot,rt=(a("7191"),Object(R["a"])(st,C,S,!1,null,null,null)),ct=rt.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"calendar",style:{backgroundImage:"url("+t.calendarData.image_blurred+")"}},[a("van-icon",{attrs:{name:"cross"},on:{click:function(e){return e.stopPropagation(),t.$emit("calendar",!1)}}}),a("div",{staticClass:"showList"},[a("div",{staticClass:"pic",style:{backgroundImage:"url("+t.calendarData.image+")"}},[a("div",{staticClass:"date"},[a("span",[t._v(t._s(t.calendarData.time.day))]),a("div",{staticClass:"bigDate"},[a("p",[t._v(t._s(t.calendarData.time.month))]),a("p",[t._v(t._s(t.calendarData.time.week))])])])]),a("div",{staticClass:"text"},[a("h3",[t._v(t._s(t.calendarData.title))]),a("p",[t._v(t._s(t.calendarData.content))])])])],1)},ut=[],dt={name:"calendar",props:{calendarData:Object}},ht=dt,ft=(a("4736"),Object(R["a"])(ht,lt,ut,!1,null,null,null)),mt=ft.exports,vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.showLoading?a("div",{staticClass:"loading"},[a("van-loading")],1):t._e()},pt=[],_t={name:"loading",props:{showLoading:Boolean}},Dt=_t,wt=(a("d887"),Object(R["a"])(Dt,vt,pt,!1,null,"d87ed230",null)),gt=wt.exports,At={components:{NavBar:ct,Calendar:mt,Loading:gt},data:function(){return{showCalendar:!1}},computed:Object(E["a"])({},Object(l["c"])({calendarData:function(t){return t.calendarData}})),created:function(){this.$store.dispatch(u.CALENDAR_DATA)},methods:{touchstart:function(t){this.touchstartX=t.changedTouches[0].clientX,this.touchstartY=t.changedTouches[0].clientY},touchend:function(t){t.changedTouches[0].clientX-this.touchstartX>150&&(this.touchstartX=0,this.touchstartY=0,this.routerBack()),t.changedTouches[0].clientX-this.touchstartX<-150&&this.routerForward()},routerBack:function(){this.$router.back()},routerForward:function(){this.$router.forward()}}},bt=At,Tt=(a("7c55"),Object(R["a"])(bt,T,O,!1,null,null,null)),Ot=Tt.exports,Et=a("8c4f"),Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[t.banner?a("van-swipe",{attrs:{autoplay:3e3}},[t._l(t.banner.list,(function(t,e){return a("van-swipe-item",{key:e},[a("img",{attrs:{src:t.image}})])}))],2):t._e(),t.today?a("view-section",{attrs:{viewShow:t.today.list}},[t._v("今天")]):t._e(),t.hot?a("view-section",{attrs:{viewShow:t.hot.list,isWrap:!0}},[t._v("热门")]):t._e(),t.album?a("view-section",{attrs:{viewShow:t.album.list}},[t._v("专题")]):t._e(),t.posts?a("view-section",{attrs:{viewShow:t.posts.list}},[t._v(t._s(t.posts.selection_title))]):t._e(),a("van-list",{attrs:{finished:t.finished,offset:5,"finished-text":"没有更多了..."},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.historyData,(function(e,n){return a("section",{key:n},[a("view-section",{attrs:{viewShow:e.data.list}},[t._v(t._s(e.data.selection_title))])],1)})),0)],1)},St=[],xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section",class:{wrap:t.isWrap}},[a("h3",[t._t("default")],2),t._l(t.viewShow,(function(t,e){return a("view-part",{key:e,attrs:{item:t}})}))],2)},yt=[],It={name:"ViewSection",components:{ViewPart:tt},props:{viewShow:Array,isWrap:Boolean}},Nt=It,kt=(a("4ff7"),Object(R["a"])(Nt,xt,yt,!1,null,"3013b98c",null)),jt=kt.exports,Lt={name:"Home",components:{ViewSection:jt},data:function(){return{loading:!1,finished:!1}},computed:Object(E["a"])({},Object(l["c"])({banner:function(t){return t.indexData.banner},album:function(t){return t.indexData.album},hot:function(t){return t.indexData.hot},posts:function(t){return t.indexData.posts},today:function(t){return t.indexData.today},historyData:function(t){return t.historyData}})),methods:Object(E["a"])(Object(E["a"])({},Object(l["b"])([u.INIT_INDEX_DATA,u.GET_MORE_HISTORY_DATA])),{},{onLoad:function(){var t,e=this;void 0!=this.posts&&(t=0===this.historyData.length?this.posts.next_page_url:this.historyData[this.historyData.length-1].data.next_page_url,this.historyData.length>14?this.finished=!0:h(t).then((function(t){setTimeout((function(){e.loading=!1,e.$store.commit(u.GET_MORE_HISTORY_DATA,{result:t.data})}),2e3)})))}}),created:function(){this.$store.dispatch(u.INIT_INDEX_DATA)}},Ht=Lt,$t=(a("de16"),Object(R["a"])(Ht,Ct,St,!1,null,null,null)),Vt=$t.exports,Rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"channel"},[t._l(t.showData,(function(e,n){return a("channel-show",{key:n,attrs:{theme:e,num:n},on:{detailShow:function(e){t.detailShow=e},channelDetailData:function(e){t.channelDetailData=e}}},[t._v(t._s(e.catename))])})),a("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutRight"}},[t.detailShow?a("ChannelDetail",{attrs:{detailData:t.detailData,channelDetailData:t.channelDetailData},on:{detailShow:function(e){t.detailShow=e}}}):t._e()],1)],2)},Pt=[],Xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"show",on:{click:function(e){return t.load()}}},[a("div",{staticClass:"pic"},[a("img",{attrs:{src:t.theme.icon}}),a("h3",[t._v("#"),t._t("default"),t._v("#")],2)])])},Bt=[],Jt={name:"ChannelShow",props:["theme","num"],methods:{load:function(){this.$store.dispatch(u.CHANNEL_DETAIL_DATA,{num:this.num,p:1,tab:this.theme.tab,id:void 0!=this.theme.cateid?this.theme.cateid:0});var t=this;this.$emit("channelDetailData",{num:t.num,title:t.theme.catename,tab:t.theme.tab,id:void 0!=t.theme.cateid?t.theme.cateid:0}),this.$emit("detailShow",!0)}}},Yt=Jt,Gt=(a("5d62"),Object(R["a"])(Yt,Xt,Bt,!1,null,"551953d0",null)),Kt=Gt.exports,Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail"},[t.channelDetailData?a("van-nav-bar",{attrs:{fixed:"","left-arrow":"",title:t.channelDetailData.title},on:{"click-left":function(e){return t.$emit("detailShow",!1)}}}):t._e(),t._l(t.detailData,(function(t,e){return a("view-part",{key:e,attrs:{item:t}})})),a("van-list",{attrs:{finished:t.finished,offset:5,"finished-text":"没有更多了"},on:{load:function(e){return t.onLoad()}},model:{value:t.showNext,callback:function(e){t.showNext=e},expression:"showNext"}},t._l(t.showDetailList,(function(e,n){return a("section",{key:n},t._l(e,(function(t,e){return a("view-part",{key:e,attrs:{item:t}})})),1)})),0)],2)},Wt=[],Ft={name:"ChannelDetail",components:{ViewPart:tt},data:function(){return{finished:!1,showNext:!1,n:1,showDetailList:[]}},methods:{onLoad:function(){var t=this;setTimeout((function(){t.n=t.n+1;var e=t;"0"!=t.$store.state.channelData[t.channelDetailData.num].cate_type?p(e.n,e.channelDetailData.tab).then((function(t){e.showDetailList.push(t.data.data)})):_(e.n,e.channelDetailData.id).then((function(t){e.showDetailList.push(t.data.data)})),t.showNext=!1}),3e3),this.showDetailList.length>5&&(this.finished=!0)}},props:["detailData","channelDetailData"]},zt=Ft,Ut=(a("e280"),Object(R["a"])(zt,Mt,Wt,!1,null,null,null)),qt=Ut.exports,Qt={name:"Channel",components:{ChannelShow:Kt,ChannelDetail:qt},data:function(){return{detailShow:!1,channelDetailData:{}}},computed:Object(E["a"])({},Object(l["c"])({showData:function(t){return t.channelData},detailData:function(t){return t.tabData}})),created:function(){this.$store.dispatch(u.CHANNEL_INDEX_DATA,{n:10})}},Zt=Qt,te=(a("c461"),Object(R["a"])(Zt,Rt,Pt,!1,null,"6eec9df6",null)),ee=te.exports,ae=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"person"},[t._m(0),a("main",t._l(t.classifyOne,(function(t,e){return a("van-cell",{key:e,attrs:{title:t.title,icon:t.icon,"is-link":""}})})),1),a("footer",t._l(t.classifyTwo,(function(t,e){return a("van-cell",{key:e,attrs:{title:t.title,icon:t.icon,"is-link":""}})})),1)])},ne=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("img",{attrs:{src:a("18d5"),alt:""}}),n("h3",[t._v("点击登录")])])}],ie={name:"Person",data:function(){return{classifyOne:[{title:"我的喜欢",icon:"like-o"},{title:"离线缓存",icon:"down"},{title:"播放历史",icon:"clock-o"},{title:"我的消息",icon:"bulb-o"}],classifyTwo:[{title:"设置",icon:"setting-o"},{title:"问题反馈",icon:"edit"}]}}},oe=ie,se=(a("cff0"),Object(R["a"])(oe,ae,ne,!1,null,null,null)),re=se.exports;o["a"].use(Et["a"]);var ce=[{path:"/",name:"Home",component:Vt},{path:"/channel",name:"Channel",component:ee},{path:"/person",name:"Person",component:re}],le=new Et["a"]({routes:ce,mode:"history"}),ue=le,de=a("b970");a("157a");o["a"].use(de["a"]),o["a"].config.productionTip=!1,new o["a"]({router:ue,store:g,render:function(t){return t(Ot)}}).$mount("#app")},5778:function(t,e,a){},"5c32":function(t,e,a){},"5d62":function(t,e,a){"use strict";var n=a("d1fe"),i=a.n(n);i.a},"6a12":function(t,e,a){},7191:function(t,e,a){"use strict";var n=a("34b8"),i=a.n(n);i.a},"7c55":function(t,e,a){"use strict";var n=a("2395"),i=a.n(n);i.a},"8d91":function(t,e,a){},b4eb:function(t,e,a){"use strict";var n=a("e366"),i=a.n(n);i.a},c461:function(t,e,a){"use strict";var n=a("c8a1"),i=a.n(n);i.a},c8a1:function(t,e,a){},c93a:function(t,e,a){"use strict";var n=a("f5d0"),i=a.n(n);i.a},cff0:function(t,e,a){"use strict";var n=a("6a12"),i=a.n(n);i.a},d046:function(t,e,a){},d1fe:function(t,e,a){},d6aa:function(t,e,a){},d887:function(t,e,a){"use strict";var n=a("2ea2"),i=a.n(n);i.a},de16:function(t,e,a){"use strict";var n=a("8d91"),i=a.n(n);i.a},e280:function(t,e,a){"use strict";var n=a("5c32"),i=a.n(n);i.a},e366:function(t,e,a){},f0e6:function(t,e,a){},f5d0:function(t,e,a){}});
//# sourceMappingURL=app.c8503390.js.map