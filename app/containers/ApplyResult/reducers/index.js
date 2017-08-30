import { combineReducers } from 'redux'
import { Final_Adoption, In_Review, Failure_Of_First_Instance } from '../actions/action.js'

function showApplyState(state = Failure_Of_First_Instance, action) {
  switch (action.type) {
    case Final_Adoption:
      return Final_Adoption
    case In_Review:
      return In_Review
    case Failure_Of_First_Instance:
      return Failure_Of_First_Instance
    default:
      return state
  }
}

export default showApplyState