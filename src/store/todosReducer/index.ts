import {
  AddTodoPayloadType,
  DeleteTodoPayloadType,
  SetTodosPayloadType,
  SetTodoStatePayloadType,
  TodoType,
} from './types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type StateType = TodoType[]

const initialState: StateType = []

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (todos, { payload }: PayloadAction<SetTodosPayloadType>) => {
      return payload.todos
    },
    addTodo: (todos, { payload }: PayloadAction<AddTodoPayloadType>) => {
      todos.push(payload.todo)
    },
    toggleTodoState: (todos, { payload }: PayloadAction<SetTodoStatePayloadType>) => {
      const found = todos.find((todo) => todo.id === payload.id)
      if (found) {
        found.done = !found.done
      }
    },
    deleteTodo: (todos, { payload }: PayloadAction<DeleteTodoPayloadType>) => {
      todos.splice(todos.findIndex((todo) => todo.id === payload.id), 1)
    },
  },
})

export const { actions } = todosSlice
