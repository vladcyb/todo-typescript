import { ISetters } from '../../hooks/useSetters/types'
import { ITodosGet, ITodosSetState } from '../../api/interfaces'
import API from '../../api'
import { AppDispatch } from '../types'
import { actions } from '.'

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
      default:
        setLoading(false)
    }
  }

  const setTodoState = (props: ITodosSetState) => async (dispatch: AppDispatch) => {
    setLoading(true)
    const response = await API.Todos.setTodoState(props)
  }

  return {
    getTodos,
  }
}

export default TodosThunk
