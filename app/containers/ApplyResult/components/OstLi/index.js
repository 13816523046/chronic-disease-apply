import React, { Component } from "react"
import "./style.less"
/**
 * Btn Stateless Component
 */
const OstLi = ({title, type}) => {

  return (
  	<div className="ost-li">
  		<div className="type"></div>{title || "是不是傻，没数据显示个鬼啊"}
  	</div>
  )
}

export default OstLi
