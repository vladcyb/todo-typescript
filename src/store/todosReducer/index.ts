import { AddTodoPayloadType, SetTodosPayloadType, TodoType } from './types'
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
  },
})

export const { actions } = todosSlice
