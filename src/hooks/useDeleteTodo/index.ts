import { useState } from 'react'
import { ReturnedType, StateType } from './types'

const initialState: StateType = {
  id: '',
  title: '',
}

const useDeleteTodo = (): ReturnedType => {

  /* state */
  const [deletingTodo, setDeletingTodo] = useState(initialState)

  /* methods */
  const onClose = () => {
    setDeletingTodo({
      title: deletingTodo.title,
      id: initialState.id,
    })
  }

  return {
    get: deletingTodo,
    set: setDeletingTodo,
    props: {
      open: !!deletingTodo.id,
      onClose,
    },
  }
}

export default useDeleteTodo
