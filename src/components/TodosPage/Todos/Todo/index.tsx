import { FC } from 'react'
import { TodoWithoutIdType } from '../../../../store/todosReducer/types'
import { Box, Card, Grid } from '@material-ui/core'
import './s.scss'
import { Cancel, Done } from '@material-ui/icons'
import classNames from 'classnames'

type T = {
  todo: TodoWithoutIdType
}

const Todo: FC<T> = (props) => {

  /* props */
  const { todo } = props

  /* classes */
  const classes = classNames('Todo', {
    Todo_done: todo.done,
  })

  return (
    <Box className={classes} mt={1}>
      <Card className="Todo__card">
        <Grid container spacing={6} justify="space-between" alignItems="center" wrap="nowrap">
          <Grid item xs={11}>
            <div className="Todo__title">{todo.title}</div>
            <div className="Todo__description">{todo.description}</div>
          </Grid>
          <Grid item xs={1} className="Todo__mark">
            {todo.done ? (
              <Done className="Todo__doneIcon" fontSize="large" />
            ) : (
              <Cancel className="Todo__notDoneIcon" fontSize="large" />
            )}
          </Grid>
        </Grid>
      </Card>
    </Box>
  )
}

export default Todo
