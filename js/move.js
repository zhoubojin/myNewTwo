function getStyle(DOM,name){
		if(DOM.currentStyle){
			return DOM.currentStyle[name];
		}else{
			return getComputedStyle(DOM,false)[name];
		}
	}

function move(DOM,attr,target){
  clearInterval(DOM.timer)
  DOM.timer=setInterval(function(){
    if(attr=='opacity'){
      var cur=Math.round(parseFloat(getStyle(DOM,attr))*100)
    }else{
      var cur=parseInt(getStyle(DOM,attr));
    }
    var speed=(target-cur)/8;
    speed=speed>0?Math.ceil(speed):Math.floor(speed);
    if(cur==target){
      clearInterval(DOM.timer)
    }else{
      if(attr=='opacity'){
        DOM.style.filter='alpha(opacity:'+(cur+speed)+')'
        DOM.style.opacity=(cur+speed)/100
      }else{
        DOM.style[attr]=cur+speed+'px';
      }
    }
  },30)
}


function t$(id){
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