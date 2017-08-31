/**
 * 请求reducer
 */
import { combineReducers } from 'redux'
import { FETCH_POSTS_REQUEST,FETCH_POSTS_FAILURE,FETCH_POSTS_SUCCESS } from '../actions/requestAction.js'

const initialState = {
  isFetching: false,//加载进度
  val: {}//存放数据
}

function requestReducer(state = initialState,action){
	switch (action.type){
		case FETCH_POSTS_REQUEST:
			return Object.assign({},state,{
				isFetching: true
			})
		case FETCH_POSTS_FAILURE:
			return Object.assign({},state,{
				isFetching: false
			})
		case FETCH_POSTS_SUCCESS:
			return Object.assign({},state,{
				isFetching: false,
				val:action.response
			})
		default:
			return state
	}
}

export default requestReducer




