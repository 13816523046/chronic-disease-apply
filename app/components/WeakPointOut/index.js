import React, {Component} from 'react';
import './style.less';

/**
 * Header Stateless Component
 */
export default class WeakPointOut extends Component {
  constructor(props) {
    super(props);
  }
  state={
    masks:true
  }
  componentDidMount(){   // 挂载DOM完毕

    this.timer = setTimeout(
      () => {
        this.setState({
          masks:false
        })
        this.props.handleVal();
      },
      1500
    );
  }
  render(){


    let masks = this.state.masks;
    let a = "";
    if(masks){
      a = (
        <div className="warp" >
            <div className="titleCenter" >
              { this.props.title }
            </div>
        </div>
      )
    }else{
      a= null;
    }
    return a;
  }

}


// const WeakPointOut = ({ title }) => {
//   let change=function(){
//
//   }
//
//   let aaa = (
//     <div className="warp" >
//         <div className="titleCenter" >
//           { title }
//         </div>
//     </div>
//   )
//
//   return aaa
//
// }
//
// WeakPointOut.propTypes = {
//   title: React.PropTypes.string
// }
//
// export default WeakPointOut;
