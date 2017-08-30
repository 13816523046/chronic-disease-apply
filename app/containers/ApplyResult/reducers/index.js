import { combineReducers } from 'redux'
import { Final_Adoption, In_Review, Failure_Of_First_Instance } from '../actions/index.js'

const initialState = {
  progress:Failure_Of_First_Instance,//后台返回状态值
  title:"初审失败",//页面显示状态文字
  showBtnEdit:true//是否显示-- 去编辑按钮
}

function applyStateReducer(state = initialState, action) {
  switch (action.type) {
    case Final_Adoption:
      return Object.assign({}, state, {
        progress:Final_Adoption,
        title:"终审通过 申请成功",
        showBtnEdit:false
      })
    case In_Review:
      return Object.assign({}, state, {
        progress:In_Review,
        title:"复审中 请耐心等待",
        showBtnEdit:false
      })
    case Failure_Of_First_Instance:
      return Object.assign({}, state, {
        progress:Failure_Of_First_Instance,
        title:"初审失败",
        showBtnEdit:true
      })
    default:
      return state
  }
}

export default applyStateReducer