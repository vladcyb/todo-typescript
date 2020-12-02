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
  }

  return [getters, setters]
}
