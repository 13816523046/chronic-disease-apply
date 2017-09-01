import React, { Component } from 'react'

import './style.less'
/**
 * 我的申请-头部个人信息
 */
class PersonalHeader extends Component{
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
			<div className="personal-header">
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

export default PersonalHeader;