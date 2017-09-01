import React, { Component } from 'react'
import { Connect } from './connect'
import { Button, Icon } from 'antd-mobile'
import './style.less'

class OstDrawer extends Component {

  constructor(props) {
    super(props)
    this.changeHeightHandler = this.changeHeightHandler.bind(this)
  }

  componentDidMount() {
    const { visibleHeight, contentRef, Actions, visibleFlag, drawerStyle } = this.props
    const contentHeight = this.refs[contentRef].clientHeight

    let isHide = contentHeight/100 > visibleHeight

    Actions.changeDrawerStyle(isHide,
      isHide ? {height: this.props.visibleHeight + 'rem', overflow: 'hidden'} : {}
    )

  }

  changeHeightHandler() {
    const { visibleHeight, Actions, visibleFlag, drawerStyle } = this.props

    let style = {height: visibleHeight + 'rem', overflow: 'hidden'}
    Actions.changeDrawerStyle(!visibleFlag, drawerStyle['height'] ? {} : style)
  }

  render() {
    const { visibleFlag, drawerStyle } = this.props

    return (
      <div>
        <div ref="tags" style={ drawerStyle } >
          {this.props.children}
        </div>
        <div className='ost-accordion' onClick={this.changeHeightHandler}>
            {
              visibleFlag ? <Icon type="down" /> : <Icon type="up" />
            }
        </div>

      </div>
    )
  }
}

export default Connect(OstDrawer)
