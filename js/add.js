(async function ($) {
  alert("2222")
  let isLoading = false; //作为判断是否正在加载中的标记
  const id = +getParam("id"); // +转为Number
  // 大于0表示详情页 否则是添加页
  if (id > 0) {
    const res = await init(id)
    console.log(res);
    renderList(0, true, res)
  } else {
    renderList(0, false, null);
  }
  async function init(id) {
    // 如果id为0表示新增页；如果大于0表示详情页，需要球请求数据
    isLoading = true; //开始请求数据的时候设置为true
    svgShow(isLoading); //控制svg图显示与否
    await delay(2000);
    return new Promise((resolve, reject) => {
      $.post('http://192.168.31.248:8081/fcgagents/manager/newline/show.do', {
          id
        },
        function (data) {
          data ? resolve(data) : reject(data);
          isLoading = false; //结束后设置为false
          svgShow(isLoading);
        },
      );
    })
  }


  // 切换类型，重新渲染
  $('#type').on('change', (e) => {
    const val = e.target.value;
    renderList(+val, false); //将val转为字符串
  })
  // 点击 < 回退上次链接
  $(".left").on('click', () => {
    window.history.back(-1);
  })
  // 控制svg是否显示
  function svgShow(isLoading) {
    isLoading ? $('.svg').show() : $('.svg').hide();
  }
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
      let arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"),
        i = 0;
      while (i < arrSource.length && !isFound) {
        arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0);
        i++;
      }
    }
    return paramValue === "" && (paramValue = null), paramValue;
  }
})(Zepto);