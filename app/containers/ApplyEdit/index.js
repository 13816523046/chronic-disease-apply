import React, { Component } from 'react'
import { Connect } from './connect'
import OstHeader from '../../components/OstHeader'
import PersonalHeader from '../ApplyResult/components/PersonalHeader/index.js'
import './style.less'
import { Button, Picker, List, TextareaItem, InputItem } from 'antd-mobile'

import { TypeButton } from '../Home/components/TypeButton/index.js'
/**
 *  修改页面
 */
class ApplyEdit extends Component{
	constructor(props) {
		super(props);
		this.state = {}
		this.header = {
      title: "慢病资格申请",
      back: () => history.back(),
      option: {
        text: '',
        handler: () => {},
      },
    }
	}

	render() {
		const header = this.header;
		const { homeReducer } = this.props
		return (
			<div className="apply-edit">
				<OstHeader title={header.title} back={header.back} color="-white" option={header.option} />
				<div style={{height:"0.88rem"}}></div>
				<PersonalHeader />
				<ApplyEditFrom homeReducer = {homeReducer} />
				<ApplyEditDesiase propsSelf ={this.props} />
				准备修改
			</div>
		)
	}
}

/**
 * form表单
 */
class ApplyEditFrom extends Component{
	constructor(props) {
		super(props);
		this.state = {};
	}
	selectTypeHandler=(type)=> {
    const { Actions } = this.props
    console.error("事件还没写")
  }
  chageTelHandler=(tel)=> {
    const { Actions } = this.props
    console.error("事件还没写")
  }

  changeAddrHandler=(addr)=> {
    const { Actions } = this.props
    console.error("事件还没写")
  }

  changePickerHandler=(val)=> {
    const { Actions } = this.props
    console.error("事件还没写")
  }

  changeCompanyHandler=(val)=> {
    const { Actions } = this.props
    console.error("事件还没写")
  }
	render() {
		const { picker } = this.props.homeReducer
		return (
			<div className="apply-edit-from">
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
              <TypeButton handler={this.selectTypeHandler.bind(this, 0)} text={'个人'}/>
              <TypeButton handler={this.selectTypeHandler.bind(this, 1)} text={'单位'}/>
            </div>
          </div>
          <div>
          	<div className="form-item">单位名称</div>
            <TextareaItem
              className="form-text"
              rows={5}
              placeholder="请输入"
              onChange={this.changeCompanyHandler}
            />
           </div>
				</List>
			</div>
		)
	}
}

/**
 * 申请新病种
 */
class ApplyEditDesiase extends Component{
	constructor(props) {
		super(props);
		this.state = {};
	}

	selectNewDesiase = ()=>{
		const { router, Actions } = this.props.propsSelf
    router.push('list')
	}
	render() {
		return(
			<div className="apply-edit-desiase">
				<div className="header">申请新病种</div>
				<div className="contain" onClick={this.selectNewDesiase}>从列表选择</div>
			</div>
		)
	}
}

export default Connect(ApplyEdit)