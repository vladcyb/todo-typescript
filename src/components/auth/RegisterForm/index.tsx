import { Box, Button, Card, TextField } from '@material-ui/core'
import useField from '../../../hooks/useField'
import './s.scss'
import { useSetters } from '../../../hooks/useSetters'
import UserThunk from '../../../store/userReducer/thunk'
import { useAppDispatch } from '../../../store'


function RegisterForm() {

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
      username: username.value,
      password: password.value,
      repeatedPassword: repeatedPassword.value,
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
          error={!!getters.errors?.username}
          helperText={getters.errors?.username || ' '}
          value={username.value}
          onChange={username.onChange}
        />
        <TextField
          type="password"
          label="Password"
          fullWidth
          error={!!getters.errors?.password}
          helperText={getters.errors?.password || ' '}
          value={password.value}
          onChange={password.onChange}
        />
        <TextField
          type="password"
          label="Repeat password"
          fullWidth
          error={!!getters.errors?.repeatedPassword}
          helperText={getters.errors?.repeatedPassword || ' '}
          value={repeatedPassword.value}
          onChange={repeatedPassword.onChange}
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
    </Card>
  )
}

export default RegisterForm
