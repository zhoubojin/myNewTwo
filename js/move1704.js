
function $(id){
	return document.getElementById(id);
}

//运动函数
//参数：
//dom对象
//起始点
//终点
//增量
//方向
//时间间隔

function moveObj(domObj,startPoint,endPoint,incLeft,incTop,timeSpace,func){
	var currLeft = startPoint.x;//-400
	var currTop = startPoint.y;//0
	var myTimer = null;
	
	startMove();
	
	//启动定时器
	function startMove(){
		myTimer=setInterval(goStep,timeSpace);
	}
	//单步函数
	function goStep(){
		//1、计算（改变数据）
		currLeft = currLeft+incLeft;//-400+8=-392
		currTop = currTop +incTop;//0+0
		if(incLeft>0){
			// 边界处理
			if(currLeft>endPoint.x){
				currLeft = endPoint.x;
				clearInterval(myTimer);
				func && func();
				myTimer = null;
			}
		}else{
			if(currLeft<endPoint.x){
				currLeft = endPoint.x;
				clearInterval(myTimer);
				func && func();
				myTimer = null;
			}
		}
		
		if(incTop>0){
			// 边界处理
			if(currTop>endPoint.y){
				currTop = endPoint.y;
				clearInterval(myTimer);
				func && func();
				myTimer = null;
			}
		}else{
			if(currTop<endPoint.y){
				currTop = endPoint.y;
				clearInterval(myTimer);
				func && func();
				myTimer = null;
			}
		}
		
		//2、改变外观（UI）
		domObj.style.left = currLeft+"px";//-392
		domObj.style.top = currTop+"px";//0
	}	
}



//横向运动

//运动函数
//参数：
//dom对象
//起始点
//终点
//横向增量
//时间间隔

function moveH(domObj,startPoint,endPoint,incLeft,timeSpace){
	moveObj(domObj,startPoint,endPoint,incLeft,0,timeSpace);	
}


//纵向运动
//运动函数
//参数：
//dom对象
//起始点
//终点
//纵向增量
//时间间隔

function moveV(domObj,startPoint,endPoint,incTop,timeSpace){
	moveObj(domObj,startPoint,endPoint,0,incTop,timeSpace);	
}


/*
var currLeft = 100;
var currTop = 100;
var timeSpace = 50;
var incLeft = 1;
var addLeftSpeed = 0.5;

var incTop = 0;
var addTopSpeed = 0;

var myTimer = null;

var endPoint={
	x:800,
	y:100
}
*/

//加速
//domObj,startPoint,endPoint,incLeft,incTop,timeSpace,func
function moveAddObj(domObj,startPoint,endPoint,incLeft,incTop,addLeftSpeed,addTopSpeed,timeSpace){
	var currLeft = startPoint.x;
	var currTop = startPoint.y;
	
	
	//启动定时器
	function startMove(){
		myTimer=setInterval(goStep,timeSpace);
	}

	//单步函数
	function goStep(){
		//1、计算（改变数据）
		incLeft = incLeft+addLeftSpeed;//1 1.5
		if(incLeft<1){
			incLeft =1;
		}
		incTop = incTop+addTopSpeed;
		
		currLeft = currLeft+incLeft;
		currTop = currTop +incTop;
		
		if(currLeft>endPoint.x){
			currLeft = endPoint.x;
			clearInterval(myTimer);
			myTimer = null;
		}
		
		if(currTop>endPoint.y){
			currTop = endPoint.y;
			clearInterval(myTimer);
			myTimer = null;
		}
		
		//2、改变外观（UI）
		domObj.style.left = currLeft+"px";
		domObj.style.top = currTop+"px";
	}	
	
	startMove();
	
}


//缓冲运动
function moveHuanChongObj(domObj,startPoint,endPoint,num,timeSpace){
	var currLeft = startPoint.x;
	var currTop = startPoint.y;
	
	//启动定时器
	function startMove(){
		myTimer=setInterval(goStep,timeSpace);
	}

	//单步函数
	function goStep(){
		//1、计算（改变数据）        
		var incLeft = Math.abs(currLeft-endPoint.x)/num;
		
		if(incLeft<1){
			incLeft =1;
		}		
		currLeft = currLeft+incLeft;
		
		if(currLeft>endPoint.x){
			currLeft = endPoint.x;
			clearInterval(myTimer);
			myTimer = null;
		}
				
		//2、改变外观（UI）
		domObj.style.left = currLeft+"px";
	}	
	
	startMove();
	
}


//透明度变换

