import {
  SELECT_APPLY_TYPE,
} from '../constants';

const initialState = {
  loadStatus: 0,
  applyType: 0,
  isActive: true,
  list: null,
  isFetching: false,
}; // 可以是Number 或者字符串 或对象

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_APPLY_TYPE:
      return Object.assign({}, state, {
        applyType: action.applyType,
        isActive: action.isActive,
      })
    default:
      return state;
  }
};

export default homeReducer;
