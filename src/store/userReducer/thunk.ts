import { AppDispatch } from '../types'
import API from '../../api'
import { IUserLogin } from '../../api/interfaces'
import { ISetters } from '../../hooks/useSetters/types'
import { actions } from '.'

const UserThunk = (setters: ISetters) => {

  const login = (props: IUserLogin) => async (dispatch: AppDispatch) => {
    setters.setErrors({})
    if (!props.username) {
      return setters.setErrors({
        username: 'Enter username',
      })
    }
    if (!props.password) {
      return setters.setErrors({
        password: 'Enter password',
      })
    }
    setters.setLoading(true)
    const response = await API.User.login(props)

    switch (response.status) {
      case 400:
      case 401:
        setters.setLoading(false)
        const { errors } = response.data
        if (errors) {
          setters.setErrors(errors)
        }
        break
      case 200:
        dispatch(actions.setToken({
          token: `Bearer ${response.data.token}`,
        }))
        break
      default:
        setters.setLoading(false)
    }
  }


  return {
    login,
  }
}

export default UserThunk
