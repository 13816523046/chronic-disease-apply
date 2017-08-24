import React, { Component } from 'react'
import { Connect } from './connect'
import OstHeader from '../../components/OstHeader'

class Home extends Component {

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
    const { header } = this.props
    console.log('ssssss')
    return (
      <div className="main">
        <OstHeader
          title={header.title}
          back={header.back}
          option={header.option}>
        </OstHeader>
      </div>
    )
  }
}

export default Connect(Home)
