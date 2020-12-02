import { Dispatch, SetStateAction } from 'react'

export interface IGetters {
  data?: any
  loading: boolean
  errors?: ErrorsType
}

export interface ISetters {
  setData: Dispatch<SetStateAction<any>>
  setLoading: Dispatch<SetStateAction<boolean>>
  setErrors: Dispatch<SetStateAction<ErrorsType>>
}

export type ErrorsType = { [index: string]: string }

export type SettersConfigType = {
  initialLoading?: boolean
  initialData?: boolean
  initialErrors?: ErrorsType
}
