window.onload=function(){
	let liimgs=document.getElementsByClassName("img");
	let index;
	let j;
	for (let i=0;i<liimgs.length;i++) {
		liimgs[i].index=i;
		liimgs[i].style="border:1px solid #ccc";
		liimgs[i].onmouseover=function(){
			j=liimgs[i].index;
			this.style="border:1px solid #f00";
			t$("box").style.backgroundImage="url("+this.src+")";
		}
		liimgs[i].onmouseout=function(){
			this.style="border:1px solid #ccc";
		}
		
		t$("box").onmouseover = function(){
			singleton.getInstance({"boxDom":this,"bigImg":""+liimgs[j].src+"",width:100,height:100,mult:5});
		}
	}
	let lis=t$("two_ul").children;
	let imgons=document.getElementsByClassName("imgon");
	lis[0].onclick=function(){
		imgons[0].style.display="block";
		imgons[1].style.display="none";
		imgons[2].style.display="none";
		this.style.background="#e3e3e3";
		lis[1].style.background="#ccc";
		lis[2].style.background="#ccc";
	}
	lis[1].onclick=function(){
		imgons[0].style.display="none";
		imgons[1].style.display="block";
		imgons[2].style.display="none";
		this.style.background="#e3e3e3";
		lis[0].style.background="#ccc";
		lis[2].style.background="#ccc";
	}
	lis[2].onclick=function(){
		imgons[0].style.display="none";
		imgons[1].style.display="none";
		imgons[2].style.display="block";
		this.style.background="#e3e3e3";
		lis[1].style.background="#ccc";
		lis[0].style.background="#ccc";
	}
	
		
			
			
		
	
}
