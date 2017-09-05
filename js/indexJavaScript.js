window.onload = function() {
	var Li = t$("wrap").children[0].offsetWidth; //获取单个图片li的宽
	var btn = document.getElementById("btn").children; //获取底部圆圈
	var obannerimg = document.getElementById("wrap").children; //获取li
	var cbannerimg = obannerimg[0].cloneNode(true) //克隆
	t$("wrap").appendChild(cbannerimg);
	t$("wrap").style.width = Li * obannerimg.length + "px"
	/* 右按钮*/
	var num = 0;

	t$("right").onclick = function() {
		num++;

		if(num >= obannerimg.length) {
			num = 1;
			//t$("wrap").style.transition = ""
			t$("wrap").style.left = 0 + "px";
		}
		// t$("wrap").style.transition = "left 3s"
		// t$("wrap").style.left = -Li*num+"px";
		move(t$("wrap"), "left", -Li * num);

		/*底部小圆圈*/

		for(var j in btn) {
			btn[j].className = "ccc";
		}
		if(num == obannerimg.length - 1) {
			btn[0].className = "black";
		} else {
			btn[num].className = "black";
		}

	}

	/* 左按钮*/
	t$("left").onclick = function() {
		num--;
		if(num < 0) {
			num = obannerimg.length - 2;
			t$("wrap").style.left = -Li * (obannerimg.length - 1) + "px";
		}
		move(t$("wrap"), "left", -Li * num);
		/*底部小圆圈*/
		for(var j in btn) {
			btn[j].className = "ccc";
		}
		btn[num].className = "black";
	}

	/* 底部小圆圈鼠标移入*/

	for(var i in btn) {
		btn[i].className = "ccc";
		btn[0].className = "black";
		btn[i].index = i;
		btn[i].onmouseover = function() {
			for(var j in btn) {
				btn[j].className = "ccc";
			}
			btn[this.index].className = "black";
			move(t$("wrap"), "left", -Li * this.index)
		}
	}
	/*让轮播图自己走，设置定时器*/
	var time = null;
	time = setInterval(t$("right").onclick, 3000)

	/* 左右按钮的显示与隐藏*/
	t$("box").onmouseover = function() {
		t$("left").style.display = "block";
		t$("right").style.display = "block";
		clearInterval(time)
	};
	t$("box").onmouseout = function() {
		t$("left").style.display = "none";
		t$("right").style.display = "none";
		clearInterval(time)
		time = setInterval(t$("right").onclick, 3000);
	};

	//倒计时
	freshTime();
	var sh;
	sh = setInterval('freshTime()', 1000)
	initUI();
	let lis=t$("main_waidivFive_ul").children;
	let Ps=document.getElementsByClassName("main_waidivFive_pOne");
	let myTimer = setInterval(function(){
		if(lis[lis.length-1].innerHTML!=""){
			window.clearInterval(sh);
			showChange();
		}	
	},10);
	
	let mytimer=null;
	var lef = t$("lunbo_ul").children[0].offsetWidth; 
	var obannerimg = document.getElementById("lunbo_ul").children; 
	t$("lunbo_ul").style.width = lef * obannerimg.length + "px"
	var num;
	mytimer=setInterval(function(){
		num++;
		if(num >= 4) {
			num = 0;
			t$("lunbo_ul").style.left = 0 + "px";
		}
		move(t$("lunbo_ul"), "left", -lef * num);
//		console.log(-lef * num);
	},2000)
	let liss=t$("main_waidivSix_ul").children;
	let divs=document.getElementsByClassName("main_waidivSix_div");
	let index;
	for(let i=0;i<liss.length;i++){
		lis[i].index=i;
		for(let j=0;j<divs.length;j++){
			liss[i].onmouseover=function(){
				j=lis[i].index;
				divs[j].style.display="block";
			}
			liss[i].onmouseout=function(){
				j=lis[i].index;
				divs[j].style.display="none";
			}
		}
	}
	imgChange();
	new Slider(
			t$("main_waidivEight_lidiv"),
			216.14,
			440,
            2000,
			2.1614,
			20
	);
	new Slider(
			t$("main_waidivEleven_lidivZise"),
			216.14,
			440,
            2000,
			2.1614,
			20
	);
	new Slider(
			t$("main_waidivEleven_lidivOne"),
			216.14,
			440,
            2000,
			2.1614,
			20
	);
	new Slider(
			t$("main_waidivEleven_lidivTwo"),
			216.14,
			440,
            2000,
			2.1614,
			20
	);
	new Slider(
			t$("main_waidivEleven_lidivThree"),
			216.14,
			440,
            2000,
			2.1614,
			20
	);
	new Slider(
			t$("main_waidivEleven_lidivFour"),
			216.14,
			440,
            2000,
			2.1614,
			20
	);
	new Slider(
			t$("main_waidivEleven_lidivFive"),
			216.14,
			440,
            2000,
			2.1614,
			20
	);
	new Slider(
			t$("main_waidivEleven_lidivSix"),
			216.14,
			440,
            2000,
			2.1614,
			20
	);
	new Slider(
			t$("main_waidivEleven_lidivEven"),
			216.14,
			440,
            2000,
			2.1614,
			20
	);
	
	window.onload = window.onscroll = function(){ 
		let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		let levels=t$("main_louce").children;
		console.log(levels.length);
		if(scrollTop>1000){
			t$("main_louce").style.display="block";
		}else if(scrollTop<1000){
			t$("main_louce").style.display="none";
		}
		levels[0].onclick=function(){
      		$("body").animate({"scrollTop":2120},400);
		}
		levels[9].onclick=function(){
      		$("body").animate({"scrollTop":0},400);
		}
		levels[1].onclick=function(){
	      	$("body").animate({"scrollTop":2760},400);
		}
		levels[2].onclick=function(){
	      	$("body").animate({"scrollTop":3360},400);
		}
		levels[3].onclick=function(){
	      	$("body").animate({"scrollTop":4000},400);
		}
		levels[4].onclick=function(){
	      	$("body").animate({"scrollTop":4660},400);
		}
		levels[5].onclick=function(){
	      	$("body").animate({"scrollTop":5280},400);
		}
		levels[6].onclick=function(){
	      	$("body").animate({"scrollTop":5880},400);
		}
		levels[7].onclick=function(){
	      	$("body").animate({"scrollTop":6520},400);
		}
		levels[8].onclick=function(){
	      	$("body").animate({"scrollTop":7160},400);
		}
			
		
		
		
	}
	
	
	
	
	
}

function checktime(i) {
	if(i < 10) {
		i = "0" + i;
	} else {
		i = i;
	}
	return i;
}

