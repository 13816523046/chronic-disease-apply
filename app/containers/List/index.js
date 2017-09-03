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
    this.selectDiseaseHandler = this.selectDiseaseHandler.bind(this)
  }

  selectDiseaseHandler(currDi) {
    if (currDi.isApplied) return

    const { Actions, applyReducer } = this.props
    const { diseases, selectedDi } = applyReducer
    Actions.setSelectedDiseases(currDi, selectedDi, diseases)
  }

  render() {
    console.log(this.props);
    const { header, router, Actions, applyReducer } = this.props
    const { diseases, selectedDi, selectedNo } = applyReducer
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
          <div className="content-title">已选{selectedNo}项 还可选{7 - selectedNo}项</div>
          <div className="tags content-tags">
          {
            selectedDi.length > 0 && selectedDi.map((s, i) => {
              return <span key={i}>{s.text}</span>
            })
          }
          </div>
          <div className="list">
            {
              diseases.length > 0 && diseases.map((d, i) => {
                return <div key={i} onClick={this.selectDiseaseHandler.bind(this, d)}>
                  <span className={d.isApplied ? 'disable' : ''}>
                    {d.text}
                  </span>
                  {
                    !d.isApplied && <i
                      className={d.isSelected ? 'right' : 'blank'}></i>
                  }
                </div>
              })
            }
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
