import React, {Component} from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import './style.less';
import { DatePicker, List , Checkbox, Flex , NavBar, Icon} from 'antd-mobile';
import { createForm } from 'rc-form';
import moment from 'moment';
import 'moment/locale/zh-cn';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';



// 如果不是使用 List.Item 作为 children
const CustomChildren = props => (
  <div
    onClick = { props.onClick }
    style={{ backgroundColor: '#fff', height: '0.9rem', lineHeight: '0.9rem', padding: '0 0.3rem' }}
  >
    { props.children }

    <span style={{ float: 'right', color: '##3A87F8' }}>{ props.extra }</span>
  </div>
);


export class DateCtrlS extends Component {
    constructor(props) {
      super(props);
      this.state = {       //本组件设置初始值
        maxDate: this.props.dateProps.maxDate,
        minDate: this.props.dateProps.minDate,
        dpValue: this.props.dateProps.dpValue
      }
    }
    static defaultProps = {

    }

    select={

    }
    componentWillReceiveProps(nextProps) {
      if(this.props.resetTime !== nextProps.resetTime){
        this.setState ({
          dpValue:""
        })
      }
      // if(this.props.dateProps.maxDate !== nextProps.dateProps.maxDate){
        this.setState({
          maxDate: nextProps.dateProps.maxDate,
          minDate: nextProps.dateProps.minDate
        })
      // }


    }

    changeDate=(v)=>{
      this.setState({ dpValue: v })
      console.log(v._d);
      let d = new Date(v._d);
      let date=d.getFullYear() +'.'+ (d.getMonth() + 1) +'.'+d.getDate() + ' 00:00:00'
      let a = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '+ 0800'

      this.props.getDateCtrlData(date ,a)
    }

    render() {

      return (
          <div className="time_choose_warp">
            <div className="time_choose">
              <div>{this.props.dateProps.title}</div>
              <div className="time_data" >
                <span >
                  {/*
                    <DatePicker mode="date" title="" minDate={this.state.minDate} maxDate={this.state.maxDate} extra='请选择' value={this.state.dpValue} onChange={ v => this.setState({ dpValue: v })} >
                      <CustomChildren><span className="rightIcon"> > </span></CustomChildren>
                    </DatePicker>
                  */}
                  <DatePicker mode="date" title="" minDate={this.state.minDate} maxDate={this.state.maxDate} extra='请选择' value={this.state.dpValue} onChange={ this.changeDate } >
                    <CustomChildren><span className="rightIcon"> > </span></CustomChildren>
                  </DatePicker>
                </span>
              </div>
            </div>
          </div>

      )
    }
}
export class DateCtrlE extends Component {
    constructor(props) {
      super(props);
      this.state = {       //本组件设置初始值
        maxDate: this.props.dateProps.maxDate,
        minDate: this.props.dateProps.minDate,
        dpValue: this.props.dateProps.dpValue
      }
    }
    static defaultProps = {

    }

    select={

    }
    componentWillReceiveProps(nextProps) {
      if(this.props.resetTime !== nextProps.resetTime){
        this.setState ({
          dpValue:""

        })
      }
      // if(this.props.dateProps.minDate !== nextProps.dateProps.minDate){
        this.setState({
          maxDate: nextProps.dateProps.maxDate,
          minDate: nextProps.dateProps.minDate
        })
      // }


    }

    changeDate=(v)=>{
      this.setState({ dpValue: v })
      console.log(v._d);
      let d = new Date(v._d);
      let date=d.getFullYear() +'.'+ (d.getMonth() + 1) +'.'+d.getDate() + ' 00:00:00'
      let a = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '+ 0800'

      this.props.getDateCtrlData(date ,a)
    }

    render() {

      return (
          <div className="time_choose_warp">
            <div className="time_choose">
              <div>{this.props.dateProps.title}</div>
              <div className="time_data" >
                <span >
                  {/*
                    <DatePicker mode="date" title="" minDate={this.state.minDate} maxDate={this.state.maxDate} extra='请选择' value={this.state.dpValue} onChange={ v => this.setState({ dpValue: v })} >
                      <CustomChildren><span className="rightIcon"> > </span></CustomChildren>
                    </DatePicker>
                  */}
                  <DatePicker mode="date" title="" minDate={this.state.minDate} maxDate={this.state.maxDate} extra='请选择' value={this.state.dpValue} onChange={ this.changeDate } >
                    <CustomChildren><span className="rightIcon"> > </span></CustomChildren>
                  </DatePicker>
                </span>
              </div>
            </div>
          </div>

      )
    }
}
