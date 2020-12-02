import { FC } from 'react'
import useField from '../../../hooks/useField'
import './s.scss'
import { Box, Button, Card, TextField } from '@material-ui/core'


const LoginForm: FC = () => {

  /* methods */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(login.value, password.value)
  }

  /* hooks */
  const login = useField()
  const password = useField()

  return (
    <Card className="LoginForm">
      <form onSubmit={handleSubmit} autoComplete="off">
        <Box mt={1}>
          <TextField label="Login" {...login} fullWidth />
        </Box>
        <Box mt={1}>
          <TextField type="password" label="Password" {...password} fullWidth />
        </Box>
        <Box mt={2}>
          <Button type="submit" variant="contained" fullWidth color="primary">
            Login
          </Button>
        </Box>
      </form>
    </Card>
  )
}

export default LoginForm
