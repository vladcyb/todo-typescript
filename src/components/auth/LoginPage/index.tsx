import LoginForm from '../LoginForm'
import { Grid } from '@material-ui/core'

function LoginPage() {

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <LoginForm />
    </Grid>
  )
}

export default LoginPage
