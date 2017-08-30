import React, { Component } from 'react'
import { Connect } from './connect'
import OstHeader from '../../components/OstHeader'
import OstBtn from './components/OstBtn/index.js'
import OstProIcon from './components/OstProIcon/index.js'
import OstLi from './components/OstLi/index.js'
import './style.less'

/**
 * 容器组件 —— 慢病申请进度页
 */
class ApplyResult extends Component{

  constructor(props) {
    super(props);
    this.state = {};
    this.header = {
      title: '慢病资格申请',
      back: () => history.back(),
      option: {
        text: '',
        handler: () => {},
      },
    }
  }

  render() {
    const header = this.header;
    return(
      <div className="apply-result" >
        <OstHeader title={header.title} back={header.back} option={header.option} />
        <div style={{height:"0.88rem"}}></div>
        <ApplyState />
        <ApplyProIcon />
        <ApplyError />
        <ApplyTip />
      </div>
    )
  }
}
/**
 * 组件 —— 慢病申请进度条
 */
class ApplyProIcon extends Component{

  constructor(props) {
    super(props);
    this.state = {};
    this.applyProgress = [
      { imgType:1,title:"初审",key:1},
      { imgType:1,title:"复审",key:2},
      { imgType:1,title:"递交材料",key:3},
      { imgType:1,title:"申请成功",key:4}
    ]
  }

  render() {
    return(
      <div className="apply-pro-icon">
        {
          this.applyProgress.map((progress)=>{
            return (
              <OstProIcon msg={progress.title} key={progress.key} />
            )
          })
        }
      </div>
    )
  }
}
/**
 * 组件 —— 慢病申请头部状态 
 */
class ApplyState extends Component{
  constructor(props) {
    super(props);
    this.state = {};
    this.ostBtn ={
      title:"去修改",
      handler:()=>{
        console.warn("傻孩子要去修改")
      }
    }
  }

  render(){
    const ostBtn = this.ostBtn;
    return (
      <div className="apply-state">
        <div className="text">
          <span>申请进度</span>
          <span className="state">初审失败</span>
        </div>
        <div className="btn">
          <OstBtn className="btn-self" title={ostBtn.title} handler={ostBtn.handler} />
        </div>
      </div>
    )
  }
}
/**
 * 组件 —— 慢病申请失败原因
 */
class ApplyError extends Component{
  constructor(props) {
    super(props);
    this.state={};
  }

  render() {
    return(
      <div className="apply-error">
        <div className="header">初审失败原因</div>
        <div className="contant">
          <OstLi className="ost-li" title="小子"/>
          <OstLi className="ost-li" title="大王"/>
          <OstLi className="ost-li" title="女王"/>
          <OstLi className="ost-li" />
        </div>
      </div>
    )
  }
}
/**
 * 组件 —— 慢病申请温馨提示
 */
class ApplyTip extends Component{
  constructor(props) {
    super(props);
    this.state={};
  }
  render() {
    return(
      <div className="apply-tip">
        <header>
          <div className="line"></div>
          <span>温馨提示</span>
          <div className="line"></div>
        </header>
        <div className="contant">
          <OstLi title="复审通过后，您可携带以下材料前往人社大厅办理" />
          <OstLi title="1.身份证正反面复印件" />
          <OstLi title="2.医疗保险慢性病鉴定审批表" />
          <OstLi title="3.彩色1寸证件照（一张）" />
          <OstLi title="4.社会保障卡复印件" />
          <OstLi title="5.诊断说明书" />
          <OstLi title="6.门诊病历复印件" />
          <OstLi title="7.住院病历复印件" />
        </div>
      </div>
    )
  }
}

export default Connect(ApplyResult)
