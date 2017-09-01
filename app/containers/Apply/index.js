import React, { Component } from 'react'
import { Connect } from './connect'
import OstHeader from '../../components/OstHeader'
import OstDrawer from '../OstDrawer'
import { TagList } from './components/TagList'
import { ApplyTags } from './components/ApplyTags'
import { Button, Icon } from 'antd-mobile'
import './style.less'


const tags = [
  {id: 0, text: 'OMG'},
  {id: 1, text: 'OMG'},
  {id: 2, text: 'OMG'},
  {id: 3, text: 'OMG'},
  {id: 4, text: 'OMG'},
  {id: 5, text: 'OMG'},
  {id: 6, text: 'OMG'},
]
const applyTags = [
  {id: 0, text: 'OMG'},
  {id: 1, text: 'OMG'},
  {id: 2, text: 'OMG'},
  {id: 3, text: 'OMG'},
  {id: 4, text: 'OMG'},
  {id: 1, text: 'OMG'},
  {id: 2, text: 'OMG'},
  {id: 3, text: 'OMG'},
  {id: 4, text: 'OMG'},
  {id: 1, text: 'OMG'},
  {id: 2, text: 'OMG'},
  {id: 3, text: 'OMG'},
  {id: 4, text: 'OMG'},
  {id: 1, text: 'OMG'},
  {id: 2, text: 'OMG'},
  {id: 3, text: 'OMG'},
  {id: 4, text: 'OMG'},
]

class Apply extends Component {

  static defaultProps = {
    header: {
      title: '慢病资格申请',
      back: () => {
        console.log(this);
        // history.back()
      },
      option: {
        text: '',
        handler: () => {},
      },
    }
  }

  constructor(props) {
    super(props)

    this.deleteTagHandler = this.deleteTagHandler.bind(this)
  }

  deleteTagHandler(e) {
    console.log(e.target.id);
  }


  render() {

    const { header, router, Actions } = this.props
    return (
      <div className="main">
        <OstHeader
          title={header.title}
          back={() => {
              Actions.transRight()
              router.push('home')
            }
          }
          option={header.option}>
        </OstHeader>

        <div className="main-content">
          <div className="main-info">
            <div className="col1">已申请病种</div>

            <OstDrawer
              contentRef={'tags'}
              visibleHeight={'0.82'}
              {...this.props}>
              <ApplyTags tags={applyTags} />
            </OstDrawer>

          </div>

          <div className="main-context">
            <div className="title">申请新病种</div>

            <div className="select" onClick={()=> {
              Actions.transLeft()
              router.push('list')
              }}>从列表选择<Icon type="right"/>
            </div>

            <TagList tags={tags} handler={this.deleteTagHandler}/>

          </div>

        </div>

        <div className="main-btn">
          <Button onClick={() => {
            console.log('Request 并 跳转照片页');
            Actions.transLeft()
            router.push('photo')
            // router.push('list')
          }} className="btn">下一步</Button>
        </div>
      </div>
    )
  }

}

export default Connect(Apply)
