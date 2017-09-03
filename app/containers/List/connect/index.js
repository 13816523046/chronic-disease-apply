import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppActions from '../../App/action'
import * as ApplyActions from '../../Apply/actions'


const Actions = Object.assign({}, AppActions, ApplyActions)

export const Connect = (Container) => {

  // redux ‘s state 非 react state
  function mapStateToProps(state) {
    const { applyReducer } = state
    return {
      applyReducer
    }
  }

  function mapActionToProps(dispatch) {
    return {
      Actions: bindActionCreators(Actions, dispatch)
    }
  }

  return connect(mapStateToProps, mapActionToProps)(Container)
}
