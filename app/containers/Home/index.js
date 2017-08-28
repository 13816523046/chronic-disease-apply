import React, { Component } from 'react'
import { Connect } from './connect'
import OstHeader from '../../components/OstHeader'
import './style.less'
import { Button, Picker, List, TextareaItem, InputItem } from 'antd-mobile'

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

  state = {
    data: [{
      label: '请选择',
      value: '',
    },{
      label: 'key1',
      value: 'val1',
    },{
      label: 'key2',
      value: 'val2',
    }],
    cols: 1, // 1列
    pickerValue: [],
    asyncValue: [],
  }

  constructor(props) {
    super(props)

    this.onPickerChange = this.onPickerChange.bind(this)
  }

  onPickerChange(val) {
    console.log(val);
    this.setState({
      asyncValue: val
    })


  }

  render() {
    const { header } = this.props

    return (
      <div className="main">
        <OstHeader
          title={header.title}
          back={header.back}
          option={header.option}>
        </OstHeader>
        <div className="main-info">
          <div className="col1">参保人信息</div>
          <div className="col2"><span className="left">王小明</span><span className="right">男&nbsp;&nbsp;18岁</span></div>
          <div className="col3"><span className="left">身份证号</span><span className="right">370**** **** **** *27</span></div>
        </div>
        <div className="main-form">
          <List style={{ backgroundColor: 'white' }} className="picker-list">
            <div className="form-item-single">
              <Picker
                data={this.state.data}
                cols={this.state.cols}
                value={this.state.asyncValue}
                onPickerChange={this.onPickerChange}
              >
                <List.Item arrow="down" onClick={()=>{}}>所在地区</List.Item>
              </Picker>
            </div>
            <div className="form-item-single">
              <Picker
                data={this.state.data}
                cols={this.state.cols}
                value={this.state.asyncValue}
                onPickerChange={this.onPickerChange}
              >
                <List.Item arrow="down" onClick={()=>{}}>所在街道</List.Item>
              </Picker>
            </div>


            <div className="form-item-more">
              <div className="form-item">详细地址</div>
              <TextareaItem
                className="form-text"
                rows={3}
                placeholder="请输入"
                maxLength={100}
                onChange={(val) => {console.log(val);}}
             />
             <span className="form-item-text">100字</span>
            </div>
            <div className="form-item-single">
              <InputItem
                className="form-input"
                type="phone"
                maxLength={11}
                placeholder="请输入"
              >联系电话</InputItem>
            </div>
            <div className="form-check">
              <div className="form-check-name">申报类型</div>
              <div className="form-check-box"><span id={0}>个人</span><span className={'active'} id={0}>单位</span></div>
            </div>

            <div className="form-item">单位名称</div>
            <TextareaItem
              className="form-text"
              rows={5}
              placeholder="请输入"
              onChange={(val) => {console.log(val);}}
           />
          </List>
        </div>

        <div className="main-btn">
          <Button className="btn">下一步</Button>
        </div>
      </div>
    )
  }
}

export default Connect(Home)
