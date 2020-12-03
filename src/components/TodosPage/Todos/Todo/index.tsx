import { FC } from 'react'
import { TodoType } from '../../../../store/todosReducer/types'
import { Box, Card, CircularProgress, IconButton } from '@material-ui/core'
import './s.scss'
import { Cancel, Delete, Done } from '@material-ui/icons'
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
  })

  return (
    <Box className={classes} mt={1}>
      <Card className="Todo__card">
        <div className="Todo__text">
          <div className="Todo__title">{todo.title}</div>
          <div className="Todo__description">{todo.description}</div>
        </div>
        <div className="Todo__actions">
          <IconButton size="small">
            <Delete fontSize="small" />
          </IconButton>
          {getters.loading ? (
            <div><CircularProgress size="30px" /></div>
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
        </div>
      </Card>
    </Box>
  )
}

export default Todo
