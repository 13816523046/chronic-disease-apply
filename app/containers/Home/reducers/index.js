import {
  SELECT_APPLY_TYPE,
  CHANGE_ADDR_VAL,
  CHANGE_PICKER_VAL,
  CHANGE_TEL_VAL,
  CHANGE_COMPANY_VAL,
} from '../constants';

const initialState = {
  loadStatus: 0,
  applyType: 0,
  isActive: true,
  list: null,
  isFetching: false,
  addr: '',
  picker: {
    data: [{
      label: '请选择',
      value: '',
    },{
      label: 'v1',
      value: 'val1',
    }],
    cols: 1,
    asyncValue: [],
  },
  tel: '',
  userInfo: {
    name: '王小波',
    age: '12岁',
    sex: '男',
    idCard: '323432432432fdafdsafads',
  },
}; // 可以是Number 或者字符串 或对象

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_APPLY_TYPE:
      return Object.assign({}, state, {
        applyType: action.applyType,
        isActive: action.isActive,
      })
    case CHANGE_ADDR_VAL:
      return Object.assign({}, state, {
        addr: action.addr
      })
    case CHANGE_PICKER_VAL:
      return Object.assign({}, state, {
        picker: {
          data: state.picker.data,
          cols: 1,
          asyncValue: action.asyncValue,
        }
      })
    case CHANGE_TEL_VAL:
      return Object.assign({}, state, {
        tel: action.tel
      })
    case CHANGE_COMPANY_VAL:
      return Object.assign({}, state, {
        company: action.company
      })
    default:
      return state;
  }
};

export default homeReducer;
