import Todo from './Todo'
import { useSelector } from 'react-redux'
import { getTodos } from '../../../store/todosReducer/selectors'
import { Box, Button, Card, Dialog, DialogActions, DialogTitle, TextField } from '@material-ui/core'
import useField from '../../../hooks/useField'
import './s.scss'
import { useSetters } from '../../../hooks/useSetters'
import { useAppDispatch } from '../../../store'
import TodosThunk from '../../../store/todosReducer/thunk'
import { getToken } from '../../../store/userReducer/selectors'
import useDeleteTodo from '../../../hooks/useDeleteTodo'
import React, { useState } from 'react'


function Todos() {

  /* props */
  const todos = useSelector(getTodos)

  /* hooks */
  const [getters, setters] = useSetters()
  const title = useField('title', getters, setters)
  const description = useField('description', getters, setters)
  const dispatch = useAppDispatch()
  const token = useSelector(getToken)
  const deletingTodo = useDeleteTodo()
  const [deleteAllTodosAttempt, setDeleteAllTodosAttempt] = useState(false)

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

  const handleDeleteDoneClick = () => {
    setDeleteAllTodosAttempt(true)
  }

  const deleteDone = () => {
    dispatch(thunk.deleteDone({ token }))
    setDeleteAllTodosAttempt(false)
  }

  const cancelDelete = () => {
    deletingTodo.props.onClose()
  }

  const deleteTodo = () => {
    dispatch(thunk.deleteTodo({
      token,
      id: deletingTodo.get.id,
    }))
    deletingTodo.props.onClose()
  }

  const cancelDeleteDone = () => {
    setDeleteAllTodosAttempt(false)
  }

  return (
    <Card className="Todos" variant="elevation" color="primary" elevation={5}>
      <Button onClick={handleDeleteDoneClick}>Delete done todos</Button>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} setDeletingTodo={deletingTodo.set} />
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
      <Dialog {...deletingTodo.props}>
        <DialogTitle>Delete {deletingTodo.get.title}?</DialogTitle>
        <DialogActions>
          <Button onClick={deleteTodo} color="secondary">Yes</Button>
          <Button onClick={cancelDelete}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={deleteAllTodosAttempt}
        onClose={cancelDeleteDone}
      >
        <DialogTitle>Delete all done TODOs?</DialogTitle>
        <DialogActions>
          <Button onClick={deleteDone} color="secondary">Yes</Button>
          <Button onClick={cancelDeleteDone}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Card>
  )
}

export default Todos
