(async function ($) {
  const message = new Message();
  if(!storage.getSession(message)) return ; //判断是否登录
  const stateArr = ['', '报建', '设计', '快开', '会审', '派工', "施工", '工建系统工单推送', '资源录入', '验收交维', 'CRM派单', '现场装机', '起草人确认', '归档'],
    buildComp = document.getElementsByClassName('buildComp')[0],
    svpComp = document.getElementsByClassName("supervisionComp")[0],
    docWidth = $(document.body).outerWidth(true),
    name = getParam("name") ?? null, //通过url获取工单名name
    id = +getParam("id") ?? null, //通过url获取工单id
    state = +getParam("state") ?? null, //通过url获取工单状态
    isfaston = +getParam("isfaston") ?? null, //是否为快开 0否 1是 
    iscover = +getParam("iscover") ?? null, //是否为预覆盖 1预覆盖+装机 2非预覆盖
    trialcount = +getParam("trialcount") ?? null; //会审的次数
  let isBuildOrSup = false, //判断当前滚动是施工单位还是监理单位，默认为两者都不是。如果是施工单位设置为"buildComp",监理单位为supComp
    isLoading = false,
    buildPage = 1, //施工单位的page
    buildTotalPage = 1, //施工单位的totalPage
    supPage = 1, //施工单位的page
    supTotalPage = 1, //施工单位的totalPage
    url = OperateSub.returnUrl(state); //获取当前状态请求的url地址

  render(name, id, state, iscover); //初始化


  // *************************工单操作*******************************
  $(".main .title").html(stateArr[state]); //设置标题为当前状态
  // .main.left ====>>> 工单列表
  $('.main .left').on('click', () => {
    window.history.back(-1);
  });


  // ************************下一步处理人****************************
  // 选择处理人按钮 (根据下一步状态选择)
  $('.nextPerson-btn').on('click', async () => {
    window.scrollTo({top: 0});//置顶
    $(".nextPerson .list").html(''); //清空
    $(".main").offset({
      top: 0,
      left: -docWidth
    });
    $(".nextPerson").offset({
      top: 0,
      left: 0
    });
    console.log(`会审次数==${trialcount}`);
    let nextState = OperateSub.nextState(state, isfaston, iscover, trialcount); //获取下个状态
    console.log("当前状态：" + state + "---------" + "下一个状态：" + nextState);
    const res = await fetchNext(1, nextState);
    if (res.rows.length) {
      const data = res.rows;
      OperateSub.renderNextPerson(data);
    } else {
      $(".nextEmpty").show()
    }
    $('.nextSvg').hide();
  })

  // 点击处理人事件  表单回填 并放回工单操作
  $('.nextPerson .list').on('click', (e) => {
    OperateSub.nextPersonFillback(e); //联系人的表单回填
    $(".main").offset({
      top: 0,
      left: 0
    });
    $(".nextPerson").offset({
      top: 0,
      left: docWidth
    })
  })
  // .nextPerson-btn.left  ==>>>  操作工单页
  $('.nextPerson .left').on('click', () => {
    $(".main").offset({
      top: 0,
      left: 0
    });
    $(".nextPerson").offset({
      top: 0,
      left: docWidth
    })
  });


  // *********************** 施工单位********************************
  // 施工单位选择按钮   
  $('.buildComp-btn').on('click', async () => {
    window.scrollTo({top: 0});
    isBuildOrSup = 'buildComp';
    $(".main").offset({
      top: 0,
      left: docWidth
    });
    $(".buildComp").offset({
      top: 0,
      left: 0
    });
    if (buildPage > buildTotalPage) return; //此处判断点击按钮看是否区请求数据
    const res = await fetchBuildComp(1, 20, buildPage++);
    if (res.rows.length) { //如果有数据
      buildTotalPage = res.totalPage;
      OperateSub.renderbuildComp(res.rows);
    } else {
      $(".buildEmpty").show();
    }
    isLoading = false;
    $(".buildSvg").hide();
  });

  // 施工单位事件  表单回填 并放回工单操作
  $('.buildComp .list').on('click', (e) => {
    OperateSub.buildCompFillback(e); //联系人的表单回填
    $(".main").offset({
      top: 0,
      left: 0
    });
    $(".buildComp").offset({
      top: 0,
      left: -docWidth
    })
  })

  // .buildComp.left  
  $('.buildComp .left').on('click', () => {
    isBuildOrSup = false; //重置
    $(".main").offset({
      top: 0,
      left: 0
    });
    $(".buildComp").offset({
      top: 0,
      left: -docWidth
    })
  });


  // *********************** 监理单位*******************************
  // 监理单位选择按钮
  $('.supComp-btn').on('click', async () => {
    window.scrollTo({top: 0});
    isBuildOrSup = 'supComp';
    $(".main").offset({
      top: 0,
      left: docWidth
    });
    $(".supervisionComp").offset({
      top: 0,
      left: 0
    });
    if (supPage > supTotalPage) return; //此处判断点击按钮看是否区请求数据
    const res = await fetchSupComp(1, 2, supPage++);
    if (res.rows.length) { //如果有数据
      supTotalPage = res.totalPage;
      OperateSub.renderSupComp(res.rows);
    } else {
      $(".supEmpty").show();
    }
    isLoading = false;
    $(".supSvg").hide();
  });
  // 监理单位事件  表单回填 并放回工单操作
  $('.supervisionComp .list').on('click', (e) => {
    OperateSub.supCompFillback(e); //联系人的表单回填
    $(".main").offset({
      top: 0,
      left: 0
    });
    $(".supervisionComp").offset({
      top: 0,
      left: -docWidth
    })
  });

  // .supervisionCom.left  ==>>>  操作工单页
  $('.supervisionComp .left').on('click', () => {
    isBuildOrSup = false; //重置
    $(".main").offset({
      top: 0,
      left: 0
    });
    $(".supervisionComp").offset({
      top: 0,
      left: -docWidth
    })
  });

  // 监听滚动条事件
  window.onscroll = async () => {
    if (!isBuildOrSup) return; //如果即不是施也者监理区则返回
    if (isLoading) return;
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
      bodyClient = document.documentElement.clientHeight || document.body.clientHeight;
    //  ******************************施工单位********************************** 
    if (isBuildOrSup === "buildComp") {
      let isBottom = buildComp.clientHeight === (scrollTop + bodyClient); //判断是否滚动到底部  发回bool值
      //到达底部 && 非加载数据中 => 才去请求数据
      if (isBottom && (buildPage <= buildTotalPage)) {
        const res = await fetchBuildComp(1, 20, buildPage++); //每次滚动到底部 page+1
        if (res.rows.length) {
          OperateSub.renderbuildComp(res.rows);
          buildTotalPage = res.totalPage;
        }
      }
      //到达底部  && 没有数据可请求 => 显示空
      if (isBottom && (buildPage > buildTotalPage)) {
        $('.buildEmpty').show();
      }
      // ******************************监理单位*********************************
    } else {
      let isBottom = svpComp.clientHeight === (scrollTop + bodyClient); //判断是否滚动到底部  发回bool值
      //到达底部  => 才去请求数据
      if (isBottom && (supPage <= supTotalPage)) {
        const res = await fetchSupComp(1, 2, supPage++); //每次滚动到底部 page+1
        if (res.row.length) {
          OperateSub.renderSupComp(res.rows);
          supTotalPage = res.totalPage;
        }
      }
      //到达底部 && 非加载数据中 && 没有数据可请求 => 显示空
      if (isBottom && (supPage > supTotalPage)) {
        $('.supEmpty').show();
      }
    }
    isLoading = false;
    $(".supSvg").hide();
  }

  // 获取施工单位
  async function fetchBuildComp(json = 1, rows = 20, page = 1) {
    isLoading = true;
    $('.buildSvg').show();
    await delay(1000);
    return $.post('http://192.168.31.248:8081/fcgagents/manager/company/list.do', {
      json,
      rows,
      page,
    }, 'json');
  }

  // 获取监理单位
  async function fetchSupComp(json = 1, rows = 20, page = 1) {
    isLoading = true;
    $('.supSvg').show();
    await delay(2000);
    return $.post('http://192.168.31.248:8081/fcgagents/manager/supervisionCom/list.do', {
      json,
      rows,
      page,
    }, 'json');
  }
  // 获取下一个联系人  state：为下步处理人
  async function fetchNext(json = 1, state) {
    $('.nextSvg').show();
    await delay(1000);
    return $.post('http://192.168.31.248:8081/fcgagents/manager/newlineFlow/handleList.do', {
      json,
      state,
    }, 'json');
  }


  // 提交
  $('.form').submit(function () {
    const arr = $(this).serializeArray();
    obj = {}
    arr.forEach(item => {
      obj[item.name] = item.value;
    });
    $.post(url, obj, function (data) {
        if (data.success) {
          message.show({
            type: "success",
            text:"提交成功！",
            callback() { //成功的回调
              window.location.href = '../newline/newline.html';
              console.log(data);
            }
          });
        } else {
          message.show({
            type: "warning",
            text:data.errmsg,
          });
        }
      },
      'json'
    );
    return false;
  });

  // 是否快开单选框发生变化重置下一步联系人的信息
  $('input[name=designFlashOn]').on('change', (e) => {
    OperateSub.reSetNextPerson();
  })


  // 如果会审不通过隐藏下一步联系人  并清空里面的hidden的内容  否则显示
  $("#grantSign").on('change', (e) => {
    if (e.target.value === '0') { //不通过
      $('#nextPersonLi').slideUp('nomal');
      OperateSub.reSetNextPerson();
      console.log("不通过i");
      // console.log(nextState);
    } else { //通过
      $('#nextPersonLi').slideDown('nomal');
    }
  })



  // 是否结束施工  是 ：显示   否隐藏   
  $("input[name='grantSign']").on('change', (e) => {
    if (e.target.value === '0') { //不通过
      $('#nextPersonLi').slideUp('nomal');
      OperateSub.reSetNextPerson();
    } else { //通过
      $('#nextPersonLi').slideDown('nomal');
    }
  })


})(jQuery)