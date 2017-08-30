import React, { Component } from "react"
import "./style.less"
/**
 * Btn Stateless Component
 */
const Btn = ({title, handler}) => {

  const clickHandler = () => {
    console.log("未绑定点击事件")
  }

  return (
  	<div className="ost-btn" onClick={ handler || clickHandler }>
  		{title}
  	</div>
  )
}

export default Btn
