import { combineReducers } from 'redux'
import transReducer from '../containers/App/reducer'
import homeReducer from '../containers/Home/reducers'
import applyReducer from '../containers/Apply/reducers'
import ostDrawerReducer from '../containers/OstDrawer/reducer'
import applyStateReducer from '../containers/ApplyResult/reducers/index.js'
import requestReducer from '../containers/ApplyResult/reducers/requestReducer.js'


const rootReducer = combineReducers({
  transReducer,
  homeReducer,
  applyStateReducer,
  requestReducer
  applyReducer,
  ostDrawerReducer,
})

export default rootReducer
