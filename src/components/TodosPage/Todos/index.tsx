import Todo from './Todo'
import { useSelector } from 'react-redux'
import { getTodos } from '../../../store/todosReducer/selectors'
import { Box, Button, Card, TextField } from '@material-ui/core'
import useField from '../../../hooks/useField'
import './s.scss'
import { useSetters } from '../../../hooks/useSetters'


function Todos() {

  /* props */
  const todos = useSelector(getTodos)

  /* hooks */
  const [getters, setters] = useSetters()
  const title = useField('title', getters, setters)
  const description = useField('description', getters, setters)

  /* methods */
  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <Card className="Todos" variant="outlined" color="primary">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
      <form onSubmit={handleAddTodo}>
        <Box mt={2}>
          <TextField
            label="Title"
            fullWidth
            value={title.value}
            onChange={title.onChange}
          />
        </Box>
        <Box mt={1}>
          <TextField
            label="Description"
            multiline
            rows={4}
            fullWidth
            value={description.value}
            onChange={description.onChange}
          />
        </Box>
        <Box mt={2}>
          <Button type="submit" variant="outlined" color="primary" fullWidth>Add</Button>
        </Box>
      </form>
    </Card>
  )
}

export default Todos
