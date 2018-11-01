window.onload=function(){
	var banner=document.getElementById("banner")
	var imgs=document.querySelectorAll(".move img")
	var prev=document.getElementsByClassName("banner_prev")[0]
	var next=document.getElementsByClassName("banner_next")[0]
	var index=0;
	var timer=null;
		timer=setInterval(function(){
			index++
			change()
		},2000)
				
		banner.onmouseenter=function(){
			clearInterval(timer)
		}
		banner.onmouseleave=function(){
			timer=setInterval(function(){
				index++
				change()
			},2000)
		}
		//前按钮
		prev.onclick=function(){
			index--
			change();
		}
		//后按钮点击
		next.onclick=function(){
			index++;
			change();	
		}
							
		function change(){
			//所有消失
			for(var i=0;i<imgs.length;i++){
				imgs[i].style.display="none";
			}
			if(index>imgs.length-1){
				index=0;
			}
			if(index<0){
				index=imgs.length-1;
			}
			imgs[index].style.display="block";
		}
	}
