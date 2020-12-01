import { useState } from 'react'

type ReturnedType = {
  value: string
  onChange: (e: React.ChangeEvent<any>) => void
}

const useField = (initialState = ''): ReturnedType => {

  const [value, setValue] = useState(initialState)

  const onChange = (e: React.ChangeEvent<any>) => {
    setValue(e.target.value)
  }

  return {
    value,
    onChange,
  }
}

export default useField
