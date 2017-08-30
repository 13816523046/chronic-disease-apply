import React, { Component } from "react"
import "./style.less"
/**
 * Btn Stateless Component
 */
const Linew = ({title, type}) => {
	let typeIcon = (<div className="type"></div>);
	if(!type){
		typeIcon = null;
	}
  return (
  	<div className="ost-li">
  		{ typeIcon }
  		{title || "是不是傻，没数据显示个鬼啊"}
  	</div>
  )
}

export default Linew
