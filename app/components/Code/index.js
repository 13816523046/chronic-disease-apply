import React, { Component } from 'react';
import './style.less';
import IMG_REFRESH from './images/ref.png';
import IMG_OK from './images/icon_ok.png';

export default class Code extends Component {
  state = {

  }

  constructor(props) {
    super(props)
    this.formDate = {};
  }

  componentWillMount() {

  }

  // render()调用后执行
  componentDidMount() {

  }
  handleChange = (event) => {
      this.formDate[event.target.name] = event.target.value;
  }
  rememberPass = (event) => {
      const circle = document.querySelector('.circle');
      const circleIcon = document.querySelector('.circle-icon');
      if(event.target.className == 'circle'){
          this.formDate.rememberPwd = true;
          circle.style.display = 'none';
          circleIcon.style.display = 'block';
      }else if(event.target.className == 'circle-icon'){
          circle.style.display = 'block';
          circleIcon.style.display = 'none';
          this.formDate.rememberPwd = false;
      }
  }
  render() {
        const imgBase = "data:image/png;base64,";
        let codeContainer = (
            <div className="code-container flex">
                <input type="text" name="code" placeholder="请输入验证码" className="code" onChange={this.handleChange}/>
                <div className="pic-box flex">
                    <img src={imgBase + this.props.formShowFlag.codeSrc} className='code-pic'/>
                    <img src={IMG_REFRESH} className="refresh" onClick={this.props.refresh}/>
                </div>
            </div>
        )
        let passwordContainer = (
            <div>
                <div className="password-container">
                    <input type="password" name="password" placeholder="请输入社保查询密码" className="password" onChange={this.handleChange}/>
                </div>
                <div className="point flex" onClick={this.rememberPass}>
                    <div className="circle"></div>
                    <img src={IMG_OK} className="circle-icon"/>
                    <p className="point-text">记住密码，无需再次输入</p>
                </div>
            </div>
        )
        if(this.props.formShowFlag.codeShow){
            codeContainer = codeContainer;
        }else{
            codeContainer = null;
        }
        if(this.props.formShowFlag.passwordShow){
            passwordContainer = passwordContainer;
        }else{
            passwordContainer = null;
        }
        if(this.props.formShowFlag.show){
            return (
            <div className="Code-main flex">
                <div className="content">
                    {codeContainer}
                    {passwordContainer}
                    <div className="now-refresh" onClick={this.props.nowRefresh.bind(this,this.formDate)}>立即刷新</div>
                    <div className="cancle" onClick={this.props.cancle}>取消</div>
                </div>
            </div>
            )
        }else{
            return (
                null
            )
        }


  }
}
