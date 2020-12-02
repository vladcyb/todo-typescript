import { AddTodoPayloadType, SetTodosPayloadType, SetTodoStatePayloadType, TodoType } from './types'
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
  },
})

export const { actions } = todosSlice
