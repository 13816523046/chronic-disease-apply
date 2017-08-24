import React, {Component} from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import echarts from 'echarts';
import Code from '../../components/Code';
import Loading from '../../components/Loading';
import request from '../../utils/request'
import './style.less';
import '../../3rd/seed.js';
import IMG_NODATA from './images/pic_sb.png';
import EmptyState from "../../components/EmptyState/index.js"


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);//需要把this指向当前作用域
        this.getSiCardInfo = this.getSiCardInfo.bind(this);
        this.getPayInfo = this.getPayInfo.bind(this);
        this.cityCode = '330100';
        this.token = 'cad6dfe10d914edba92a0c4c7df84a89';
        this.sessionStore = '';//爬虫城市需要的请求字段
        this.capitalMouth = {
            "01月":"一月","02月":"二月","03月":"三月","04月":"四月","05月":"五月",
            "06月":"六月","07月":"七月","08月":"八月","09月":"九月","10月":"十月",
            "11月":"十一月","12月":"十二月",
        }
    }
    state = {       //本组件设置初始值
        name:'',
        formShowFlag:{
            show:false,//验证码弹窗浮层显示
            codeShow:true,//验证码input显示
            passwordShow:true,//密码input显示
            codeSrc:''//验证码图片路径
        },
        loadShow:'false',//加载层
        loadText:'加载中',//加载文字
        rightIconShow:true,//医保账户入口箭头
        noDataShow:false,//显示空态
        soicalCardNo:'',
        securityCompany:'',
        currentIndex:0,
        currentMonth:'',//当前月份
        listDate:[],//当前月份数据
        mediCareAccountBalance:'',//医保账户
        pensionAccountBalance:'',//养老账户
        total:0,//个人缴纳五种保险的总额
        circleDate:[]//环形图数据
    }
    //页面渲染之前调用
    componentWillMount(){
        this.setState({
            loadShow:true
        })
    }
    // render()调用后执行
    componentDidMount() {
        const rightIcon = document.querySelector('.right-icon');
        console.log(rightIcon)
        rightIcon.style.display="inlineblock";
        this.getToken();

        //本地测试，native测试要删掉
        // this.freshShow(this.cityCode);
        // this.getSiCardInfo();
    }
    getSiCardInfo = (data,flag) => {//data 验证码form数据，flag是否刷新
        let params = {
            cityCode: this.cityCode,
            token:this.token,
            verificationCode: !!data ? data.code : '',//验证码
            password:!!data ? data.password : '',//密码
            rememberPwd:!!data ? data.rememberPwd : false,//是否记住密码
            sessionStore:this.sessionStore,
            refresh: !!flag? true : ''
        };
        let getSiCardInfoPromise = request('get', '/citymain/si/v2/query/getSiCardInfo',params);///static/city
        getSiCardInfoPromise.promise.then(
            (value) => {
                if (typeof value === 'string') {
                    value = JSON.parse(value);
                };
                if(value.resultCode == 10000 && value.body && value.body.data){
                    if(value.body.status == '50003'){//输入验证码
                        this.loadProps();
                        console.log('输入验证码');
                        this.codeformShow(value.body.data.verificationCode);
                        this.sessionStore = value.body.data.sessionStore;
                    }else if(value.body.status == '50001'){//输入密码
                        this.loadProps();
                        console.log('输入密码');
                        this.passformShow();
                        this.sessionStore = value.body.data.sessionStore;
                    }else if(value.body.status == '50002'){//输入密码和验证码,后台也不知道标志位
                        this.loadProps();
                        console.log('输入密码验证码');
                        this.formShow(value.body.data.verificationCode);
                        this.sessionStore = value.body.data.sessionStore;
                    }else if(value.body.status == '30001'){//输入密码错误
                        this.loadProps();
                        console.log('输入密码错误');
                        $$.Native.tip('输入密码错误');
                        this.passformShow();
                        this.sessionStore = value.body.data.sessionStore;
                    }else if(value.body.status == '30002'){//输入密码，验证码错误
                        this.loadProps();
                        console.log('输入密码，验证码错误');
                        $$.Native.tip(value.message);
                        this.formShow(value.body.data.verificationCode);
                        this.sessionStore = value.body.data.sessionStore;
                    }else if(value.body.status == '40001'){//输入验证码错误
                        this.loadProps();
                        console.log('输入验证码错误');
                        $$.Native.tip('输入验证码错误');
                        this.codeformShow(value.body.data.verificationCode);
                        this.sessionStore = value.body.data.sessionStore;
                    }else if(value.body.status == '40002'){//输入密码，验证码错误
                        this.loadProps();
                        console.log('输入密码，验证码错误');
                        $$.Native.tip(value.message);
                        this.formShow(value.body.data.verificationCode);
                        this.sessionStore = value.body.data.sessionStore;
                    }else if(value.body.data.insuranceBasicInfo){
                        this.cancle();//验证码弹窗隐藏
                        let insuranceBasicInfo = value.body.data.insuranceBasicInfo;
                        this.getPayInfo();//社保查询接口,为了统一爬虫城市接口拿到数据，在验证码输入成功之后调用
                        this.setState({
                            name:insuranceBasicInfo.name,
                            soicalCardNo:insuranceBasicInfo.soicalCardNo || '-',
                            mediCareAccountBalance:insuranceBasicInfo.mediCareAccountBalance || '-',
                            pensionAccountBalance:insuranceBasicInfo.pensionAccountBalance || '-'
                        })
                        if(!insuranceBasicInfo.mediCareAccountBalance || insuranceBasicInfo.mediCareAccountBalance == '-'){
                            //隐藏箭头
                            this.setState({
                                rightIconShow:false
                            })
                            const rightIcon = document.querySelector('.right-icon');
                            rightIcon.style.display="none";
                        }
                    }else if(value.body.data.insuranceBasicInfo == null){

                        //隐藏箭头
                        this.setState({
                            rightIconShow:false
                        })
                        const rightIcon = document.querySelector('.right-icon');
                        rightIcon.style.display="none";

                        this.setState({
                            soicalCardNo:'-',
                            mediCareAccountBalance:'-',
                            pensionAccountBalance:'-'
                        })
                        this.getPayInfo();//社保查询接口
                    }
                }else {
                    this.loadProps();
                    $$.Native.tip(value.message);
                };
            }
        ).catch((msg)=>{
            this.loadProps();
            console.log(msg)
            $$.Native.tip(msg);
            // 显示空态页
            this.setState({
                noDataShow:true
            })
        });
    }
    loadProps = (text) => {
        this.setState({
            loadShow:false,
            loadText:text? text : '加载中'
        })
    }
    getPayInfo() {
        let params = {
            cityCode: this.cityCode,
            token:this.token
        };
        let getPayInfoPromise = request('get', '/citymain/si/v2/query/getPayInfo',params);
        getPayInfoPromise.promise.then(
            (value) => {
                if (typeof value === 'string') {
                    value = JSON.parse(value);
                };
                if(value.resultCode == 10000 && value.body && value.body.data){
                    this.loadProps();
                    if(value.body.data.insurancePayment){
                        const currentList = [];
                        const accountArr = [];
                        const paymentList = value.body.data.insurancePayment;
                        currentList.push(paymentList.medicalInsurance?paymentList.medicalInsurance[0]:'',paymentList.endowmentInsurance?paymentList.endowmentInsurance[0]:'',paymentList.industrialInjuryInsurance ? paymentList.industrialInjuryInsurance[0]:'',paymentList.maternityInsurance?paymentList.maternityInsurance[0]:'',paymentList.unemploymentInsurance?paymentList.unemploymentInsurance[0]:'');

                        for (var i = 0; i < currentList.length; i++) {
                            if(currentList[i] && currentList[i].personalAmount && !isNaN(parseFloat(currentList[i].personalAmount))){
                                accountArr.push(currentList[i].personalAmount);
                            }else{
                                accountArr.push(0);
                            }

                        }
                        let currentMonthByInter = paymentList.medicalInsurance[0].paymentMonthStr;
                        this.setState({
                            listDate:currentList,
                            securityCompany:paymentList.medicalInsurance[0].companyName,
                            currentMonth:this.capitalMouth[currentMonthByInter]|| currentMonthByInter,
                            circleDate:[
                                {name:'医疗',value:accountArr[0]},
                                {name:'养老',value:accountArr[1]},
                                {name:'工商',value:accountArr[2]},
                                {name:'生育',value:accountArr[3]},
                                {name:'失业',value:accountArr[4]}
                            ],
                            total:parseFloat(accountArr[0]) + parseFloat(accountArr[1]) + parseFloat(accountArr[2]) + parseFloat(accountArr[3]) + parseFloat(accountArr[4])
                        })
                        this.drawChart(this.state.circleDate);//绘制圆环
                    }else{
                        // 显示空态页
                        this.setState({
                            noDataShow:true
                        })
                    }

                }else {
                    this.loadProps();
                    $$.Native.tip(value.message);
                };
            }
        );
    }
    drawChart(data) {
        let myChart = echarts.init(document.getElementById('myChart'));
        let option = {
            title: {
                text: '当前\n\n缴纳比例',
                left: 'center',
                top: 'center',
                textStyle: {
                    color: '#62636C',
                    fontSize:'33',
                }
            },
            color:['#FFA900','#FE4C46','#FF663F','#20C0B4','#3A87F8'],
            series: [
                {
                    name:'2017 深圳缴纳比例',
                    type:'pie',
                    center:['50%', '50%'],
                    radius: ['70%', '60%'],
                    avoidLabelOverlap: true,
                    legendHoverLink:false,
                    silent:true,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:data
                }
            ]
        };
        myChart.setOption(option);
    }
    goToMedical = () => {//跳转医保账户
        if(!this.state.rightIconShow){
            return;
        }
        this.props.router.push({pathname:'MCDetails',state:{cityCode:this.cityCode,token:this.token}});
    }
    viewAll = () => {//查看全部方法
        this.props.router.push({pathname:'List',state:{cityCode:this.cityCode,token:this.token}});
    }
    goBack(){
        //返回native首页方法
        window.$$ && $$.Native.back();//退出模块
    }
    getToken = () => {
        let params = {
            zoneCode:"",
            token:""
        };
        let callback = (data) => {
            this.token = data.token;
            this.cityCode = data.zoneCode;
            this.freshShow(this.cityCode);
            this.getSiCardInfo();//基本信息查询接口

        }
        window.$$ && $$.Native.getBasicInfo(params, callback);//从native拿到基本信息
    }
    freshShow = (cityCode) => {//爬虫城市显示刷新按钮
        const infoHeaderRight = document.querySelector('.info-header-right');
        console.log(infoHeaderRight)
        if(cityCode == 110000 || cityCode == 330100|| cityCode == 330300|| cityCode == 130100|| cityCode == 370200|| cityCode == 510100){
            infoHeaderRight.style.display="block";
        }else {
            infoHeaderRight.style.display="none";
        }
    }
    checkItemColor( index ){
        return index === this.state.currentIndex ? "info-header-hot" : ""
    }
    codeformShow = (data) => {
        let formShowFlag = this.state.formShowFlag;
        formShowFlag.codeSrc = data;
        formShowFlag.show = true;
        formShowFlag.codeShow = true;//验证码显示
        formShowFlag.passwordShow = false;//密码input不显示显示
        this.setState({'formShowFlag':formShowFlag});
    }
    passformShow = () => {
        let formShowFlag = this.state.formShowFlag;
        formShowFlag.show = true;
        formShowFlag.passwordShow = true;//密码input显示
        formShowFlag.codeShow = false;//验证码没显示
        this.setState({'formShowFlag':formShowFlag});
    }
    formShow = (data) => {
        let formShowFlag = this.state.formShowFlag;
        formShowFlag.codeSrc = data;
        formShowFlag.show = true;
        formShowFlag.codeShow = true;//验证码显示
        formShowFlag.passwordShow = true;//密码input显示
        this.setState({'formShowFlag':formShowFlag});
    }
    refresh = () => {//验证码刷新
        console.log('验证码刷新');
        this.getSiCardInfo('',true);//获取基本信息
    }
    cancle = () => {
        console.log('取消')
        let formShowFlag = this.state.formShowFlag;
        formShowFlag.show = false;
        this.setState({'formShowFlag':formShowFlag});
    }
    nowRefresh = (data) => {
        console.log(data,'====');
        this.getSiCardInfo(data,true);
    }
    update = () => {//页面刷新
        this.setState({
            loadShow:true,
            loadText:'刷新中'
        })
        this.getSiCardInfo('',true);//获取基本信息
    }
    render() {
        let listDate = this.state.listDate;
        let circleDate = this.state.circleDate;
        let total = this.state.total;
        const goSecurity = () => {//跳转到社保模块
            this.setState({
                currentIndex : 0
            })
        }
        const goFund = () => {//跳转到公积金模块
            this.setState({
                currentIndex : 1
            })
        }
        let currentIndex = this.state.currentIndex;
        let displayClass = currentIndex == 1 ? "display-none" : "display";
        let displayEmptyClass = currentIndex == 1 ? "display" : "display-none";
        let infoHeader = (
          <div className="info-header">
            <div className="info-header-left" onClick={this.goBack}></div>
            <div className="info-header-center">
                <div className={this.checkItemColor(0)} onClick={goSecurity}>社保</div>
                <div style={{width:'0.20rem'}}></div>
                <div className={this.checkItemColor(1)} onClick={goFund}>公积金</div>
            </div>
            <div>
                <p className="info-header-right" onClick={this.update}>刷新</p>
            </div>
          </div>
        );
        let emptySocail = (
            <div>
                <EmptyState imgSrc={IMG_NODATA} des={'更多社保查询服务，敬请期待'}/>
            </div>
        );
        let currentSocail = (
            <div>
                <div className="info-circle flex">
                  <div id="myChart"></div>
                  <div className="info-circle-lable flex">
                      <ul className="info-circle-lable-item">
                          {
                              circleDate.map((val, id) => {
                                  if(val.value > 0){
                                      return(<li key={id}><span className={"circle circle"+id}></span><span className="name">{val.name}</span><span className="percent">{(Math.round((val.value/total)*100000/1000)).toFixed(0)+'%'}</span></li>)
                                  }
                              })
                          }
                      </ul>
                  </div>
                </div>
                <div className="info-current flex">
                  <p className="info-current-left">{this.state.currentMonth}缴费明细</p>
                  <p className="info-current-right" onClick={this.viewAll}>查看全部</p>
                </div>
                <div className="info-current-list">
                  {
                    listDate.map((val, id) => {
                        if(val){
                            return (
                                    <div className="info-current-list-content flex" key={id}>
                                      <div className="info-current-list-left flex">
                                          <span className="big-size">{val.insuranceTypeStr}</span>
                                          <div>
                                              <h1>{val.totalAmount}</h1>
                                              <p>基数：{val.baseAmount}</p>
                                         </div>
                                      </div>
                                      <div className="info-current-list-right flex">
                                          <p className="info-current-list-item flex">
                                            <span className="first-span">单位缴纳：</span>
                                            <span className="secrond-span"> {val.companyAmount}</span>
                                          </p>
                                          <p className="info-current-list-item flex">
                                          <span className="first-span">个人缴纳：</span>
                                          <span className="secrond-span"> {val.personalAmount}</span>
                                          </p>
                                      </div>
                                     </div>
                            )
                        }else{


                        }
                      })
                    }
                </div>
            </div>
        );
        if(this.state.noDataShow){
            currentSocail = emptySocail
        }else if(!this.state.noDataShow){
            currentSocail = currentSocail
        }else{
            <div></div>
        };
        return (
            <div className="main">
              {infoHeader}
              <div className={displayClass}>
                <div className="info-top">
                  <div className="info-top-name flex">
                      <div className="name">{this.state.name}</div>
                      {/*<div className="change" onClick={this.goChange}>更换 ></div>*/}
                  </div>
                  <div className="info-top-number flex">
                      <div className="name">社会保障号</div>
                      <div className="number">{this.state.soicalCardNo}</div>
                  </div>
                  <div className="info-top-number info-top-pad flex">
                      <div className="name">缴纳公司</div>
                      <div className="number">{this.state.securityCompany}</div>
                  </div>
                  <div className="info-account flex">
                      <div className="info-account-left">
                          <h1>{this.state.pensionAccountBalance}</h1>
                          <p>养老账户(元)</p>
                      </div>
                      <div className="info-account-right"  onClick={this.goToMedical}>
                          <h1>{this.state.mediCareAccountBalance}</h1>
                          <p>医保账户（元）<span className="right-icon">></span></p>
                      </div>
                  </div>
                </div>
                {currentSocail}
                <Code refresh={this.refresh} nowRefresh={this.nowRefresh} cancle={this.cancle} formShowFlag={this.state.formShowFlag}/>
                <Loading loadShow={this.state.loadShow} loadText={this.state.loadText}/>

              </div>
              <div className={displayEmptyClass}>
                <EmptyState paddingTop="50%" />
              </div>
            </div>
        )
    }
}
