import React, { Component } from 'react';
import './style.less';

/**
 * Header Stateless Component
 */
const OstLoading = ({title}) => {
  

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
          <p>{title}...</p>
        </div>
      </div> 
    </div>
  )
}

export default OstLoading
