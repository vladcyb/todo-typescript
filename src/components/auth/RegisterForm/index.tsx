import { Box, Button, Card, TextField } from '@material-ui/core'
import useField from '../../../hooks/useField'
import './s.scss'


function RegisterForm() {

  /* hooks */
  const login = useField()
  const password = useField()
  const repeatedPassword = useField()

  /* methods */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(login.value, password.value, repeatedPassword.value)
  }

  return (
    <Card className="RegisterForm">
      <form className="" onSubmit={handleSubmit} autoComplete="off">
        <Box mt={1}>
          <TextField className="RegisterForm__field" label="Login" {...login} fullWidth />
        </Box>
        <Box mt={1}>
          <TextField className="RegisterForm__field" label="Password" {...password} fullWidth />
        </Box>
        <Box mt={1}>
          <TextField className="RegisterForm__field" label="Repeat password" {...repeatedPassword} fullWidth />
        </Box>
        <Box mt={2}>
          <Button type="submit" variant="contained" fullWidth color="primary">
            Register
          </Button>
        </Box>
      </form>
    </Card>
  )
}

export default RegisterForm
