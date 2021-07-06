/**
 * 
 *  index 根据index渲染哪一项  number类型 默认值0
 *  data 要渲染的工单详情
 *
 */
const renderAdd = (index = 1) => {
  let str = ``;
  // 工单名  name
  
  const workOrderName = `
    <li class="border-bottom">
      <label class="label">工单名称</label>
      <input type="hidden" name="id"></input>
      <input class="input" type="text" placeholder="必填" name="name" >
    </li>
    `
  // 是否项目工单  isProject
  const isProject = `
    <li class="border-bottom">
      <label class="label">是否项目工单</label>
      <div class="input">
        <input class="margin-right5" type="radio" value="1" name="isProject"/><span class="margin-right10">是</span>
        <input class="margin-right5" type="radio" value="0" name="isProject" checked/><span>否</span>
      </div>
    </li>
    `
  // 项目名  projectName
  const projectName = `
    <li class="border-bottom">
      <label class="label">项目名称</label>
      <input class="input" type="text" placeholder="选填" name="projectName" >
    </li>
    `
  // 区域 orgName
  const areaName = `
    <li class="border-bottom">
      <label class="label">区域名称</label>
      <select id="" class="select" name="orgId">
        <option value="7701000">防城区</option>
        <option value="7702000">港口区</option>
        <option value="7703000">东兴</option>
        <option value="7704000">上思</option>
      </select>
    </li>
    `
  // 设计单位 designName  designId   
  const designCompany = `
    <li class="border-bottom designName">
      <label class="label">设计单位</label>
      <input class="input designId-input" type="hidden" name="designId" >
      <input class="input designName-input" type="text" placeholder='必选' name="designName" readonly>
      <button class="select-btn" type="button" >请选择</button>
    </li>
    `
  // 客户信息 -- 分割栏
  const customerSplitBar = `
    <li class="split-bar">
      客户信息&nbsp;<i class="iconfont icon-minus-circle"></i>
    </li>
    `
  // 客户姓名 clientName
  const customerName = `
    <li class="border-bottom">
      <label class="label">客户姓名</label>
      <input class="input" type="text" placeholder="选填" name="clientName" >
    </li>
    `
  // 客户地址   
  const customerAddress = `
    <li class="border-bottom">
    <label class="label">客户地址</label>
    <input class="input" type="text" name="clientAddr" placeholder='选填' >
    </li>
    `
  // 顾客电话 "personMobile"
  const customerTel = `
    <li class="border-bottom">
      <label class="label">客户电话</label>
      <input class="input" type="number" inputmode='numeric' pattern="[0-9]*" placeholder="必填" name="personMobile">
    </li>
    `
  // 客户经理 managerName
  const customerManager = `
    <li class="border-bottom">
      <label class="label">客户经理</label>
      <input class="input" type="text" placeholder="选填" name="managerName">
    </li>
    `
  // 客户经理电话  managerMobile
  const customerManagerTel = `
    <li class="border-bottom">
      <label class="label">客户经理电话</label>
      <input class="input" type="number" inputmode='numeric' pattern="[0-9]*" placeholder="选填" name="managerMobile">
    </li>
    `
  // 是否签约 isSign  
  const isContract = `
    <li class="border-bottom">
      <label class="label">是否签约</label>
      <div class="input">
        <input class="margin-right5" type="radio" value="1" name="isSign" ><span
          class="margin-right10">是</span>
        <input class="margin-right5" type="radio" value='0' name="isSign" checked><span>否</span>
      </div>
    </li>
    `
  // 签约资费
  const contractMoney = `
    <li class="border-bottom">
      <label class="label">签约资费</label>
      <input class="input" type="text" placeholder="必填" } name="signPrice">
    </li>
    `
  // 签约年限 ageLine
  const contractYear = `
    <li class="border-bottom">
      <label class="label">签约年限</label>
      <input class="input" type="text" placeholder="必填" name="ageLine">
    </li>
    `
  // 集团信息 -- 分割栏
  const groupSplitBar = `
    <li class="split-bar">
      集团信息&nbsp;<i class="iconfont icon-gongsi"></i>
    </li>
    `
  // 集团名称 groupName
  const groupName = `
    <li class="border-bottom">
      <label class="label">集团名称</label>
      <input class="input" type="text" placeholder="选填" name="groupName" >
    </li>
    `
  // 集团编码   groupCode
  const groupCode = `
    <li class="border-bottom">
      <label class="label">集团编码</label>
      <input class="input" type="text" placeholder="选填" name="groupCode" >
    </li>
    `
  // 集团等级 groupLevel
  const groupLevel = `
    <li class="border-bottom">
      <label class="label">集团等级</label>
     <input class="input" type="text" placeholder="选填" name="groupLevel" >
    </li>
    `
  // 集团地址  groupAddr
  const groupAddress = `
    <li class="border-bottom">
      <label class="label">集团地址</label>
      <input class="input" type="text" placeholder="必填" name="groupAddr">
    </li>
    `
  // 业务等级保障 bizLevel
  const busSupport = `
    <li class="border-bottom">
      <label class="label">业务等级保障</label>
      <select id="" class="select" name="bizLevel">
        <option value="普通" >普通</option>
        <option value="A">A</option>
        <option value="AA" >AA</option>
        <option value="AAA" >AAA</option>
      </select>
    </li>
    `
  // 业务宽带 bizBand
  const busBroadband = `
    <li class="border-bottom">
      <label class="label">业务宽带</label>
      <input class="input" type="text" placeholder="选填" name="bizBand">
    </li>
    `
  // Z端信息 -- 分割栏
  const ZSplitBar = `
      <li class="split-bar">Z端信息&nbsp;<i class="iconfont icon-info"></i></li>
    `
  // 承载方式  
  const bearingMode = `
    <li class="border-bottom">
      <label class="label">承载方式</label>
      <input class="input" type="text" placeholder="必填" name="bearerType" >
    </li>
    `
  // 接入方式  
  const accessMode = `
    <li class="border-bottom">
      <label class="label">接入方式</label>
      <select id="" class="select" name="putType">
        <option value="PTN">PTN</option>
        <option value="SDH">SDH</option>
        <option value="PON">PON</option>
      </select>
    </li>
    `
  // Z端地址 
  const ZAddress = `
    <li class="border-bottom">
      <label class="label">Z端地址</label>
      <input class="input" type="text" placeholder="选填" name="zAddr">
    </li>
    `
  // Z端联系人  
  const ZContactsMan = `
    <li class="border-bottom">
      <label class="label">Z端联系人</label>
      <input class="input" type="text" placeholder="选填" name="zName">
    </li> 
    `
  // Z端联系方式 
  const ZContactsInfo = `
     <li class="border-bottom">
      <label class="label">Z端联系方式</label>
      <input class="input" type="text" placeholder="选填" name="zMobile" >
    </li>
     `
  //  A端信息 -- 分割栏
  const ASplitBar = `
      <li class="split-bar">A端信息&nbsp;<i class="iconfont icon-info"></i></li>
    `
  // A端地址 
  const AAddress = `
    <li class="border-bottom">
    <label class="label">A端地址</label>
    <input class="input" type="text" placeholder="选填" name="aAddr">
    </li>
    `
  // A端联系人 aName
  const AContactsMan = `
    <li class="border-bottom">
    <label class="label">A端联系人</label>
    <input class="input" type="text" placeholder="选填" name="aName" >
    </li>
    `
  // A端联系方式 
  const AContactsInfo = `
    <li class="border-bottom">
    <label class="label">A端联系方式</label>
    <input class="input" type="text" placeholder="选填" name="aMobile" >
    </li>
    `
  // IMS数  
  const IMSNumber = `
    <li class="border-bottom">
    <label class="label">IMS数</label>
    <input class="input" type="text" placeholder="选填" name="imsNum">
    </li>
    `
  // 物业 -- 分割栏  
  const propertySpitBar = `
    <li class="split-bar">物业信息&nbsp;<i class="iconfont icon-wuye"></i></li>
    `
  // 物业地址  propAdd
  const propertyAddress = `
    <li class="border-bottom">
    <label class="label">物业地址</label>
    <input class="input" type="text" placeholder="选填" name="propAdd">
    </li>
    `
  // 物业类型  
  const propertyType = `
    <li class="border-bottom">
    <label class="label">物业类型</label>
    <input class="input" type="text" placeholder="选填" name="propType" >
    </li>
    `
  // 物业场景现象
  const propertyScene = `
    <li class="border-bottom">
    <label class="label">物业场景现象</label>
    <input class="input" type="text" placeholder="选填" name="propScenario" >
    </li>
    `
  // 物业楼栋总数
  const propertyFloors = `
    <li class="border-bottom">
    <label class="label">物业楼栋总数</label>
    <input class="input" type="text" placeholder="选填" name="propLine" >
    </li>
    `
  // 数量统计 -- 分割栏
  const StatisticsSplitBar = `
    <li class="split-bar">数量统计&nbsp;<i class="iconfont icon-tongji"></i></li>
    `
  // 家庭住户总数
  const totalHouse = `
    <li class="border-bottom">
    <label class="label">家庭住户总数</label>
    <input class="input" type="text" placeholder="选填" name="familyLine">
    </li>
    `
  // 企业单位数
  const groupNumber = `
    <li class="border-bottom">
    <label class="label">企业单位数</label>
    <input class="input" type="text" placeholder="选填" name="instLine">
    </li>
    `
  // 政府机构数
  const governmentNumber = `
    <li class="border-bottom">
    <label class="label">政府机构数</label>
    <input class="input" type="text" placeholder="选填" name="govLine">
    </li>
    `
  // 计划发展互联网专线数
  const internetNumber = `
    <li class="border-bottom">
    <label class="label">计划发展互联网专线数</label>
    <input class="input" type="text" placeholder="选填" name="netLine">
    </li>
    `
  // 计划发展数据专线数
  const dataNumber = `
    <li class="border-bottom">
    <label class="label">计划发展数据专线数</label>
    <input class="input" type="text" placeholder="选填" name="dataLine">
    </li>
    `
  // 计划发展小微宽带数
  const smallBroadband = `
    <li class="border-bottom">
    <label class="label">计划发展小微宽带数</label>
    <input class="input" type="text" placeholder="选填" name="broadandLine" >
    </li>
    `
  // 计划发展IMS数
  const planIMSNumber = `
    <li class="border-bottom">
    <label class="label">计划发展IMS数</label>
    <input class="input" type="text" placeholder="选填" name="imsLine">
    </li>
    `
  // 覆盖户数
  const coverNumber = `
    <li class="border-bottom">
    <label class="label">覆盖户数</label>
    <input class="input" type="text" placeholder="必填" name="coverNum">
    </li>
    `
  // 接入模式2 putMode
  const accessMode2 = `
    <li class="border-bottom">
    <label class="label">接入模式</label>
    <select id="" class="select" name="putMode">
      <option value="FTTB">FTTB</option>
      <option value="FTTH">FTTH</option>
    </select>
    </li>
    `

  // 备注信息 -- 分割栏
  const remarkSplitBar = `
  <li class="split-bar">备注信息&nbsp;<i class="iconfont icon-beizhu1"></i></li>
  `
  //备注信息字符串
    const remark = `
    <li class="border-bottom">
      <textarea class="textarea" cols="30" rows="5" placeholder='请输入备注信息'></textarea>
    </li>
    `

  switch (index) {
    // 互联网
    case 1:
      str = `
        ${workOrderName}
        ${isProject}
        ${projectName}
        ${areaName}
        ${designCompany}
        ${customerSplitBar}
        ${customerName}
        ${customerTel}
        ${customerAddress}
        ${customerManager}
        ${customerManagerTel}
        ${isContract}
        ${contractMoney}
        ${contractYear}
        ${groupSplitBar}
        ${groupName}
        ${groupCode}
        ${groupLevel}
        ${groupAddress}
        ${busSupport}
        ${remarkSplitBar}
        ${remark}
        `;
      break;
      //  语音电路
    case 2:
      str = `
        ${workOrderName}
        ${isProject}
        ${projectName}
        ${areaName}
        ${designCompany}
        ${customerSplitBar}
        ${customerManager}
        ${customerManagerTel}
        ${isContract}
        ${contractMoney}
        ${contractYear}
        ${groupSplitBar}
        ${groupName}
        ${groupCode}
        ${groupLevel}
        ${groupAddress}
        ${busSupport}
        ${busBroadband}
        ${ZSplitBar}
        ${accessMode}
        ${ZAddress}
        ${ZContactsMan}
        ${AContactsInfo}
        ${ASplitBar}
        ${AAddress}
        ${AContactsMan}
        ${AContactsInfo}
        ${remarkSplitBar}
        ${remark}
        `
      break;
      //  互联网+IMS
    case 3:
      str = `
          ${workOrderName}
          ${isProject}
          ${projectName}
          ${areaName}
          ${designCompany}
          ${customerSplitBar}
          ${customerName}
          ${customerTel}
          ${customerManager}
          ${customerManagerTel}
          ${isContract}
          ${contractMoney}
          ${contractYear}
          ${groupSplitBar}
          ${groupName}
          ${groupCode}
          ${groupLevel}
          ${groupAddress}
          ${busSupport}
          ${busBroadband}
          ${IMSNumber}
          ${remarkSplitBar}
          ${remark}
          `;
      break;
      //  IMS    
    case 4:
      str = `
          ${workOrderName}
          ${isProject}
          ${projectName}
          ${areaName}
          ${designCompany}
          ${customerSplitBar}
          ${customerName}
          ${customerTel}
          ${customerManager}
          ${customerManagerTel}
          ${isContract}
          ${contractMoney}
          ${contractYear}
          ${groupSplitBar}
          ${groupName}
          ${groupCode}
          ${groupLevel}
          ${groupAddress}
          ${IMSNumber}
          ${remarkSplitBar}
          ${remark}
          `;
      break;
      // 预覆盖 
    case 5:
      str = `
          ${workOrderName}
          ${isProject}
          ${projectName}
          ${areaName}
          ${designCompany}
          ${customerSplitBar}
          ${customerManager}
          ${customerManagerTel}
          ${isContract}
          ${contractMoney}
          ${contractYear}
          ${bearingMode}
          ${accessMode}
          ${ZSplitBar}
          ${ZAddress}
          ${ZContactsMan}
          ${AContactsInfo}
          ${ASplitBar}
          ${AAddress}
          ${AContactsMan}
          ${ZContactsInfo}
          ${propertySpitBar}
          ${propertyAddress}
          ${propertyType}
          ${propertyScene}
          ${propertyFloors}
          ${StatisticsSplitBar}
          ${totalHouse}
          ${groupNumber}
          ${governmentNumber}
          ${internetNumber}
          ${dataNumber}
          ${smallBroadband}
          ${planIMSNumber}
          ${remarkSplitBar}
          ${remark}
          `;
      break;
      // 企业宽带
    default:
      str = `
          ${workOrderName}
          ${isProject}
          ${projectName}
          ${areaName}
          ${designCompany}
          ${customerSplitBar}
          ${customerName}
          ${customerTel}
          ${customerManager}
          ${customerManagerTel}
          ${isContract}
          ${contractMoney}
          ${contractYear}
          ${coverNumber}
          ${accessMode2}
          ${customerAddress}
          ${remarkSplitBar}
          ${remark}
          `;
  }

  $('#slot').html('');//将原有元素清空再渲染
  $('#slot').append(str);
  
}