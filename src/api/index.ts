import { IUserLogin } from './interfaces/user'
import instance from './axios'
import Responses from './methods/Responses'

const API = {
  User: {
    login: async (props: IUserLogin) => {
      return await Responses(
        instance.post('/login', props)
      )
    }
  }
}

export default API