function freshTime() {
	var endtime = new Date('2017/09/10');
	var nowtime = new Date();
	var lefttime = parseInt(endtime.getTime() - nowtime.getTime()); //这是毫秒，如果再/1000就是秒  
	// 获取剩下的日、小时、分钟、秒钟  
	// 一天有多少毫秒，一小时有多少毫秒，一分钟有多少毫秒，一秒钟有多少毫秒  
	var dm = 24 * 60 * 60 * 1000;
	var d = parseInt(lefttime / dm);
	var hm = 60 * 60 * 1000;
	var h = parseInt((lefttime / hm) % 24);
	var mm = 60 * 1000;
	var m = parseInt((lefttime / mm) % 60);
	var s = parseInt((lefttime / 1000) % 60);
	m = checktime(m);
	s = checktime(s);
	document.getElementById('outTime').innerHTML = d + "天" + h + "小时" + m + "分钟" + s + "秒";
	if(lefttime < 0) {
		document.getElementById('outTime').innerHTML = "团购活动已经结束！";
	}
	
}
function initUI(){
	let str="";
	let strOne="";
	let strTwo="";
	let strThree="";
	let strFour="";
	
	for(let i=0;i<12;i++){
		str='<li><a href="#"><img src="images/indexTwomain_waidivFive'+i+'.jpg"/><p class="main_waidivFive_pOne"></p><p class="main_waidivFive_pTwo"></p><span class="main_waidivFive_span"></span></a></li>';
		t$("main_waidivFive_ul").innerHTML+=str;
	}
	for(let j=1;j<=10;j++){
		strOne='<li><a href="#"><img src="images/indexTwoindexTwomain_waidivSix_'+j+'.gif"/></a><div class="main_waidivSix_div"><p class="main_waidivSix_pOne"></p><p class="main_waidivSix_pTwo"></p><p class="main_waidivSix_pThree"></p></div></li>';
		t$("main_waidivSix_ul").innerHTML+=strOne;
	}
	strTwo='<ul id="lunbotwo"><li><a href="#">最新热卖</a></li>';
	for(let k=1;k<=4;k++){
		strTwo+='<li><a href="#"><dl><dt><img src="images/indexTwoindexTwomain_waidivEights'+k+'.jpg"/></dt><dd><p class="main_waidivEight_pOne"></p><p class="main_waidivEight_pTwo"></p><span class="main_waidivEight_pThree"></span></dd></dl></a></li>';
	}
	strTwo+='</ul>';
	strTwo+='<ul id="lunbotwo"><li><a href="#">最新热卖</a></li>';
	for(let k=1;k<=4;k++){
		strTwo+='<li><a href="#"><dl><dt><img src="images/onlinei'+k+'.jpg"/></dt><dd><p class="main_waidivEight_pOne1"></p><p class="main_waidivEight_pTwo1"></p><span class="main_waidivEight_pThree1"></span></dd></dl></a></li>';
	}
	strTwo+='</ul>';
	strTwo+='<ul id="lunbotwo"><li><a href="#">最新热卖</a></li>';
	for(let k=1;k<=4;k++){
		strTwo+='<li><a href="#"><dl><dt><img src="images/online'+k+'.jpg"/></dt><dd><p class="main_waidivEight_pOne2"></p><p class="main_waidivEight_pTwo2"></p><span class="main_waidivEight_pThree2"></span></dd></dl></a></li>';
	}
	strTwo+='</ul>';
	t$("main_waidivEight_lidiv").innerHTML+=strTwo;
	//===========================
	strFour='<ul id="lunbotwo"><li><a href="#">最新热卖</a></li>';
	for(let k=1;k<=4;k++){
		strFour+='<li><a href="#"><dl><dt><img src="images/indexTwoindexTwomain_waidivEightss'+k+'.jpg" class="main_waidivEleven_lidiv_img"/></dt><dd><p class="main_waidivEleven_pOne"></p><p class="main_waidivEleven_pTwo"></p><span class="main_waidivEleven_pThree"></span></dd></dl></a></li>';
	}
	strFour+='</ul>';
	strFour+='<ul id="lunbotwo"><li><a href="#">最新热卖</a></li>';
	for(let k=1;k<=4;k++){
		strFour+='<li><a href="#"><dl><dt><img src="images/onlineis'+k+'.jpg" class="main_waidivEleven_lidiv_imgone"/></dt><dd><p class="main_waidivEleven_pOne1"></p><p class="main_waidivEleven_pTwo1"></p><span class="main_waidivEleven_pThree1"></span></dd></dl></a></li>';
	}
	strFour+='</ul>';
	strFour+='<ul id="lunbotwo"><li><a href="#">最新热卖</a></li>';
	for(let k=1;k<=4;k++){
		strFour+='<li><a href="#"><dl><dt><img src="images/onlines'+k+'.jpg" class="main_waidivEleven_lidiv_imgtwo"/></dt><dd><p class="main_waidivEleven_pOne2"></p><p class="main_waidivEleven_pTwo2"></p><span class="main_waidivEleven_pThree2"></span></dd></dl></a></li>';
	}
	strFour+='</ul>';
	t$("main_waidivEight_lidiv").innerHTML+=strFour;
	t$("main_waidivEleven_lidivZise").innerHTML+=strFour;
	t$("main_waidivEleven_lidivOne").innerHTML+=strFour;
	t$("main_waidivEleven_lidivTwo").innerHTML+=strFour;
	t$("main_waidivEleven_lidivThree").innerHTML+=strFour;
	t$("main_waidivEleven_lidivFour").innerHTML+=strFour;
	t$("main_waidivEleven_lidivFive").innerHTML+=strFour;
	t$("main_waidivEleven_lidivSix").innerHTML+=strFour;
	t$("main_waidivEleven_lidivEven").innerHTML+=strFour;
	
	//================================
	
	strThree='<li><a href="#">热卖品牌:</a></li>';
	for(let i=0;i<8;i++){
		strThree+='<li><a href="#"><img src="1.jpg" class="main_waidivNine_ul_img"/></a><span><i class="iconfont">&#xe602;</i></span></li>';
	}
	t$("main_waidivNine_ul").innerHTML+=strThree;
	t$("main_waidivNine_ulZero").innerHTML+=strThree;
	t$("main_waidivNine_ulOne").innerHTML+=strThree;
	t$("main_waidivNine_ulTwo").innerHTML+=strThree;
	t$("main_waidivNine_ulThree").innerHTML+=strThree;
	t$("main_waidivNine_ulFour").innerHTML+=strThree;
	t$("main_waidivNine_ulFive").innerHTML+=strThree;
	t$("main_waidivNine_ulSix").innerHTML+=strThree;
	t$("main_waidivNine_ulSeven").innerHTML+=strThree;
}
let arr=[
		"images/indexTwoindexTwomain_waidivNine1.jpg","images/indexTwoindexTwomain_waidivNine2.jpg",
		"images/indexTwoindexTwomain_waidivNine3.jpg","images/indexTwoindexTwomain_waidivNine4.jpg",
		"images/indexTwoindexTwomain_waidivNine5.jpg","images/indexTwoindexTwomain_waidivNine6.jpg",
		"images/indexTwoindexTwomain_waidivNine7.jpg","images/indexTwoindexTwomain_waidivNine8.jpg",
		"images/indexTwoindexTwomain_waidivNine9.jpg","images/indexTwoindexTwomain_waidivNine10.jpg",
		"images/indexTwoindexTwomain_waidivNine11.jpg","images/indexTwoindexTwomain_waidivNine12.jpg",
		"images/indexTwoindexTwomain_waidivNine13.jpg","images/indexTwoindexTwomain_waidivNine14.jpg",
		"images/indexTwoindexTwomain_waidivNine15.jpg","images/indexTwoindexTwomain_waidivNine16.jpg",
		"images/indexTwoindexTwomain_waidivNine17.jpg","images/indexTwoindexTwomain_waidivNine18.jpg",
		"images/indexTwoindexTwomain_waidivNine19.jpg","images/indexTwoindexTwomain_waidivNine20.jpg",
		"images/indexTwoindexTwomain_waidivNine21.jpg","images/indexTwoindexTwomain_waidivNine22.jpg",
		"images/indexTwoindexTwomain_waidivNine23.jpg","images/indexTwoindexTwomain_waidivNine24.jpg",
		"images/indexTwoindexTwomain_waidivNine25.jpg","images/indexTwoindexTwomain_waidivNine26.jpg",
		"images/indexTwoindexTwomain_waidivNine27.jpg","images/indexTwoindexTwomain_waidivNine28.jpg",
		"images/indexTwoindexTwomain_waidivNine29.jpg","images/indexTwoindexTwomain_waidivNine30.jpg",
		"images/indexTwoindexTwomain_waidivNine31.jpg","images/indexTwoindexTwomain_waidivNine32.jpg",
		"images/indexTwoindexTwomain_waidivNine33.jpg","images/indexTwoindexTwomain_waidivNine34.jpg",
		"images/indexTwoindexTwomain_waidivNine35.jpg","images/indexTwoindexTwomain_waidivNine36.jpg",
		"images/indexTwoindexTwomain_waidivNine37.jpg","images/indexTwoindexTwomain_waidivNine38.jpg",
		"images/indexTwoindexTwomain_waidivNine39.jpg","images/indexTwoindexTwomain_waidivNine40.jpg",
		"images/indexTwoindexTwomain_waidivNine41.jpg","images/indexTwoindexTwomain_waidivNine42.jpg",
		"images/indexTwoindexTwomain_waidivNine33.jpg","images/indexTwoindexTwomain_waidivNine44.jpg",
		"images/indexTwoindexTwomain_waidivNine45.jpg","images/indexTwoindexTwomain_waidivNine46.jpg",
		"images/indexTwoindexTwomain_waidivNine47.jpg","images/indexTwoindexTwomain_waidivNine48.jpg",
		"images/indexTwoindexTwomain_waidivNine49.jpg","images/indexTwoindexTwomain_waidivNine50.jpg",
		"images/indexTwoindexTwomain_waidivNine51.jpg","images/indexTwoindexTwomain_waidivNine52.jpg",
		"images/indexTwoindexTwomain_waidivNine53.jpg","images/indexTwoindexTwomain_waidivNine54.jpg",
		"images/indexTwoindexTwomain_waidivNine55.jpg","images/indexTwoindexTwomain_waidivNine56.jpg",
		"images/indexTwoindexTwomain_waidivNine57.jpg","images/indexTwoindexTwomain_waidivNine58.jpg",
		"images/indexTwoindexTwomain_waidivNine59.jpg","images/indexTwoindexTwomain_waidivNine60.jpg",
		"images/indexTwoindexTwomain_waidivNine61.jpg","images/indexTwoindexTwomain_waidivNine62.jpg",
		"images/indexTwoindexTwomain_waidivNine63.jpg","images/indexTwoindexTwomain_waidivNine64.jpg",
		"images/indexTwoindexTwomain_waidivNine65.jpg","images/indexTwoindexTwomain_waidivNine66.jpg",
		"images/indexTwoindexTwomain_waidivNine67.jpg","images/indexTwoindexTwomain_waidivNine68.jpg",
		"images/indexTwoindexTwomain_waidivNine69.jpg","images/indexTwoindexTwomain_waidivNine70.jpg",
		"images/indexTwoindexTwomain_waidivNine71.jpg","images/indexTwoindexTwomain_waidivNine72.jpg",
		];
