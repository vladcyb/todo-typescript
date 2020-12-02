import Todos from './Todos'
import { useLayoutEffect } from 'react'
import { useAppDispatch } from '../../store'
import todos from '../../assets/todos.json'
import { actions as todosActions } from '../../store/todosReducer'
import { Box, Button, Grid } from '@material-ui/core'
import { actions as userActions } from '../../store/userReducer'
import './s.scss'
import GridContainer from '../GridContainer'


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
    <>
      <Box className="LogoutButton" position="absolute">
        <Button onClick={handleLogout} color="secondary">
          Logout
        </Button>
      </Box>
      <GridContainer className="TodosPage">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Todos />
        </Grid>
      </GridContainer>
    </>
  )
}

export default TodosPage
