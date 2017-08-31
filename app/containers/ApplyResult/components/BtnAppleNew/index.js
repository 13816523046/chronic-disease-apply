import React, { Component } from "react"
import "./style.less"
/**
 * Btn Stateless Component
 */
const BtnAppleNew = ({title, handler}) => {

  const clickHandler = () => {
    console.log("未绑定点击事件")
  }

  return (
  	<div className="btn-apple-new" onClick={ handler || clickHandler }>
  		{title || "申请新病种"}
  	</div>
  )
}

export default BtnAppleNew
