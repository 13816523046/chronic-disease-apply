import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppActions from '../../App/action'
import * as ApplyResultActions from '../actions/index.js'




/**
 * 绑定reducerState、actions to Container ‘s
 */
const Actions = Object.assign({}, AppActions, ApplyResultActions)
export const Connect = (Container) => {

  // redux ‘s state 非 react state
  function mapStateToProps(state) {
    const { applyStateReducer } = state
    return {
      applyStateReducer
    }
  }

  function mapActionToProps(dispatch) {
    return {
      Actions: bindActionCreators(Actions, dispatch),
      // ApplyResultActions:ApplyResultActions
    }
  }

  return connect(mapStateToProps, mapActionToProps)(Container)
}
