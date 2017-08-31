import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppActions from '../../App/action'
import * as ApplyResultActions from '../actions/index.js'
import * as requestAction from '../actions/requestAction.js'
/**
 * 绑定reducerState、actions to Container ‘s
 */
const Actions = Object.assign({}, AppActions, ApplyResultActions,requestAction)
export const Connect = (Container) => {

  // redux ‘s state 非 react state
  function mapStateToProps(state) {
    const { applyStateReducer,requestReducer } = state
    return {
      applyStateReducer,requestReducer
    }
  }

  function mapActionToProps(dispatch) {
    return {
      Actions: bindActionCreators(Actions, dispatch),
    }
  }

  return connect(mapStateToProps, mapActionToProps)(Container)
}
