import { Grid } from '@material-ui/core'
import { FC } from 'react'

const CennterColumn: FC = (props) => {

  /* props */
  const { children } = props

  return (
    <Grid sm={6} md={4} lg={3} xl={2} xs={12}>
      {children}
    </Grid>
  )
}

export default CennterColumn
