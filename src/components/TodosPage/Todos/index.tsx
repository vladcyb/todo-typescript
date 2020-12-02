import { FC } from 'react'
import { TodoType } from '../../../store/todosReducer/types'
import Todo from './Todo'

type T = {
  todos: TodoType[]
}

const Todos: FC<T> = (props) => {

  /* props */
  const { todos } = props

  return (
    <div className="Todos">
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  )
}

export default Todos
