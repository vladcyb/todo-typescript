import { FC, useState } from 'react'
import classNames from 'classnames'
import './s.scss'


type T = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string
  label?: string
}

const Field: FC<T> = (props) => {

  /* state */
  const [focused, setFocused] = useState(false)

  /* props */
  const { type = 'text', className, name, label, ...all } = props

  /* classes */
  const classes = classNames('Field', {
    Field_focused: focused,
  }, className)

  /* methods */
  const handleFocus = () => {
    setFocused(true)
  }

  const handleBlur = () => {
    setFocused(false)
  }

  return (
    <div className={classes}>
      <label htmlFor={name}>{label}</label>
      <input
        className="Field__input"
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        name={name}
        {...all}
      />
    </div>
  )

}

export default Field
