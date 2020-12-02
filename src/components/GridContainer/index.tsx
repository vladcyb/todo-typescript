import { Grid } from '@material-ui/core'
import React, { FC } from 'react'
import classNames from 'classnames'

type T = {
  className?: string
}

const GridContainer: FC<T> = (props) => {

  /* props */
  const { className, children } = props

  /* classes */
  const classes = classNames(className)

  return (
    <Grid
      className={classes}
      container
      justify="center"
      wrap="nowrap"
    >
      {children}
    </Grid>
  )
}

export default GridContainer
