import { FC } from 'react'
import { TodoWithoutIdType } from '../../../../store/todosReducer/types'
import { Box, Card } from '@material-ui/core'
import './s.scss'


const Todo: FC<TodoWithoutIdType> = (props) => {

  /* props */
  const { title, description } = props

  return (
    <Box className="Todo" mt={1}>
      <Card className="Todo__card">
        <div className="Todo__title">{title}</div>
        <div className="Todo__description">{description}</div>
      </Card>
    </Box>
  )
}

export default Todo
