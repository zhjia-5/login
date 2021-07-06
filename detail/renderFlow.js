const renderFlow = (data) => {
  const state = ['回退报建', '报建', '设计', '快开', '会审', '派工', "施工", '工建系统工单推送', '资源录入', '验收交维', 'CRM派单', '现场装机', '起草人确认', '归档'];
  const color = ['', "#38a1e5", "#d56c09", "#1E90FF", "#d56c09", "#3CB371", "#C0C0C0"];
  let = flow = data.newlineFlows; //备注
  // 各环节详情  //头部
  let eachDetail =`
  <li class="eachDetail">
    <span>各环节详情</span>
  </li>`;
  // 设计
  let design = `
  <li>
  <div class="head">设计</div>
    <p class="common-p">
      <span class="key">开通方式</span>
      <span class="value">${data.designInceptType}</span>
    </p>
    <p class="common-p">
      <span class="key">接入模式</span>
      <span class="value">${data.putType}</span>
    </p>
    <p class="common-p">
      <span class="key">是否快开</span>
      <span class="value">${data.designFlashOn===0?'否':'是'}</span>
    </p>
    <p class="common-p">
      <span class="key">当前处理人</span>
      <span class="value">${data.nowName}</span>
    </p>
    <p class="common-p">
      <span class="key">设计方案名称</span>
      <span class="value">${data.designPlan}</span>
    </p>
    <p class="common-p">
      <span class="key">光纤长度(千米)</span>
      <span class="value">${data.designCable}</span>
    </p>
    <p class="common-p">
      <span class="key">设备数</span>
      <span class="value">${data.designEqpt}</span>
    </p>
    <p class="common-p">
      <span class="key">熔纤数</span>
      <span class="value">${data.designSplice}</span>
    </p>
    <p class="common-p">
      <span class="key">预估投资费用(万)</span>
      <span class="value">${data.designPrice}</span>
    </p>
  </li>`;
  // 快开    传输接入方式字段 quickPutType
  let fastOn = ` 
  <li>
  <div class="head">快开</div>
  <p class="common-p">
    <span class="key">传输接入方式</span>
    <span class="value">${data.quickPutType}</span>
  </p>
</li>
  `;
  // 会审
  let trial = `
  <li>
  <div class="head">会审</div>
  <p class="common-p">
    <span class="key">审核意见</span>
    <span class="value">${data.grantSign===0?'不通过':'通过'}</span>
  </p>
  <p class="common-p">
    <span class="key">当前处理人</span>
    <span class="value">${data.nowName}</span>
  </p>
</li>
  `;
  // 派工
  let distribute = `
  <li>
  <div class="head">派工</div>
  <p class="common-p">
    <span class="key">施工单位</span>
    <span class="value">${data.companyName}</span>
  </p>
  <p class="common-p">
    <span class="key">监理单位</span>
    <span class="value">${data.supervisionComName}</span>
  </p>
  <p class="common-p">
    <span class="key">进场时间</span>
    <span class="value">${data.distributeTime}</span>
  </p>
  <!--施工天数 -->
  <p class="common-p">
    <span class="key">施工天数</span>
    <span class="value">${data.distributeLength}</span>
  </p>
</li>
  `;
  // 施工 newlineBuild.buildCable
  let newlineBuilds = '';
  data.newlineBuilds.forEach((item, index) => {
    newlineBuilds += `
    <li>
    <p class="split-bar" style='padding-left:1rem'> 第${index+1}次施工&nbsp;<i class="iconfont icon-minus-circle"></i></p>
    <p class="common-p">
      <span class="key">线路铺设(米)</span>
      <span class="value">${item.buildCable}</span>
    </p>
    <p class="common-p">
      <span class="key">设备安装数</span>
      <span class="value">${item.buildEqpt}</span>
    </p>
    <p class="common-p">
      <span class="key">熔先数</span>
      <span class="value">${item.buildSplice}</span>
    </p>
    <p class="common-p">
      <span class="key">跳纤数</span>
      <span class="value">${item.buildJump}</span>
    </p>
    <p class="common-p">
      <span class="key">施工时间</span>
      <span class="value">${item.insertTime}</span>
    </p>
  </li>`;
  });
  // 工建系统工单推送
  let pushName = `
    <li>
    <div class="head">工建系统工单推送</div>
    <p class="common-p">
    <span class="key">推送名称</span>
    <span class="value">${data.pushName}</span>
    </p>
    </li>
    `;
  // 资源录入
  let resource = `
<li>
<div class="head">资源录入</div>
<p class="common-p">
  <span class="key">资源名称</span>
  <span class="value">${data.resourceName}</span>
</p>
<p class="common-p">
  <span class="key">账号</span>
  <span class="value">${data.resourceUsername}</span>
</p>
<p class="common-p">
  <span class="key">密码</span>
  <span class="value">${data.resourcePassword}</span>
</p>
</li>`;

  // 验收交维
  let check = `
<li>
<div class="head">验收交维</div>
<p class="common-p">
  <span class="key">情况</span>
  <span class="value">${data.checkSituation}</span>
</p>
<p class="common-p">
  <span class="key">验收遗留问题</span>
  <span class="value">${data.checkQuestion}</span>
</p>
<p class="common-p">
  <span class="key">验收整改</span>
  <span class="value">${data.checkCorr}</span>
</p>
</li>
`;
  // CRM
  let CRM = `
<li>
<div class="head">CRM</div>
<p class="common-p">
  <span class="key">报单号</span>
  <span class="value">${data.crmName}</span>
</p>
</li>
`;
  // 现场装机
  let live = `
<li>
<div class="head">现场装机</div>
<p class="common-p">
  <span class="key">POS口</span>
  <span class="value">${data.livePos}</span>
</p>
<p class="common-p">
  <span class="key">onu网元名称</span>
  <span class="value">${data.liveOnu}</span>
</p>
<p class="common-p">
  <span class="key">ONU网元SN码</span>
  <span class="value">${data.liveOnuSn}</span>
</p>
<p class="common-p">
  <span class="key">数据VLAN</span>
  <span class="value">${data.liveVlan}</span>
</p>
<p class="common-p">
  <span class="key">线IP</span>
  <span class="value">${data.liveIP}</span>
</p>
</li>`;
  design = data.state >= 2 ? design : '';
  fastOn = data.designFlashOn === 1 ? fastOn : '';
  trial = data.state >= 4 ? trial : '';
  distribute = data.state >= 5 ? distribute : '';
  newlineBuilds = data.state >= 6 ? newlineBuilds : '';
  pushName = data.designFlashOn === 0 ? (data.state >= 7 ? pushName : '') : '';
  resource = data.designFlashOn === 0 ? (data.state >= 8 ? resource : '') : '';
  check = data.designFlashOn === 0 ? (data.state >= 9 ? check : '') : '';
  live = data.designInceptType === 1 ? (data.state >= 11 ? live : '') : '';

  let flowStr =eachDetail+ design + fastOn + trial + distribute + newlineBuilds + pushName + resource + check + CRM + live;


  let newlineFlows = data.newlineFlows;
  let processHead = `<li class="eachDetail">新专线流程</li>`;//头部
  let newlineProcess ='';
  newlineFlows.forEach((item)=>{
    newlineProcess += `<li>
    <div class="head">阶段：${state[item.state]}</div>
    <p class="common-p">
      <span class="key">执行人</span>
      <span class="value">${item.nowName}</span>
    </p>
    <p class="common-p">
      <span class="key">审核意见</span>
      <span class="value">${item.trial === 1 ?'同意':''}</span>
    </p>
    <p class="common-p">
      <span class="key">备注</span>
      <span class="value">${item.remark}</span>
    </p>
    <p class="common-p">
    <span class="key">开始时间</span>
    <span class="value">${item.createTime}</span>
  </p>
  <p class="common-p">
  <span class="key">结束时间</span>
  <span class="value">${item.beginTime}</span>
</p>
    </li>`
  })

  $('#detail .process').html(flowStr+processHead+newlineProcess);

}