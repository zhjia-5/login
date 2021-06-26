"use strict";

/**
 * 
 *  index 根据index渲染哪一项  number类型 默认值0
 *  disabled  Boolean 判读是添加页还是编辑页，编辑页的话将select input 设置为disabled 
 *  obj  数据  对象
 *
 */
function renderAdd() {
  var _newline$name, _newline$projectName, _newline$designName, _newline$clientName, _newline$clientMobile, _newline$managerName, _newline$managerMobil, _newline$signPrice, _newline$ageLine, _newline$groupName, _newline$groupCode, _newline$groupLevel, _newline$groupAddr, _newline$bizBand, _newline$remark, _newline$bearerType, _newline$zAddr, _newline$zName, _newline$zMobile, _newline$aAddr, _newline$aName, _newline$aMobile, _newline$imsNum, _newline$propAdd, _newline$propType, _newline$propScenario, _newline$propLine, _newline$familyLine, _newline$instLine, _newline$govLine, _newline$netLine, _newline$dataLine, _newline$broadbandLin, _newline$imsLine, _newline$coverNum, _newline$clientAddr;

  var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var disabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var obj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var str = "";
  var slot = document.getElementById('slot'),
      type = document.getElementById('type'),
      inputHtml = document.getElementsByClassName('form')[0].getElementsByTagName("input"),
      selectHtml = document.getElementsByClassName('form')[0].getElementsByTagName("select"),
      textArea = document.getElementsByTagName('textarea'),
      newline = obj ? obj.newline : {}; //判断是否有值，如果有值根据接口数据返回obj.newline
  // 工单名

  var workOrderName = "\n  <li class=\"border-bottom\">\n    <label class=\"label\">\u5DE5\u5355\u540D\u79F0</label>\n    <input class=\"input\" type=\"text\" placeholder=\"\u8BF7\u8F93\u5165\u5DE5\u5355\" value=".concat((_newline$name = newline['name']) !== null && _newline$name !== void 0 ? _newline$name : '', ">\n  </li>\n  "); // 是否项目工单

  var isProject = "\n  <li class=\"border-bottom\">\n    <label class=\"label\">\u662F\u5426\u9879\u76EE\u5DE5\u5355</label>\n    <div class=\"input\">\n      <input class=\"margin-right5\" type=\"radio\" value=\"1\" name=\"design1\" ".concat(newline['isProject'] === 1 ? 'checked' : '', "><span\n        class=\"margin-right10\">\u662F</span>\n      <input class=\"margin-right5\" type=\"radio\" vallue='0' name=\"design1\"").concat(newline['isProject'] === 0 ? 'checked' : '', "><span>\u5426</span>\n    </div>\n  </li>\n  "); // 项目名

  var projectName = "\n  <li class=\"border-bottom\">\n    <label class=\"label\">\u9879\u76EE\u540D\u79F0</label>\n    <input class=\"input\" type=\"text\" placeholder=\"\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0\" value=".concat((_newline$projectName = newline['projectName']) !== null && _newline$projectName !== void 0 ? _newline$projectName : '', ">\n  </li>\n  "); // 区域名称

  var areaName = "\n  <li class=\"border-bottom\">\n    <label class=\"label\">\u533A\u57DF\u540D\u79F0</label>\n    <select id=\"\" class=\"select\">\n      <option value=\"\u9632\u57CE\u533A\" ".concat(newline['orgName'] === "防城区" ? 'selected' : '', ">\u9632\u57CE\u533A</option>\n      <option value=\"\u6E2F\u53E3\u533A\" ").concat(newline['orgName'] === "港口区" ? 'selected' : '', ">\u6E2F\u53E3\u533A</option>\n      <option value=\"\u4E1C\u5174\" ").concat(newline['orgName'] === "东兴" ? 'selected' : '', ">\u4E1C\u5174</option>\n      <option value=\"\u4E0A\u601D\" ").concat(newline['orgName'] === "上思" ? 'selected' : '', ">\u4E0A\u601D</option>\n    </select>\n  </li>\n  "); // 设计单位

  var designCompany = "\n  <li class=\"border-bottom\">\n    <label class=\"label\">\u8BBE\u8BA1\u5355\u4F4D</label>\n    <input class=\"input\" type=\"text\" placeholder=\"\u5FC5\u586B\" value=".concat((_newline$designName = newline['designName']) !== null && _newline$designName !== void 0 ? _newline$designName : '', ">\n    </select>\n  </li>\n  "); // 客户信息 -- 分割栏

  var customerSplitBar = "\n  <li class=\"split-bar\">\n    \u5BA2\u6237\u4FE1\u606F&nbsp;<i class=\"iconfont icon-minus-circle\"></i>\n  </li>\n  "; // 客户姓名

  var customerName = "\n  <li class=\"border-bottom\">\n    <label class=\"label\">\u5BA2\u6237\u59D3\u540D</label>\n    <input class=\"input\" type=\"text\" placeholder=\"\u5FC5\u586B\" value=".concat((_newline$clientName = newline['clientName']) !== null && _newline$clientName !== void 0 ? _newline$clientName : '', ">\n  </li>\n  "); // 顾客电话

  var customerTel = "\n  <li class=\"border-bottom\">\n    <label class=\"label\">\u5BA2\u6237\u7535\u8BDD</label>\n    <input class=\"input\" type=\"text\" placeholder=\"\u5FC5\u586B\" value=".concat((_newline$clientMobile = newline['clientMobile']) !== null && _newline$clientMobile !== void 0 ? _newline$clientMobile : '', ">\n  </li>\n  "); // 客户经理

  var customerManager = "\n  <li class=\"border-bottom\">\n    <label class=\"label\">\u5BA2\u6237\u7ECF\u7406</label>\n    <input class=\"input\" type=\"text\" placeholder=\"\u5FC5\u586B\" value=".concat((_newline$managerName = newline['managerName']) !== null && _newline$managerName !== void 0 ? _newline$managerName : '', ">\n  </li>\n  "); // 客户经理电话

  var customerManagerTel = "\n  <li class=\"border-bottom\">\n    <label class=\"label\">\u5BA2\u6237\u7ECF\u7406\u7535\u8BDD</label>\n    <input class=\"input\" type=\"text\" placeholder=\"\u5FC5\u586B\" value=".concat((_newline$managerMobil = newline['managerMobile']) !== null && _newline$managerMobil !== void 0 ? _newline$managerMobil : '', ">\n  </li>\n  "); // 是否签约 isSign

  var isContract = "\n  <li class=\"border-bottom\">\n    <label class=\"label\">\u662F\u5426\u7B7E\u7EA6</label>\n    <div class=\"input\">\n      <input class=\"margin-right5\" type=\"radio\" value=\"1\" name=\"contract1\" ".concat(newline['isSign'] === 1 ? 'checked' : '', "><span\n        class=\"margin-right10\">\u662F</span>\n      <input class=\"margin-right5\" type=\"radio\" vallue='0' name=\"contract1\"").concat(newline['isSign'] === 0 ? 'checked' : '', "><span>\u5426</span>\n    </div>\n  </li>\n  "); // 签约资费

  var contractMoney = "\n  <li class=\"border-bottom\">\n    <label class=\"label\">\u7B7E\u7EA6\u8D44\u8D39</label>\n    <input class=\"input\" type=\"text\" placeholder=\"\u5FC5\u586B\" value=".concat((_newline$signPrice = newline['signPrice']) !== null && _newline$signPrice !== void 0 ? _newline$signPrice : '', ">\n  </li>\n  "); // 签约年限

  var contractYear = "\n  <li class=\"border-bottom\">\n    <label class=\"label\">\u7B7E\u7EA6\u5E74\u9650</label>\n    <input class=\"input\" type=\"text\" placeholder=\"\u5FC5\u586B\" value=".concat((_newline$ageLine = newline['ageLine']) !== null && _newline$ageLine !== void 0 ? _newline$ageLine : '', ">\n  </li>\n  "); // 集团信息 -- 分割栏

  var groupSplitBar = "\n  <li class=\"split-bar\">\n    \u96C6\u56E2\u4FE1\u606F&nbsp;<i class=\"iconfont icon-gongsi\"></i>\n  </li>\n  "; // 集团名称

  var groupName = "\n  <li class=\"border-bottom\">\n    <label class=\"label\">\u96C6\u56E2\u540D\u79F0</label>\n    <input class=\"input\" type=\"text\" placeholder=\"\u9009\u586B\" value=".concat((_newline$groupName = newline['groupName']) !== null && _newline$groupName !== void 0 ? _newline$groupName : '', ">\n  </li>\n  "); // 集团编码

  var groupCode = "\n  <li class=\"border-bottom\">\n    <label class=\"label\">\u96C6\u56E2\u7F16\u7801</label>\n    <input class=\"input\" type=\"text\" placeholder=\"\u9009\u586B\"  value=".concat((_newline$groupCode = newline['groupCode']) !== null && _newline$groupCode !== void 0 ? _newline$groupCode : '', ">\n  </li>\n  "); // 集团等级

  var groupLevel = "\n  <li class=\"border-bottom\">\n    <label class=\"label\">\u96C6\u56E2\u7B49\u7EA7</label>\n   <input class=\"input\" type=\"text\" placeholder=\"\u9009\u586B\" value=".concat((_newline$groupLevel = newline['groupLevel']) !== null && _newline$groupLevel !== void 0 ? _newline$groupLevel : '', ">\n  </li>\n  "); // 集团地址

  var groupAddress = "\n  <li class=\"border-bottom\">\n    <label class=\"label\">\u96C6\u56E2\u5730\u5740</label>\n    <input class=\"input\" type=\"text\" placeholder=\"\u5FC5\u586B\" value=".concat((_newline$groupAddr = newline['groupAddr']) !== null && _newline$groupAddr !== void 0 ? _newline$groupAddr : '', ">\n  </li>\n  "); // 业务等级保障

  var busSupport = "\n  <li class=\"border-bottom\">\n    <label class=\"label\">\u4E1A\u52A1\u7B49\u7EA7\u4FDD\u969C</label>\n    <select id=\"\" class=\"select\">\n      <option value=\"\u666E\u901A\" ".concat(newline['bizLevel'] === "普通" ? 'selected' : '', ">\u666E\u901A</option>\n      <option value=\"A\" ").concat(newline['bizLevel'] === "A" ? 'selected' : '', ">A</option>\n      <option value=\"AA\" ").concat(newline['bizLevel'] === "AA" ? 'selected' : '', ">AA</option>\n      <option value=\"AAA\" ").concat(newline['bizLevel'] === "AAA" ? 'selected' : '', ">AAA</option>\n    </select>\n  </li>\n  "); // 业务宽带

  var busBroadband = "\n  <li class=\"border-bottom\">\n    <label class=\"label\">\u4E1A\u52A1\u5BBD\u5E26</label>\n    <input class=\"input\" type=\"text\" placeholder=\"\u9009\u586B\" value=".concat((_newline$bizBand = newline['bizBand']) !== null && _newline$bizBand !== void 0 ? _newline$bizBand : '', ">\n  </li>\n  "); // 备注信息

  var remarks = "\n  <li class=\"border-bottom\">\n    <label class=\"label\">\u5907\u6CE8\u4FE1\u606F</label>\n    <textarea class=\"textarea\" cols=\"30\" rows=\"2\">".concat((_newline$remark = newline['remark']) !== null && _newline$remark !== void 0 ? _newline$remark : '', "</textarea>\n  </li>\n  "); // Z端信息 -- 分割栏

  var ZSplitBar = "\n    <li class=\"split-bar\">Z\u7AEF\u4FE1\u606F&nbsp;<i class=\"iconfont icon-info\"></i></li>\n  "; // 承载方式

  var bearingMode = "\n  <li class=\"border-bottom\">\n    <label class=\"label\">\u627F\u8F7D\u65B9\u5F0F</label>\n    <input class=\"input\" type=\"text\" placeholder=\"\u5FC5\u586B\"value=".concat((_newline$bearerType = newline['bearerType']) !== null && _newline$bearerType !== void 0 ? _newline$bearerType : '', ">\n  </li>\n  "); // 接入方式  putType

  var accessMode = "\n  <li class=\"border-bottom\">\n    <label class=\"label\">\u63A5\u5165\u65B9\u5F0F</label>\n    <select id=\"\" class=\"select\">\n      <option value=\"PTN\" ".concat(newline['putType'] === "PTN" ? 'selected' : '', ">PTN</option>\n      <option value=\"SDH\" ").concat(newline['putType'] === "SDH" ? 'selected' : '', ">SDH</option>\n      <option value=\"PON\" ").concat(newline['putType'] === "PON" ? 'selected' : '', ">PON</option>\n    </select>\n  </li>\n  "); // Z端地址

  var ZAddress = "\n  <li class=\"border-bottom\">\n    <label class=\"label\">Z\u7AEF\u5730\u5740</label>\n    <input class=\"input\" type=\"text\" placeholder=\"\u9009\u586B\" value=".concat((_newline$zAddr = newline['zAddr']) !== null && _newline$zAddr !== void 0 ? _newline$zAddr : '', ">\n  </li>\n  "); // Z端联系人

  var ZContactsMan = "\n  <li class=\"border-bottom\">\n    <label class=\"label\">Z\u7AEF\u8054\u7CFB\u4EBA</label>\n    <input class=\"input\" type=\"text\" placeholder=\"\u9009\u586B\" value=".concat((_newline$zName = newline['zName']) !== null && _newline$zName !== void 0 ? _newline$zName : '', ">\n  </li> \n  "); // Z端联系方式

  var ZContactsInfo = "\n   <li class=\"border-bottom\">\n    <label class=\"label\">Z\u7AEF\u8054\u7CFB\u65B9\u5F0F</label>\n    <input class=\"input\" type=\"text\" placeholder=\"\u9009\u586B\" value=".concat((_newline$zMobile = newline['zMobile']) !== null && _newline$zMobile !== void 0 ? _newline$zMobile : '', ">\n  </li>\n   "); //  A端信息 -- 分割栏

  var ASplitBar = "\n    <li class=\"split-bar\">A\u7AEF\u4FE1\u606F&nbsp;<i class=\"iconfont icon-info\"></i></li>\n  "; // A端地址

  var AAddress = "\n  <li class=\"border-bottom\">\n  <label class=\"label\">A\u7AEF\u5730\u5740</label>\n  <input class=\"input\" type=\"text\" placeholder=\"\u9009\u586B\" value=".concat((_newline$aAddr = newline['aAddr']) !== null && _newline$aAddr !== void 0 ? _newline$aAddr : '', ">\n  </li>\n  "); // A端联系人

  var AContactsMan = "\n  <li class=\"border-bottom\">\n  <label class=\"label\">A\u7AEF\u8054\u7CFB\u4EBA</label>\n  <input class=\"input\" type=\"text\" placeholder=\"\u9009\u586B\" value=".concat((_newline$aName = newline['aName']) !== null && _newline$aName !== void 0 ? _newline$aName : '', ">\n  </li>\n  "); // A端联系方式

  var AContactsInfo = "\n  <li class=\"border-bottom\">\n  <label class=\"label\">A\u7AEF\u8054\u7CFB\u65B9\u5F0F</label>\n  <input class=\"input\" type=\"text\" placeholder=\"\u9009\u586B\" value=".concat((_newline$aMobile = newline['aMobile']) !== null && _newline$aMobile !== void 0 ? _newline$aMobile : '', ">\n  </li>\n  "); // IMS数

  var IMSNumber = "\n  <li class=\"border-bottom\">\n  <label class=\"label\">IMS\u6570</label>\n  <input class=\"input\" type=\"text\" placeholder=\"\u9009\u586B\" value=".concat((_newline$imsNum = newline['imsNum']) !== null && _newline$imsNum !== void 0 ? _newline$imsNum : '', ">\n  </li>\n  "); // 物业 -- 分割栏

  var propertySpitBar = "\n  <li class=\"split-bar\">\u7269\u4E1A\u4FE1\u606F&nbsp;<i class=\"iconfont icon-wuye\"></i></li>\n  "; // 物业地址

  var propertyAddress = "\n  <li class=\"border-bottom\">\n  <label class=\"label\">\u7269\u4E1A\u5730\u5740</label>\n  <input class=\"input\" type=\"text\" placeholder=\"\u9009\u586B\" value=".concat((_newline$propAdd = newline['propAdd']) !== null && _newline$propAdd !== void 0 ? _newline$propAdd : '', ">\n  </li>\n  "); // 物业类型

  var propertyType = "\n  <li class=\"border-bottom\">\n  <label class=\"label\">\u7269\u4E1A\u7C7B\u578B</label>\n  <input class=\"input\" type=\"text\" placeholder=\"\u9009\u586B\" value=".concat((_newline$propType = newline['propType']) !== null && _newline$propType !== void 0 ? _newline$propType : '', ">\n  </li>\n  "); // 物业场景现象

  var propertyScene = "\n  <li class=\"border-bottom\">\n  <label class=\"label\">\u7269\u4E1A\u573A\u666F\u73B0\u8C61</label>\n  <input class=\"input\" type=\"text\" placeholder=\"\u9009\u586B\" value=".concat((_newline$propScenario = newline['propScenario']) !== null && _newline$propScenario !== void 0 ? _newline$propScenario : '', ">\n  </li>\n  "); // 物业楼栋总数

  var propertyFloors = "\n  <li class=\"border-bottom\">\n  <label class=\"label\">\u7269\u4E1A\u697C\u680B\u603B\u6570</label>\n  <input class=\"input\" type=\"text\" placeholder=\"\u9009\u586B\" value=".concat((_newline$propLine = newline['propLine']) !== null && _newline$propLine !== void 0 ? _newline$propLine : '', ">\n  </li>\n  "); // 数量统计 -- 分割栏

  var Statistics = "\n  <li class=\"split-bar\">\u6570\u91CF\u7EDF\u8BA1&nbsp;<i class=\"iconfont icon-tongji\"></i></li>\n  "; // 家庭住户总数

  var totalHouse = "\n  <li class=\"border-bottom\">\n  <label class=\"label\">\u5BB6\u5EAD\u4F4F\u6237\u603B\u6570</label>\n  <input class=\"input\" type=\"text\" placeholder=\"\u9009\u586B\" value=".concat((_newline$familyLine = newline['familyLine']) !== null && _newline$familyLine !== void 0 ? _newline$familyLine : '', ">\n  </li>\n  "); // 企业单位数

  var groupNumber = "\n  <li class=\"border-bottom\">\n  <label class=\"label\">\u4F01\u4E1A\u5355\u4F4D\u6570</label>\n  <input class=\"input\" type=\"text\" placeholder=\"\u9009\u586B\" value=".concat((_newline$instLine = newline['instLine']) !== null && _newline$instLine !== void 0 ? _newline$instLine : '', ">\n  </li>\n  "); // 政府机构数

  var governmentNumber = "\n  <li class=\"border-bottom\">\n  <label class=\"label\">\u653F\u5E9C\u673A\u6784\u6570</label>\n  <input class=\"input\" type=\"text\" placeholder=\"\u9009\u586B\"  value=".concat((_newline$govLine = newline['govLine']) !== null && _newline$govLine !== void 0 ? _newline$govLine : '', ">\n  </li>\n  "); // 计划发展互联网专线数

  var internetNumber = "\n  <li class=\"border-bottom\">\n  <label class=\"label\">\u8BA1\u5212\u53D1\u5C55\u4E92\u8054\u7F51\u4E13\u7EBF\u6570</label>\n  <input class=\"input\" type=\"text\" placeholder=\"\u9009\u586B\" value=".concat((_newline$netLine = newline['netLine']) !== null && _newline$netLine !== void 0 ? _newline$netLine : '', ">\n  </li>\n  "); // 计划发展数据专线数

  var dataNumber = "\n  <li class=\"border-bottom\">\n  <label class=\"label\">\u8BA1\u5212\u53D1\u5C55\u6570\u636E\u4E13\u7EBF\u6570</label>\n  <input class=\"input\" type=\"text\" placeholder=\"\u9009\u586B\" value=".concat((_newline$dataLine = newline['dataLine']) !== null && _newline$dataLine !== void 0 ? _newline$dataLine : '', ">\n  </li>\n  "); // 计划发展小微宽带数

  var smallBroadband = "\n  <li class=\"border-bottom\">\n  <label class=\"label\">\u8BA1\u5212\u53D1\u5C55\u5C0F\u5FAE\u5BBD\u5E26\u6570</label>\n  <input class=\"input\" type=\"text\" placeholder=\"\u9009\u586B\" value=".concat((_newline$broadbandLin = newline['broadbandLine']) !== null && _newline$broadbandLin !== void 0 ? _newline$broadbandLin : '', ">\n  </li>\n  "); // 计划发展IMS数

  var planIMSNumber = "\n  <li class=\"border-bottom\">\n  <label class=\"label\">\u8BA1\u5212\u53D1\u5C55IMS\u6570</label>\n  <input class=\"input\" type=\"text\" placeholder=\"\u9009\u586B\" value=".concat((_newline$imsLine = newline['imsLine']) !== null && _newline$imsLine !== void 0 ? _newline$imsLine : '', ">\n  </li>\n  "); // 覆盖户数

  var coverNumber = "\n  <li class=\"border-bottom\">\n  <label class=\"label\">\u8986\u76D6\u6237\u6570</label>\n  <input class=\"input\" type=\"text\" placeholder=\"\u5FC5\u586B\" value=".concat((_newline$coverNum = newline['coverNum']) !== null && _newline$coverNum !== void 0 ? _newline$coverNum : '', ">\n  </li>\n  "); // 接入模式2 putMode

  var accessMode2 = "\n  <li class=\"border-bottom\">\n  <label class=\"label\">\u63A5\u5165\u6A21\u5F0F</label>\n  <select id=\"\" class=\"select\">\n    <option value=\"FTTB\" ".concat(newline['putMode'] === "FTTB" ? 'selected' : '', ">FTTB</option>\n    <option value=\"FTTH\" ").concat(newline['putMode'] === "FTTH" ? 'selected' : '', ">FTTH</option>\n  </select>\n  </li>\n  "); // 客户地址

  var customerAddress = "\n  <li class=\"border-bottom\">\n  <label class=\"label\">\u5BA2\u6237\u5730\u5740</label>\n  <input class=\"input\" type=\"text\" placeholder=\"\u5FC5\u586B\" value=".concat((_newline$clientAddr = newline['clientAddr']) !== null && _newline$clientAddr !== void 0 ? _newline$clientAddr : '', ">\n  </li>\n  "); // 提交按钮

  var submitBtn = "\n  <div class=\"submit\">\n    <button>\u63D0\u4EA4</button>\n  </div>\n  ";

  switch (index) {
    // 互联网
    case 0:
      str = "\n      <ul class=\"internet\">\n      ".concat(workOrderName, "\n      ").concat(isProject, "\n      ").concat(projectName, "\n      ").concat(areaName, "\n      ").concat(designCompany, "\n      ").concat(customerSplitBar, "\n      ").concat(customerName, "\n      ").concat(customerTel, "\n      ").concat(customerManager, "\n      ").concat(customerManagerTel, "\n      ").concat(isContract, "\n      ").concat(contractMoney, "\n      ").concat(contractYear, "\n      ").concat(groupSplitBar, "\n      ").concat(groupName, "\n      ").concat(groupCode, "\n      ").concat(groupLevel, "\n      ").concat(groupAddress, "\n      ").concat(busSupport, "\n      ").concat(remarks, "\n      </ul>\n      ");
      break;
    //  语音电路

    case 1:
      str = "\n      <ul class=\"voice\">\n      ".concat(workOrderName, "\n      ").concat(isProject, "\n      ").concat(projectName, "\n      ").concat(areaName, "\n      ").concat(designCompany, "\n      ").concat(customerSplitBar, "\n      ").concat(customerManager, "\n      ").concat(customerManagerTel, "\n      ").concat(isContract, "\n      ").concat(contractMoney, "\n      ").concat(contractYear, "\n      ").concat(groupSplitBar, "\n      ").concat(groupName, "\n      ").concat(groupCode, "\n      ").concat(groupLevel, "\n      ").concat(groupAddress, "\n      ").concat(busSupport, "\n      ").concat(busBroadband, "\n      ").concat(ZSplitBar, "\n      ").concat(accessMode, "\n      ").concat(ZAddress, "\n      ").concat(ZContactsMan, "\n      ").concat(AContactsInfo, "\n      ").concat(ASplitBar, "\n      ").concat(AAddress, "\n      ").concat(AContactsMan, "\n      ").concat(AContactsInfo, "\n      ").concat(remarks, "\n      </ul>\n      ");
      break;
    //  互联网+IMS

    case 2:
      str = "\n        <ul class=\"internetIMS\">\n        ".concat(workOrderName, "\n        ").concat(isProject, "\n        ").concat(projectName, "\n        ").concat(areaName, "\n        ").concat(designCompany, "\n        ").concat(customerSplitBar, "\n        ").concat(customerName, "\n        ").concat(customerTel, "\n        ").concat(customerManager, "\n        ").concat(customerManagerTel, "\n        ").concat(isContract, "\n        ").concat(contractMoney, "\n        ").concat(contractYear, "\n        ").concat(groupSplitBar, "\n        ").concat(groupName, "\n        ").concat(groupCode, "\n        ").concat(groupLevel, "\n        ").concat(groupAddress, "\n        ").concat(busSupport, "\n        ").concat(busBroadband, "\n        ").concat(IMSNumber, "\n        ").concat(remarks, "\n        </ul>\n        ");
      break;
    //  IMS    

    case 3:
      str = "\n        <ul class=\"IMS\">\n        ".concat(workOrderName, "\n        ").concat(isProject, "\n        ").concat(projectName, "\n        ").concat(areaName, "\n        ").concat(designCompany, "\n        ").concat(customerSplitBar, "\n        ").concat(customerName, "\n        ").concat(customerTel, "\n        ").concat(customerManager, "\n        ").concat(customerManagerTel, "\n        ").concat(isContract, "\n        ").concat(contractMoney, "\n        ").concat(contractYear, "\n        ").concat(groupSplitBar, "\n        ").concat(groupName, "\n        ").concat(groupCode, "\n        ").concat(groupLevel, "\n        ").concat(groupAddress, "\n        ").concat(IMSNumber, "\n        ").concat(remarks, "\n        </ul>\n        ");
      break;
    // 预覆盖 

    case 4:
      str = "\n        <ul class=\"recapping\">\n        ".concat(workOrderName, "\n        ").concat(isProject, "\n        ").concat(projectName, "\n        ").concat(areaName, "\n        ").concat(designCompany, "\n        ").concat(customerSplitBar, "\n        ").concat(customerManager, "\n        ").concat(customerManagerTel, "\n        ").concat(isContract, "\n        ").concat(contractMoney, "\n        ").concat(contractYear, "\n        ").concat(bearingMode, "\n        ").concat(accessMode, "\n        ").concat(ZSplitBar, "\n        ").concat(ZAddress, "\n        ").concat(ZContactsMan, "\n        ").concat(AContactsInfo, "\n        ").concat(ASplitBar, "\n        ").concat(AAddress, "\n        ").concat(AContactsMan, "\n        ").concat(AContactsInfo, "\n        ").concat(propertySpitBar, "\n        ").concat(propertyAddress, "\n        ").concat(propertyType, "\n        ").concat(propertyScene, "\n        ").concat(propertyFloors, "\n        ").concat(Statistics, "\n        ").concat(totalHouse, "\n        ").concat(groupNumber, "\n        ").concat(governmentNumber, "\n        ").concat(internetNumber, "\n        ").concat(dataNumber, "\n        ").concat(smallBroadband, "\n        ").concat(planIMSNumber, "\n        ").concat(remarks, "\n        </ul>\n        ");
      break;
    // 企业宽带

    default:
      str = "\n        <ul class=\"co-broadband\">\n        ".concat(workOrderName, "\n        ").concat(isProject, "\n        ").concat(projectName, "\n        ").concat(areaName, "\n        ").concat(designCompany, "\n        ").concat(customerSplitBar, "\n        ").concat(customerName, "\n        ").concat(customerTel, "\n        ").concat(customerManager, "\n        ").concat(customerManagerTel, "\n        ").concat(isContract, "\n        ").concat(contractMoney, "\n        ").concat(contractYear, "\n        ").concat(coverNumber, "\n        ").concat(accessMode2, "\n        ").concat(customerAddress, "\n        ").concat(remarks, "\n        </ul>\n        ");
  }

  slot.innerHTML = str + submitBtn; // 添加按钮并插入元素
  // 将html为数组转为数组并循环添加selected属性

  Array.from(type).forEach(function (item, i) {
    if (i === index) {
      item.setAttribute("selected", "true");
    }
  }); // 设置input textarea select 为disabled ,  隐藏button 

  if (disabled) {
    $('.submit').hide();
    Array.from(inputHtml).forEach(function (item) {
      item.setAttribute("disabled", "true");
    });
    Array.from(selectHtml).forEach(function (item) {
      item.setAttribute("disabled", "true");
    });
    Array.from(textArea).forEach(function (item) {
      item.setAttribute("disabled", "true");
    });
  }
}