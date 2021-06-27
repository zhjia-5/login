(async function ($) {
  //映射后端的type、state数据
  let type = ['','互联网', '语音电路', '互联网+IMS', 'IMS', '预覆盖', '企业宽带'],
    background = ['#D2691E',"#D2691E","#FF8C00","#1E90FF","#3CB371","#FFFF00","#808080"], // 添加类名显示背景颜色
    state = ['','报建', '设计', '快开', '会审', '派工', "施工",'工建系统工单推送', '资源录入', '验收交维', 'CRM派单', '现场装机', '起草人确认', '归档'],
    searchBtn = document.getElementsByClassName('search-btn')[0],
    searchInput = document.getElementsByClassName('search-input')[0],
    main = document.getElementsByClassName('main')[0],
    ul = document.getElementsByClassName('list')[0],
    close = document.getElementsByClassName('icon-cuowu')[0],
    isLoading = false,//作为判断是否正在加载中的标记
    page = 1,//首次加载求情的页码为一，后续 ++
    data = [],//用于存错请求回来的 res.rows 列表数据
    filterData = [],//存储过滤后的数据
    totalPage = 0;//用于存储请求回来的数据中总页数

  // 初始化页面
  init();

  async function init(){
    //首次加载请求数据，然后再然page++
    const res = await fetch(1, 20, page++);
    if(res.rows.length){//如果有数据
      console.log(res);
      totalPage = res.totalPage;
      data = res.rows;
      render(res.rows);
      svgShow(isLoading);
    }else{
      alert("数据为空")
    }
  }

  // 监听滚动条事件
  window.onscroll = async () => {
    if(filterData.length) return;//如果当前是搜索出来的页面滚动事件不请求数据
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let bodyClient = document.documentElement.clientHeight || document.body.clientHeight;
    const isBottom = main.clientHeight === (scrollTop + bodyClient);//判断是否滚动到底部  发回bool值
    //到达底部 && 非加载数据中 => 才去请求数据
    if (isBottom && !isLoading && (page <= totalPage)) {
      console.log("page:"+page+"==="+"totalPage:"+totalPage);
      console.log("底部=" + isBottom);
      const res = await fetch(1, 20, ++page);//每次滚动到底部 page+1
      data = [...data, ...res.rows];//将请求回来的数据不断添加到data数组
      render(res.rows);
    }
  }
  /**
   * 请求数据方法
   * @param {*} json 默认值为1
   * @param {*} rows 每页显示的条数
   * @param {*} page 求情的页数
   * @returns 
   */
  async function fetch(json = 1, rows = 20, page) {
    isLoading = true;//开始请求数据的时候设置为true
    svgShow(isLoading);//控制svg图显示与否
    await delay(2000);
    return new Promise((resolve, reject) => {
      $.post('http://192.168.31.248:8081/fcgagents/manager/newline/list.do',
        { json, rows, page },
        function (data) {
          data.total > 0 ? resolve(data) : reject(data);
          isLoading = false;//结束后设置为false
        },
      );
    })
  }

  // input失去聚焦 && 点击搜索按钮 后执行
  searchInput.onblur = (e) => {
    const inputVal = e.target.value;
    // 点击事件
    searchBtn.onclick = () => {
      if(inputVal.length === 0) return;//如果数据框数据为直接返回；
       filterData = data.filter((item)=>{
        return item.name.includes(inputVal);
      }) 
      // 如果有数据就渲染  没有数据显示 empty icon
      if(filterData.length){
        ul.innerHTML = '';//清空原有数据
        svgShow(isLoading);//隐藏svg图片
        render(filterData);//重新渲染
        $('.empty').hide();
      }else{
        ul.innerHTML = '';
        svgShow(isLoading);//隐藏svg图片
        $('.empty').show();
      }
      $('.icon-cuowu').show();//显示关掉icon图
    }
  }

  // 点击关掉图标渲染上次所储存的数据,并清理input，再隐藏此关闭icon图
  close.onclick = ()=>{
    ul.innerHTML = '';//清空原有数据
    render(data);
    searchInput.value = '';
    $('.icon-cuowu').hide();
  }

  // 获取详情页 获取遮罩层div.mask上的data-id值, +id：转为字符串,并将id添加到url中
  $('.items').on('click',(e)=>{
    let id = +e.target.dataset.id;
    window.location.href= `/html/add/add.html?id=${id}`;
  })

  // 点击加号跳转到添加工单-
  $(".icon-jiahao").on('click',()=>{
    window.location.href= "/html/add/add.html";
  })

  // 控制svg是否显示
  function svgShow(isLoading) {
    isLoading ? $('.svg').show() : $('.svg').hide();
  }
  // render函数  循环data数据
  function render(data) {
    data.forEach(item => {
      let liStr = `
        <div class="top">
          <div class="circle" style="background:${background[item.type]}"><span>${type[item.type]}</span></div>
          <div class="right">
            <!-- 工单名 -->
            <h4 >${item.name}</h4>
            <div class="design">
              <p>所属设计院：<span>${item.designName}</span></p>
            </div>
            <div class="construction">
              <p >区域：<span>${item.orgName}</span></p>
              <p >当前处理人：<span>${item.clientName}</span></p>
            </div>
          </div>
        </div>
        <!-- 列表下部分 -->
        <div class="bottom clearfix">
          <p class="floatLeft"><i class="iconfont icon-gouxuan"></i>${item.orgName}</p>
          <p class="floatRight">状态：<span>${state[item.state]}</span></p>
        </div>
        <div class="mask" data-id=${item.id}></div>
        `
      const li = document.createElement('li');
      li.classList.add("items");
      li.innerHTML = liStr;
      ul.appendChild(li);
    });
  }
})(jQuery);