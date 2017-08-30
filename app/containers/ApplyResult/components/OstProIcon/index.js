import React, { Component } from "react"
import "./style.less"
import ERROR from './images/apply1.png'

class OstProIcon extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  static defaultProps = {
    iconImg:ERROR,
    msg:"初审"
  }

  render() {
    const props = this.props;
    return(
      <div className="pro-icon">
        <div className="pro-icon-msg">{ props.msg }</div>
        <div className="pro-icon-contain">
          <div className="pro-icon-line"></div>
          <img src={ props.iconImg } />  
          <div className="pro-icon-line"></div>
        </div>
      </div>
    )
  }
}

export default OstProIcon