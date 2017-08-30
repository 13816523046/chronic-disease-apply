import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppActions from '../../App/action'
import * as HomeActions from '../actions'


/**
 * 绑定reducerState、actions to Container ‘s
 */
const Actions = Object.assign({}, AppActions, HomeActions)
export const Connect = (Container) => {

  // redux ‘s state 非 react state
  function mapStateToProps(state) {
    const { homeReducer } = state
    return {
      homeReducer
    }
  }

  function mapActionToProps(dispatch) {
    return {
      Actions: bindActionCreators(Actions, dispatch)
    }
  }

  return connect(mapStateToProps, mapActionToProps)(Container)
}
