import { FC } from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'
import { getTodos } from '../../../store/todosReducer/selectors'
import { Box, Button, Card, TextField } from '@material-ui/core'
import useField from '../../../hooks/useField'
import './s.scss'


const Todos: FC = () => {

  /* props */
  const todos = useSelector(getTodos)

  /* hooks */
  const title = useField()
  const description = useField()

  /* methods */
  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(title.value, description.value)
  }

  return (
    <Card variant="outlined" color="primary" className="Todos">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
      <form onSubmit={handleAddTodo}>
        <Box mt={2}>
          <TextField label="Title" fullWidth {...title} />
        </Box>
        <Box mt={1}>
          <TextField label="Description" multiline rows={4} fullWidth {...description} />
        </Box>
        <Box mt={2}>
          <Button type="submit" variant="outlined" color="primary" fullWidth>Add</Button>
        </Box>
      </form>
    </Card>
  )
}

export default Todos
