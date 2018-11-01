$(function(){
	
//	加载尾部
	$("#commonFoot").load("root.html","数据",function(){})
	
//	图标跳转
	$(".login_top img").click(function(){
			location.href="body.html"	
	})
	
//	注册跳转
	$(".other_btn3").click(function(){
			location.href="register.html"	
	})	
	
	$(".login").click(function(){
		var user=$(".user_name").val()
		var pass=$(".user_pass").val()
		console.log(user)
		console.log(pass)
		var keyid=localStorage.getItem(user)
		console.log(keyid)
		if(user==""){
			alert("请输入账号密码")
		}else if(keyid!=null){
			if(keyid==pass){
				alert("登录成功")
				location.href="body.html"
			}else{
				alert("密码错误");
				}
		}else{
			alert("没有该用户");
		}
			
		
		
		
		
	})
	
})