let arrone=[
				[
				"images/indexTwoindexTwomain_waidivEightss1.jpg","images/indexTwoindexTwomain_waidivEightss2.jpg",
				"images/indexTwoindexTwomain_waidivEightss3.jpg","images/indexTwoindexTwomain_waidivEightss4.jpg",
				"images/indexTwoindexTwomain_waidivEightss1.jpg","images/indexTwoindexTwomain_waidivEightss2.jpg",
				"images/indexTwoindexTwomain_waidivEightss3.jpg","images/indexTwoindexTwomain_waidivEightss4.jpg",
				"images/indexTwoindexTwomain_waidivEightss1.jpg","images/indexTwoindexTwomain_waidivEightss2.jpg",
				"images/indexTwoindexTwomain_waidivEightss3.jpg","images/indexTwoindexTwomain_waidivEightss4.jpg",
				"images/indexTwoindexTwomain_waidivEightss1.jpg","images/indexTwoindexTwomain_waidivEightss2.jpg",
				"images/indexTwoindexTwomain_waidivEightss3.jpg","images/indexTwoindexTwomain_waidivEightss4.jpg",
				"images/indexTwoindexTwomain_waidivEightss1.jpg","images/indexTwoindexTwomain_waidivEightss2.jpg",
				"images/indexTwoindexTwomain_waidivEightss3.jpg","images/indexTwoindexTwomain_waidivEightss4.jpg",
				"images/indexTwoindexTwomain_waidivEightss1.jpg","images/indexTwoindexTwomain_waidivEightss2.jpg",
				"images/indexTwoindexTwomain_waidivEightss3.jpg","images/indexTwoindexTwomain_waidivEightss4.jpg",
				"images/indexTwoindexTwomain_waidivEightss1.jpg","images/indexTwoindexTwomain_waidivEightss2.jpg",
				"images/indexTwoindexTwomain_waidivEightss3.jpg","images/indexTwoindexTwomain_waidivEightss4.jpg",
				"images/indexTwoindexTwomain_waidivEightss1.jpg","images/indexTwoindexTwomain_waidivEightss2.jpg",
				"images/indexTwoindexTwomain_waidivEightss3.jpg","images/indexTwoindexTwomain_waidivEightss4.jpg",
				"images/indexTwoindexTwomain_waidivEightss1.jpg","images/indexTwoindexTwomain_waidivEightss2.jpg",
				"images/indexTwoindexTwomain_waidivEightss3.jpg","images/indexTwoindexTwomain_waidivEightss4.jpg"
				],
				[
				"images/onlineis1.jpg","images/onlineis2.jpg","images/onlineis3.jpg","images/onlineis4.jpg",
				"images/onlineis1.jpg","images/onlineis2.jpg","images/onlineis3.jpg","images/onlineis4.jpg",
				"images/onlineis1.jpg","images/onlineis2.jpg","images/onlineis3.jpg","images/onlineis4.jpg",
				"images/onlineis1.jpg","images/onlineis2.jpg","images/onlineis3.jpg","images/onlineis4.jpg",
				"images/onlineis1.jpg","images/onlineis2.jpg","images/onlineis3.jpg","images/onlineis4.jpg",
				"images/onlineis1.jpg","images/onlineis2.jpg","images/onlineis3.jpg","images/onlineis4.jpg",
				"images/onlineis1.jpg","images/onlineis2.jpg","images/onlineis3.jpg","images/onlineis4.jpg",
				"images/onlineis1.jpg","images/onlineis2.jpg","images/onlineis3.jpg","images/onlineis4.jpg",
				"images/onlineis1.jpg","images/onlineis2.jpg","images/onlineis3.jpg","images/onlineis4.jpg",
				"images/onlineis1.jpg","images/onlineis2.jpg","images/onlineis3.jpg","images/onlineis4.jpg"
				],
				[
				"images/onlines1.jpg","images/onlines2.jpg","images/onlines3.jpg","images/onlines4.jpg",
				"images/onlines1.jpg","images/onlines2.jpg","images/onlines3.jpg","images/onlines4.jpg",
				"images/onlines1.jpg","images/onlines2.jpg","images/onlines3.jpg","images/onlines4.jpg",
				"images/onlines1.jpg","images/onlines2.jpg","images/onlines3.jpg","images/onlines4.jpg",
				"images/onlines1.jpg","images/onlines2.jpg","images/onlines3.jpg","images/onlines4.jpg",
				"images/onlines1.jpg","images/onlines2.jpg","images/onlines3.jpg","images/onlines4.jpg",
				"images/onlines1.jpg","images/onlines2.jpg","images/onlines3.jpg","images/onlines4.jpg",
				"images/onlines1.jpg","images/onlines2.jpg","images/onlines3.jpg","images/onlines4.jpg",
				"images/onlines1.jpg","images/onlines2.jpg","images/onlines3.jpg","images/onlines4.jpg",
				"images/onlines1.jpg","images/onlines2.jpg","images/onlines3.jpg","images/onlines4.jpg"
				]
			];
