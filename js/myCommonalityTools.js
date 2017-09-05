/*
函数名：t$
功能：获取id为nameId的标签
参数：nameId
返回值：id为nameId的标签
 **/
function t$(nameId){
	return document.getElementById(nameId);
}

//===================================
function t$create(str){
	return document.createElement(str);
}


/*
函数名：factorial
功能：算给定数的阶乘
参数：num
返回值：返回给定数的阶乘  
 **/
function factorial(num){
	if(num==1){
		return 1;
	}
	return num* nn(num-1);
}

//===================================
/*
函数名:getElementChilds,getElementNode
功能：返回节点的某类型的子节点
参数1：节点
参数1：节点类型
返回值：符合传入类型的子节点（数组）
**/	
function getElementChilds(node,type){
	var arr=[];
	for(var i in node.childNodes){
		if( node.childNodes[i].nodeType==type){
			arr.push(node.childNodes[i]);
		}
	}
	return arr;
}
function getElementNode(node,type){
	var arr=[];
	var arr1=node.childNodes;
	for(var i in arr1){
		if(arr1[i].nodeType==type){
			arr.push(arr1[i]);
		}
	}
	return arr;		
}

//====================================
/*
函数名:getStyle
功能：取得样式的值
参数1：元素
参数2：样式名
返回值：样式的值
**/	
function getStyle(obj,attrName){
	if(obj.currentStyle){
		return obj.currentStyle[attrName];
	}else{
		return window.getComputedStyle(obj,false)[attrName];
	}
}

//===================================