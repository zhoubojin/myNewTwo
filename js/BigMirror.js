
var singleton = (function(){	
	//类（放大镜）
	function BigMirror(obj){		
		let defaultObj = {
			boxDom:null,
			mirrorDom:null,
			showBoxDom:null,
			bigImgDom:null,
			bigImg:"",
			width:50,
			height:50,
			//倍数
			mult : 3,
			
		};
		
		for(let key in obj){
			defaultObj[key]=obj[key];
		}
		
		for(let key in defaultObj){
			this[key] = defaultObj[key];
		}
		this.initUI();
		this.initEvent();
	}
	
	//方法：
	BigMirror.prototype={
		//动态产生放大镜的DOM(界面)	
		initUI:function(){
			//一、产生dom对象。
			this.createAllDom();
			//二、对dom对象做动态改变（left，top，width，height）和dom元素父对象
			this.updateAttr();
		},
		
		createAllDom:function(){
			//1、产生镜子
			this.mirrorDom = t$create("div");
			let cssStr = "position:absolute;left:0px;top:0px;background-color:#ccc;opacity:0.5;";
			this.mirrorDom.style.cssText=cssStr;
			
			//2、产生大图的可视区域
			this.showBoxDom = t$create("div");
		 	cssStr = "position:absolute;border:1px solid black;overflow:hidden;";
			cssStr+="top: 0px;";
			this.showBoxDom.style.cssText=cssStr;
			
			//3、产生大图
			this.bigImgDom = t$create("img");
			cssStr = "position:absolute;left:0px;top:0px;";		
			this.bigImgDom.style.cssText = cssStr;
		},
			
		//修改放大镜的相关属性；
		updateAttr:function(){
			//1）、镜子
			this.mirrorDom.style.width = this.width+"px";
			this.mirrorDom.style.height= this.height+"px";
			this.mirrorDom.style.display="block";
			this.boxDom.appendChild(this.mirrorDom);

			//2)、产生大图的可视区域			
			this.showBoxDom.style.left= this.boxDom.offsetWidth+"px";
			this.showBoxDom.style.width = this.width*this.mult+"px";
			this.showBoxDom.style.height = this.height*this.mult+"px";
			this.mirrorDom.style.display="block";
			this.boxDom.appendChild(this.showBoxDom);
			//3)、产生大图
			this.bigImgDom.src=this.bigImg;
			this.bigImgDom.style.width = this.mult*this.boxDom.offsetWidth+"px";
			this.bigImgDom.style.height = this.mult*this.boxDom.offsetHeight+"px";
			this.mirrorDom.style.display="block";
			this.showBoxDom.appendChild(this.bigImgDom);
		},
		//初始化事件；
		initEvent:function(){

			let obj = this;
			this.mirrorDom.onmouseout = function(){
				//this是事件源
				obj.mirrorDom.style.display="none";
				obj.showBoxDom.style.display="none";
			}
			
			this.mirrorDom.onmouseover = function(){
				obj.mirrorDom.style.display="block";
				obj.showBoxDom.style.display="block";
			}
			
			this.boxDom.onmouseout = function(){
				obj.mirrorDom.style.display="none";
				obj.showBoxDom.style.display="none";
			}
			
			this.boxDom.onmousemove= function(event){
				let evt = event||window.event;
			//1、让镜子跟着鼠标移动
					//1、让镜子跟着鼠标移动
				let left = evt.pageX-obj.boxDom.offsetLeft-obj.width/2;
				let top = evt.pageY-obj.boxDom.offsetTop-obj.height/2;
				
				if(left<0){
					left =0;
				}else if(left> obj.boxDom.offsetWidth-obj.width){
					left= (obj.boxDom.offsetWidth-obj.width)+"px";
				}
				
				if(top<0){
					top =0;
				}else if(top> obj.boxDom.offsetHeight-obj.height){
					top= (obj.boxDom.offsetHeight-obj.height)+"px";
				}
				
				obj.mirrorDom.style.left=left+"px";
				obj.mirrorDom.style.top=top+"px";
				
				//2、让放大的图片也进行对应的移动
				obj.bigImgDom.style.left = (-1*obj.mult*left)+"px";
				obj.bigImgDom.style.top = (-1*obj.mult*top)+"px";
			}	
		}
	}
	
	//单例对象
	var instance;
	
	return {
				getInstance:function(obj){
					if(instance==undefined){
						instance = new BigMirror(obj);						
					}else{
						//1、把单例对象的属性进行修改
						//1）、放大镜的宽，高，倍数
						instance.boxDom = obj.boxDom;
						instance.width = obj.width;
						instance.height = obj.height;
						instance.mult = obj.mult;
						instance.bigImg = obj.bigImg;
						
						//2、把对相应dom对象的属性也进行修改
						instance.updateAttr();
						instance.initEvent();
					}
					//3、增加事件
					return instance;
				}
			}
})();