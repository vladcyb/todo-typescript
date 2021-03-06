import { FC } from 'react'
import useField from '../../../hooks/useField'
import './s.scss'
import { Box, Button, Card, Link, TextField } from '@material-ui/core'
import { useAppDispatch } from '../../../store'
import UserThunk from '../../../store/userReducer/thunk'
import { useSetters } from '../../../hooks/useSetters'
import { Link as ReactLink } from 'react-router-dom'
import routes from '../../../routes'


const LoginForm: FC = () => {

  /* thunk */
  const [getters, setters] = useSetters()
  const thunk = UserThunk(setters)

  /* methods */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(thunk.login({
      username: username.props.value,
      password: password.props.value,
    }))
  }

  /* hooks */
  const username = useField('username', getters, setters)
  const password = useField('password', getters, setters)
  const dispatch = useAppDispatch()

  /* vars */
  const isDisabled = getters.loading

  return (
    <Card className="LoginForm">
      <form onSubmit={handleSubmit} autoComplete="off">
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
        <Box mt={1}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
            disabled={isDisabled}
          >
            Login
          </Button>
        </Box>
      </form>
      <Box mt={2} textAlign="center">
        <Link component={ReactLink} to={routes.register.root}>
          Register
        </Link>
      </Box>
    </Card>
  )
}

export default LoginForm
