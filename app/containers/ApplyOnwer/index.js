import React, { Component } from 'react'
import OstHeader from '../../components/OstHeader'
import PersonalHeader from '../ApplyResult/components/PersonalHeader/index.js'

import './style.less'
/**
 * 我的申请页面-只读
 */
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
				<PersonalHeader />
				<ApplyOnwerInfo />
				<ApplyOnwerNew />
				<ApplyOnwerMeans />
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
/**
 * 我的申请-申请新病种
 */
class ApplyOnwerNew extends Component{
	constructor(props) {
		super(props);
		this.state = {}
		this.reducer = [
			{name:"高血压",type:"1"},
			{name:"高血压2",type:"2"},
			{name:"高血压3",type:"3"},
			{name:"高血压4",type:"4"},
			{name:"高血压5",type:"5"},
			{name:"高血压6",type:"6"},
			{name:"高血压7",type:"7"},
			{name:"高血压8",type:"8"},
		]
	}

	render() {
		const newDiseases = this.reducer;
		return (
			<div className="apply-onwer-new">
				<header>
					<span className="header">申请新病种</span><span className="des">最多可选7项</span>
				</header>
				<div className="contain">
					{
						newDiseases.map((disease)=>{
							return <div className="disease" key={disease.type}>{disease.name}</div>
						})
					}
				</div>
			</div>
		)
	}	
}
/**
 * 我的申请-资料
 */
class ApplyOnwerMeans extends Component{
	constructor(props) {
		super(props);
		this.state = {};
		this.reducer = [
			{type:"1",name:"《居民身份证》",state:"已上传"},
			{type:"2",name:"《医疗保险慢性病鉴定审批表》",state:"已上传"},
			{type:"3",name:"《彩色1寸证件照》",state:"已上传"},
			{type:"4",name:"《社会保障卡》",state:"已上传"},
			{type:"5",name:"《诊断说明书》",state:"已上传"},
			{type:"6",name:"《门诊/住院病历》",state:"已上传"}
		]
	}
	render() {
		const means = this.reducer;
		return (
			<div className="apply-onwer-means">
				<header>资料</header>
				<div className="contain">
					{
						means.map((mean)=>{
							return (
								<div className="mean" key={ mean.type }>
									<span className="left">{ mean.name }</span>
									<span className="right">{ mean.state }</span>
								</div>
							)
						})
					}
				</div>
			</div>
		)
	}	
}
export default ApplyOnwer