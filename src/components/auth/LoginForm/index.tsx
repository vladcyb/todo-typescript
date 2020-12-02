import { FC, useEffect } from 'react'
import useField from '../../../hooks/useField'
import './s.scss'
import { Box, Button, Card, TextField } from '@material-ui/core'
import { useAppDispatch } from '../../../store'
import UserThunk from '../../../store/userReducer/thunk'
import { useSetters } from '../../../hooks/useSetters'
import { useSelector } from 'react-redux'
import { getUser } from '../../../store/userReducer/selectors'
import { useHistory } from 'react-router-dom'

const LoginForm: FC = () => {

  /* thunk */
  const [getters, setters] = useSetters()
  const thunk = UserThunk(setters)

  /* methods */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(thunk.login({
      username: username.value,
      password: password.value,
    }))
  }

  /* hooks */
  const username = useField('username', getters, setters)
  const password = useField('password', getters, setters)
  const dispatch = useAppDispatch()
  const history = useHistory()
  const { token } = useSelector(getUser)

  useEffect(() => {
    if (token) {
      history.replace('/todos')
    }
    // eslint-disable-next-line
  }, [token])

  /* vars */
  const isDisabled = getters.loading

  return (
    <Card className="LoginForm">
      <form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          label="Username"
          fullWidth
          {...username}
        />
        <TextField
          type="password"
          label="Password"
          fullWidth
          {...password}
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
    </Card>
  )
}

export default LoginForm
