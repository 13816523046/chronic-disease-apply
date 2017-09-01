import React, { Component } from 'react'
import { Connect } from './connect'
import OstHeader from '../../components/OstHeader'
import { TypeButton } from './components/TypeButton'
import './style.less'
import { Button, Picker, List, TextareaItem, InputItem } from 'antd-mobile'


class Home extends Component {

  static defaultProps = {
    header: {
      title: '慢病资格申请',
      back: () => history.back(), // 返回至模块首页
      option: {
        text: '',
        handler: () => {},
      },
    }
  }

  constructor(props) {
    super(props)

    this.selectTypeHandler = this.selectTypeHandler.bind(this)
    this.submitFormHandler = this.submitFormHandler.bind(this)
    this.changeAddrHandler = this.changeAddrHandler.bind(this)
    this.changePickerHandler = this.changePickerHandler.bind(this)
    this.chageTelHandler = this.chageTelHandler.bind(this)
    this.changeCompanyHandler = this.changeCompanyHandler.bind(this)
  }

  selectTypeHandler(type) {
    const { Actions } = this.props
    const { applyType, isActive } = this.props.homeReducer
    if (type !== applyType) {
      Actions.selectApplyType(type, !isActive)
    }
  }

  chageTelHandler(tel) {
    const { Actions } = this.props
    Actions.changeTel(tel)
  }

  changeAddrHandler(addr) {
    const { Actions } = this.props
    Actions.changeAddr(addr)
  }

  changePickerHandler(val) {
    const { Actions } = this.props
    Actions.changePicker(val)
  }

  changeCompanyHandler(val) {
    const { Actions } = this.props
    Actions.changeCompany(val)
  }

  submitFormHandler() {
    const { Actions, router } = this.props
    // some request

    Actions.transLeft();
    router.push('apply')
  }

  render() {
    const { header, router } = this.props
    const { userInfo, applyType, isActive, picker } = this.props.homeReducer

    return (
      <div className="main">
        <OstHeader
          title={header.title}
          back={header.back}
          option={header.option}>
        </OstHeader>
        <div className="main-info">
          <div className="col1">参保人信息</div>
          <div className="col2"><span className="left">{userInfo.name}</span><span className="right">{userInfo.sex}&nbsp;&nbsp;{userInfo.age}</span></div>
          <div className="col3"><span className="left">身份证号</span><span className="right">{userInfo.idCard}</span></div>
        </div>
        <div className="main-form">
          <List style={{ backgroundColor: 'white' }} className="picker-list">
            <div className="form-item-single">
              <Picker
                data={picker.data}
                cols={picker.cols}
                value={picker.asyncValue}
                onPickerChange={this.changePickerHandler}
              >
                <List.Item arrow="down" onClick={()=>{}}>所在地区</List.Item>
              </Picker>
            </div>
            <div className="form-item-more">
              <div className="form-item">详细地址</div>
              <TextareaItem
                className="form-text"
                rows={3}
                placeholder="请输入"
                maxLength={100}
                onChange={this.changeAddrHandler}
             />
             <span className="form-item-text">100字</span>
            </div>
            <div className="form-item-single">
              <InputItem
                className="form-input"
                type="phone"
                maxLength={11}
                placeholder="请输入"
                onChange={this.chageTelHandler}
              >联系电话</InputItem>
            </div>
            <div className="form-check">
              <div className="form-check-name">申报类型</div>
              <div className="form-check-box">
                <TypeButton isActive={isActive} handler={this.selectTypeHandler.bind(this, 0)} text={'个人'}/>
                <TypeButton isActive={!isActive} handler={this.selectTypeHandler.bind(this, 1)} text={'单位'}/>
              </div>
            </div>
            {
              applyType > 0 && (<div>
                <div className="form-item">单位名称</div>
                <TextareaItem
                  className="form-text"
                  rows={5}
                  placeholder="请输入"
                  onChange={this.changeCompanyHandler}
                />
                </div>
              )
            }
          </List>
        </div>

        <div className="main-btn">
          <Button onClick={this.submitFormHandler} className="btn">下一步</Button>
        </div>
      </div>
    )
  }
}



export default Connect(Home)
