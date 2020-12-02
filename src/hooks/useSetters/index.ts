import { useState } from 'react'
import { IGetters, ISetters, SettersConfigType } from './types'
import { useHistory } from 'react-router-dom'


export const useSetters = (config: SettersConfigType = {}): [IGetters, ISetters] => {

  /* state */
  const [loading, setLoading] = useState(config.initialLoading || false)
  const [data, setData] = useState(config.initialData)
  const [errors, setErrors] = useState(config.initialErrors || {})

  /* hooks */
  const history = useHistory()

  /* methods */
  const clearFieldError = (name: string) => {
    const newErrors = { ...errors }
    delete newErrors[name]
    setErrors(newErrors)
  }

  /* getters */
  const getters: IGetters = {
    data,
    loading,
    errors,
  }

  /* setters */
  const setters: ISetters = {
    setData,
    setLoading,
    setErrors,
    history,
    clearFieldError,
  }

  return [getters, setters]
}
