import { ISetters } from '../../hooks/useSetters/types'
import { ITodosGet, ITodosSetState } from '../../api/interfaces'
import API from '../../api'
import { AppDispatch } from '../types'
import { actions } from '.'
import { actions as userActions } from '../userReducer'

const TodosThunk = (setters: ISetters) => {

  const { setLoading } = setters

  const getTodos = (props: ITodosGet) => async (dispatch: AppDispatch) => {
    setLoading(true)
    const response = await API.Todos.get(props)
    switch (response.status) {
      case 200:
        setLoading(false)
        dispatch(actions.setTodos({
          todos: response.data.todos,
        }))
        break
      case 401:
        dispatch(userActions.logout())
        break
      default:
        setLoading(false)
    }
  }

  const setTodoState = (props: ITodosSetState) => async (dispatch: AppDispatch) => {
    setLoading(true)
    const response = await API.Todos.setTodoState(props)
    switch (response.status) {
      case 200:
        setLoading(false)
        dispatch(actions.toggleTodoState({
          id: props.id,
        }))
        break
      case 401:
        dispatch(userActions.logout())
        break
      default:
        setLoading(false)
    }
  }

  return {
    getTodos,
    setTodoState,
  }
}

export default TodosThunk