function imgChange(){
	let imgs=document.getElementsByClassName("main_waidivNine_ul_img");
	console.log(imgs.length);
	let imgsone=document.getElementsByClassName("main_waidivEleven_lidiv_img");
	console.log(imgsone.length);
	let imgstwo=document.getElementsByClassName("main_waidivEleven_lidiv_imgone");
	console.log(imgstwo.length);
	let imgsthree=document.getElementsByClassName("main_waidivEleven_lidiv_imgtwo");
	console.log(imgsthree.length);
	for(let i=0;i<imgs.length;i++){
		imgs[i].src=arr[i];
	}
	
	for(let i=0;i<imgsone.length;i++){
		imgsone[i].src=arrone[0][i];
	}
	
	for(let i=0;i<imgstwo.length;i++){
		imgstwo[i].src=arrone[1][i];
	}
	
	for(let i=0;i<imgsthree.length;i++){
		imgsthree[i].src=arrone[2][i];
	}
}
let jsonStr=[
		{
			title:"钙+维D3复合片88元",
			money:"满199减50,299...",
			yuan:""
		},
		{
			title:"",
			money:"",
			yuan:""
		},
		{
			title:"American Needle 彼士顿水洗棉...",
			money:"¥249",
			yuan:"¥480"
		},
		{
			title:"BEURER博雅 电动清透洁面...",
			money:"¥199",
			yuan:"¥299"
		},
		{
			title:"Anne Klein 安妮·克莱因 女式时...",
			money:"¥849",
			yuan:"¥1443"
		},
		{
			title:"竹本油脂 金装纯正芝麻油...",
			money:"¥39",
			yuan:"¥59"
		},
		{
			title:"SKIP HOP zootensils 可爱...",
			money:"¥59",
			yuan:"¥114"
		},
		{
			title:"HYPERBIOTICS 合百益 益...",
			money:"¥159",
			yuan:"¥299"
		},
		{
			title:"PANDORA潘多拉 爱慕之...",
			money:"¥498",
			yuan:"¥698"
		},
		{
			title:"3M FUTURO 髌骨束带-中等强...",
			money:"¥149",
			yuan:"¥149"
		},
		{
			title:"Skip Hop zootensils 可爱动物...",
			money:"¥59",
			yuan:"¥114"
		}
	];
	let josntype=[
		{
			pOne:"+关注",
			pTwo:"1203人关注该品牌",
			pThree:"进入品牌>"
		},
		{
			pOne:"+关注",
			pTwo:"1243人关注该品牌",
			pThree:"进入品牌>"
		},
		{
			pOne:"+关注",
			pTwo:"1103人关注该品牌",
			pThree:"进入品牌>"
		},
		{
			pOne:"+关注",
			pTwo:"2203人关注该品牌",
			pThree:"进入品牌>"
		},
		{
			pOne:"+关注",
			pTwo:"1234人关注该品牌",
			pThree:"进入品牌>"
		},
		{
			pOne:"+关注",
			pTwo:"1178人关注该品牌",
			pThree:"进入品牌>"
		},
		{
			pOne:"+关注",
			pTwo:"1298人关注该品牌",
			pThree:"进入品牌>"
		},
		{
			pOne:"+关注",
			pTwo:"1289人关注该品牌",
			pThree:"进入品牌>"
		},
		{
			pOne:"+关注",
			pTwo:"1280人关注该品牌",
			pThree:"进入品牌>"
		},
		{
			pOne:"+关注",
			pTwo:"3203人关注该品牌",
			pThree:"进入品牌>"
		}
	];
	let josntypeOne=[
		{
			title:"Aptamil德国爱他美 婴儿奶粉 4段/1+ 600克/盒 3盒 新...",
			money:"¥315",
			yuan:"¥569"
		},
		{
			title:"【官方直采】Merries 花王妙而舒 M 64片/包 2包装 纸...",
			money:"¥170",
			yuan:"¥359"
		},
		{
			title:"NORDIC NATURALS 挪威小鱼 婴幼儿鳕鱼肝油...",
			money:"¥88",
			yuan:"¥95"
		},
		{
			title:"【官方直采】moony 尤妮佳 L 54片/包 4包装 纸尿裤/...",
			money:"¥324",
			yuan:"¥784"
		}
	];
	let josntypeTwo=[
		{
			titlesize:"RE:CIPE 水晶防晒喷雾 150毫升...",
			titleone:"Naturie imju 薏仁美白保湿防晒化妆水 500毫升 我是大...",
			titletwo:"Freeplus 芙丽芳丝 净润洗面霜 100克 人见人爱...",
			moneysize:"¥65",
			moneyone:"¥55",
			moneytwo:"¥99",
			yuansize:"¥75",
			yuanone:"¥159",
			yuantwo:"¥150"
		},
		{
			titlesize:"RE:CIPE 水晶防晒喷雾 150毫升...",
			titleone:"Naturie imju 薏仁美白保湿防晒化妆水 500毫升 我是大...",
			titletwo:"Freeplus 芙丽芳丝 净润洗面霜 100克 人见人爱...",
			moneysize:"¥65",
			moneyone:"¥55",
			moneytwo:"¥99",
			yuansize:"¥75",
			yuanone:"¥159",
			yuantwo:"¥150"
		},
		{
			titlesize:"【官方直采】Merries 花王妙而舒 M 64片/包 2包装 纸...",
			titleone:"MEDIHEAL 美迪恵尔 胶原蛋白美白精华面膜组 10片/盒...",
			titletwo:"GUÉRISSON 格丽松 9complex 马油霜 70克 淡斑去疤 ..",
			moneysize:"¥170",
			moneyone:"¥136",
			moneytwo:"¥69",
			yuansize:"¥359",
			yuanone:"¥219",
			yuantwo:"¥169"
		},
		{
			titlesize:"MEDIHEAL 美迪恵尔 N.M.F针剂水库保湿面膜 10片/盒 ...",
			titleone:"BIODERMA 贝德玛 舒妍温和保湿卸妆水 500毫升 粉水...",
			titletwo:"It'S SKIN 伊思 美肌蜗牛修复洗面奶 150毫升...",
			moneysize:"¥89",
			moneyone:"¥94",
			moneytwo:"¥74",
			yuansize:"¥169",
			yuanone:"¥225",
			yuantwo:"¥150"
		},
		{
			titlesize:"Papa recipe 春雨 蜂蜜补水保湿面膜 25克/片 10片装 当红爆款...",
			titleone:"Unicharm尤妮佳 Silcot省1/2化妆水的化妆棉40枚..",
			titletwo:"SHISEIDO 资生堂 安耐晒防晒露 SPF50+ PA++ 60毫升..",
			moneysize:"¥85",
			moneyone:"¥62",
			moneytwo:"¥190",
			yuansize:"¥129",
			yuanone:"¥99",
			yuantwo:"¥300"
		},
		{
			titlesize:"RE:CIPE 水晶防晒喷雾 150毫升...",
			titleone:"Naturie imju 薏仁美白保湿防晒化妆水 500毫升 我是大...",
			titletwo:"Freeplus 芙丽芳丝 净润洗面霜 100克 人见人爱...",
			moneysize:"¥65",
			moneyone:"¥55",
			moneytwo:"¥99",
			yuansize:"¥75",
			yuanone:"¥159",
			yuantwo:"¥150"
		},
		{
			titlesize:"【官方直采】Merries 花王妙而舒 M 64片/包 2包装 纸...",
			titleone:"MEDIHEAL 美迪恵尔 胶原蛋白美白精华面膜组 10片/盒...",
			titletwo:"GUÉRISSON 格丽松 9complex 马油霜 70克 淡斑去疤 ..",
			moneysize:"¥170",
			moneyone:"¥136",
			moneytwo:"¥69",
			yuansize:"¥359",
			yuanone:"¥219",
			yuantwo:"¥169"
		},
		{
			titlesize:"MEDIHEAL 美迪恵尔 N.M.F针剂水库保湿面膜 10片/盒 ...",
			titleone:"BIODERMA 贝德玛 舒妍温和保湿卸妆水 500毫升 粉水...",
			titletwo:"It'S SKIN 伊思 美肌蜗牛修复洗面奶 150毫升...",
			moneysize:"¥89",
			moneyone:"¥94",
			moneytwo:"¥74",
			yuansize:"¥169",
			yuanone:"¥225",
			yuantwo:"¥150"
		},
		{
			titlesize:"Papa recipe 春雨 蜂蜜补水保湿面膜 25克/片 10片装 当红爆款...",
			titleone:"Unicharm尤妮佳 Silcot省1/2化妆水的化妆棉40枚..",
			titletwo:"SHISEIDO 资生堂 安耐晒防晒露 SPF50+ PA++ 60毫升..",
			moneysize:"¥85",
			moneyone:"¥62",
			moneytwo:"¥190",
			yuansize:"¥129",
			yuanone:"¥99",
			yuantwo:"¥300"
		},{
			titlesize:"RE:CIPE 水晶防晒喷雾 150毫升...",
			titleone:"Naturie imju 薏仁美白保湿防晒化妆水 500毫升 我是大...",
			titletwo:"Freeplus 芙丽芳丝 净润洗面霜 100克 人见人爱...",
			moneysize:"¥65",
			moneyone:"¥55",
			moneytwo:"¥99",
			yuansize:"¥75",
			yuanone:"¥159",
			yuantwo:"¥150"
		},
		{
			titlesize:"【官方直采】Merries 花王妙而舒 M 64片/包 2包装 纸...",
			titleone:"MEDIHEAL 美迪恵尔 胶原蛋白美白精华面膜组 10片/盒...",
			titletwo:"GUÉRISSON 格丽松 9complex 马油霜 70克 淡斑去疤 ..",
			moneysize:"¥170",
			moneyone:"¥136",
			moneytwo:"¥69",
			yuansize:"¥359",
			yuanone:"¥219",
			yuantwo:"¥169"
		},
		{
			titlesize:"MEDIHEAL 美迪恵尔 N.M.F针剂水库保湿面膜 10片/盒 ...",
			titleone:"BIODERMA 贝德玛 舒妍温和保湿卸妆水 500毫升 粉水...",
			titletwo:"It'S SKIN 伊思 美肌蜗牛修复洗面奶 150毫升...",
			moneysize:"¥89",
			moneyone:"¥94",
			moneytwo:"¥74",
			yuansize:"¥169",
			yuanone:"¥225",
			yuantwo:"¥150"
		},
		{
			titlesize:"Papa recipe 春雨 蜂蜜补水保湿面膜 25克/片 10片装 当红爆款...",
			titleone:"Unicharm尤妮佳 Silcot省1/2化妆水的化妆棉40枚..",
			titletwo:"SHISEIDO 资生堂 安耐晒防晒露 SPF50+ PA++ 60毫升..",
			moneysize:"¥85",
			moneyone:"¥62",
			moneytwo:"¥190",
			yuansize:"¥129",
			yuanone:"¥99",
			yuantwo:"¥300"
		},
		{
			titlesize:"RE:CIPE 水晶防晒喷雾 150毫升...",
			titleone:"Naturie imju 薏仁美白保湿防晒化妆水 500毫升 我是大...",
			titletwo:"Freeplus 芙丽芳丝 净润洗面霜 100克 人见人爱...",
			moneysize:"¥65",
			moneyone:"¥55",
			moneytwo:"¥99",
			yuansize:"¥75",
			yuanone:"¥159",
			yuantwo:"¥150"
		},
		{
			titlesize:"【官方直采】Merries 花王妙而舒 M 64片/包 2包装 纸...",
			titleone:"MEDIHEAL 美迪恵尔 胶原蛋白美白精华面膜组 10片/盒...",
			titletwo:"GUÉRISSON 格丽松 9complex 马油霜 70克 淡斑去疤 ..",
			moneysize:"¥170",
			moneyone:"¥136",
			moneytwo:"¥69",
			yuansize:"¥359",
			yuanone:"¥219",
			yuantwo:"¥169"
		},
		{
			titlesize:"MEDIHEAL 美迪恵尔 N.M.F针剂水库保湿面膜 10片/盒 ...",
			titleone:"BIODERMA 贝德玛 舒妍温和保湿卸妆水 500毫升 粉水...",
			titletwo:"It'S SKIN 伊思 美肌蜗牛修复洗面奶 150毫升...",
			moneysize:"¥89",
			moneyone:"¥94",
			moneytwo:"¥74",
			yuansize:"¥169",
			yuanone:"¥225",
			yuantwo:"¥150"
		},
		{
			titlesize:"Papa recipe 春雨 蜂蜜补水保湿面膜 25克/片 10片装 当红爆款...",
			titleone:"Unicharm尤妮佳 Silcot省1/2化妆水的化妆棉40枚..",
			titletwo:"SHISEIDO 资生堂 安耐晒防晒露 SPF50+ PA++ 60毫升..",
			moneysize:"¥85",
			moneyone:"¥62",
			moneytwo:"¥190",
			yuansize:"¥129",
			yuanone:"¥99",
			yuantwo:"¥300"
		},
		{
			titlesize:"RE:CIPE 水晶防晒喷雾 150毫升...",
			titleone:"Naturie imju 薏仁美白保湿防晒化妆水 500毫升 我是大...",
			titletwo:"Freeplus 芙丽芳丝 净润洗面霜 100克 人见人爱...",
			moneysize:"¥65",
			moneyone:"¥55",
			moneytwo:"¥99",
			yuansize:"¥75",
			yuanone:"¥159",
			yuantwo:"¥150"
		},
		{
			titlesize:"【官方直采】Merries 花王妙而舒 M 64片/包 2包装 纸...",
			titleone:"MEDIHEAL 美迪恵尔 胶原蛋白美白精华面膜组 10片/盒...",
			titletwo:"GUÉRISSON 格丽松 9complex 马油霜 70克 淡斑去疤 ..",
			moneysize:"¥170",
			moneyone:"¥136",
			moneytwo:"¥69",
			yuansize:"¥359",
			yuanone:"¥219",
			yuantwo:"¥169"
		},
		{
			titlesize:"MEDIHEAL 美迪恵尔 N.M.F针剂水库保湿面膜 10片/盒 ...",
			titleone:"BIODERMA 贝德玛 舒妍温和保湿卸妆水 500毫升 粉水...",
			titletwo:"It'S SKIN 伊思 美肌蜗牛修复洗面奶 150毫升...",
			moneysize:"¥89",
			moneyone:"¥94",
			moneytwo:"¥74",
			yuansize:"¥169",
			yuanone:"¥225",
			yuantwo:"¥150"
		},
		{
			titlesize:"Papa recipe 春雨 蜂蜜补水保湿面膜 25克/片 10片装 当红爆款...",
			titleone:"Unicharm尤妮佳 Silcot省1/2化妆水的化妆棉40枚..",
			titletwo:"SHISEIDO 资生堂 安耐晒防晒露 SPF50+ PA++ 60毫升..",
			moneysize:"¥85",
			moneyone:"¥62",
			moneytwo:"¥190",
			yuansize:"¥129",
			yuanone:"¥99",
			yuantwo:"¥300"
		},
		{
			titlesize:"RE:CIPE 水晶防晒喷雾 150毫升...",
			titleone:"Naturie imju 薏仁美白保湿防晒化妆水 500毫升 我是大...",
			titletwo:"Freeplus 芙丽芳丝 净润洗面霜 100克 人见人爱...",
			moneysize:"¥65",
			moneyone:"¥55",
			moneytwo:"¥99",
			yuansize:"¥75",
			yuanone:"¥159",
			yuantwo:"¥150"
		},
		{
			titlesize:"【官方直采】Merries 花王妙而舒 M 64片/包 2包装 纸...",
			titleone:"MEDIHEAL 美迪恵尔 胶原蛋白美白精华面膜组 10片/盒...",
			titletwo:"GUÉRISSON 格丽松 9complex 马油霜 70克 淡斑去疤 ..",
			moneysize:"¥170",
			moneyone:"¥136",
			moneytwo:"¥69",
			yuansize:"¥359",
			yuanone:"¥219",
			yuantwo:"¥169"
		},
		{
			titlesize:"MEDIHEAL 美迪恵尔 N.M.F针剂水库保湿面膜 10片/盒 ...",
			titleone:"BIODERMA 贝德玛 舒妍温和保湿卸妆水 500毫升 粉水...",
			titletwo:"It'S SKIN 伊思 美肌蜗牛修复洗面奶 150毫升...",
			moneysize:"¥89",
			moneyone:"¥94",
			moneytwo:"¥74",
			yuansize:"¥169",
			yuanone:"¥225",
			yuantwo:"¥150"
		},
		{
			titlesize:"Papa recipe 春雨 蜂蜜补水保湿面膜 25克/片 10片装 当红爆款...",
			titleone:"Unicharm尤妮佳 Silcot省1/2化妆水的化妆棉40枚..",
			titletwo:"SHISEIDO 资生堂 安耐晒防晒露 SPF50+ PA++ 60毫升..",
			moneysize:"¥85",
			moneyone:"¥62",
			moneytwo:"¥190",
			yuansize:"¥129",
			yuanone:"¥99",
			yuantwo:"¥300"
		},
		{
			titlesize:"RE:CIPE 水晶防晒喷雾 150毫升...",
			titleone:"Naturie imju 薏仁美白保湿防晒化妆水 500毫升 我是大...",
			titletwo:"Freeplus 芙丽芳丝 净润洗面霜 100克 人见人爱...",
			moneysize:"¥65",
			moneyone:"¥55",
			moneytwo:"¥99",
			yuansize:"¥75",
			yuanone:"¥159",
			yuantwo:"¥150"
		},
		{
			titlesize:"【官方直采】Merries 花王妙而舒 M 64片/包 2包装 纸...",
			titleone:"MEDIHEAL 美迪恵尔 胶原蛋白美白精华面膜组 10片/盒...",
			titletwo:"GUÉRISSON 格丽松 9complex 马油霜 70克 淡斑去疤 ..",
			moneysize:"¥170",
			moneyone:"¥136",
			moneytwo:"¥69",
			yuansize:"¥359",
			yuanone:"¥219",
			yuantwo:"¥169"
		},
		{
			titlesize:"MEDIHEAL 美迪恵尔 N.M.F针剂水库保湿面膜 10片/盒 ...",
			titleone:"BIODERMA 贝德玛 舒妍温和保湿卸妆水 500毫升 粉水...",
			titletwo:"It'S SKIN 伊思 美肌蜗牛修复洗面奶 150毫升...",
			moneysize:"¥89",
			moneyone:"¥94",
			moneytwo:"¥74",
			yuansize:"¥169",
			yuanone:"¥225",
			yuantwo:"¥150"
		},
		{
			titlesize:"Papa recipe 春雨 蜂蜜补水保湿面膜 25克/片 10片装 当红爆款...",
			titleone:"Unicharm尤妮佳 Silcot省1/2化妆水的化妆棉40枚..",
			titletwo:"SHISEIDO 资生堂 安耐晒防晒露 SPF50+ PA++ 60毫升..",
			moneysize:"¥85",
			moneyone:"¥62",
			moneytwo:"¥190",
			yuansize:"¥129",
			yuanone:"¥99",
			yuantwo:"¥300"
		},
		{
			titlesize:"RE:CIPE 水晶防晒喷雾 150毫升...",
			titleone:"Naturie imju 薏仁美白保湿防晒化妆水 500毫升 我是大...",
			titletwo:"Freeplus 芙丽芳丝 净润洗面霜 100克 人见人爱...",
			moneysize:"¥65",
			moneyone:"¥55",
			moneytwo:"¥99",
			yuansize:"¥75",
			yuanone:"¥159",
			yuantwo:"¥150"
		},
		{
			titlesize:"【官方直采】Merries 花王妙而舒 M 64片/包 2包装 纸...",
			titleone:"MEDIHEAL 美迪恵尔 胶原蛋白美白精华面膜组 10片/盒...",
			titletwo:"GUÉRISSON 格丽松 9complex 马油霜 70克 淡斑去疤 ..",
			moneysize:"¥170",
			moneyone:"¥136",
			moneytwo:"¥69",
			yuansize:"¥359",
			yuanone:"¥219",
			yuantwo:"¥169"
		},
		{
			titlesize:"MEDIHEAL 美迪恵尔 N.M.F针剂水库保湿面膜 10片/盒 ...",
			titleone:"BIODERMA 贝德玛 舒妍温和保湿卸妆水 500毫升 粉水...",
			titletwo:"It'S SKIN 伊思 美肌蜗牛修复洗面奶 150毫升...",
			moneysize:"¥89",
			moneyone:"¥94",
			moneytwo:"¥74",
			yuansize:"¥169",
			yuanone:"¥225",
			yuantwo:"¥150"
		},
		{
			titlesize:"Papa recipe 春雨 蜂蜜补水保湿面膜 25克/片 10片装 当红爆款...",
			titleone:"Unicharm尤妮佳 Silcot省1/2化妆水的化妆棉40枚..",
			titletwo:"SHISEIDO 资生堂 安耐晒防晒露 SPF50+ PA++ 60毫升..",
			moneysize:"¥85",
			moneyone:"¥62",
			moneytwo:"¥190",
			yuansize:"¥129",
			yuanone:"¥99",
			yuantwo:"¥300"
		},
		{
			titlesize:"【官方直采】Merries 花王妙而舒 M 64片/包 2包装 纸...",
			titleone:"MEDIHEAL 美迪恵尔 胶原蛋白美白精华面膜组 10片/盒...",
			titletwo:"GUÉRISSON 格丽松 9complex 马油霜 70克 淡斑去疤 ..",
			moneysize:"¥170",
			moneyone:"¥136",
			moneytwo:"¥69",
			yuansize:"¥359",
			yuanone:"¥219",
			yuantwo:"¥169"
		},
		{
			titlesize:"MEDIHEAL 美迪恵尔 N.M.F针剂水库保湿面膜 10片/盒 ...",
			titleone:"BIODERMA 贝德玛 舒妍温和保湿卸妆水 500毫升 粉水...",
			titletwo:"It'S SKIN 伊思 美肌蜗牛修复洗面奶 150毫升...",
			moneysize:"¥89",
			moneyone:"¥94",
			moneytwo:"¥74",
			yuansize:"¥169",
			yuanone:"¥225",
			yuantwo:"¥150"
		},
		{
			titlesize:"Papa recipe 春雨 蜂蜜补水保湿面膜 25克/片 10片装 当红爆款...",
			titleone:"Unicharm尤妮佳 Silcot省1/2化妆水的化妆棉40枚..",
			titletwo:"SHISEIDO 资生堂 安耐晒防晒露 SPF50+ PA++ 60毫升..",
			moneysize:"¥85",
			moneyone:"¥62",
			moneytwo:"¥190",
			yuansize:"¥129",
			yuanone:"¥99",
			yuantwo:"¥300"
		}
		
	];
