/************************************************/
/********** Reducer 控制State——业务逻辑 ***********/
/************************************************/
import {
  GET_DIEASES_START,
  GET_DIEASES_END,
  DEL_SELECTED_DISEASE,
  GET_APPLIED_DISEASES,
  SET_SELECTED_DISEASE,
} from '../constants';

const initialState = {
  loadStatus: 0,
  diseases: [],
  isFetching: false,
  appliedDi: [],
  selectedDi: [],
  selectedNo: 0,
}; // 可以是Number 或者字符串 或对象

const applyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DIEASES_START:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
      })
    case GET_DIEASES_END:
      return Object.assign({}, state, {
        diseases: action.diseases,
        isFetching: action.isFetching,
      })
    case DEL_SELECTED_DISEASE:
      return Object.assign({}, state, {
        selectedDi: action.selectedDi,
        selectedNo: action.selectedDi.length,
        diseases: action.diseases,
      })
    case GET_APPLIED_DISEASES:
      return Object.assign({}, state, {
         appliedDi: action.appliedDi
        // diseases: action.diseases,
        // isFetching: action.isFetching,
      })
    case SET_SELECTED_DISEASE:
      return Object.assign({}, state, {
         selectedDi: action.selectedDi,
         selectedNo: action.selectedDi.length,
      })
    default:
      return state;
  }
};

export default applyReducer;
