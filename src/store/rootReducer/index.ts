import { userSlice } from '../userReducer'
import { combineReducers } from 'redux'
import { todosSlice } from '../todosReducer'

const rootReducer = combineReducers({
  user: userSlice.reducer,
  todos: todosSlice.reducer,
})

export default rootReducer
