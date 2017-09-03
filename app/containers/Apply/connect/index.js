import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppActions from '../../App/action'
import * as ApplyActions from '../actions'

/**
 * 绑定reducerState、actions to Container ‘s
 */
const Actions = Object.assign({}, AppActions, ApplyActions)
export const Connect = (Container) => {

  // redux ‘s state 非 react state
  function mapStateToProps(state) {
    const { applyReducer } = state
    return {
      appliedDi: applyReducer.appliedDi,
      isFetching: applyReducer.isFetching,
      selectedDi: applyReducer.selectedDi,
      selectedNo: applyReducer.selectedNo,
      diseases: applyReducer.diseases,
    }
  }

  function mapActionToProps(dispatch) {
    return {
      Actions: bindActionCreators(Actions, dispatch)
    }
  }

  return connect(mapStateToProps, mapActionToProps)(Container)
}
