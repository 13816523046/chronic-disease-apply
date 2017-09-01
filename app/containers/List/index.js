import React, {Component} from 'react'
import OstHeader from '../../components/OstHeader'
import { Connect } from './connect'
import { Button, Icon } from 'antd-mobile'
import './style.less'

class List extends Component {

  static defaultProps = {
    header: {
      title: '慢病列表',
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
    const { header, router, Actions } = this.props
    return (
      <div className="main">
        <OstHeader
          title={header.title}
          back={() => {
            Actions.transRight()
            router.push('apply')
          }}
          option={header.option}
          color={'-white'}>
        </OstHeader>
        <div className="main-content">
          <div className="content-title">已选3项 还可选4项</div>
          <div className="tags content-tags">
            <span>肝硬化</span>
            <span>乳腺增生</span>
            <span>肝硬化</span>
            <span>肝硬化></span>
            <span>肝硬化</span>
            <span>肝硬化</span>
          </div>
          <div className="list">
            <div><span>冠心病</span><i className="right"></i></div>
            <div><span>冠心病</span><i className="right"></i></div>
            <div><span>冠心病</span><i className="right"></i></div>
            <div><span className="disable">冠心病</span></div>
            <div><span>冠心病</span><i className="blank"></i></div>
            <div><span>冠心病</span><i className="right"></i></div>
            <div><span>冠心病</span><i className="blank"></i></div>
            <div><span>冠心病</span><i className="right"></i></div>
            <div><span>冠心病</span><i className="right"></i></div>
            <div><span>冠心病</span><i className="blank"></i></div>
            <div><span>冠心病</span><i className="blank"></i></div>
            <div><span>冠心病</span><i className="right"></i></div>
            <div><span>冠心病</span><i className="right"></i></div>
            <div><span>冠心病</span><i className="blank"></i></div>
          </div>
        </div>
        <div className="main-btn">
          <Button onClick={() => {} } className="btn">完成</Button>
        </div>
      </div>
    )
  }
}

export default Connect(List)
