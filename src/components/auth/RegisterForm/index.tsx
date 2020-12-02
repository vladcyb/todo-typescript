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
  }

  return (
    <Card className="RegisterForm">
      <form className="" onSubmit={handleSubmit} autoComplete="off">
        <Box mt={1}>
          <TextField label="Login" {...login} fullWidth />
        </Box>
        <Box mt={1}>
          <TextField type="password" label="Password" {...password} fullWidth />
        </Box>
        <Box mt={1}>
          <TextField type="password" label="Repeat password" {...repeatedPassword} fullWidth />
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
