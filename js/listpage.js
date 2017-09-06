window.onload=function(){
	window.onload = window.onscroll = function(){ 
		let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		console.log(scrollTop);
		let levels=t$("leves").children;
		console.log(levels.length);
		if(scrollTop>900){
			t$("leves").style.display="block";
		}else if(scrollTop<900){
			t$("leves").style.display="none";
		}
		levels[0].onclick=function(){
      		$("body").animate({"scrollTop":1472},400);
		}
		levels[1].onclick=function(){
      		$("body").animate({"scrollTop":2644},400);
		}
		levels[2].onclick=function(){
	      	$("body").animate({"scrollTop":3800},400);
		}
	}
	let str="";
	$.ajax({
	type:"get",
	url:"../../goodsAndShoppingCart/getGoodsList.php",
	async:true,
	success: function(data){
		var str1=eval(data);
	for(let i=0; i<32; i++){
		console.log(i);
		str='<li><a href="#"><img src='+str1[i].goodsImg+'></a><div><p>'+str1[i].goodsDesc+'</p><p>'+str1[i].goodsDanPrice+'</p><p>'+str1[i].goodsPrice+'</p><span>'+str1[i].goodsYuanPrice+'</span><a href="#">立即购买</a></div></li>';
		$("#ul1").append(str);
	}
	
	}
});
}