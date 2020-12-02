import Todos from './Todos'
import { useEffect } from 'react'
import { useAppDispatch } from '../../store'
import { Box, Button, Grid } from '@material-ui/core'
import { actions as userActions } from '../../store/userReducer'
import './s.scss'
import GridContainer from '../GridContainer'
import { useSetters } from '../../hooks/useSetters'
import TodosThunk from '../../store/todosReducer/thunk'
import { useSelector } from 'react-redux'
import { getUser } from '../../store/userReducer/selectors'


function TodosPage() {

  /* thunk */
  const [, setters] = useSetters()
  const thunk = TodosThunk(setters)

  /* hooks */
  const dispatch = useAppDispatch()
  const { token } = useSelector(getUser)

  useEffect(() => {
    dispatch(thunk.getTodos({
      token,
    }))
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
