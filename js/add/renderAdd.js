/**
 * 
 *  index 根据index渲染哪一项  number类型 默认值0
 *
 */
const renderAdd = (index = 0) => { 
  let str = ``;
  const slot = document.getElementById('slot'),
    type = document.getElementById('type');

    // 工单名  name
    const workOrderName = `
    <li class="border-bottom">
      <label class="label">工单名称</label>
      <input class="input" type="text" placeholder="请输入工单" name="name" >
    </li>
    `
  // 是否项目工单  isProject
  const isProject = `
    <li class="border-bottom">
      <label class="label">是否项目工单</label>
      <div class="input">
        <input class="margin-right5" type="radio" value="0" name="isProject"/><span class="margin-right10">是</span>
        <input class="margin-right5" type="radio" value="1" name="isProject"/><span>否</span>
      </div>
    </li>
    `
  // 项目名  value=${newline['projectName']??''}
  const projectName = `
    <li class="border-bottom">
      <label class="label">项目名称</label>
      <input class="input" type="text" placeholder="请输入项目名称" name="projectName" >
    </li>
    `
  // 区域名称
  // ${newline['orgName']==="防城区"?'selected':''}
  // ${newline['orgName']==="港口区"?'selected':''}
  // ${newline['orgName']==="东兴"?'selected':''}
  // ${newline['orgName']==="上思"?'selected':''}
  const areaName = `
    <li class="border-bottom">
      <label class="label">区域名称</label>
      <select id="" class="select">
        <option value="防城区" >防城区</option>
        <option value="港口区" >港口区</option>
        <option value="东兴" >东兴</option>
        <option value="上思">上思</option>
      </select>
    </li>
    `
  // 设计单位 value=${newline['designName']??''}
  const designCompany = `
    <li class="border-bottom">
      <label class="label">设计单位</label>
      <input class="input" type="text" placeholder="必填" >
      </select>
    </li>
    `
  // 客户信息 -- 分割栏
  const customerSplitBar = `
    <li class="split-bar">
      客户信息&nbsp;<i class="iconfont icon-minus-circle"></i>
    </li>
    `
  // 客户姓名 value=${newline['clientName']??''}
  const customerName = `
    <li class="border-bottom">
      <label class="label">客户姓名</label>
      <input class="input" type="text" placeholder="必填" >
    </li>
    `
  // 顾客电话 value=${newline['clientMobile']??''}
  const customerTel = `
    <li class="border-bottom">
      <label class="label">客户电话</label>
      <input class="input" type="text" placeholder="必填" >
    </li>
    `
  // 客户经理 value=${newline['managerName']??''}
  const customerManager = `
    <li class="border-bottom">
      <label class="label">客户经理</label>
      <input class="input" type="text" placeholder="必填" >
    </li>
    `
  // 客户经理电话  value=${newline['managerMobile']??''}
  const customerManagerTel = `
    <li class="border-bottom">
      <label class="label">客户经理电话</label>
      <input class="input" type="text" placeholder="必填" >
    </li>
    `
  // 是否签约 isSign  ${newline['isSign']=== 1?'checked':''} 
  // ${newline['isSign']=== 0?'checked':''}
  const isContract = `
    <li class="border-bottom">
      <label class="label">是否签约</label>
      <div class="input">
        <input class="margin-right5" type="radio" value="1" name="contract1" ><span
          class="margin-right10">是</span>
        <input class="margin-right5" type="radio" vallue='0' name="contract1"><span>否</span>
      </div>
    </li>
    `
  // 签约资费
  // value=${newline['signPrice']??''
  // value=${newline['ageLine']??''}
  const contractMoney = `
    <li class="border-bottom">
      <label class="label">签约资费</label>
      <input class="input" type="text" placeholder="必填" }>
    </li>
    `
  // 签约年限
  const contractYear = `
    <li class="border-bottom">
      <label class="label">签约年限</label>
      <input class="input" type="text" placeholder="必填" >
    </li>
    `
  // 集团信息 -- 分割栏
  const groupSplitBar = `
    <li class="split-bar">
      集团信息&nbsp;<i class="iconfont icon-gongsi"></i>
    </li>
    `
  // 集团名称 value=${newline['groupName']??''}
  const groupName = `
    <li class="border-bottom">
      <label class="label">集团名称</label>
      <input class="input" type="text" placeholder="选填" >
    </li>
    `
  // 集团编码   value=${newline['groupCode']??''}
  const groupCode = `
    <li class="border-bottom">
      <label class="label">集团编码</label>
      <input class="input" type="text" placeholder="选填" >
    </li>
    `
  // 集团等级 value=${newline['groupLevel']??''}
  const groupLevel = `
    <li class="border-bottom">
      <label class="label">集团等级</label>
     <input class="input" type="text" placeholder="选填" >
    </li>
    `
  // 集团地址  value=${newline['groupAddr']??''}
  const groupAddress = `
    <li class="border-bottom">
      <label class="label">集团地址</label>
      <input class="input" type="text" placeholder="必填" >
    </li>
    `
  // 业务等级保障
  // ${newline['bizLevel']==="普通"?'selected':''}
  //  ${newline['bizLevel']==="A"?'selected':''}
  // ${newline['bizLevel']==="AA"?'selected':''}
  // ${newline['bizLevel']==="AAA"?'selected':''}
  const busSupport = `
    <li class="border-bottom">
      <label class="label">业务等级保障</label>
      <select id="" class="select">
        <option value="普通" >普通</option>
        <option value="A">A</option>
        <option value="AA" >AA</option>
        <option value="AAA" >AAA</option>
      </select>
    </li>
    `
  // 业务宽带 value=${newline['bizBand']??''}
  const busBroadband = `
    <li class="border-bottom">
      <label class="label">业务宽带</label>
      <input class="input" type="text" placeholder="选填" >
    </li>
    `
  // 备注信息 ${newline['remark']??''}
  const remark = `
    <li class="border-bottom">
      <label class="label">备注信息</label>
      <textarea class="textarea" cols="30" rows="2" name="remark"></textarea>
    </li>
    `
  // Z端信息 -- 分割栏
  const ZSplitBar = `
      <li class="split-bar">Z端信息&nbsp;<i class="iconfont icon-info"></i></li>
    `
  // 承载方式  value=${newline['bearerType']??''}
  const bearingMode = `
    <li class="border-bottom">
      <label class="label">承载方式</label>
      <input class="input" type="text" placeholder="必填" >
    </li>
    `
  // 接入方式  putType
  // ${newline['putType']==="PTN"?'selected':''}
  // ${newline['putType']==="SDH"?'selected':''}
  // ${newline['putType']==="PON"?'selected':''}
  const accessMode = `
    <li class="border-bottom">
      <label class="label">接入方式</label>
      <select id="" class="select">
        <option value="PTN">PTN</option>
        <option value="SDH">SDH</option>
        <option value="PON">PON</option>
      </select>
    </li>
    `
  // Z端地址  value=${newline['zAddr']??''}
  const ZAddress = `
    <li class="border-bottom">
      <label class="label">Z端地址</label>
      <input class="input" type="text" placeholder="选填">
    </li>
    `
  // Z端联系人  value=${newline['zName']??''}
  const ZContactsMan = `
    <li class="border-bottom">
      <label class="label">Z端联系人</label>
      <input class="input" type="text" placeholder="选填">
    </li> 
    `
  // Z端联系方式 value=${newline['zMobile']??''}
  const ZContactsInfo = `
     <li class="border-bottom">
      <label class="label">Z端联系方式</label>
      <input class="input" type="text" placeholder="选填" >
    </li>
     `
  //  A端信息 -- 分割栏
  const ASplitBar = `
      <li class="split-bar">A端信息&nbsp;<i class="iconfont icon-info"></i></li>
    `
  // A端地址  value=${newline['aAddr']??''}
  const AAddress = `
    <li class="border-bottom">
    <label class="label">A端地址</label>
    <input class="input" type="text" placeholder="选填" >
    </li>
    `
  // A端联系人  value=${newline['aName']??''}
  const AContactsMan = `
    <li class="border-bottom">
    <label class="label">A端联系人</label>
    <input class="input" type="text" placeholder="选填" >
    </li>
    `
  // A端联系方式  value=${newline['aMobile']??''}
  const AContactsInfo = `
    <li class="border-bottom">
    <label class="label">A端联系方式</label>
    <input class="input" type="text" placeholder="选填" >
    </li>
    `
  // IMS数  value=${newline['imsNum']??''}
  const IMSNumber = `
    <li class="border-bottom">
    <label class="label">IMS数</label>
    <input class="input" type="text" placeholder="选填" >
    </li>
    `
  // 物业 -- 分割栏  
  const propertySpitBar = `
    <li class="split-bar">物业信息&nbsp;<i class="iconfont icon-wuye"></i></li>
    `
  // 物业地址  value=${newline['propAdd']??''}
  const propertyAddress = `
    <li class="border-bottom">
    <label class="label">物业地址</label>
    <input class="input" type="text" placeholder="选填" >
    </li>
    `
  // 物业类型  value=${newline['propType']??''}
  const propertyType = `
    <li class="border-bottom">
    <label class="label">物业类型</label>
    <input class="input" type="text" placeholder="选填" >
    </li>
    `
  // 物业场景现象
  // value=${newline['propScenario']??''}
  const propertyScene = `
    <li class="border-bottom">
    <label class="label">物业场景现象</label>
    <input class="input" type="text" placeholder="选填" >
    </li>
    `
  // 物业楼栋总数
  // value=${newline['propLine']??''}
  const propertyFloors = `
    <li class="border-bottom">
    <label class="label">物业楼栋总数</label>
    <input class="input" type="text" placeholder="选填" >
    </li>
    `
  // 数量统计 -- 分割栏
  const Statistics = `
    <li class="split-bar">数量统计&nbsp;<i class="iconfont icon-tongji"></i></li>
    `
  // 家庭住户总数
  // value=${newline['familyLine']??''}
  const totalHouse = `
    <li class="border-bottom">
    <label class="label">家庭住户总数</label>
    <input class="input" type="text" placeholder="选填" >
    </li>
    `
  // 企业单位数
  // value=${newline['instLine']??''}
  const groupNumber = `
    <li class="border-bottom">
    <label class="label">企业单位数</label>
    <input class="input" type="text" placeholder="选填">
    </li>
    `
  // 政府机构数
  //  value=${newline['govLine']??''}
  const governmentNumber = `
    <li class="border-bottom">
    <label class="label">政府机构数</label>
    <input class="input" type="text" placeholder="选填" >
    </li>
    `
  // 计划发展互联网专线数
  // value=${newline['netLine']??''}
  const internetNumber = `
    <li class="border-bottom">
    <label class="label">计划发展互联网专线数</label>
    <input class="input" type="text" placeholder="选填" >
    </li>
    `
  // 计划发展数据专线数
  // value=${newline['dataLine']??''}
  const dataNumber = `
    <li class="border-bottom">
    <label class="label">计划发展数据专线数</label>
    <input class="input" type="text" placeholder="选填" >
    </li>
    `
  // 计划发展小微宽带数
  // value=${newline['broadandLine']??''}
  const smallBroadband = `
    <li class="border-bottom">
    <label class="label">计划发展小微宽带数</label>
    <input class="input" type="text" placeholder="选填" >
    </li>b
    `
  // 计划发展IMS数
  // value=${newline['imsLine']??''}
  const planIMSNumber = `
    <li class="border-bottom">
    <label class="label">计划发展IMS数</label>
    <input class="input" type="text" placeholder="选填" >
    </li>
    `
  // 覆盖户数
  // value=${newline['coverNum']??''}
  const coverNumber = `
    <li class="border-bottom">
    <label class="label">覆盖户数</label>
    <input class="input" type="text" placeholder="必填" >
    </li>
    `
  // 接入模式2 putMode
  //  ${newline['putMode']==="FTTB"?'selected':''}
  // ${newline['putMode']==="FTTH"?'selected':''}
  const accessMode2 = `
    <li class="border-bottom">
    <label class="label">接入模式</label>
    <select id="" class="select">
      <option value="FTTB">FTTB</option>
      <option value="FTTH">FTTH</option>
    </select>
    </li>
    `
  // 客户地址   
  // value=${newline['clientAddr']??''} 
  const customerAddress = `
    <li class="border-bottom">
    <label class="label">客户地址</label>
    <input class="input" type="text" >
    </li>
    `
  switch (index) {
    // 互联网
    case 0:
      str = `
        <ul class="internet">
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
        ${remark}
        </ul>
        `;
      break;
      //  语音电路
    case 1:
      str = `
        <ul class="voice">
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
        ${remark}
        </ul>
        `
      break;
      //  互联网+IMS
    case 2:
      str = `
          <ul class="internetIMS">
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
          ${remark}
          </ul>
          `;
      break;
      //  IMS    
    case 3:
      str = `
          <ul class="IMS">
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
          ${remark}
          </ul>
          `;
      break;
      // 预覆盖 
    case 4:
      str = `
          <ul class="recapping">
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
          ${AContactsInfo}
          ${propertySpitBar}
          ${propertyAddress}
          ${propertyType}
          ${propertyScene}
          ${propertyFloors}
          ${Statistics}
          ${totalHouse}
          ${groupNumber}
          ${governmentNumber}
          ${internetNumber}
          ${dataNumber}
          ${smallBroadband}
          ${planIMSNumber}
          ${remark}
          </ul>
          `;
      break;
      // 企业宽带
    default:
      str = `
          <ul class="co-broadband">
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
          ${remark}
          </ul>
          `;
  }

  slot.innerHTML = str;//插入元素
  // 将html为数组转为数组并循环添加selected属性
  Array.from(type).forEach((item, i) => {
    if (i === index) {
      item.setAttribute("selected", "true");
    }
  });

  // 如果是详情页 设置input textarea select 为disabled ,  隐藏button 
  // if (disabled) {
  //   $('.submit').hide();
  //   $('input').attr('readonly', true);
  //   $('[type=radio]').attr("disabled", 'disabled')
  //   $("select").attr("disabled", "disabled")
  //   $('textarea').attr('readonly', true);
  // }
}