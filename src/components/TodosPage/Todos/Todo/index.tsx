import { Dispatch, FC, SetStateAction } from 'react'
import { TodoType } from '../../../../store/todosReducer/types'
import { Box, Card, CircularProgress, Fade, IconButton } from '@material-ui/core'
import './s.scss'
import { Clear, Delete, Done } from '@material-ui/icons'
import classNames from 'classnames'
import { useSetters } from '../../../../hooks/useSetters'
import { useAppDispatch } from '../../../../store'
import TodosThunk from '../../../../store/todosReducer/thunk'
import { useSelector } from 'react-redux'
import { getToken } from '../../../../store/userReducer/selectors'
import { StateType as DeletingTodoType } from '../../../../hooks/useDeleteTodo/types'

type T = {
  todo: TodoType
  setDeletingTodo: Dispatch<SetStateAction<DeletingTodoType>>
}

const Todo: FC<T> = (props) => {

  /* hooks */
  const dispatch = useAppDispatch()
  const token = useSelector(getToken)

  /* props */
  const { todo, setDeletingTodo } = props

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

  const handleDeleteClick = () => {
    setDeletingTodo({
      id: todo.id,
      title: todo.title,
    })
  }

  /* classes */
  const classes = classNames('Todo', {
    Todo_done: todo.done,
  })

  return (
    <Fade in={true}>
      <Box className={classes} mt={1}>
        <Card className="Todo__card" elevation={1}>
          <div className="Todo__text">
            <div className="Todo__title">{todo.title}</div>
            <div className="Todo__description">{todo.description}</div>
          </div>
          <div className="Todo__actions">
            <IconButton size="small" onClick={handleDeleteClick}>
              <Delete fontSize="small" />
            </IconButton>
            {getters.loading ? (
              <div className="Todo__progress">
                <CircularProgress size="30px" />
              </div>
            ) : (
              todo.done ? (
                <IconButton className="Todo__toggle" onClick={toggle}>
                  <Done className="Todo__doneIcon" fontSize="large" />
                </IconButton>
              ) : (
                <IconButton className="Todo__toggle" onClick={toggle}>
                  <Clear className="Todo__notDoneIcon" fontSize="large" />
                </IconButton>
              )
            )}
          </div>
        </Card>
      </Box>
    </Fade>
  )
}

export default Todo
