const renderInfo = (data) => {
  let infoStr = '',
    type = ['', '互联网', '语音电路', '互联网+IMS', 'IMS', '预覆盖', '企业宽带'],
    color = ['', "#38a1e5", "#d56c09", "#1E90FF", "#d56c09", "#3CB371", "#C0C0C0"];// 添加类名显示背景颜色
  // 头部信息
  const head = `
  <div class="head">
    <div class="circle" style='background:${color[data.type]}'><span>${type[data.type]}</span></div>
    <div class="right">
      <p class="workName">${data.name}</p>
      <p>
        <span class="area" style='color:${color[data.type]}'>${data.orgName}</span> |
        <span class="time">${data.createTime}</span>
      </p>
    </div>
  </div>
  `;
  // 基本信息
  const basicInfo = `
<li class="company-li">
<p class="common-p">
  <span class="key">所属设计院</span>
  <span class="value">${data.designName}</span>
</p>
<p class="common-p">
  <span class="key">类型</span>
  <span class="value">${type[data.type]}</span>
</p>
<p class="common-p">
  <span class="key">是否项目工单</span>
  <span class="value">${data.isProject===0?'否':'是'}</span>
</p>
<p class="common-p">
  <span class="key">项目名称</span>
  <span class="value">${data.projectName}</span>
</p>
<p class="common-p">
  <span class="key">是否签约</span>
  <span class="value">${data.isSign===0?'否':'是'}</span>
</p>
${data.isSign===0 ? '': 
`<p class="common-p">
  <span class="key">签约资费</span>
  <span class="value">${data.signPrice}</span>
</p>
<p class="common-p">
  <span class="key">签约年限</span>
  <span class="value">${data.ageLine}</span>
</p>`
}
</li>
  `;
  // 客户信息
  const client = `
  <li class="common-li">
      <p class="split-bar"> 客户信息&nbsp;<i class="iconfont icon-minus-circle"></i></p>
      <p class="common-p">
        <span class="key">客户姓名</span>
        <span class="value">${data.clientName}</span>
      </p>
      <p class="common-p">
        <span class="key">客户电话</span>
        <span class="value">${data.clientMobile}</span>
      </p>
      <p class="common-p">
        <span class="key">客户地址</span>
        <span class="value">${data.clientAddr}</span>
      </p>
      <p class="common-p">
        <span class="key">客户经理</span>
        <span class="value">${data.managerName}</span>
      </p>
      <p class="common-p">
        <span class="key">客户经理电话</span>
        <span class="value">${data.managerMobile}</span>
      </p>
    </li>
  `;
  // 集团信息
  const group = `
<li class="common-li">
<p class="split-bar">
  集团信息&nbsp;<i class="iconfont icon-gongsi"></i>
</p>
<p class="common-p">
  <span class="key">集团名称</span>
  <span class="value">${data.groupName}</span>
</p>
<p class="common-p">
  <span class="key">集团编码</span>
  <span class="value">${data.groupCode}</span>
</p>
<p class="common-p">
  <span class="key">集团等级</span>
  <span class="value">${data.groupLevel}</span>
</p>
<p class="common-p">
  <span class="key">集团地址</span>
  <span class="value">${data.groupAddr}</span>
</p>
</li>
`;
  // Z栏信息
  const ZInfo = `
<li class="common-li">
    <p class="split-bar">Z端信息&nbsp;<i class="iconfont icon-info"></i></p>
    <p class="common-p">
      <span class="key">Z端地址</span>
      <span class="value">${data.zAddr}</span>
    </p>
    <p class="common-p">
      <span class="key">Z端联系人</span>
      <span class="value">${data.zName}</span>
    </p>
    <p class="common-p">
      <span class="key">Z端联系方式</span>
      <span class="value">${data.zMobile}</span>
    </p>
  </li>      
`;
  // A端信息栏
  const AInfo = `
<li class="common-li">
  <p class="split-bar">A端信息&nbsp;<i class="iconfont icon-info"></i></p>
  <p class="common-p">
    <span class="key">A端地址</span>
    <span class="value">${data.aAddr}</span>
  </p>
  <p class="common-p">
    <span class="key">A端联系人</span>
    <span class="value">${data.aName}</span>
  </p>
  <p class="common-p">
    <span class="key">A端联系方式</span>
    <span class="value">${data.aMobile}</span>
  </p>
</li>
`;
  // 业务信息
  const business = `
<p class="common-p">
  <span class="key">业务等级保障</span>
  <span class="value">${data.bizLevel}</span>
</p>
<p class="common-p">
  <span class="key">业务宽带</span>
  <span class="value">${data.bizBand}</span>
</p>`;
  // 物业信息
  const property = `
<li class="common-li">
  <p class="split-bar">物业信息&nbsp;<i class="iconfont icon-wuye"></i></p>
  <p class="common-p">
    <span class="key">物业地址</span>
    <span class="value">${data.propAdd}</span>
  </p>
  <p class="common-p">
    <span class="key">物业类型</span>
    <span class="value">${data.propType}</span>
  </p>
  <p class="common-p">
    <span class="key">物业场景现象</span>
    <span class="value">${data.propScenario}</span>
  </p>
  <p class="common-p">
    <span class="key">物业楼栋总数</span>
    <span class="value">${data.propLine}</span>
  </p>
</li>
`;
  // 数量统计
  const statistics = `
<li class="common-li">
<p class="split-bar">数量统计&nbsp;<i class="iconfont icon-tongji"></i></p>
<p class="common-p">
  <span class="key">家庭住户总数</span>
  <span class="value">${data.familyLine}</span>
</p>
<p class="common-p">
  <span class="key">企业单位数</span>
  <span class="value">${data.instLine}</span>
</p>
<p class="common-p">
  <span class="key">政府机构数</span>
  <span class="value">${data.govLine}</span>
</p>
<p class="common-p">
  <span class="key">计划发展互联网专线数</span>
  <span class="value">${data.netLine}</span>
</p>
<p class="common-p">
  <span class="key">计划发展数据专线数</span>
  <span class="value">${data.dataLine}</span>
</p>
<p class="common-p">
  <span class="key">计划发展小微宽带数</span>
  <span class="value">${data.broadbandLine}</span>
</p>
<p class="common-p">
  <span class="key">计划发展IMS数</span>
  <span class="value">${data.imsLine}</span>
</p>
</li>`;
  // 覆盖户数
  const coverNum = `
<p class="common-p">
<span class="key">覆盖户数</span>
<span class="value">${data.coverNum}</span>
</p>
`;
  // 接入模式2 putMode
  const putMode = `
<p class="common-p">
  <span class="key">接入模式</span>
  <span class="value">${data.putMode}</span>
</p>
`;
  // 接入方式 putType
  const putType = `
<p class="common-p">
  <span class="key">接入方式</span>
  <span class="value">${data.putType}</span>
</p>
`;

  // 承载方式
  const bearerType = `
<p class="common-p">
  <span class="key">承载方式</span>
  <span class="value">${data.bearerType}</span>
</p>
`;

  // IMS数
  const IMSNum = `
<p class="common-p">
  <span class="key">IMS数</span>
  <span class="value">${data.imsNum}</span>
</p>
`;
  // 其他信息分割栏
  const otherSplit = `<p class="split-bar">其他信息&nbsp;<i class="iconfont icon-minus-circle"></i></p>`;


  // 备注
  const remark = `
<li class="remark">
<p class="split-bar">备注信息&nbsp;<i class="iconfont icon-beizhu1"></i></p>
<p class="content"></p>
</li>
`;



// 报建的HTML
  switch (data.type) {
    case 1: // 互联网
      infoStr = head + basicInfo + client + group + otherSplit + business + remark;
      break;
    case 2: // 语音电路
      infoStr = head + basicInfo + client + group + AInfo + ZInfo + otherSplit + business + putType + bearerType + remark;
      break;
    case 3: // 互联网+IMS
      infoStr = head + basicInfo + client + group + otherSplit + business + remark;
      break;
    case 4: // IMS
      infoStr = head + basicInfo + client + group + otherSplit + IMSNum + remark;
      break;
    case 5: // 预覆盖
      infoStr = head + basicInfo + client + AInfo + ZInfo + property + statistics + otherSplit + putType + bearerType + remark;
      break;
    case 6: // 企业宽带
      infoStr = head + basicInfo + client + otherSplit + putMode + coverNum + remark;
      break;
  }
  $('.wraper .workInfo').html(infoStr);
}