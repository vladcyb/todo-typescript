import { Box, Button, Card, TextField } from '@material-ui/core'
import useField from '../../../hooks/useField'
import './s.scss'
import { useSetters } from '../../../hooks/useSetters'
import UserThunk from '../../../store/userReducer/thunk'
import { useAppDispatch } from '../../../store'


function RegisterForm() {

  /* hooks */
  const username = useField()
  const password = useField()
  const repeatedPassword = useField()
  const dispatch = useAppDispatch()

  /* thunk */
  const [getters, setters] = useSetters()
  const thunk = UserThunk(setters)

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
          {...username}
          fullWidth
          error={!!getters.errors?.username}
          helperText={getters.errors?.username || ' '}
        />
        <TextField
          type="password"
          label="Password"
          {...password}
          fullWidth
          error={!!getters.errors?.password}
          helperText={getters.errors?.password || ' '}
        />
        <TextField
          type="password"
          label="Repeat password"
          {...repeatedPassword}
          fullWidth
          error={!!getters.errors?.repeatedPassword}
          helperText={getters.errors?.repeatedPassword || ' '}
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
