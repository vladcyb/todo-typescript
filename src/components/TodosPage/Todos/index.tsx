import Todo from './Todo'
import { useSelector } from 'react-redux'
import { getTodos } from '../../../store/todosReducer/selectors'
import { Box, Button, Card, TextField } from '@material-ui/core'
import useField from '../../../hooks/useField'
import './s.scss'
import { useSetters } from '../../../hooks/useSetters'
import { useAppDispatch } from '../../../store'
import TodosThunk from '../../../store/todosReducer/thunk'
import { getToken } from '../../../store/userReducer/selectors'

function Todos() {

  /* props */
  const todos = useSelector(getTodos)

  /* hooks */
  const [getters, setters] = useSetters()
  const title = useField('title', getters, setters)
  const description = useField('description', getters, setters)
  const dispatch = useAppDispatch()
  const token = useSelector(getToken)

  /* thunk */
  const thunk = TodosThunk(setters)

  /* vars */
  const isSubmitDisabled = getters.loading || (!title.props.value && !description.props.value)

  /* methods */
  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isSubmitDisabled) {
      dispatch(thunk.addTodo({
        token,
        title: title.props.value,
        description: description.props.value,
      }, () => {
        title.reset()
        description.reset()
      }))
    }
  }

  const handleDeleteDone = () => {
    dispatch(thunk.deleteDone({
      token,
    }))
  }

  return (
    <Card className="Todos" variant="outlined" color="primary">
      <Button onClick={handleDeleteDone}>Delete done todos</Button>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
      <form onSubmit={handleAddTodo}>
        <Box mt={2}>
          <TextField
            label="Title"
            fullWidth
            {...title.props}
          />
        </Box>
        <Box mt={1}>
          <TextField
            label="Description"
            multiline
            rows={4}
            fullWidth
            {...description.props}
          />
        </Box>
        <Box mt={2}>
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            fullWidth
            disabled={isSubmitDisabled}
          >
            Add
          </Button>
        </Box>
      </form>
    </Card>
  )
}

export default Todos
