import {
  SET_DRAWER_STATUS
} from './constant'

const initialState = {
  visibleFlag: false, // 默认为不隐藏
  styles: {}
}

const ostDrawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DRAWER_STATUS:
      return Object.assign({}, state, {
          visibleFlag: action.visibleFlag,
          styles: action.styles,
        })
      break;
    default:
      return state;

  }
}
export default ostDrawerReducer
