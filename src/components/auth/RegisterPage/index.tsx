import RegisterForm from '../RegisterForm'
import { Grid } from '@material-ui/core'
import GridContainer from '../../GridContainer'
import { FC } from 'react'


const RegisterPage: FC = () => (
  <GridContainer>
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <RegisterForm />
    </Grid>
  </GridContainer>
)

export default RegisterPage
