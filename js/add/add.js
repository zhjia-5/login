(async function ($) {
  renderAdd();
  const id = +getParam("id"); // +转为Number
  // 大于0表示详情页，需要根据url中的 id去请求数据
  if (id > -5) {
    // fetchData(id);
    const json = {
      type:"3",
      name:'这里是工单名',
      isProject:"0",
      projectName:"这里是项目名称",
      remark:"这里是备注信息"
  
    }
    deserialize($('.form'), json)

    // $('.submit').hide();
    // $('input').attr('readonly', true);
    // $('[type=radio]').attr("disabled", 'disabled')
    // $("select").attr("disabled", "disabled")
    // $('textarea').attr('readonly', true);

  }





  async function fetchData(id) {
    // 如果id为0表示新增页；如果大于0表示详情页，需要球请求数据
    $('.svg').show();
    await delay(2000);
    $.ajax({
      url: 'http://192.168.31.248:8081/fcgagents/manager/newline/show.do',
      type: 'post',
      data: { id },
      dataType: 'json',
      success(data) {
        if (data.newline) {
          renderAdd(0, true);
          console.log(res);
          $('.svg').hide();
          $(".isAddOrEdit").html("专项工单详情");
          deserialize($('.form'), data.newline)
        }
      },
      error(err) {
        $('.svg').hide();
        alert("请求失败:"+ err.statusText);
      }
    });
  }

  // 切换类型，重新渲染
  $('#type').on('change', (e) => {
    const val = e.target.value;
    renderAdd(+val, false); //将val转为字符串
  })
  // 点击 < 回退上次链接
  $(".left").on('click', () => {
    window.history.back(-1);
  })
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
})(jQuery);