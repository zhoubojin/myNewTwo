window.onload=function(){
	var index=0;
	var inputs=document.getElementsByTagName("input");
	var spans=document.getElementsByTagName("span");
	for(let i=0;i<inputs.length-2;i++){
		inputs[i].index=i;
		inputs[i].onblur=function(){	
//		console.log(i);		
			var x=regular(this.name,this.value);
			for(var j=0;j<spans.length;j++){
				j=inputs[i].index;								
				spans[j+1].innerHTML=x;
				break;										
			}
		}		
	}
	
	var userNa,userPa;
	$("sub").onclick = function(){
		var xhr = new XMLHttpRequest();
		xhr.open("post","../php/loginPage.php",true);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				var str = xhr.responseText;
				if(str=="1"){
					if($("check").checked){
						var date = new Date();
						date.setDate(date.getDate()+10);
						document.cookie = "userNa"+"="+escape($("userId").value)+";expires="+date.toGMTString();
						var date = new Date();
						date.setDate(date.getDate()+10);
						document.cookie = "userPa"+"="+escape($("passId").value)+";expires="+date.toGMTString();
					}else if(!$("check").checked){
						var date = new Date();
						date.setDate(date.getDate());
						document.cookie = "userNa"+"="+escape($("userId").value)+";expires="+date.toGMTString();
						var date = new Date();
						date.setDate(date.getDate());
						document.cookie = "userPa"+"="+escape($("passId").value)+";expires="+date.toGMTString();
					}
					location.href = "../index.html";
				}else{
					alert("登陆失败，用户名或者密码不对！");
				}
			}
		}
		
		let postStr="userNa="+$("userId").value+"&userPa="+$("passId").value;
		xhr.send(postStr);
	}
	window._bd_share_config={"common":{
		"bdSnsKey":{},"bdText":"","bdMini":"2","bdPic":"","bdStyle":"0","bdSize":"16"},
		"share":{},"image":{"viewList":["qzone","tsina","tqq","renren","weixin"],
		"viewText":"分享到：","viewSize":"16"},
		"selectShare":{"bdContainerClass":null,"bdSelectMiniList":["qzone","tsina","tqq","renren","weixin"]}
	};
		with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
	
}