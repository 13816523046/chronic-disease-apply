import { combineReducers } from 'redux'
import transReducer from '../containers/App/reducer'
import homeReducer from '../containers/Home/reducers'
import applyStateReducer from '../containers/ApplyResult/reducers/index.js'
import requestReducer from '../containers/ApplyResult/reducers/requestReducer.js'

const rootReducer = combineReducers({
  transReducer,
  homeReducer,
  applyStateReducer,
  requestReducer
})

export default rootReducer
