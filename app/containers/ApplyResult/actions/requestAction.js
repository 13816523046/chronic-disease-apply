import request from '../../../utils/request.js'
/**
 * 请求状态
 */
export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";//请求开始
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";//请求失败
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";//请求成功

export function requestPosts() {
  return {
    type: FETCH_POSTS_REQUEST
  }
}

export function requestPostsFailure() {
  return {
    type: FETCH_POSTS_FAILURE,
    error: 'Oops'
  }
}

export function requestPostsSuccess(value) {
  return {
    type: FETCH_POSTS_SUCCESS,
    response: value
  }
}

export function fetchPosts() {
  // Thunk middleware 知道如何处理函数。
  // 这里把 dispatch 方法通过参数的形式传给函数，
  // 以此来让它自己也能 dispatch action。
  return function (dispatch,getState) {
  	let isFetching = getState().requestReducer.isFetching
  	if(!isFetching){
  		// 首次 dispatch：更新应用的 state 来通知
	    // API 请求发起了。
	    const params ={
	    	activeCode:"aaaaaa",
	    	mobileNo:"15266778899",
	    	sourceType:"test"
	    }
	    dispatch(requestPosts())
	    // thunk middleware 调用的函数可以有返回值，
	    // 它会被当作 dispatch 方法的返回值传递。
	  	let getSiCardInfoPromise = request('get', '/member/otpLogin',params);///static/city
	    return getSiCardInfoPromise.promise.then(
	    	(value)=>{
	    		dispatch(requestPostsSuccess(value))
	    	}
	    ).catch(
	    	(error)=>{
	        dispatch(requestPostsFailure("系统异常"))
	      }
	    )
  	}
    
  }
}