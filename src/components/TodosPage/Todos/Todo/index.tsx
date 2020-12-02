import { FC } from 'react'
import { TodoType } from '../../../../store/todosReducer/types'
import { Box, Card, CircularProgress, Grid, IconButton } from '@material-ui/core'
import './s.scss'
import { Cancel, Done } from '@material-ui/icons'
import classNames from 'classnames'
import { useSetters } from '../../../../hooks/useSetters'
import { useAppDispatch } from '../../../../store'
import TodosThunk from '../../../../store/todosReducer/thunk'
import { useSelector } from 'react-redux'
import { getUser } from '../../../../store/userReducer/selectors'

type T = {
  todo: TodoType
}

const Todo: FC<T> = (props) => {

  /* hooks */
  const dispatch = useAppDispatch()
  const { token } = useSelector(getUser)

  /* props */
  const { todo } = props

  /* thunk */
  const [getters, setters] = useSetters()
  const thunk = TodosThunk(setters)

  /* methods */
  const toggle = () => {
    dispatch(thunk.setTodoState({
      id: todo.id,
      token: token,
      done: !todo.done,
    }))
  }

  /* classes */
  const classes = classNames('Todo', {
    Todo_done: todo.done,
    Todo_loading: getters.loading,
  })

  return (
    <Box className={classes} mt={1}>
      <Card className="Todo__card">
        <Grid container spacing={6} justify="space-between" alignItems="center" wrap="nowrap">
          <Grid item xs={11}>
            <div className="Todo__title">{todo.title}</div>
            <div className="Todo__description">{todo.description}</div>
          </Grid>
          <Grid className="Todo__mark" item xs={1}>
            {getters.loading ? (
              <div><CircularProgress /></div>
            ) : (
              todo.done ? (
                <IconButton className="Todo__toggle" onClick={toggle}>
                  <Done className="Todo__doneIcon" fontSize="large" />
                </IconButton>
              ) : (
                <IconButton className="Todo__toggle" onClick={toggle}>
                  <Cancel className="Todo__notDoneIcon" fontSize="large" />
                </IconButton>
              )
            )}
          </Grid>
        </Grid>
      </Card>
    </Box>
  )
}

export default Todo
