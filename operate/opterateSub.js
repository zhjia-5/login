const OperateSub = {
    /**
     * 
     * @param {*} state 当前状态 Number
     * @param {*} isfaston 是否快开 Number    是否快开 0否 1是 
     * @param {*} iscover 是否覆盖 Number  1预覆盖+装机 2非预覆盖
     * @param {*} trialcount 审核数 Number  会审次数 if(trialCount > 2){state = 5}
     * @returns 
     */
  nextState(state, isfaston,iscover,trialcount) {
    switch (state) {
      case 2: //设计
        let status =  $('input[name="designFlashOn"]:checked').val();//获取是否快开的值
        return  status === "1" ? 3 : 4; //1为快开  0 为非块开
      case 3: //快开
        return 10;
      case 4: //会审
        return trialcount >= 2 ? 5 : 4;
      case 6: //结束施工后，预覆盖（7）或者非预覆盖(10)
        return iscover === 1  ? 7 : 10;
      case 7: //工建系统工单推送
        return 8;
      case 8: //资源录入 
        return 9;
      case 9: //验收交维 
        return 10;
      case 10://CRM派单   快开-现场装机   非快开-起草人确认 
      console.log(isfaston);
        return isfaston === 1 ? 11 : 12;
    }
  },
  // 传入当前状态返回当前状态提交的url  currentState Number类型
  returnUrl(curentState){
    let url = 'http://192.168.31.248:8081/fcgagents/manager/newline/';
    switch (curentState) {
      case 2:
        return `${url}design.do`;//设计 
      case 3:
        return `${url}quick.do`;//快开
      case 4:
        return `${url}trial.do`;//会审
      case 5: 
        return `${url}distribute.do`;//派工
      case 6:
        return  `${url}build.do`;//施工
      case 7:
        return `${url}push.do`; //推送
      case 8:
        return `${url}resource.do`; //资源录入
      case 9:
        return `${url}check.do`;//验收交维
      case 10:
        return `${url}crm.do`;//CRM派单
      case 11:
        return `${url}live.do`;//现场装机
      case 12:
        return `${url}comfirm.do`;//起草人确认
    }
  },

  // 渲染下一步处理人
  renderNextPerson(arr) {
    let str = '';
    arr.forEach(item => {
      str += `
      <li>
        <div>${item.name}</div>
        <div>${item.mobile}</div>
        <div class="mask"  data-nextpersonid=${item.id} data-nextperson=${item.name}></div>
        </li>
      `;
    });
    $(".nextPerson .list").html(str)
  },
  // 渲染施工单位
  renderbuildComp(arr) {
    arr.forEach(item => {
      $(".buildComp .list").append(
        `<li>
        <div>${item.name}</div>
        <div>${item.personName}</div>
        <div class="mask" data-companyid=${item.id} data-companyname=${item.name} data-personmobile=${item.personMobile}  data-personname=${item.personName}></div>
      </li>
      `);

    });
  },
  // 监理单位渲染
  renderSupComp(arr) {
    arr.forEach(item => {
      $(".supervisionComp .list").append(
        `
        <li>
        <div>${item.name}</div>
        <div>${item.personName}</div>
        <div class="mask"  data-companyid=${item.id} data-companyname=${item.name} data-personmobile=${item.personMobile} data-personname=${item.personName}></div>
      </li>
        `);
    });
  },

  // 回填下一步处理人
  nextPersonFillback(e) {
    $('#nowId').val(+e.target.dataset.nextpersonid);
    $('#nowName').val(e.target.dataset.nextperson);
    $('#showNextPerson').val(e.target.dataset.nextperson);
  },
  // 回填施工单位
  buildCompFillback(e) {
    $('#companyId').val(+e.target.dataset.companyid);
    $('#companyName').val(e.target.dataset.companyname);
    $('#companyMobile').val(e.target.dataset.personmobile);
    $('#showBuildName').val(e.target.dataset.companyname);
  },
  // 回填监理单位
  supCompFillback(e) {
    $('#supervisionComId').val(+e.target.dataset.companyid);
    $('#supervisionComName').val(e.target.dataset.companyname);
    $('#supervisionComMobile').val(e.target.dataset.personmobile);
    $('#showSvgName').val(e.target.dataset.companyname);
  },

  // 清空下一步处理人表单值
  reSetNextPerson(){
    $("#nowId").val('');
    $("#nowName").val('');
    $("#nowMobile").val('');
    $("#showNextPerson").val('');
  }
}