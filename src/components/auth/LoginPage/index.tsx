import LoginForm from '../LoginForm'
import { Grid } from '@material-ui/core'
import GridContainer from '../../GridContainer'

function LoginPage() {

  return (
    <GridContainer>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <LoginForm />
      </Grid>
    </GridContainer>
  )
}

export default LoginPage