//domObj:要变换的dom对象
//startOpacity:起始透明度
//endOpacity：结束的透明度
//inc：透明度的增量
//timeSpace:时间间隔
function fadeInOut(domObj,startOpacity,endOpacity,inc,timeSpace){
	var currOpacity = startOpacity;//
	var myTimer = null;	
	//启动定时器
	(function(){
		myTimer=setInterval(function(){
				//1、计算（改变数据）
				currOpacity = currOpacity+inc;
				if(inc>0){
					if(currOpacity>=endOpacity){
						currOpacity = endOpacity;
						clearInterval(myTimer);
						myTimer = null;
					}                  
				}else if(inc<0){
					if(currOpacity<=endOpacity){
						currOpacity = endOpacity;
						clearInterval(myTimer);
						myTimer = null;
					}
				}
				//2、改变外观（UI）
				domObj.style.opacity = currOpacity;
			},
			timeSpace);
	})();
}

//淡入：
//domObj:要变换的dom对象
//inc：透明度的增量
//timeSpace:时间间隔

function fadeIn(domObj,inc,timeSpace){
	fadeInOut(domObj,0,1,inc,timeSpace);
}

//淡出：
//domObj:要变换的dom对象
//inc：透明度的增量
//timeSpace:时间间隔
function fadeOut(domObj,inc,timeSpace){
	fadeInOut(domObj,1,0,-1*inc,timeSpace);
}


//无缝滚动


//function noSpaceScrollMove(){
//已知条件
//1、一共几张图片(5张)，单张图片的宽度(100)
//2、(容器)可视区域的宽度(3*100)（最好单张图片宽度的倍数）
//domObj

function marquee1704(domObj,picCount,picWidth){
	var myTimer = null;
	var currLeft =0;
	var totalWidth = picWidth*picCount;
	
	(function(){
		myTimer = setInterval(function(){			
				currLeft--;
				if(currLeft<=-1*totalWidth){
					currLeft=0;
				}
				domObj.style.left = currLeft+"px";
		},10);
	})();	
}

//function noSpaceScrollMove(){
//已知条件
//容器对象

//1、一共几张图片(5张)，单张图片的宽度(100)
//2、(容器)可视区域的宽度(3*100)（最好单张图片宽度的倍数）
//domObj
/*
$("box"),
{boxWidth:300,boxHeight:200,picWidth:100},
["images/w4.jpg","images/w5.jpg","images/w6.jpg","images/w7.jpg","images/www.jpg"],
timeSpace
*/
function marquee1704_02(boxObj,obj,imgs,timeSpace){
			
	//明确：多产生几张图片
	var addCount = obj.boxWidth/obj.picWidth;//3;
	var moveBoxWidth = (imgs.length+addCount)*obj.picWidth;
	
	//1、动态创建html标签（放图片的盒子，所有的图片）
	//1）、创建放图片的盒子
	var moveBox = document.createElement("div");
	moveBox.style.cssText = "position:absolute;top:0px;left:0px;width:"+moveBoxWidth+"px;height:"+obj.boxHeight+"px;";
	boxObj.appendChild(moveBox);
	//2）、创建所有的图片，并房子moveBox
	for(let i=0;i<imgs.length;i++){
		var imgObj = document.createElement("img");
		imgObj.src=imgs[i];
		imgObj.style.cssText = "width:"+obj.picWidth+"px;height:"+obj.boxHeight+"px;float:left;"
		moveBox.appendChild(imgObj);
	}
	//多出来图片
	for(let i=0;i<addCount;i++){
		var imgObj = document.createElement("img");
		imgObj.src=imgs[i];
		imgObj.style.cssText = "width:"+obj.picWidth+"px;height:"+obj.boxHeight+"px;float:left;"
		moveBox.appendChild(imgObj);
	}
	
	//2、开始动起来
	
	var picCount=imgs.length;//需要展示图片的数量
	var picWidth=obj.picWidth;
	
	var myTimer = null;
	var currLeft =0;
	var totalWidth = picWidth*picCount;
	
	(function(){
		myTimer = setInterval(function(){			
				currLeft--;
				if(currLeft<=-1*totalWidth){
					currLeft=0;
				}
				moveBox.style.left = currLeft+"px";
		},timeSpace);
	})();
}

//抛物线
//参数：
//起点，终点
function drawParabola(startPoint,endPoint,timeSpace){
	var myTimer = null;
	var x=0;
	//1、画个点
	drawPoint(endPoint.x,endPoint.y);
	var tempPoint = {x:endPoint.x-startPoint.x,y:endPoint.y-startPoint.y};
	var p = (tempPoint.y*tempPoint.y)/(2*tempPoint.x);//y^2=2px

	(function(){
		myTimer = setInterval(function(){
				x++;
				var y = Math.sqrt(2*p*x);//y^2=2px
				
				if(x>=endPoint.x-startPoint.x){
					clearInterval(myTimer);
				}
				
				drawPoint(x+startPoint.x,y+startPoint.y);
			
		},timeSpace);				
	})();	
}

function drawPoint(x,y){
	var div = document.createElement("div");
	div.style.cssText = "position:absolute;width:10px;height:10px;border-radius:50%;background-color:red";
	div.style.left = x+"px";
	div.style.top = y+"px";
	document.body.appendChild(div);
}