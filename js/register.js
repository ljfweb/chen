$(function(){
	
//	加载尾部
	$("#commonFoot").load("root.html","数据",function(){})
	
//	图标跳转
	$(".login_top img").click(function(){
			location.href="body.html"	
	})
	
//	登录账号
    var fag =false;
$(".phone_input").blur(function() {
	var pattern = /^1\d{10}$/;;
	if(pattern.test($(this).val())) {
		fag = true;
		$(".registry .register_input:nth-child(1)").css("border-color", "greenyellow")
//		alert("")
	} else {
		fag = false;
		$(".registry .register_input:nth-child(1)").css("border-color", "red")
		alert("手机号不合法")
	}
	})

	
	//密码

var fag2=false;
	$(".Password_input").blur(function() {
		var PasswordReg = /^[a-z0-9]{8,20}$/;
		if(PasswordReg.test($(this).val())) {
			fag2 = true;
		$(".registry .register_input:nth-child(2)").css("border-color", "greenyellow")
			
			Password_True = $(this).val();
		} else {
			fag2 = false;
			$(".registry .register_input:nth-child(2)").css("border-color", "red")
			alert("密码不合法")
		}
	})

//二次密码
var fag3=false;
	$(".two_passwords_input").blur(function() {
		var PasswordReg = /^[a-z0-9]{8,20}$/;
		if($(this).val()==Password_True&&PasswordReg.test($(this).val())) {
			fag3 = true;
			$(".registry .register_input:nth-child(3)").css("border-color", "greenyellow")
		} else {
			fag3 = false;
			$(".registry .register_input:nth-child(3)").css("border-color", "red")
			alert("密码错误")
		}
	})
	
    console.log(fag)
    console.log(fag2)
    console.log(fag3)
	$(".register_input_btn").click(function(){
		if(fag==true&&fag2==true&&fag3==true){
			alert("注册成功")
			localStorage.setItem($(".phone_input").val(),$(".two_passwords_input").val());			
			window.location="land.html";
		}else{
			alert("请填写正确信息")
		}
	})

	
	
	
	
	
	
})