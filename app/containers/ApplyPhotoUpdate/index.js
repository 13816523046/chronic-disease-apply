import React, { Component } from 'react'
import { Connect } from './connect'
import OstHeader from '../../components/OstHeader'
import { Modal, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import photo from './style.less'
import TEST_PHOTO from './images/img_858873.png'
import IMG_URL from './images/img-url.png'



class ApplyPhotoUpdate extends Component {

    state = {
        idCardList:[{
            imageUrl: '',
            photoTip: '正面'
        },{
            imageUrl: '',
            photoTip: '反面'
        }],
        slowList:[{
            imageUrl: '',
            photoTip: ''
        }],
        personalList:[{
            imageUrl: '',
            photoTip: ''
        }],
        siCardList:[{
            imageUrl: '',
            photoTip: ''
        }],
        medItroList:[{
            imageUrl: '',
            photoTip: ''
        }],
        medicalList:[{
            imageUrl: '',
            photoTip: ''
        }]
    }

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

  constructor(props) {
    super(props)
  }

  render() {
    const { header } = this.props
    return (
      <div className="photo">
        <OstHeader
          title={header.title}
          back={header.back}
          option={header.option}
          color={'-white'}>
        </OstHeader>
        <div className="update-box">

            <div className="text-tip">
                <span>请提交以下资料，仅审核使用</span>
            </div>

            <UpdatePhotoItem photoType="《居民身份证》" photoList={this.state.idCardList}></UpdatePhotoItem>

            <UpdatePhotoItem photoType="《医疗保险慢性病鉴定审批表》" photoList={this.state.slowList}></UpdatePhotoItem>

            <UpdatePhotoItem photoType="《彩色1寸证件照》" photoList={this.state.personalList}></UpdatePhotoItem>

            <UpdatePhotoItem photoType="《社会保障卡》" photoList={this.state.siCardList}></UpdatePhotoItem>

            <UpdatePhotoItem photoType="《诊断说明书》" photoList={this.state.medItroList}></UpdatePhotoItem>

            <UpdatePhotoItem photoType="《门诊/住院病历》可多张" photoList={this.state.medicalList} listFlag='1'></UpdatePhotoItem>

        </div>

        <div className="submitBtn"><span>提交申请</span></div>
      </div>
    )
  }
}

class UpdatePhotoItem extends Component {
    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this)
        this.showModalHandler = this.showModalHandler.bind(this)
    }
    state = {
        modal1: false
    }
    changeHandler() {
        // close
        this.setState({
          modal1: false,
        });
    }
    showModalHandler() {
        this.setState({
          modal1: true,
        });
    }

    render(){
        let { photoType, photoList, photoTip, listFlag } = this.props
        return (
            <div className="update-photo">
                <div className="update">
                    <div className="update-text">
                        <span className="text-left fl">上传{photoType}</span>
                        <span className="text-right fr" onClick={this.showModalHandler}>照片示例</span>
                        <ForExmaple
                            visible={this.state.modal1}
                            changeHandler={this.changeHandler}
                            imgUrl={IMG_URL}
                        />
                    </div>
                </div>
                {
                    listFlag && photoList.length <= 34
                    ?
                    <div className="photo-list">
                        <div className="photo-item">
                            <div className="picItem">
                                <img src={TEST_PHOTO} alt="photo"/>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="photo-list">
                        {
                            photoList.map(
                                (val, idx) => {
                                    return(
                                        <div key={idx} className="photo-item">
                                            <div className="picItem">
                                                {
                                                    val.imgUrl
                                                    ? <div>
                                                          <img src={val.imgUrl} alt="photo"/>
                                                          <div className="close">X</div>
                                                          <div className="before" >
                                                             <span>预览</span>
                                                          </div>
                                                      </div>
                                                    : <div>
                                                        <img src={TEST_PHOTO} alt="photo"/>
                                                      </div>
                                                }
                                            </div>
                                            <div className="instruces">{val.photoTip}</div>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                }
                <div className="line"></div>
            </div>
        )
    }
}

class ForExmaple extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
     const { visible, changeHandler, imgUrl } = this.props
    return (
      <div>
        <WhiteSpace />
        <Modal
          title='照片示例'
          transparent
          maskClosable={false}
          visible={visible}
          onClose={changeHandler}
          footer={[{ text: '确定', onPress: () => {
                                      changeHandler()
                                  }
                  }]
          }
        >
            <img src={imgUrl} />
        </Modal>
      </div>
    );
  }
}

export default Connect(ApplyPhotoUpdate)
