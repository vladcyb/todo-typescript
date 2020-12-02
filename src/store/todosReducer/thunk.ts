import { ISetters } from '../../hooks/useSetters/types'
import { ITodosGet } from '../../api/interfaces'
import API from '../../api'
import { AppDispatch } from '../types'
import { actions } from '.'

const TodosThunk = (setters: ISetters) => {

  const getTodos = (props: ITodosGet) => async (dispatch: AppDispatch) => {
    setters.setLoading(true)
    const response = await API.Todos.get(props)
    switch (response.status) {
      case 200:
        setters.setLoading(false)
        dispatch(actions.setTodos({
          todos: response.data.todos,
        }))
        break
      default:
        setters.setLoading(false)
    }
  }

  return {
    getTodos,
  }
}

export default TodosThunk
