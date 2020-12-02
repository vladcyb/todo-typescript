import React, { FC } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { RouteProps } from 'react-router'


interface PrivateRoutePropsType extends RouteProps {
  condition: boolean
  redirectPath: string
}

const PrivateRoute: FC<PrivateRoutePropsType> = (props) => {

  /* props */
  const { children, condition, redirectPath, ...rest } = props

  return (
    <Route {...rest}>
      {condition ? children : <Redirect to={redirectPath} />}
    </Route>
  )
}

export default PrivateRoute
