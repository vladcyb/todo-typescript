import Todos from './Todos'
import { useEffect } from 'react'
import { useAppDispatch } from '../../store'
import { Box, Button, Grid, Link } from '@material-ui/core'
import './s.scss'
import GridContainer from '../GridContainer'
import { useSetters } from '../../hooks/useSetters'
import TodosThunk from '../../store/todosReducer/thunk'
import { useSelector } from 'react-redux'
import { getToken, getUsername } from '../../store/userReducer/selectors'
import globalActions from '../../store/globalActions'


function TodosPage() {

  /* thunk */
  const [getters, setters] = useSetters({ initialLoading: true })
  const thunk = TodosThunk(setters)

  /* hooks */
  const dispatch = useAppDispatch()
  const token = useSelector(getToken)
  const username = useSelector(getUsername)

  useEffect(() => {
    dispatch(thunk.getTodos({
      token,
    }))
    // eslint-disable-next-line
  }, [])

  /* methods */
  const handleLogout = () => {
    dispatch(globalActions.logout())
  }

  return (
    <>
      <Box className="UserActions" position="absolute">
        <Link
          className="UserActions__username"
          underline="none"
          color="primary"
          display="block"
        >
          {username}
        </Link>
        <Button onClick={handleLogout} color="secondary">
          Logout
        </Button>
      </Box>
      {getters.loading ? (
        <Link className="TodosPageLoading" underline="none" color="secondary">
          Loading...
        </Link>
      ) : (
        <GridContainer className="TodosPage">
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <Todos />
          </Grid>
        </GridContainer>
      )}
    </>
  )
}

export default TodosPage
