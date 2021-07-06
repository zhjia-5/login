/**
 * name 工单名
 *  state 所在状态
 *  id  工单id
 */
const render = (name, id, state,iscover) => {
  const slot = document.getElementById('slot');
  let str = ``;
  // 工单名  name
  const workOrderName = `
  <li class="border-bottom">
  <label class="label">工单名</label>
  <input class="input" type="hidden" name="id" value="${id}">
  <input class="input" type="text" name="name" readonly value="${name}">
</li>
    `;
  // 开通方式  designInceptType
  const designInceptType = `
  <li class="border-bottom">
    <label class="label" for="designInceptType">开通方式</label>
    <select name="designInceptType" id="designInceptType" class="select">
      <option value="1">预覆盖+装机</option>
      <option value="2">非预覆盖</option>
    </select>
  </li>
    `;
  // 接入模式
  const degignPutType = `
  <li class="border-bottom">
  <label class="label" for="degignPutType">接入模式</label>
  <select name="degignPutType" id="degignPutType" class="select">
    <option value="1">PTN</option>
    <option value="2">GPON</option>
    <option value="3">SDH</option>
    <option value="4">FTTH</option>
    <option value="5">FTTB</option>
  </select>
</li>
  `;
  // 传输接入方式  快开
  const quickPutType = `
  <li class="border-bottom">
  <label class="label" for="quickPutType">传输接入方式</label>
  <select name="quickPutType" id="quickPutType" class="select">
    <option value="1">PTN</option>
    <option value="2">PON</option>
    <option value="3">SDH</option>
  </select>
</li>`;
  //  是否快开 
  const designFlashOn = `
    <li class="border-bottom">
    <label class="label" for="designFlashOn">是否快开</label>
    <div class="input">
      <input class="margin-right5" type="radio" id="designFlashOn" value="1" name="designFlashOn"><span
        class="margin-right10">是</span>
      <input class="margin-right5" type="radio" id="designFlashNot" value='0' name="designFlashOn" checked><span>否</span>
    </div>
  </li>`;

  // 下步处理人
  let nextPerson = ``;
  if(state === 10 && iscover === 2) {//状态为（CRM:10）并且非预覆盖无需显示下步处理人
   return ;
  }else{
    nextPerson = `
    <li class="border-bottom" id="nextPersonLi">
    <label class="label">下一步处理人</label>
    <input type="hidden" id="nowId" name="nowId">
    <input type="hidden" id="nowName" name="nowName">
    <input type="hidden" id="nowMobile" name="nowMobile">
    <input class="input"  id="showNextPerson" type="text" readonly>
    <button class="select-btn nextPerson-btn" type="button">选 择</button>
    </li>`;
  }



  // 设计方案名称
  const designPlan = `
  <li class="border-bottom">
  <label class="label" for="designPlan">设计方案名称</label>
  <input class="input" type="text" id="designPlan" name="designPlan">
</li>
  `;

  // 光缆长度(千米)
  const designCable = `
  <li class="border-bottom">
  <label class="label" for="designCable">光缆长度(千米)</label>
  <input class="input" type="number" id="designCable" name="designCable" value="0">
</li>
  `;
  // 设备数
  const designEqpt = `
  <li class="border-bottom">
  <label class="label" for="designEqpt">设备数</label>
  <input class="input" type="number" id="designEqpt" name="designEqpt" value="0">
</li>
  `;

  // 熔纤数   设计状态的
  const designSplice = `
  <li class="border-bottom">
  <label class="label" for="designSplice">熔纤数</label>
  <input class="input" type="number" id="designSplice" name="designSplice" value="0">
</li>
  `;

  // 预估投资费用(万)
  const designPrice = `
<li class="border-bottom">
<label class="label" for="designPrice">预估投资费用(万)</label>
<input class="input" type="number" id="designPrice" name="designPrice" value="0">
</li>
`;

  // 审核意见  name 和是否结束施工相同
  const grantSign = `
<li class="border-bottom">
<label class="label" for="grantSign">审核意见</label>
<select name="grantSign" id="grantSign" class="select">
  <option value="1">通过</option>
  <option value="0">不通过</option>
</select>
</li>
`;
  // 施工单位
  const constructionUnit = `
<li class="border-bottom">
<label class="label">施工单位</label>
<input type="hidden" id="companyId" name="companyId">
<input type="hidden" id="companyName" name="companyName">
<input type="hidden" id="companyMobile" name="companyMobile">
<input type="hidden" id="companyEmail" name="companyEmail">
<input class="input" id="showBuildName" type="text" value="未选择" readonly>
<button class="select-btn buildComp-btn" type="button">选 择</button>
</li>
`;
  // 监理单位
  const supervisionCom = `
<li class="border-bottom">
<label class="label">监理单位</label>
<input type="hidden" id="supervisionComId" name="supervisionComId">
<input type="hidden" id="supervisionComName" name="supervisionComName">
<input type="hidden" id="supervisionComMobile" name="supervisionComMobile">
<input type="hidden" id="supervisionComEmail" name="companyEmail">
<input class="input" id="showSvgName" type="text" value="未选择" readonly>
<button class="select-btn supComp-btn" type="button">选 择</button>
</li>
`;
  // 进场时间
  const distributeTime = `
<li class="border-bottom">
<label class="label" for="distributeTime">进场时间</label>
<input class="input" type="date" id="distributeTime" name="distributeTime">
</li>
`;
  // 施工天数
  const distributeLength = `
<li class="border-bottom">
<label class="label" for="distributeLength">施工天数</label>
<input class="input" type="number" id="distributeLength" name="distributeLength">
</li>
`;
  // 线路铺设(米)	
  const newlineBuildbuildCable = `
<li class="border-bottom">
<label class="label">线路铺设(米)</label>
<input class="input" type="number" name="newlineBuild.buildCable">
</li>
`;
  // 设备安装数
  const newlineBuildbuildEqpt = `
<li class="border-bottom">
<label class="label">设备安装数</label>
<input class="input" type="number" name="newlineBuild.buildEqpt">
</li>
`;
  // 熔纤数 --- 施工状态的
  const newlineBuildbuildSplice = `
<li class="border-bottom">
<label class="label">熔纤数</label>
<input class="input" type="number" name="newlineBuild.buildSplice">
</li>
`;
  // 跳纤数
  const newlineBuildbuildJump = `
<li class="border-bottom">
<label class="label">跳纤数</label>
<input class="input" type="number" name="newlineBuild.buildJump">
</li>
`;
  // 施工时间
  const newlineBuildinsertTime = `
<li class="border-bottom">
<label class="label" for="newlineBuild.insertTime">施工时间</label>
<input class="input" type="date" id="newlineBuild.insertTime" name="newlineBuild.insertTime">
</li>
`;
  // 是否结束施工
  const isEnd = `
<li class="border-bottom" id="isEndLi">
<label class="label" for="grantSign">是否结束施工</label>
<div class="input">
  <input class="margin-right5" type="radio" value="1" name="grantSign" checked><span
    class="margin-right10">是</span>
  <input class="margin-right5" type="radio" value='0' name="grantSign"><span>否</span>
</div>
</li>
`;
  // 推送名称
  const pushName = `
<li class="border-bottom">
<label class="label">工单推送名称</label>
<input class="input" type="text" name="pushName">
</li>`;
  // 资源名称
  const resourceName = `
<li class="border-bottom">
<label class="label">资源名称</label>
<input class="input" type="text" name="resourceName">
</li>
`;
  // 账号
  const resourceUsername = `
<li class="border-bottom">
<label class="label">账号</label>
<input class="input" type="text" name="resourceUsername">
</li>`;
  // 密码
  const resourcePassword = `
<li class="border-bottom">
<label class="label">密码</label>
<input class="input" type="text" name="resourcePassword">
</li>`;
  // 验收交维 + 分割栏
  const checkSituation = `
<li class="split-bar">验收交维&nbsp;<i class="iconfont icon-yanshouguanli"></i></li>
<li class="border-bottom">
  <textarea class="textarea" cols="30" rows="2" name="checkSituation"></textarea>
</li>`;
  // 验收遗留问题 + 分割栏
  const checkQuestion = `
<li class="split-bar">验收遗留问题&nbsp;<i class="iconfont icon-wentiquestions1"></i></li>
<li class="border-bottom">
  <textarea class="textarea" cols="30" rows="2" name="checkQuestion"></textarea>
</li>`;
  // 验收整改 + 分割栏
  const checkCorr = `
<li class="split-bar">验收整改&nbsp;<i class="iconfont icon-zhenggaicuoshi"></i></li>
<li class="border-bottom">
  <textarea class="textarea" cols="30" rows="2" name="checkCorr"></textarea>
</li>`;

  // 报单号
  const crmName = `
<li class="border-bottom">
<label class="label">报单号</label>
<input class="input" type="text" name="crmName">
</li>
`;
  // POS口
  const livePos = `
<li class="border-bottom">
<label class="label">POS口</label>
<input class="input" type="text" name="livePos">
</li>
`;
  // ONU网元名称
  const liveOnu = `
<li class="border-bottom">
<label class="label">ONU网元名称</label>
<input class="input" type="text" name="liveOnu">
</li>
`;
  // ONU网元SN码
  const liveOnuSn = `
<li class="border-bottom">
<label class="label">ONU网元SN码</label>
<input class="input" type="text" name="liveOnuSn">
</li>
`;
  // 数据VLAN
  const liveVlan = `
<li class="border-bottom">
<label class="label">数据VLAN</label>
<input class="input" type="text" name="liveVlan">
</li>
`;
  // 专线IP
  const liveIP = `
<li class="border-bottom">
<label class="label">专线IP</label>
<input class="input" type="text" name="liveIP">
</li>
`;
  //  备注信息 + 分割栏
  const remark = `
<li class="split-bar">备注信息&nbsp;<i class="iconfont icon-beizhu1"></i></li>
<li class="border-bottom"><textarea class="textarea" cols="30" rows="5" name="remark" placeholder='请输入备注信息'></textarea></li>
`;
  switch (state) {
    case 2: // 2设计
      str = `
      ${workOrderName}
      ${designInceptType}
      ${degignPutType}
      ${designFlashOn}
      ${nextPerson}
      ${designPlan}
      ${designCable}
      ${designEqpt}
      ${designSplice}
      ${designPrice}
      ${remark}
        `
      break;

    case 3: //  3快开 
      str = `
      ${workOrderName}
      ${quickPutType}
      ${nextPerson}
      ${remark}
          `;
      break;

    case 4: //  4会审
      str = `
      ${workOrderName}
      ${grantSign}
      ${nextPerson}
      ${remark}`;
      break;

    case 5: // 5派工
      str = `
      ${workOrderName}
      ${constructionUnit}
      ${supervisionCom}
      ${distributeTime}
      ${distributeLength}
      ${remark}
      `;
      break;

    case 6: //  6施工 
      str = `
      ${workOrderName}
      ${newlineBuildbuildCable}
      ${newlineBuildbuildEqpt}
      ${newlineBuildbuildSplice}
      ${newlineBuildbuildJump}
      ${newlineBuildinsertTime}
      ${isEnd}
      ${nextPerson}
      ${remark}
       `;
      break;

    case 7: // 7工建系统工单推送 
      str = `
      ${workOrderName}
      ${pushName}
      ${nextPerson}
      ${remark}
        `;
      break;

    case 8: // 8资源录入 
      str = `
      ${workOrderName}
      ${resourceName}
      ${resourceUsername}
      ${resourcePassword}
      ${nextPerson}
      ${remark}
        `;
      break;

    case 9: // 9验收交维 
      str = `
      ${workOrderName}
      ${checkSituation}
      ${checkQuestion}
      ${checkCorr}
      ${nextPerson}
      ${remark}`;
      break;

    case 10: // 10CRM派单 
      str = `
      ${workOrderName}
      ${crmName}
      ${nextPerson}
      ${remark}`;
      break;

    case 11: // 11现场装机
      str = `
      ${workOrderName}
      ${livePos}
      ${liveOnu}
      ${liveOnuSn}
      ${liveVlan}
      ${liveIP}
      ${remark}
       `;
      break;

    case 12: //  12起草人确认
      str = `
      ${workOrderName}
      ${remark}`;
      break;
  }
  slot.innerHTML = str; //插入元素

}