(function ($) {
	let type = 0,
		remeber = true,
		username = storage.getCookie("username"),
		password = storage.getCookie("password");
	const loginBtn = document.getElementsByClassName('login-btn')[0];
	// 数据回填
	if (username && password) {
		document.getElementsByClassName('username')[0].value = username;
		document.getElementsByClassName('password')[0].value = password;
	}

	const message = new Message();


	// 点击登录
	loginBtn.onclick = () => {
		if (!username && !password) {
			psdErr();
			unameErr();
		} else if (!username) {
			unameErr();
		} else if (!password) {
			psdErr();
		} else {
			// 用户密码不为kong
			$('.login-btn').attr('disabled', true);
			$('.login-btn').html("登陆中...");

			// 登录请求 函数
			$.ajax({
				url: 'http://192.168.31.248:8081/fcgagents/newline/login.do',
				type: 'post',
				data: {
					type, // 0
					username, //'13907703444'
					password, //'123456'
				},
				dataType: 'json',
				success(data) {
					console.log(data);
					// 判断用户名密码是否正确 
					if (data.success) {
						if (remeber) { //如果记住密码
							storage.setCookie('username', username, 7); //有效期7天
							storage.setCookie('password', password, 7);
						} else { //不记住删除
							storage.deleteCookie("username");
							storage.deleteCookie("password");
						}
						storage.setSession(username); //登录成功设置session
						window.location.href = '../newline/newline.html';//登录成功跳转
						
					} else {//密码或用户名错误
						$('.login-btn').attr('disabled', false);
						$('.login-btn').html("登陆");
						console.log(data);
						message.show({
							type: "warning",
							text:data.errmsg,
							duration:5000,
						});
					}
				},
				error(err) {
					$('.login-btn').attr('disabled', false);
					$('.login-btn').html("登陆");
					message.show({type: "error",text:`登录失败：${err.statusText}`,duration:5000});
				}
			});
		}
	}


	$('.select').on('change', (e) => {
		type = e.target.value;
	});
	$('.username').on('change', (e) => {
		username = e.target.value.trim();
	});
	$('.password').on('change', (e) => {
		password = e.target.value.trim();
	});
	$('#remeber').on('change', (e) => {
		remeber = e.target.checked
	});

	// 用户名为空函数
	function unameErr() {
		$('.uname-err').show();
		$('.username').addClass("redBorder")
	}
	// 密码不空函数
	function psdErr() {
		$('.psd-err').show();
		$('.password').addClass("redBorder")
	}
})(jQuery)