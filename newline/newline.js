(async function ($) {

  const message = new Message();
  if (!storage.getSession(message)) return; //判断是否登录
  //映射后端的type、state数据
  let type = ['', '互联网', '语音电路', '互联网+IMS', 'IMS', '预覆盖', '企业宽带'],
    background = ['', "#38a1e5", "#d56c09", "#1E90FF", "#d56c09", "#3CB371", "#C0C0C0"], // 添加类名显示背景颜色
    state = ['', '报建', '设计', '快开', '会审', '派工', "施工", '工建系统工单推送', '资源录入', '验收交维', 'CRM派单', '现场装机', '起草人确认', '归档'],
    searchBtn = document.getElementsByClassName('search-btn')[0],
    searchInput = document.getElementsByClassName('search-input')[0],
    main = document.getElementsByClassName('main')[0],
    ul = document.getElementsByClassName('list')[0],
    close = document.getElementsByClassName('icon-cuowu')[0],
    isLoading = false, //作为判断是否正在加载中的标记
    page = 1, //首次加载求情的页码为1，后续 ++
    filterData = [], //存储过滤后的数据
    totalPage = 0; //用于存储请求回来的数据中总页数

  //首次加载请求数据，然后再然page++
  // const res = await fetchNewline(1, 10, page++);
  // isLoading = false;
  // if (res.rows.length) { //如果有数据
  //   totalPage = res.totalPage;
  //   console.log(res.rows);
  //   data = res.rows;
  //   $('.svg').hide();
  //   render(res.rows);
  // } else {
  //   $('.empty').show();
  // }



  // 监听滚动条事件
  window.onscroll = async () => {
    if (filterData.length) return; //如果当前是搜索出来的页面滚动事件不请求数据
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let bodyClient = document.documentElement.clientHeight || document.body.clientHeight;
    const isBottom = main.clientHeight === (scrollTop + bodyClient); //判断是否滚动到底部  发回bool值
    //到达底部 && 非加载数据中 && 还有数据可请求 => 才去请求数据 
    if (isBottom && !isLoading && (page <= totalPage)) {
      const res = await fetchNewline(1, 10, page++); //每次滚动到底部 page+1
      data = [...data, ...res.rows]; //将请求回来的数据不断添加到data数组
      render(res.rows);
      isLoading = false;
      $('.svg').hide()
    }
    //到达底部 && 非加载数据中 && 没有数据可请求 => 显示空
    if (isBottom && !isLoading && (page > totalPage)) {
      $('.empty').show();
    }
  }

  // input失去聚焦 && 点击搜索按钮 后执行
  searchInput.onblur = async (e) => {
    const inputVal = e.target.value;
    // 点击事件
    searchBtn.onclick = async () => {
      if (inputVal.length === 0) return; //如果数据框数据为直接返回；
      // 如果有数据就渲染  没有数据显示 empty icon
      const res = await fetchNewline(1, 20, 1, inputVal);
      isLoading = false;
      if (res.rows.length) { //如果有数据
        totalPage = res.totalPage;
        $('.svg').hide();
        render(res.rows);
      } else {
        $('.empty').show();
      }
      $('.icon-cuowu').show(); //显示close-icon图
    }
  }

  // 点击关掉图标渲染上次所储存的数据,并清理input，再隐藏此关闭icon图
  close.onclick = () => {
    ul.innerHTML = ''; //清空原有数据
    render(data);
    searchInput.value = '';
    $('.icon-cuowu').hide();
  }


  // render函数  循环data数据
  function render(data) {
    console.log(data);
    data.forEach(item => {
      let liStr = `
        <div class="top">
          <div class="circle" style="background:${background[item.type]}">${type[item.type]}</div>
          <div class="right">
            <!-- 工单名 -->
            <h4>工单名：${item.name}</h4>
            <div class="design">
              <p>所属设计院：<span>${item.designName}</span></p>
            </div>
            <div class="construction">
              <p >区域：<span>${item.orgName}</span></p>
              <p >当前处理人：<span>${item.clientName}</span></p>
            </div>
          </div>
        </div>
        <div class="bottom">
          <p><i class="iconfont icon-gouxuan"></i>${item.orgName}</p>
          <p class="status">状态：<span>${state[item.state]}</span></p>
        </div>
        <a class="mask" href='../detail/detail.html?id=${item.id}'></a>
        `

      // <div class="mask" data-id=${item.id} data-name=${item.name} data-state=${item.state} data-isfaston=${item.designFlashOn} data-iscover=${item.designInceptType} data-trialcount=${item.trialCount}></div>
      // window.location.href = `../operate/operate.html?${idStr}${nameStr}${stateStr}${isfastonStr}${iscoverStr}${trialcountStr}`;//工单操作链接
      // window.location.href = `../add/add.html?${idStr}${stateStr}`;//修改链接
      // 
      // <a class="mask" href='../detail/detail.html?id=${item.id}></a>
      // <a class="mask" href='../add/add.html?id=${item.id}&state=${item.state}'></a>//添加
      // <a class="mask" href='../operate/operate.html?id=${item.id}&name=${item.name}&state=${item.state}&isfaston=${item.designFlashOn}&iscover=${item.designInceptType}&trialcount=${item.trialCount}'></a>//操作

      const li = document.createElement('li');
      li.classList.add("items");
      li.innerHTML = liStr;
      ul.appendChild(li);
    });
  }

  /**
   * 请求数据方法
   * @param {*} json 默认值为1
   * @param {*} rows 每页显示的条数
   * @param {*} page 求情的页数
   * @returns 
   */
  async function fetchNewline(json = 1, rows = 10, page = 1, name = '') {
    isLoading = true; //开始请求数据的时候设置为true
    $('.svg').show();
    await delay(300);
    return $.post('http://192.168.31.248:8081/fcgagents/manager/newline/list.do', {
      json,
      rows,
      page,
      name,
    }, 'json');
  }

})(jQuery);