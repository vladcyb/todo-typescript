import { FC } from 'react'
import { TodoWithoutIdType } from '../../../../store/todosReducer/types'
import { Box, Card, Grid, IconButton } from '@material-ui/core'
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

  /* methods */
  const toggle = () => {
    console.log('toggle')
  }


  return (
    <Box className={classes} mt={1}>
      <Card className="Todo__card">
        <Grid container spacing={6} justify="space-between" alignItems="center" wrap="nowrap">
          <Grid item xs={11}>
            <div className="Todo__title">{todo.title}</div>
            <div className="Todo__description">{todo.description}</div>
          </Grid>
          <Grid className="Todo__mark" item xs={1}>
            {todo.done ? (
              <IconButton className="Todo__toggle" onClick={toggle}>
                <Done className="Todo__doneIcon" fontSize="large" />
              </IconButton>
            ) : (
              <IconButton className="Todo__toggle" onClick={toggle}>
                <Cancel className="Todo__notDoneIcon" fontSize="large" />
              </IconButton>
            )}
          </Grid>
        </Grid>
      </Card>
    </Box>
  )
}

export default Todo
