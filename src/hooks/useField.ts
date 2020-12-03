import { useState } from 'react'
import { IGetters, ISetters } from './useSetters/types'

type ReturnedType = {
  props: {
    value: string
    onChange: (e: React.ChangeEvent<any>) => void
    error: boolean
    helperText: string
  }
  reset: () => void
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
    setters.clearFieldError(name)
    setValue(e.target.value)
  }

  /* vars */
  const { errors = {} } = getters

  return {
    props: {
      value,
      onChange,
      error: !!errors[name],
      helperText: errors[name] || ' ',
    },
    reset: () => {
      setValue('')
    },
  }
}

export default useField
