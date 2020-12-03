import { ISetters } from '../../hooks/useSetters/types'
import { ITodosAdd, ITodosDelete, ITodosGet, ITodosSetState } from '../../api/interfaces'
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

  const addTodo = (props: ITodosAdd, onSuccess: () => void) => async (dispatch: AppDispatch) => {
    setLoading(true)
    const response = await API.Todos.add(props)
    switch (response.status) {
      case 200:
        setLoading(false)
        if (response.data.ok) {
          dispatch(actions.addTodo({
            todo: response.data.todo,
          }))
          onSuccess()
        }
        break
      case 401:
        setLoading(false)
        dispatch(userActions.logout())
        break
      default:
        setLoading(false)
    }
  }

  const deleteTodo = (props: ITodosDelete) => async (dispatch: AppDispatch) => {
    setLoading(true)
    const response = await API.Todos.delete(props)
    switch (response.status) {
      case 200:
        setLoading(false)
        dispatch(actions.deleteTodo({
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
    addTodo,
    deleteTodo,
  }
}

export default TodosThunk
