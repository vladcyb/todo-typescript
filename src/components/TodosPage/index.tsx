import Todos from './Todos'
import { useLayoutEffect } from 'react'
import { useAppDispatch } from '../../store'
import todos from '../../assets/todos.json'
import { actions as todosActions } from '../../store/todosReducer'
import { Button, Grid } from '@material-ui/core'
import { actions as userActions } from '../../store/userReducer'
import './s.scss'


function TodosPage() {

  /* hooks */
  const dispatch = useAppDispatch()
  useLayoutEffect(() => {
    dispatch(todosActions.setTodos({ todos }))
    // eslint-disable-next-line
  }, [])

  /* methods */
  const handleLogout = () => {
    dispatch(userActions.logout())
  }

  return (
    <Grid className="TodosPage" item xs={12} sm={8} md={6} lg={4}>
      <Button
        className="TodosPage__logout"
        onClick={handleLogout}
        color="secondary"
      >
        Logout
      </Button>
      <Todos />
    </Grid>
  )
}

export default TodosPage
