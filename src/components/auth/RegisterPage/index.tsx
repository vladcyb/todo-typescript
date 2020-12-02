import RegisterForm from '../RegisterForm'
import { Grid } from '@material-ui/core'

function RegisterPage() {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <RegisterForm />
    </Grid>
  )
}

export default RegisterPage
