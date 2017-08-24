import { combineReducers } from 'redux'
import transReducer from '../containers/App/reducer'
import homeReducer from '../containers/Home/reducers'

const rootReducer = combineReducers({
  transReducer,
  homeReducer,
})

export default rootReducer
