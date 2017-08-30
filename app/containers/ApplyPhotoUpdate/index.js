import React, { Component } from 'react'
import { Connect } from './connect'
import OstHeader from '../../components/OstHeader'
import photo from './style.less'
import TEST_PHOTO from './images/img_858873.png'



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
          color={'white'}>
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

            <UpdatePhotoItem photoType="《门诊/住院病历》可多张" photoList={this.state.medicalList}></UpdatePhotoItem>

        </div>

        <div className="submitBtn"><span>提交申请</span></div>
      </div>
    )
  }
}

class UpdatePhotoItem extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        let { photoType, photoList, photoTip } = this.props
        return (
            <div className="update-photo">
                <div className="update">
                    <div className="update-text">
                        <span className="text-left fl">上传{photoType}</span>
                        <span className="text-right fr">照片示例</span>
                    </div>
                </div>
                <div className="photo-list">
                    {
                        photoList.map(
                            (val, idx) => {
                                return(
                                    <div key={idx} className="photo-item">
                                        <div className="picItem">
                                            <img src={TEST_PHOTO} alt="photo"/>
                                            {
                                                val.imgUrl
                                                ? <div>
                                                      <div className="close">X</div>
                                                      <div className="before" >
                                                         <span>预览</span>
                                                      </div>
                                                  </div>
                                                : <div></div>
                                            }
                                        </div>
                                        <div className="instruces">{val.photoTip}</div>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
                <div className="line"></div>
            </div>
        )
    }
}


export default Connect(ApplyPhotoUpdate)
