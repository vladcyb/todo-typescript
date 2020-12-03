import { Dispatch, SetStateAction } from 'react'

export type ReturnedType = {
  get: StateType
  set: Dispatch<SetStateAction<StateType>>
  props: {
    open: boolean
    onClose: () => void
  }
}

export type StateType = {
  id: string
  title: string
}
