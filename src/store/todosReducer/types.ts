export type TodoType = {
  id: string
  title: string
  description: string
  done: boolean
}

export type TodoWithoutIdType = {
  title: string
  description: string
  done: boolean
}

export type SetTodosPayloadType = {
  todos: TodoType[]
}

export type AddTodoPayloadType = {
  todo: TodoType
}

export type SetTodoStatePayloadType = {
  id: string
}
