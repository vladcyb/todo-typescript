import { Box, Button, Card, Link, TextField } from '@material-ui/core'
import useField from '../../../hooks/useField'
import './s.scss'
import { useSetters } from '../../../hooks/useSetters'
import UserThunk from '../../../store/userReducer/thunk'
import { useAppDispatch } from '../../../store'
import { Link as ReactLink } from 'react-router-dom'
import routes from '../../../routes'
import { FC } from 'react'


const RegisterForm: FC = () => {

  /* thunk */
  const [getters, setters] = useSetters()
  const thunk = UserThunk(setters)

  /* hooks */
  const username = useField('username', getters, setters)
  const password = useField('password', getters, setters)
  const repeatedPassword = useField('repeatedPassword', getters, setters)
  const dispatch = useAppDispatch()

  /* methods */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(thunk.register({
      username: username.props.value,
      password: password.props.value,
      repeatedPassword: repeatedPassword.props.value,
    }))
  }

  /* vars */
  const isDisabled = getters.loading

  return (
    <Card className="RegisterForm">
      <form className="" onSubmit={handleSubmit} autoComplete="off">
        <TextField
          label="Username"
          fullWidth
          {...username.props}
        />
        <TextField
          type="password"
          label="Password"
          fullWidth
          {...password.props}
        />
        <TextField
          type="password"
          label="Repeat password"
          fullWidth
          {...repeatedPassword.props}
        />
        <Box mt={2}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
            disabled={isDisabled}
          >
            Register
          </Button>
        </Box>
      </form>
      <Box mt={2} textAlign="center">
        <Link component={ReactLink} to={routes.login.root}>
          Login
        </Link>
      </Box>
    </Card>
  )
}

export default RegisterForm
