$(function(){
	
		var shoppes=localStorage.getItem("cooks")
	
		console.log(shoppes)
	
		var list=shoppes.split(",")
		console.log(list)
		console.log(list[0])
		
		var lis_str=""
	        lis_str+='<div class="single">'
					+'<div class="til_box1">'
						+'<input class="til_boxss" type="checkbox" />'
					+'</div>'
					+'<div class="single_pic">'
						+'<img src="'+list[1]+'"/>'
					+'</div>'
					+'<div class="single_box">'
						+'<span>'+list[2]+'</span>'
						
						+'<span class="til_size">尺寸：L码&nbsp;&nbsp;剩余：4件</span>'
					+'</div>'
					+'<div class="single_ms">'
						+'<p class="til_old_pir">'+list[4]+'</p>'
						+'<p>'+list[3]+'</p>'
					+'</div>'
					+'<div class="single_ms">'
						+'<div>'
							+'<i class="next">-</i>'
							+'<input class="numss" type="text" value="'+list[6]+'"/>'
							+'<i class="prve">+</i>'
						+'</div>'
					+'</div>'
					+'<div class="single_ms">'
						+'<p class="sale_pic">￥'+list[3]+'</p>'
					+'</div>'
					+'<div class="single_mss">'
						+'<span>添加到收藏夹</span>'
						+'<div class="del">删除</div>'
					+'</div>'
				+'</div>'
				
		$(".shopping_list").html(lis_str)	
		
		
		
		
		var shoppe_nums=1;
	$(".next").click(function(){
			shoppe_nums=parseInt($(".numss").val());
			shoppe_nums--;
			shoppe_nums<0?shoppe_nums=0:shoppe_nums;
			$(".numss").val(shoppe_nums);
		
		$(".sale_pic").html("￥"+$(".numss").val()*list[3].substr(1))	
		
	})
	$(".prve").click(function(){
			shoppe_nums=parseInt($(".numss").val());
			shoppe_nums++;
			shoppe_nums<0?shoppe_nums=0:shoppe_nums;
			$(".numss").val(shoppe_nums);
		$(".sale_pic").html("￥"+$(".numss").val()*list[3].substr(1))	
	
	})
		$(".sale_pic").html("￥"+$(".numss").val()*list[3].substr(1))	
		
		
		
		console.log($(".til_boxss"))
		console.log($(".til_boxss").attr("checked"))
	$(".til_boxss").change(function(){
		console.log($(this).attr("checked"))
		
		if($(this).attr("checked")){
			
		$(".all_shope span").html($(".numss").val())	
			
		$(".all_pir span").html("￥"+$(".sale_pic").html())	
		}
		
	})
		
})