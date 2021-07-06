(async function ($) {
  let docWidth = $(document.body).outerWidth(true);
  const wraper = document.getElementsByClassName('wraper')[0];
  const id = +getParam('id');


  const res = await fetchDetail(id);
  console.log(res.newline);
  
    renderInfo(res.newline);
    renderFlow(res.newline)

    $('.eachDetail').on('click',()=>{

    })


async function fetchDetail(id) {
  return $.post('http://192.168.31.248:8081/fcgagents/manager/newline/show.do',{id},'json');
}



  // 点击工单信息
  $('.info-nav').on('click', (e) => {
    if (!$(this).hasClass('active')) {
      $('.toggle').removeClass('active'); //删除类名
      $(e.target).addClass('active');
      $("#detail .wraper").offset({
        left: 0,
      });
      window.scrollTo({top: 0});//置顶
    }
  })
  // 点击工单流程
  $('.pro-nav').on('click', (e) => {
    if (!$(this).hasClass('active')) {
      $('.toggle').removeClass('active'); //删除类名
      $(e.target).addClass('active');
      $("#detail .wraper").offset({
        left: -docWidth
      });
      window.scrollTo({top: 0});//置顶
    }
  })


 



})(jQuery)