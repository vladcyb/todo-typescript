import { ISetters } from '../../hooks/useSetters/types'
import { ITodosAdd, ITodosDelete, ITodosDeleteDone, ITodosGet, ITodosSetState } from '../../api/interfaces'
import API from '../../api'
import { AppDispatch } from '../types'
import { actions } from '.'
import globalActions from '../globalActions'

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
        dispatch(globalActions.logout())
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
        dispatch(globalActions.logout())
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
        dispatch(globalActions.logout())
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
        dispatch(globalActions.logout())
        break
      default:
        setLoading(false)
    }
  }

  const deleteDone = (props: ITodosDeleteDone) => async (dispatch: AppDispatch) => {
    setLoading(true)
    const response = await API.Todos.deleteDone(props)
    switch (response.status) {
      case 200:
        setLoading(false)
        dispatch(actions.setTodos({
          todos: response.data.res,
        }))
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
    deleteDone,
  }
}

export default TodosThunk
