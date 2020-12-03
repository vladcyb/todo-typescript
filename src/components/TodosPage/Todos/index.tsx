import Todo from './Todo'
import { useSelector } from 'react-redux'
import { getTodos } from '../../../store/todosReducer/selectors'
import { Box, Button, Card, TextField } from '@material-ui/core'
import useField from '../../../hooks/useField'
import './s.scss'
import { useSetters } from '../../../hooks/useSetters'
import { useAppDispatch } from '../../../store'
import TodosThunk from '../../../store/todosReducer/thunk'
import { getUser } from '../../../store/userReducer/selectors'


function Todos() {

  /* props */
  const todos = useSelector(getTodos)

  /* hooks */
  const [fieldGetters, fieldSetters] = useSetters()
  const [, setters] = useSetters()
  const title = useField('title', fieldGetters, fieldSetters)
  const description = useField('description', fieldGetters, fieldSetters)
  const dispatch = useAppDispatch()
  const { token } = useSelector(getUser)

  /* thunk */
  const thunk = TodosThunk(setters)

  /* methods */
  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(thunk.addTodo({
      token,
      title: title.props.value,
      description: description.props.value,
    }))
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
            value={title.props.value}
            onChange={title.props.onChange}
          />
        </Box>
        <Box mt={1}>
          <TextField
            label="Description"
            multiline
            rows={4}
            fullWidth
            value={description.props.value}
            onChange={description.props.onChange}
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
