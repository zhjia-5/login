/**
 * 
 *  index 根据index渲染哪一项  number类型 默认值0
 *  disabled  Boolean 判读是添加页还是编辑页，编辑页的话将select input 设置为disabled 
 *  obj  数据  对象
 *
 */
function renderAdd(index = 0, disabled = false, obj = null) {
  let str = ``;
  const slot = document.getElementById('slot'),
    type = document.getElementById('type'),
    inputHtml = document.getElementsByClassName('form')[0].getElementsByTagName("input"),
    selectHtml = document.getElementsByClassName('form')[0].getElementsByTagName("select"),
    textArea = document.getElementsByTagName('textarea'),
    newline = obj ? obj.newline : {}; //判断是否有值，如果有值根据接口数据返回obj.newline

  // 工单名
  const workOrderName = `
  <li class="border-bottom">
    <label class="label">工单名称</label>
    <input class="input" type="text" placeholder="请输入工单" value=${newline['name']?? ''}>
  </li>
  `
  // 是否项目工单
  const isProject = `
  <li class="border-bottom">
    <label class="label">是否项目工单</label>
    <div class="input">
      <input class="margin-right5" type="radio" value="1" name="design1" ${newline['isProject']===1 ? 'checked':'' }><span
        class="margin-right10">是</span>
      <input class="margin-right5" type="radio" vallue='0' name="design1"${newline['isProject']===0 ? 'checked':''}><span>否</span>
    </div>
  </li>
  `
  // 项目名
  const projectName = `
  <li class="border-bottom">
    <label class="label">项目名称</label>
    <input class="input" type="text" placeholder="请输入项目名称" value=${newline['projectName']??''}>
  </li>
  `
  // 区域名称
  const areaName = `
  <li class="border-bottom">
    <label class="label">区域名称</label>
    <select id="" class="select">
      <option value="防城区" ${newline['orgName']==="防城区"?'selected':''}>防城区</option>
      <option value="港口区" ${newline['orgName']==="港口区"?'selected':''}>港口区</option>
      <option value="东兴" ${newline['orgName']==="东兴"?'selected':''}>东兴</option>
      <option value="上思" ${newline['orgName']==="上思"?'selected':''}>上思</option>
    </select>
  </li>
  `
  // 设计单位
  const designCompany = `
  <li class="border-bottom">
    <label class="label">设计单位</label>
    <input class="input" type="text" placeholder="必填" value=${newline['designName']??''}>
    </select>
  </li>
  `
  // 客户信息 -- 分割栏
  const customerSplitBar = `
  <li class="split-bar">
    客户信息&nbsp;<i class="iconfont icon-minus-circle"></i>
  </li>
  `
  // 客户姓名
  const customerName = `
  <li class="border-bottom">
    <label class="label">客户姓名</label>
    <input class="input" type="text" placeholder="必填" value=${newline['clientName']??''}>
  </li>
  `
  // 顾客电话
  const customerTel = `
  <li class="border-bottom">
    <label class="label">客户电话</label>
    <input class="input" type="text" placeholder="必填" value=${newline['clientMobile']??''}>
  </li>
  `
  // 客户经理
  const customerManager = `
  <li class="border-bottom">
    <label class="label">客户经理</label>
    <input class="input" type="text" placeholder="必填" value=${newline['managerName']??''}>
  </li>
  `
  // 客户经理电话
  const customerManagerTel = `
  <li class="border-bottom">
    <label class="label">客户经理电话</label>
    <input class="input" type="text" placeholder="必填" value=${newline['managerMobile']??''}>
  </li>
  `
  // 是否签约 isSign
  const isContract = `
  <li class="border-bottom">
    <label class="label">是否签约</label>
    <div class="input">
      <input class="margin-right5" type="radio" value="1" name="contract1" ${newline['isSign']=== 1?'checked':''}><span
        class="margin-right10">是</span>
      <input class="margin-right5" type="radio" vallue='0' name="contract1"${newline['isSign']=== 0?'checked':''}><span>否</span>
    </div>
  </li>
  `
  // 签约资费
  const contractMoney = `
  <li class="border-bottom">
    <label class="label">签约资费</label>
    <input class="input" type="text" placeholder="必填" value=${newline['signPrice']??''}>
  </li>
  `
  // 签约年限
  const contractYear = `
  <li class="border-bottom">
    <label class="label">签约年限</label>
    <input class="input" type="text" placeholder="必填" value=${newline['ageLine']??''}>
  </li>
  `
  // 集团信息 -- 分割栏
  const groupSplitBar = `
  <li class="split-bar">
    集团信息&nbsp;<i class="iconfont icon-gongsi"></i>
  </li>
  `
  // 集团名称
  const groupName = `
  <li class="border-bottom">
    <label class="label">集团名称</label>
    <input class="input" type="text" placeholder="选填" value=${newline['groupName']??''}>
  </li>
  `
  // 集团编码
  const groupCode = `
  <li class="border-bottom">
    <label class="label">集团编码</label>
    <input class="input" type="text" placeholder="选填"  value=${newline['groupCode']??''}>
  </li>
  `
  // 集团等级
  const groupLevel = `
  <li class="border-bottom">
    <label class="label">集团等级</label>
   <input class="input" type="text" placeholder="选填" value=${newline['groupLevel']??''}>
  </li>
  `
  // 集团地址
  const groupAddress = `
  <li class="border-bottom">
    <label class="label">集团地址</label>
    <input class="input" type="text" placeholder="必填" value=${newline['groupAddr']??''}>
  </li>
  `
  // 业务等级保障
  const busSupport = `
  <li class="border-bottom">
    <label class="label">业务等级保障</label>
    <select id="" class="select">
      <option value="普通" ${newline['bizLevel']==="普通"?'selected':''}>普通</option>
      <option value="A" ${newline['bizLevel']==="A"?'selected':''}>A</option>
      <option value="AA" ${newline['bizLevel']==="AA"?'selected':''}>AA</option>
      <option value="AAA" ${newline['bizLevel']==="AAA"?'selected':''}>AAA</option>
    </select>
  </li>
  `
  // 业务宽带
  const busBroadband = `
  <li class="border-bottom">
    <label class="label">业务宽带</label>
    <input class="input" type="text" placeholder="选填" value=${newline['bizBand']??''}>
  </li>
  `
  // 备注信息
  const remarks = `
  <li class="border-bottom">
    <label class="label">备注信息</label>
    <textarea class="textarea" cols="30" rows="2">${newline['remark']??''}</textarea>
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
    <input class="input" type="text" placeholder="必填"value=${newline['bearerType']??''}>
  </li>
  `
  // 接入方式  putType
  const accessMode = `
  <li class="border-bottom">
    <label class="label">接入方式</label>
    <select id="" class="select">
      <option value="PTN" ${newline['putType']==="PTN"?'selected':''}>PTN</option>
      <option value="SDH" ${newline['putType']==="SDH"?'selected':''}>SDH</option>
      <option value="PON" ${newline['putType']==="PON"?'selected':''}>PON</option>
    </select>
  </li>
  `
  // Z端地址
  const ZAddress = `
  <li class="border-bottom">
    <label class="label">Z端地址</label>
    <input class="input" type="text" placeholder="选填" value=${newline['zAddr']??''}>
  </li>
  `
  // Z端联系人
  const ZContactsMan = `
  <li class="border-bottom">
    <label class="label">Z端联系人</label>
    <input class="input" type="text" placeholder="选填" value=${newline['zName']??''}>
  </li> 
  `
  // Z端联系方式
  const ZContactsInfo = `
   <li class="border-bottom">
    <label class="label">Z端联系方式</label>
    <input class="input" type="text" placeholder="选填" value=${newline['zMobile']??''}>
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
  <input class="input" type="text" placeholder="选填" value=${newline['aAddr']??''}>
  </li>
  `
  // A端联系人
  const AContactsMan = `
  <li class="border-bottom">
  <label class="label">A端联系人</label>
  <input class="input" type="text" placeholder="选填" value=${newline['aName']??''}>
  </li>
  `
  // A端联系方式
  const AContactsInfo = `
  <li class="border-bottom">
  <label class="label">A端联系方式</label>
  <input class="input" type="text" placeholder="选填" value=${newline['aMobile']??''}>
  </li>
  `
  // IMS数
  const IMSNumber = `
  <li class="border-bottom">
  <label class="label">IMS数</label>
  <input class="input" type="text" placeholder="选填" value=${newline['imsNum']??''}>
  </li>
  `
  // 物业 -- 分割栏
  const propertySpitBar = `
  <li class="split-bar">物业信息&nbsp;<i class="iconfont icon-wuye"></i></li>
  `
  // 物业地址
  const propertyAddress = `
  <li class="border-bottom">
  <label class="label">物业地址</label>
  <input class="input" type="text" placeholder="选填" value=${newline['propAdd']??''}>
  </li>
  `
  // 物业类型
  const propertyType = `
  <li class="border-bottom">
  <label class="label">物业类型</label>
  <input class="input" type="text" placeholder="选填" value=${newline['propType']??''}>
  </li>
  `
  // 物业场景现象
  const propertyScene = `
  <li class="border-bottom">
  <label class="label">物业场景现象</label>
  <input class="input" type="text" placeholder="选填" value=${newline['propScenario']??''}>
  </li>
  `
  // 物业楼栋总数
  const propertyFloors = `
  <li class="border-bottom">
  <label class="label">物业楼栋总数</label>
  <input class="input" type="text" placeholder="选填" value=${newline['propLine']??''}>
  </li>
  `
  // 数量统计 -- 分割栏
  const Statistics = `
  <li class="split-bar">数量统计&nbsp;<i class="iconfont icon-tongji"></i></li>
  `
  // 家庭住户总数
  const totalHouse = `
  <li class="border-bottom">
  <label class="label">家庭住户总数</label>
  <input class="input" type="text" placeholder="选填" value=${newline['familyLine']??''}>
  </li>
  `
  // 企业单位数
  const groupNumber = `
  <li class="border-bottom">
  <label class="label">企业单位数</label>
  <input class="input" type="text" placeholder="选填" value=${newline['instLine']??''}>
  </li>
  `
  // 政府机构数
  const governmentNumber = `
  <li class="border-bottom">
  <label class="label">政府机构数</label>
  <input class="input" type="text" placeholder="选填"  value=${newline['govLine']??''}>
  </li>
  `
  // 计划发展互联网专线数
  const internetNumber = `
  <li class="border-bottom">
  <label class="label">计划发展互联网专线数</label>
  <input class="input" type="text" placeholder="选填" value=${newline['netLine']??''}>
  </li>
  `
  // 计划发展数据专线数
  const dataNumber = `
  <li class="border-bottom">
  <label class="label">计划发展数据专线数</label>
  <input class="input" type="text" placeholder="选填" value=${newline['dataLine']??''}>
  </li>
  `
  // 计划发展小微宽带数
  const smallBroadband = `
  <li class="border-bottom">
  <label class="label">计划发展小微宽带数</label>
  <input class="input" type="text" placeholder="选填" value=${newline['broadbandLine']??''}>
  </li>
  `
  // 计划发展IMS数
  const planIMSNumber = `
  <li class="border-bottom">
  <label class="label">计划发展IMS数</label>
  <input class="input" type="text" placeholder="选填" value=${newline['imsLine']??''}>
  </li>
  `
  // 覆盖户数
  const coverNumber = `
  <li class="border-bottom">
  <label class="label">覆盖户数</label>
  <input class="input" type="text" placeholder="必填" value=${newline['coverNum']??''}>
  </li>
  `
  // 接入模式2 putMode
  const accessMode2 = `
  <li class="border-bottom">
  <label class="label">接入模式</label>
  <select id="" class="select">
    <option value="FTTB" ${newline['putMode']==="FTTB"?'selected':''}>FTTB</option>
    <option value="FTTH" ${newline['putMode']==="FTTH"?'selected':''}>FTTH</option>
  </select>
  </li>
  `
  // 客户地址
  const customerAddress = `
  <li class="border-bottom">
  <label class="label">客户地址</label>
  <input class="input" type="text" placeholder="必填" value=${newline['clientAddr']??''}>
  </li>
  `
  // 提交按钮
  const submitBtn = `
  <div class="submit">
    <button>提交</button>
  </div>
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
      ${remarks}
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
      ${remarks}
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
        ${remarks}
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
        ${remarks}
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
        ${remarks}
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
        ${remarks}
        </ul>
        `;
  }

  slot.innerHTML = str + submitBtn; // 添加按钮并插入元素
  // 将html为数组转为数组并循环添加selected属性
  Array.from(type).forEach((item, i) => {
    if (i === index) {
      item.setAttribute("selected", "true");
    }
  });

  // 设置input textarea select 为disabled ,  隐藏button 
  if (disabled) {
    $('.submit').hide();
    Array.from(inputHtml).forEach((item) => {
      item.setAttribute("disabled", "true");
    });
    Array.from(selectHtml).forEach((item) => {
      item.setAttribute("disabled", "true");
    });
    Array.from(textArea).forEach((item) => {
      item.setAttribute("disabled", "true");
    });
  }
}