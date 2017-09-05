window.onload=function(){
	/**	
	onclick改变$("main_firstDiv").children的样式
	
	*/
	let ps=$("main_firstDiv").children;
//	console.log(ps.length);
	let num=0;
	let num1=0;
	ps[0].onclick=function(){
		num++;
		if(num%2!=0){
			$("form").style.display="block";
			$("qianhao").style.display="none";
			ps[0].style.backgroundColor="#ca5252";
			ps[0].style.color="#fff";
			ps[1].style.backgroundColor="#fff";
			ps[1].style.color="#000";
		}else if(num%2==0){
			ps[0].style.backgroundColor="#ca5252";
			ps[0].style.color="#fff";
			ps[1].style.backgroundColor="#fff";
			ps[1].style.color="#000";
		}
		num=0;
	}
	ps[1].onclick=function(){
		num1++;
		if(num1%2!=0){
			$("form").style.display="none";
			$("qianhao").style.display="block";
			ps[1].style.backgroundColor="#ca5252";
			ps[1].style.color="#fff";	
			ps[0].style.backgroundColor="#fff";
			ps[0].style.color="#000";
		}else if(num1%2==0){
			ps[1].style.backgroundColor="#ca5252";
			ps[1].style.color="#fff";			
			ps[0].style.backgroundColor="#fff";
			ps[0].style.color="#000";
		}
		num1=0;
	}
	/**	
	触发onblur对input正则验证
	
	*/
	var n,n1,n2,n3,n4,n5;
	var inputs=document.getElementsByTagName("input");
	var spans=document.getElementsByTagName("span");
	$("dzyj1").onblur=function(){
		var y=regular(this.name,this.value);
		$("span1").innerHTML=y;
		if($("span1").innerHTML=="√"){
			var xhr = new XMLHttpRequest();
			xhr.open("get","../php/registrationPage.php?dzyj1="+$("dzyj1").value,true);
			xhr.onreadystatechange = function(){
				if(xhr.readyState==4 && xhr.status==200){
					var str = xhr.responseText;
					if(str=="1"){
						$("psp").innerHTML="用户名已存在！";
						$("span1").innerHTML="×";
					}else{
						$("span1").innerHTML="√";
					}
				}
			}
			xhr.send();
		}
		if(spans[1].innerHTML=="√"){
			n=true;
		}
	}
	inputs[1].onblur=function(){
		var z=regular(this.name,this.value);
		$("span2").innerHTML=z;
		if($("span2").innerHTML=="√"){
			n1=true;
		}
	}	
	inputs[2].onblur=function(){
		if(inputs[1].value==inputs[2].value){
			$("spanma").innerHTML="√";
		}else{
			$("spanma").innerHTML="×";
		}
		if($("spanma").innerHTML=="√"){
			n2=true;
		}
	}	
	inputs[4].onblur=function(){
		var z=regular(this.name,this.value);
		$("span3").innerHTML=z;
		if($("span3").innerHTML=="√"){
			n3=true;
		}
	}	
	inputs[inputs.length-3].onblur=function(){
		var y=regular(this.name,this.value);
		$("dzyja").innerHTML=y;
		if($("dzyja").innerHTML=="√"){
			n4=true;
		}
	}
	$("yanp").onclick=function(){
		var str="";
		for(var i=1;i<=4;i++){
			num2 = parseInt(Math.random()*10);
			str=str+String(num2);
		}
		$("yanp").innerHTML=str;
	}
	var str="",num2;
		for(var i=1;i<=4;i++){
			num2 = parseInt(Math.random()*10);
			str=str+String(num2);
		}
		$("yanp").innerHTML=str;
	$("yanzheng").onblur=function(){
		if($("yanzheng").value==str){
			$("spanyan").innerHTML="√";
		}else{
			$("spanyan").innerHTML="×";
		}
		if($("spanyan").innerHTML=="√"){
			n5=true;
		}
	}
	/**	
	满足提交条件onclick提交表单，进行AJAX请求后端验证满足条件并href到LoginPage.html，
	
	*/

	
		$("submit").onclick=function(){
			if(n==true && n5==true && n4==true  && n3==true  && n2==true && n1==true && $("checkbox").checked){
				var xhr = new XMLHttpRequest();
				xhr.open("get","../php/registrationPage.php?dzyj1="+$("dzyj1").value,true);
				xhr.onreadystatechange = function(){
					if(xhr.readyState==4 && xhr.status==200){
						var str = xhr.responseText;
						if(str=="1"){
							alert("注册失败,请从新填写！");
							for(let i=0;i<inputs.length-1;i++){
								inputs[i].innerHTML="";
							}
							for(let j=0;j<spans.length-1;j++){
								spans[j].innerHTML="";
							}
						}else{
							alert("恭喜您！注册成功");
							location.href = "../html/Login Page.html";
						}
					}
				}
				xhr.send();
			}else if(n!=true || n5!=true || n4!=true || n3!=true  || n2!=true || n1!=true || !$("checkbox").checked){
				$("submit").onclick=function(){
					return false;
				}
			}
		}
	
	
	
	
	
	
	
	
	
	
	
}
