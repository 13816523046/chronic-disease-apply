import React, { Component } from 'react'

const TypeButton = ({handler, text, isActive}) => {
  if (isActive) {
    return <span className={'active'} onClick={handler}>{text}</span>
  } else {
    return <span onClick={handler}>{text}</span>
  }
}
export default TypeButton
