import { Grid } from '@material-ui/core'
import { FC } from 'react'

const CenterColumn: FC = (props) => {

  /* props */
  const { children } = props

  return (
    <Grid item xs={12} sm={8} md={6} lg={4}>
      {children}
    </Grid>
  )
}

export default CenterColumn
