import React, { Component } from 'react'
import { Connect } from './connect'
import OstHeader from '../../components/OstHeader'
import './style.less'
import { Button, Icon } from 'antd-mobile'

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

        <div className="main-content">
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
            </div>
            <div className='i'></div>
          </div>

          <div className="main-context">
            <div className="title">申请新病种</div>

            <div className="select" onClick={()=> {
              router.push('list')
              }}>从列表选择<Icon type="right"/>
            </div>

            <div className="tags">
              <span>乳腺增生<i onClick={() => {
                console.log('sss');
              }}>x</i></span>
              <span>肝硬化<i>x</i></span>
              <span>乳腺增生<i>x</i></span>
              <span>肝硬化<i>x</i></span>
              <span>肝硬化<i>x</i></span>
              <span>肝硬化<i>x</i></span>
              <span>肝硬化<i>x</i></span>
            </div>
            
          </div>

        </div>

        <div className="main-btn">
          <Button onClick={() => { router.push('list')} } className="btn">下一步</Button>
        </div>
      </div>
    )
  }

}

export default Connect(Apply)
