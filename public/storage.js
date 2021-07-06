const storage = {
  // 设置cookie
  setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  },
  // 获取cookie
  getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  },
  // 删除cookie
  deleteCookie(cname) {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  },
  // 设置 sesstion  
  setSession(sname) {
    window.sessionStorage.setItem("sname", sname); //设置sessionStorage
  },
  //  获取 Session  
  getSession(message) {
    const str = window.sessionStorage.getItem("sname");
    if (str) {
      return str;
    } else {
      if(document.getElementsByClassName("submitWraper")[0]){
        document.getElementsByClassName("submitWraper")[0].style.display = "none";
      }
      message.show({
        type: "warning",
        text: "请登录后再访问",
        callback() { //成功的回调
          window.location.href = '/login/login.html';
        }
      });
      return false;
    }
  }
}