function showChange(){
	let Ps=document.getElementsByClassName("main_waidivFive_pOne");
	let Psone=document.getElementsByClassName("main_waidivFive_pTwo");
	let spans=document.getElementsByClassName("main_waidivFive_span");
	let Pone=document.getElementsByClassName("main_waidivSix_pOne");
	let ptwo=document.getElementsByClassName("main_waidivSix_pTwo");
	let pthree=document.getElementsByClassName("main_waidivSix_pThree");
	let Poneeight=document.getElementsByClassName("main_waidivEight_pOne");
	let ptwoeight=document.getElementsByClassName("main_waidivEight_pTwo");
	let pthreeeight=document.getElementsByClassName("main_waidivEight_pThree");
	let Poneeight1=document.getElementsByClassName("main_waidivEight_pOne1");
	let ptwoeight1=document.getElementsByClassName("main_waidivEight_pTwo1");
	let pthreeeight1=document.getElementsByClassName("main_waidivEight_pThree1");
	let Poneeight2=document.getElementsByClassName("main_waidivEight_pOne2");
	let ptwoeight2=document.getElementsByClassName("main_waidivEight_pTwo2");
	let pthreeeight2=document.getElementsByClassName("main_waidivEight_pThree2");
	let Poneeightt=document.getElementsByClassName("main_waidivEleven_pOne");
	let ptwoeightt=document.getElementsByClassName("main_waidivEleven_pTwo");
	let pthreeeightt=document.getElementsByClassName("main_waidivEleven_pThree");
	let Poneeightt1=document.getElementsByClassName("main_waidivEleven_pOne1");
	let ptwoeightt1=document.getElementsByClassName("main_waidivEleven_pTwo1");
	let pthreeeightt1=document.getElementsByClassName("main_waidivEleven_pThree1");
	let Poneeightt2=document.getElementsByClassName("main_waidivEleven_pOne2");
	let ptwoeightt2=document.getElementsByClassName("main_waidivEleven_pTwo2");
	let pthreeeightt2=document.getElementsByClassName("main_waidivEleven_pThree2");
	for(let i=0;i<Ps.length-1;i++){
		Ps[i].innerHTML=jsonStr[i].title;
	}
	for(let i=0;i<Psone.length-1;i++){
		Psone[i].innerHTML=jsonStr[i].money;
	}
	for(let i=0;i<spans.length-1;i++){
		spans[i].innerHTML=jsonStr[i].yuan;
	}
	for(let i=0;i<Pone.length;i++){
		Pone[i].innerHTML=josntype[i].pOne;
	}
	for(let i=0;i<ptwo.length;i++){
		ptwo[i].innerHTML=josntype[i].pTwo;
	}
	for(let i=0;i<pthree.length;i++){
		pthree[i].innerHTML=josntype[i].pThree;
	}
	for(let i=0;i<Poneeight.length;i++){
		Poneeight[i].innerHTML=josntypeOne[i].title;
	}
	for(let i=0;i<ptwoeight.length;i++){
		ptwoeight[i].innerHTML=josntypeOne[i].money;
	}
	for(let i=0;i<pthreeeight.length;i++){
		pthreeeight[i].innerHTML=josntypeOne[i].yuan;
	}
	for(let i=0;i<Poneeight1.length;i++){
		Poneeight1[i].innerHTML=josntypeOne[i].title;
	}
	for(let i=0;i<ptwoeight1.length;i++){
		ptwoeight1[i].innerHTML=josntypeOne[i].money;
	}
	for(let i=0;i<pthreeeight1.length;i++){
		pthreeeight1[i].innerHTML=josntypeOne[i].yuan;
	}
	for(let i=0;i<Poneeight2.length;i++){
		Poneeight2[i].innerHTML=josntypeOne[i].title;
	}
	for(let i=0;i<ptwoeight2.length;i++){
		ptwoeight2[i].innerHTML=josntypeOne[i].money;
	}
	for(let i=0;i<pthreeeight2.length;i++){
		pthreeeight2[i].innerHTML=josntypeOne[i].yuan;
	}
	//===================================
	for(let i=0;i<Poneeightt.length;i++){
		Poneeightt[i].innerHTML=josntypeTwo[i].titlesize;
	}
	
	for(let i=0;i<ptwoeightt.length;i++){
		ptwoeightt[i].innerHTML=josntypeTwo[i].moneysize;
	}
	for(let i=0;i<pthreeeightt.length;i++){
		pthreeeightt[i].innerHTML=josntypeTwo[i].yuansize;
	}
	//===================================
	for(let i=0;i<Poneeightt1.length;i++){
		Poneeightt1[i].innerHTML=josntypeTwo[i].titleone;
	}
	for(let i=0;i<ptwoeightt1.length;i++){
		ptwoeightt1[i].innerHTML=josntypeTwo[i].moneyone;
	}
	for(let i=0;i<pthreeeightt1.length;i++){
		pthreeeightt1[i].innerHTML=josntypeTwo[i].yuanone;
	}
	//===================================
	for(let i=0;i<Poneeightt2.length;i++){
		Poneeightt2[i].innerHTML=josntypeTwo[i].titletwo;
	}
	for(let i=0;i<ptwoeightt2.length;i++){
		ptwoeightt2[i].innerHTML=josntypeTwo[i].moneytwo;
	}
	for(let i=0;i<pthreeeightt2.length;i++){
		pthreeeightt2[i].innerHTML=josntypeTwo[i].yuantwo;
	}
//	console.log(pthreeeightt2.length);
}

