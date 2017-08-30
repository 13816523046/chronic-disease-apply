import React, { Component } from 'react'
import { Connect } from './connect'
import OstHeader from '../../components/OstHeader'
import Btn from './components/Btn/index.js'
import ProIcon from './components/ProIcon/index.js'
import Linew from './components/Linew/index.js'
import './style.less'

import configureStore from '../../config/store.js';

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

  componentDidMount() {
    const { Actions } = this.props
    Actions.Add_Final_Adoption()
  }

  render() {
    const header = this.header;
    const {applyStateReducer} = this.props;
    const {title} = applyStateReducer
    return(
      <div className="apply-result" >
        <OstHeader title={header.title} back={header.back} option={header.option} />
        <div style={{height:"0.88rem"}}></div>
        <ApplyState applyStateReducer={applyStateReducer} />
        <ApplyProIcon />
        <ApplyError />
        <ApplyTip />
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
    this.state = { };
    this.btn ={
      title:"去修改",
      handler:()=>{
        console.warn("傻孩子要去修改")
      }
    }
  }

  render(){
    const btn = this.btn;
    let { applyStateReducer } = this.props;
    let { showBtnEdit } = applyStateReducer;
    let styleShow = showBtnEdit ? "static" :"none"
    return (
      <div className="apply-state">
        <div className="text">
          <span>申请进度</span>
          <span className="state">{applyStateReducer.title}</span>
        </div>
        <div className="btn" style={{display:styleShow}}>
          <Btn className="btn-self" title={btn.title} handler={btn.handler} />
        </div>
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
      { imgType:3,title:"初审",key:1,showLeftLine:false,showRightLine:true},
      { imgType:2,title:"复审",key:2,showLeftLine:true,showRightLine:true},
      { imgType:1,title:"递交材料",key:3,showLeftLine:true,showRightLine:true},
      { imgType:0,title:"申请成功",key:4,showLeftLine:true,showRightLine:false}
    ]
  }

  render() {
    return(
      <div className="apply-pro-icon">
        {
          this.applyProgress.map((progress)=>{
            return (
              <ProIcon msg={progress.title} progress={progress} key={progress.key} />
            )
          })
        }
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
          <Linew className="ost-li" type="1" title="小子"/>
          <Linew className="ost-li" type="1" title="大王"/>
          <Linew className="ost-li" type="1" title="女王"/>
          <Linew className="ost-li" type="1" />
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
          <Linew className="ost-li" title="复审通过后，您可携带以下材料前往人社大厅办理" />
          <Linew className="ost-li" title="1.身份证正反面复印件" />
          <Linew className="ost-li" title="2.医疗保险慢性病鉴定审批表" />
          <Linew className="ost-li" title="3.彩色1寸证件照（一张）" />
          <Linew className="ost-li" title="4.社会保障卡复印件" />
          <Linew className="ost-li" title="5.诊断说明书" />
          <Linew className="ost-li" title="6.门诊病历复印件" />
          <Linew className="ost-li" title="7.住院病历复印件" />
        </div>
      </div>
    )
  }
}

export default Connect(ApplyResult)
