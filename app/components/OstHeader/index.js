import React, { Component } from 'react'
import './style.less'

/**
 * Header Stateless Component
 */
const OstHeader = ({title, back, option, color}) => {
  color = color || ''
  const backHandler = () => {
      history.back()
  }

  return <div className={"ost-header" + color}>
      <div className="ost-header-left" onClick={back || backHandler}>
        <i></i>
      </div>
      <div className="ost-header-center">
          {title}
      </div>
      <div className="ost-header-right">
          <p onClick={option && option.handler ? option.handler : () => {}}>{ option && option.text ? option.text : '' }</p>
      </div>
    </div>


}

export default OstHeader
