import React, { Component } from 'react'
import { Connect } from './connect'
import OstHeader from '../../components/OstHeader'
import photo from './style.less'
import TEST_PHOTO from './images/img_858873.jpg'



class ApplyPhotoUpdate extends Component {

    state = {
        list:[1,2]
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
          option={header.option}>
        </OstHeader>
        <div className="update-box">

            <div className="text-tip">
                <span>请提交以下资料，仅审核使用</span>
            </div>

            <UpdatePhotoItem photoType="身份证" photoList={this.state.list}></UpdatePhotoItem>

        </div>
      </div>
    )
  }
}

class UpdatePhotoItem extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        let { photoType, photoList } = this.props
        return (
            <div>
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
                                        <div className="close"></div>
                                        <div className="picItem">
                                            <img src={TEST_PHOTO}/>
                                        </div>
                                        <div className="instruces"></div>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </div>
        )
    }
}


export default Connect(ApplyPhotoUpdate)
