import { FC } from 'react'
import Field from '../../../ui/components/Field'
import useField from '../../../hooks/useField'
import './s.scss'


const LoginForm: FC = () => {

  /* methods */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(username, password)
  }

  /* hooks */
  const username = useField()
  const password = useField()

  return (
    <form className="LoginForm" onSubmit={handleSubmit} autoComplete="off">
      <Field className="LoginForm__field" name="username" label="Username" {...username} />
      <Field className="LoginForm__field" name="password" label="Password" {...password} />
    </form>
  )
}

export default LoginForm
