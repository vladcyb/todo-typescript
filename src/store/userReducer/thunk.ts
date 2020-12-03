import { AppDispatch } from '../types'
import API from '../../api'
import { IUserLogin, IUserRegister } from '../../api/interfaces'
import { ISetters } from '../../hooks/useSetters/types'
import { actions } from '.'
import routes from '../../routes'

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
        setters.setErrors(errors)
        break
      case 200:
        dispatch(actions.setTokenAndUsername({
          token: `Bearer ${response.data.token}`,
          username: props.username,
        }))
        break
      default:
        setters.setLoading(false)
    }
  }

  const register = (props: IUserRegister) => async () => {
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
    if (!props.repeatedPassword) {
      return setters.setErrors({
        repeatedPassword: 'Enter password',
      })
    }
    if (props.password !== props.repeatedPassword) {
      return setters.setErrors({
        repeatedPassword: 'Passwords do not match',
      })
    }
    setters.setLoading(true)
    const response = await API.User.register(props)
    switch (response.status) {
      case 400:
      case 401:
        setters.setLoading(false)
        const { errors } = response.data
        setters.setErrors(errors)
        break
      case 200:
        setters.setLoading(false)
        setters.history.replace(routes.login.root)
        break
      default:
        setters.setLoading(false)
    }
  }


  return {
    login,
    register,
  }
}

export default UserThunk
