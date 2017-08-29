import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppActions from '../../App/action'


/**
 * 绑定reducerState、actions to Container ‘s
 */
const Actions = Object.assign({}, AppActions)
export const Connect = (Container) => {

  // redux ‘s state 非 react state
  function mapStateToProps(state) {
    const { applyReducer } = state
    return {
      // diArr: homeReducer.diArr,
      // igArr: homeReducer.igArr,
    }
  }

  function mapActionToProps(dispatch) {
    return {
      Actions: bindActionCreators(Actions, dispatch)
    }
  }

  return connect(mapStateToProps, mapActionToProps)(Container)
}
