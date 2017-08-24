import React, { Component } from 'react';
import './style.less';

export default class Loading extends Component {
    constructor(props) {
      super(props);
    }
    // render()调用后执行
    componentDidMount() {

    }
    render() {

            if(this.props.loadShow){
                return(
                    <div>
                        <div className='load-back flex'>
                            <div className="load-block flex">
                                <div className="loading">
                                    <div className="line">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div className="circlebg"></div>
                                </div>
                                <p>{this.props.loadText}...</p>
                            </div>

                        </div> 
                    </div>
                )
            }else{
                return(<div></div>)
            }



    }
}
