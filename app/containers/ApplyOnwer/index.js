import React, { Component } from 'react'
import OstHeader from '../../components/OstHeader'

import './style.less'

class ApplyOnwer extends Component{
	constructor(props) {
		super(props);
		this.state = {};
		this.header = {
      title: '我的申请',
      back: () => history.back(),
      option: {
        text: '',
        handler: () => {},
      },
    }
	}

	render() {
		const header = this.header;
		return (
			<div className="apply-onwer">
				<OstHeader title={header.title} back={header.back} color="-white" option={header.option} />
				<div style={{height:"0.88rem"}}></div>
				<ApplyOnwerheader />
				<ApplyOnwerInfo />
			</div>
		)
	}
}

/**
 * 我的申请-头部个人信息
 */
class ApplyOnwerheader extends Component{
	constructor(props) {
		super(props);
		this.state = {};
		this.reducer = {
			name:"王小明",
			sex:"男",
			age:"28",
			idCard:"370**** **** ***15",
			applied:["肝硬化","心肌梗塞","慢性肝炎"]
		}
	}
	render() {
		const info = this.reducer;
		return(
			<div className="apply-onwer-header">
				<div className="info-line">
					<span className="left">{info.name}</span>
					<div className="right">
						<span>{info.sex}</span><span>{info.age}</span>
					</div>
				</div>
				<div className="info-line">
					<span className="left">身份证号</span>
					<div className="right">
						<span>{info.idCard}</span>
					</div>
				</div>
				<div className="info-line">
					<span className="left">已申请病种</span>
					<div className="right">
						{
							info.applied.map((apply)=>{
								return <span key={apply.toString()}>{apply}</span>		
							})
						}
					</div>
				</div>
			</div>
		)
	}	
}
/**
 * 我的申请-参保人信息
 */
class ApplyOnwerInfo extends Component{
	constructor(props) {
		super(props);
		this.state = {};
		this.reducer = {
			address:"一个山疙瘩",
			tel:"16677889900",
			company:"山西人大"
		}
	}

	render() {
		const info = this.reducer;
		return (
			<div className="apply-onwer-info">
				<header>参保人信息</header>
				<div>
					<span className="left">详细地址</span><span className="right">{info.address}</span>
				</div>
				<div>
					<span className="left">联系电话</span><span className="right">{info.tel}</span>
				</div>
				<div>
					<span className="left">单位名称</span><span className="right">{info.company}</span>
				</div>
			</div>
		)
	}	
}
export default ApplyOnwer