function Slider(boxDom,width,height,timeSpace,innerTimeSpace,incLeft){
	this.boxDom = boxDom;
	this.width = width;
	this.height = height;
	
	this.timeSpace = timeSpace;	
	this.myTimer = null;
	this.currOrd = 1;
	this.innerTimer = null;
	this.innerTimeSpace = innerTimeSpace;
	this.incLeft = incLeft;

	this.startChange();
}

Slider.prototype={
	startChange:function(){
		let obj = this;
		this.myTimer = setInterval(function(){
			obj.goStep();
		},this.timeSpace);
	},
	
	goStep:function(){
		var outOrd = this.currOrd;
		this.currOrd++;
		if(this.currOrd>3){
			this.currOrd=1;
		}
		
		this.showImg(this.currOrd,outOrd);
		
	},
	
	showImg:function(inOrd,outOrd){
		moveH(this.boxDom.children[inOrd-1],{x:-1*this.width,y:0},{x:0,y:0},this.incLeft,this.innerTimeSpace);
		moveH(this.boxDom.children[outOrd-1],{x:0,y:0},{x:this.width,y:0},this.incLeft,this.innerTimeSpace);
	},
	stopChange:function(){
		if(this.myTimer!=null){
			clearInterval(this.myTimer);
			this.myTimer = null;
		}
	},
	goImg:function(ord){
		if(this.currOrd==ord){
			return;
		}
		var outOrd = this.currOrd;
		this.currOrd = ord;
		this.showImg(this.currOrd,outOrd);
	}	
}








	





