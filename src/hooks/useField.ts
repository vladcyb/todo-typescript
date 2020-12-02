import { useState } from 'react'
import { IGetters, ISetters } from './useSetters/types'

type ReturnedType = {
  value: string
  onChange: (e: React.ChangeEvent<any>) => void
  error: boolean
  helperText: string
}

const useField = (
  name: string,
  getters: IGetters,
  setters: ISetters,
  initialValue = '',
): ReturnedType => {

  /* state */
  const [value, setValue] = useState(initialValue)

  /* methods */
  const onChange = (e: React.ChangeEvent<any>) => {
    setters.setErrors({})
    setValue(e.target.value)
  }

  /* vars */
  const { errors = {} } = getters

  return {
    value,
    onChange,
    error: !!errors[name],
    helperText: errors[name] || ' ',
  }
}

export default useField
