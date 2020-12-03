import { Dispatch, SetStateAction } from 'react'

export type ReturnedType = {
  deletingTodo: StateType
  setDeletingTodo: Dispatch<SetStateAction<StateType>>
  props: {
    open: boolean
    onClose: () => void
  }
}

export type StateType = {
  id: string
  title: string
}
