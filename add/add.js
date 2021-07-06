(async function ($) {
  // const message = new Message();
  // if (!storage.getSession(message)) return; //判断是否登录

  let id = +getParam("id"), // +转为Number
    state = +getParam("state"),
    ul = document.getElementsByClassName('list')[0],
    design = document.getElementsByClassName('design')[0],
    isLoading = false, //作为判断是否正在加载中的标记
    page = 1, //首次加载求情的页码为一，后续 ++
    totalPage = 1, //用于存储请求回来的数据中总页数
    designName = '',
    designId = '',
    newline = null;


  // 状态 为1才是修改 
  if (state === 1) {
    $(".isAddOrEdit").html("工单修改");
    $('.submitWraper').hide();
    const res = await fetchDetail(id, 1);
    if (res.newline) {
      let type = res.newline.type;
      newline = res.newline;
      renderAdd(type);
      $('.svg').hide();
      deserialize($('.form'), newline);
      $('.submitWraper').show();
    } else {
      alert("无数据");
    }
  } else {
    renderAdd();
  }
  // 提交添加 和 提交修改
  $('.form').submit(function () {
    const arr = $(this).serializeArray();
    obj = {}
    arr.forEach(item => {
      obj[item.name] = item.value;
    });
    console.log(obj);
    if (state === 1) { //state：1表示修改
      obj = {
        ...obj,
        'mobileOpt': 1
      }; //添加mobileOpt 字段
      console.log(obj);
      $.post('http://192.168.31.248:8081/fcgagents/manager/newline/edit.do', obj,
        function (data) {
          console.log(data);
          if (data.success) {
            message.show({
              type: "success",
              text: "修改成功！",
              callback() { //成功的回调
                window.location.href = '../newline/newline.html';
              }
            });
          } else {
            message.show({
              type: 'error',
              text: data.errmsg,
            });
          }
        },
        'json'
      );
    } else {
      $.post('http://192.168.31.248:8081/fcgagents/manager/newline/add.do', obj,
        function (data) {
          console.log(data);
          if (data.success) {
            message.show({
              type: "success",
              text: "添加成功！",
              callback() { //成功的回调
                window.location.href = '../newline/newline.html';
              }
            });
          } else {
            message.show({
              type: 'error',
              text: data.errmsg,
            });
          }
        },
        'json'
      );
    }
    return false;
  });

  // 切换类型，重新渲染
  $("#type").on('change', (e) => {
    renderAdd(+e.target.value);
    if (newline) deserialize($('.form'), newline); //如果当前为修改页，linenew是个数组（）切换类型反序列化
    $(".select-btn").on('click', async () => {
      await handleSelect();
    })
  });

  // ******************设计单位*****************
  // 在父原生身上添加点击事件
  // 并将数据回填到设计单位name和ID的input框(id的input为隐藏)
  ul.onclick = (e) => {
    designName = e.target.dataset.name;
    designId = e.target.dataset.id;
    $('.designName-input').val(designName);
    $('.designId-input').val(designId);
    $(".main").show();
    $(".design").hide();
    $('.svg').hide();
  }

  // 点击select-btn 显示设计单位页  并请求数据
  $(".select-btn").on('click', async () => {
    await handleSelect();
  })


  async function handleSelect() {
    $(".main").hide();
    $(".design").show();
    if (page > totalPage) return; //此处判断点击按钮看是否区请求数据
    const res = await fetchDesignComp(1, 20, page++);
    await delay(1000);
    if (res.rows.length) { //如果有数据
      totalPage = res.totalPage;
      render(res.rows);
    } else {
      $(".empty").show();
    }
    isLoading = false;
    $(".svg").hide();
  }


  // 渲染设计单位的函数  循环data数据  data-id=${item.id}
  function render(data) {
    data.forEach(item => {
      let liStr = `
          <div class="mask" data-name=${item.name} data-id=${item.id}></div>
          <p>${item.name}</p><p>${item.personName}</p>`;
      const li = document.createElement('li');
      li.innerHTML = liStr;
      ul.appendChild(li);
    });
  }

  // 监听滚动条事件
  window.onscroll = async () => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let bodyClient = document.documentElement.clientHeight || document.body.clientHeight;
    const isBottom = design.clientHeight === (scrollTop + bodyClient); //判断是否滚动到底部  发回bool值
    //到达底部 && 非加载数据中 => 才去请求数据
    if (isBottom && !isLoading && (page <= totalPage)) {
      const res = await fetchDesignComp(1, 20, page++); //每次滚动到底部 page+1
      if (res.rows.length) {
        render(res.rows);
      }
      isLoading = false;
      $(".svg").hide();
    }
    //到达底部 && 非加载数据中 && 没有数据可请求 => 显示空
    if (isBottom && !isLoading && (page > totalPage)) {
      $('.empty').show();
    }
  }


  // 点击 < 回退上次显示和隐藏
  $(".designleft").on('click', () => {
    $(".main").show();
    $(".design").hide();
    $(".svg").hide();
  })
  //获取设计单位的请求 
  async function fetchDesignComp(json = 1, rows = 20, page = 1) {
    isLoading = true;
    $('.svg').show();
    return $.post('http://192.168.31.248:8081/fcgagents/manager/designCom/list.do', {
      json,
      rows,
      page,
    }, 'json');
  }

  // 获取工单详情方法（修改）
  async function fetchDetail(id, mobileOpt) {
    // 如果id为0表示新增页；如果大于0表示详情页，需要球请求数据
    $('.svg').show();
    await delay(1000);
    return $.post('http://192.168.31.248:8081/fcgagents/manager/newline/show.do', {
      id,
      mobileOpt
    }, 'json');
  }


})(jQuery);