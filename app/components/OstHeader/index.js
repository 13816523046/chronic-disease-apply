import React, { Component } from 'react'
import './style.less'

/**
 * Header Stateless Component
 */
const OstHeader = ({title, back, option}) => {

  const backHandler = () => {
      history.back()
  }

  return (

    <div className="ost-header">
      <div className="ost-header-left" onClick={back || backHandler}></div>
      <div className="ost-header-center">
          {title}
      </div>
      <div>
          <p className="ost-header-right" onClick={option && option.handler ? option.handler : () => {}}>{ option && option.text ? option.text : '' }</p>
      </div>
    </div>
  )

}

export default OstHeader
