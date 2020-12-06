import { useSelector } from 'react-redux'
import { getToken } from '../../store/userReducer/selectors'
import { Redirect } from 'react-router-dom'
import routes from '../../routes'
import { FC } from 'react'


const IndexPage: FC = () => {

  /* hooks */
  const token = useSelector(getToken)

  return (
    <Redirect to={token ? routes.todos.root : routes.login.root} />
  )
}

export default IndexPage
