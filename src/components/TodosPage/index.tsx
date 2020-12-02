import Todos from './Todos'
import { useLayoutEffect } from 'react'
import { useAppDispatch } from '../../store'
import todos from '../../assets/todos.json'
import { actions as todosActions } from '../../store/todosReducer'
import { Grid } from '@material-ui/core'


function TodosPage() {

  /* hooks */
  const dispatch = useAppDispatch()
  useLayoutEffect(() => {
    dispatch(todosActions.setTodos({ todos }))
    // eslint-disable-next-line
  }, [])

  return (
    <Grid item xs={12} sm={8} md={6} lg={4}>
      <Todos />
    </Grid>
  )
}

export default TodosPage
