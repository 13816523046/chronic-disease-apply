import React, { Component } from 'react'
import { Connect } from './connect'
import OstHeader from '../../components/OstHeader'
import OstLoading from '../../components/OstLoading/index.js'
import Btn from './components/Btn/index.js'
import ProIcon from './components/ProIcon/index.js'
import Linew from './components/Linew/index.js'
import BtnAppleNew from './components/BtnAppleNew/index.js'
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
        text: '我的申请',
        handler: () => {
          const { Actions, router } = this.props
          Actions.transLeft();
          router.push('applyOnwer')
        },
      },
    }
    
  }

  componentDidMount() {
    const {Actions} = this.props;
    Actions.fetchPosts()
  }
  test=()=>{
    const {Actions} = this.props;
    Actions.Add_In_First_Instance()
  }
  toggleLoading = ()=>{
    const { requestReducer } = this.props;
    const { isFetching,val } = requestReducer;
    if(isFetching){
      this.loadingDom = (
        <OstLoading title="加载中" />
      )
    }else{
      this.loadingDom = null;
    }
  }
  render() {
    this.toggleLoading();
    const header = this.header;
    const {applyStateReducer} = this.props;
    const {title,showBtnApplyNew,showDomError,showDomTip,showDomApplied} = applyStateReducer
    let styleBtnApplyNew = showBtnApplyNew?"block":"none"
    return(
      <div className="apply-result" >
        <OstHeader title={header.title} back={header.back} color="-white" option={header.option} />
        <div style={{height:"0.88rem"}}></div>
        <ApplyState propsSelf={this.props} applyStateReducer={applyStateReducer} />
        <ApplyProIcon applyStateReducer={applyStateReducer} />
        <div className="flex-item">  
          <ApplyError showDomError={showDomError} />
          <Applied showDomApplied={showDomApplied} />
        </div>
        <ApplyTip showDomTip={showDomTip} Actions={this.props.Actions} />
        <div style={{display:styleBtnApplyNew}} onClick={this.test} >
          <BtnAppleNew  />
        </div>
        { this.loadingDom }
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
        const { Actions, router } = this.props.propsSelf
        Actions.transLeft();
        router.push('applyEdit');
      }
    }
  }

  render(){
    const btn = this.btn;
    const { applyStateReducer } = this.props;
    let { showBtnEdit } = applyStateReducer;
    let styleShow = showBtnEdit ? "flex" :"none"
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
  }

  render() {
    const { applyStateReducer } = this.props;
    const applyProgress = applyStateReducer.progress
    return(
      <div className="apply-pro-icon">
        {
          applyProgress.map((progress)=>{
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
    const { showDomError } = this.props;
    if(showDomError){
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
    }else{
      return(
        <div className="apply-error">
        </div>
      )
    }
  }
}

/**
 * 组件 —— 已申请病种
 */
class Applied extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { showDomApplied } = this.props;
    if(showDomApplied){
      return (
        <div className="applied">
          <div className="header">已申请病种</div>
          <div className="contant">
            <Linew className="ost-li" title="傻子"/>
            <Linew className="ost-li" title="笨蛋"/>
            <Linew className="ost-li" title="混子"/>
            <Linew className="ost-li" />
          </div>
        </div>
      )
    }else{
      return(
        <div className="applied"></div>
      )
    }
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
  test = (progress) => {
    const { Actions } = this.props
    switch(progress){
      case 1:
        Actions.Add_Final_Adoption()
        console.log("终审通过");return;
      case 2:
        Actions.Add_In_First_Instance()
        console.log("初审中");return;
      case 3:
        Actions.Add_In_Review()
        console.log("复审中");return;
      case 4:
        Actions.Add_Submit_Materials()
        console.log("递交材料");return;
      case 5:
        Actions.Add_Failure_Of_First_Instance()
        console.log("初审失败");return;
      case 6:
        Actions.Add_Failure_Of_In_Review()
        console.log("复审失败");return;
      default:
        console.log("没了，还点。。。")
    }
  }
  render() {
    const { showDomTip }=this.props;
    if(showDomTip){
      return(
        <div className="apply-tip">
          <header>
            <div className="line"></div>
            <span>温馨提示</span>
            <div className="line"></div>
          </header>
          <div className="contant" >
            <Linew className="ost-li" title="复审通过后，您可携带以下材料前往人社大厅办理" />
            <Linew className="ost-li" onClicks={this.test.bind(this,1)} title="1.身份证正反面复印件" />
            <Linew className="ost-li" onClicks={this.test.bind(this,2)} title="2.医疗保险慢性病鉴定审批表" />
            <Linew className="ost-li" onClicks={this.test.bind(this,3)} title="3.彩色1寸证件照（一张）" />
            <Linew className="ost-li" onClicks={this.test.bind(this,4)} title="4.社会保障卡复印件" />
            <Linew className="ost-li" onClicks={this.test.bind(this,5)} title="5.诊断说明书" />
            <Linew className="ost-li" onClicks={this.test.bind(this,6)} title="6.门诊病历复印件" />
            <Linew className="ost-li" onClicks={this.test.bind(this,7)} title="7.住院病历复印件" />
          </div>
        </div>
      )
    }else{
      return(
        <div className="apply-tip"></div>
      )
    }
    
  }
}

export default Connect(ApplyResult)
