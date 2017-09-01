import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './action'

/**
 * 绑定reducerState、actions to Container ‘s
 */
export const Connect = (Container) => {

  // redux ‘s state 非 react state
  function mapStateToProps(state) {
    const { ostDrawerReducer } = state
    return {
      visibleFlag: ostDrawerReducer.visibleFlag,
      drawerStyle: ostDrawerReducer.styles,
    }
  }

  function mapActionToProps(dispatch) {
    return {
      Actions: bindActionCreators(Actions, dispatch)
    }
  }

  return connect(mapStateToProps, mapActionToProps)(Container)
}
