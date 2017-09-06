//添加cookie
//参数：
//键
//值
//保质期（以天为单位）
//返回值：
function addCookie(key,value,dayCount){
	//1、失效时间点计算出来
	var date = new Date();
	date.setDate(date.getDate()+dayCount);
	
	//2、添加cookie
	document.cookie = key+"="+escape(value)+";expires="+date.toGMTString();
}


//修改cookie
//参数：
//键
//值
//保质期（以天为单位）
//返回值：
function updateCookie(key,value,dayCount){
	//1、失效时间点计算出来
	addCookie(key,value,dayCount);
}


//删除cookie
//参数：
//键

function removeCookie(key){
	addCookie(key,"",-1);
}

/*
获取cookie
参数：
键，

返回值：
值: "" 表示没有找到，否则：找到了
**/
function getCookie(key){
	var str=unescape(document.cookie);
	//1、用"; "分割成数组
	var arr = str.split("; ");	
	//2、查找
	var index=-1;
	for(var i=0;i<arr.length;i++){
		if(arr[i].indexOf(key+"=")==0){
			index = i;
			break;
		}
	}	
	//3、截取返回
	if(index==-1){
		return "";
	}else{
		return arr[index].substring((key+"=").length);
	}
}

/*
函数名：isCookie
功能：判断浏览器是否禁用cookie
返回值：true:false
**/	
 function isCookie(){
	return navigator.cookieEnabled?true:false;
 }