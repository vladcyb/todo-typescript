import { useSelector } from 'react-redux'
import { getUser } from '../../store/userReducer/selectors'
import { Redirect } from 'react-router-dom'


function IndexPage() {

  /* hooks */
  const { token } = useSelector(getUser)

  return (
    <Redirect to={token ? '/todosReducer' : '/login'} />
  )
}

export default IndexPage
