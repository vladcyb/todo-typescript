import Todos from './Todos'
import CenterColumn from '../../ui/components/CenterColumn'
import { useLayoutEffect } from 'react'
import { useAppDispatch } from '../../store'
import todos from '../../assets/todos.json'
import { actions as todosActions } from '../../store/todosReducer'


function TodosPage() {

  /* hooks */
  const dispatch = useAppDispatch()
  useLayoutEffect(() => {
    dispatch(todosActions.setTodos({ todos }))
    // eslint-disable-next-line
  }, [])

  return (
    <CenterColumn>
      <Todos />
    </CenterColumn>
  )
}

export default TodosPage
