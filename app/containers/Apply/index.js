import React, { Component } from 'react'
import { Connect } from './connect'
import OstHeader from '../../components/OstHeader'
import './style.less'

class Apply extends Component {

  static defaultProps = {
    header: {
      title: '慢病资格申请',
      back: () => history.back(),
      option: {
        text: '',
        handler: () => {},
      },
    }
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { header, router } = this.props
    return (
      <div className="main">
        <OstHeader
          title={header.title}
          back={header.back}
          option={header.option}>
        </OstHeader>
        <div className="main-info">
          <div className="col1">已申请病种</div>
          <div className="col4">
            <span>乳腺增生</span>
            <span>肝硬化</span>
            <span>乳腺增生</span>
            <span>肝硬化</span>
            <span>乳腺增生</span>
            <span>肝硬化</span>
            <span>乳腺增生</span>
            <span>肝硬化</span>
            <span>乳腺增生</span>
            <span>肝硬化</span>
            <span>乳腺增生</span>
            <span>肝硬化</span>
            <span>乳腺增生</span>
            <span>肝硬化</span>
            <span>乳腺增生</span>
            <span>肝硬化</span>
            <span>乳腺增生</span>
            <span>肝硬化</span>
            <span>乳腺增生</span>
            <span>肝硬化</span>
          </div>
        </div>
      </div>
    )
  }

}

export default Connect(Apply)
