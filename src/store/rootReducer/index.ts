import { userSlice } from '../userReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  user: userSlice.reducer,
})

export default rootReducer
