  /** 
   * 获取指定的URL参数值 
   * URL:http://127.0.0.1:5501/add.html?id=1
   * 参数：paramName URL参数 
   * 调用方法:getParam("id") 
   * 返回值:1 
   * 如果没有id值返回0
   */
   function getParam(paramName) {
    let paramValue = "",
      isFound = !1;
    if (this.location.search.indexOf("?") === 0 && this.location.search.indexOf("=") > 1) {
      // 解码 decodeURI
      let arrSource = decodeURI(this.location.search).substring(1, this.location.search.length).split("&"),
        i = 0;
      while (i < arrSource.length && !isFound) {
        arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0);
        i++;
      }
    }
    return paramValue === "" && (paramValue = null), paramValue;
  }
