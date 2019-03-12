import { combineReducers } from 'redux'
import AppReducer from './AppReducer.js'

const RootReducer  = combineReducers({
  app:AppReducer

})

export default RootReducer;
