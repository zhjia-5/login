(function ($) {
	let type = 0,
		remeber = true,
		username = Cookies.getCookie("username"),
		password = Cookies.getCookie("password");
	const loginBtn = document.getElementsByClassName('login-btn')[0];
	// 用户名密码回填
	if (username && password) {
		document.getElementsByClassName('username')[0].value = username;
		document.getElementsByClassName('password')[0].value = password;
	}

	$('.select').on('change', (e) => {
		type = e.target.value;
	})
	$('.username').on('change', (e) => {
		username = e.target.value
	})
	$('.password').on('change', (e) => {
		password = e.target.value
	})
	$('#remeber').on('change', (e) => {
		remeber = e.target.checked
	})

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
			$('.login-btn').attr('disabled', true);
			$('.login-btn').html("登陆中...");
			const pro = login(type, username, password);
			pro.then(data => {
				if (data.success) {
					if (remeber) { //如果记住密码
						Cookies.setCookie('username', username, 7);
						Cookies.setCookie('password', password, 7);
					} else { //不记住删除
						Cookies.deleteCookie("username");
						Cookies.deleteCookie("password");
					}
					window.location.href = './newLine.html';
				} else {
					$('.login-btn').attr('disabled', false);
					$('.login-btn').val("登陆");
					alert(data.errMsg);
				}
			}, err => {
				alert(err);
			});
		}
	}
	// 登录请求 函数
	function login(type, username, password) {
		return new Promise((resolve, reject) => {
			$.post('http://192.168.31.248:8081/fcgagents/newline/login.do', {
					type, // 0
					username, //'13907703444'
					password, //'123456'
				},
				function (data) {
					data.success ? resolve(data) : reject('登录失败');
				}
			);
		})
	}
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
})(Zepto)