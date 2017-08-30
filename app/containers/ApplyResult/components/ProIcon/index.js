import React, { Component } from "react"
import "./style.less"
import ERROR from './images/apply1.png'
import PROGRESS from './images/apply2.png'
import SUCCESS from './images/apply3.png'

class ProIcon extends Component{
  constructor(props) {
    super(props);
    this.state = {};
    this.iconImgArr = {
      "icon1":ERROR,"icon2":PROGRESS,"icon3":SUCCESS,
    }
    this.iconImg = this.iconImgArr.icon3;
    
  }

  static defaultProps = {
    msg:"初审"
  }

  render() {
    const props = this.props;
    const { progress } = this.props;
    const { showLeftLine,showRightLine,imgType } = progress;
    let classLeftNone = showLeftLine ? "" :"none";
    let classRightNone = showRightLine ? "" :"none";
    this.iconImg = this.iconImgArr["icon"+imgType] || this.iconImgArr.icon3
    let iconJSX = null;
    if(imgType !== 0){
      iconJSX = (
        <div className="pro-icon-contain">
          <div className={"pro-icon-line"+" icon"+imgType+" "+classLeftNone}></div>
          <img src={ this.iconImg } />  
          <div className={"pro-icon-line"+" icon"+imgType+" "+classRightNone}></div>
        </div>
      )
    }else{
      iconJSX = (
        <div className="pro-icon-contain">
          <div className={"pro-icon-line"+" icon"+imgType+" "+classLeftNone}></div>
          <div className="pro-icon-gg-contain">
            <div className="pro-icon-gg"></div>  
          </div>
          <div className={"pro-icon-line"+" icon"+imgType+" "+classRightNone}></div>
        </div>
      )
    }
    return(
      <div className="pro-icon">
        <div className="pro-icon-msg">{ props.msg }</div>
        {iconJSX}
      </div>
    )
  }
}

export default ProIcon