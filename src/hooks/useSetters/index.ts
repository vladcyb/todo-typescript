import { useState } from 'react'
import { IGetters, ISetters, SettersConfigType } from './types'


export const useSetters = (config: SettersConfigType = {}): [IGetters, ISetters] => {

  /* state */
  const [loading, setLoading] = useState(config.initialLoading || false)
  const [data, setData] = useState(config.initialData)
  const [errors, setErrors] = useState(config.initialErrors || {})

  const getters: IGetters = {
    data,
    loading,
    errors,
  }

  const setters: ISetters = {
    setData,
    setLoading,
    setErrors,
  }

  return [getters, setters]
}
