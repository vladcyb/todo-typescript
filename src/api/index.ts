import {
  IThemeGet,
  IThemeSetBg,
  IThemeSetDarkMode,
  ITodosAdd,
  ITodosDelete,
  ITodosDeleteDone,
  ITodosGet,
  ITodosSetState,
  IUserLogin,
  IUserRegister,
} from './interfaces'
import instance from './axios'
import Responses from './methods/Responses'

const getAuthConfig = (token: string) => {
  return { headers: { Authorization: token } }
}

const API = {
  User: {
    login: async (props: IUserLogin) => {
      return await Responses(
        instance.post('/login', props),
      )
    },
    register: async (props: IUserRegister) => {
      return await Responses(
        instance.post('/register', props),
      )
    },
  },
  Todos: {
    get: async (props: ITodosGet) => {
      return await Responses(
        instance.get('/todos', getAuthConfig(props.token)),
      )
    },
    add: async (props: ITodosAdd) => {
      const { token, title, description } = props
      return await Responses(
        instance.post('/addTodo', {
          title,
          description,
        }, getAuthConfig(token)),
      )
    },
    setTodoState: async (props: ITodosSetState) => {
      return await Responses(
        instance.post('/setDone', {
          id: props.id,
          done: props.done,
        }, getAuthConfig(props.token)),
      )
    },
    delete: async (props: ITodosDelete) => {
      return await Responses(
        instance.delete('/deleteTodo', {
          ...getAuthConfig(props.token),
          data: {
            id: props.id,
          },
        }),
      )
    },
    deleteDone: async (props: ITodosDeleteDone) => {
      return await Responses(
        instance.delete('/delDone', getAuthConfig(props.token)),
      )
    },
  },
  Theme: {
    get: async (props: IThemeGet) => {
      return await Responses(
        instance.get('/theme', getAuthConfig(props.token)),
      )
    },
    setBackgroundColor: async (props: IThemeSetBg) => {
      return await Responses(
        instance.post('/setBG', {
          bg: props.bg,
        }, getAuthConfig(props.token)),
      )
    },
    setDarkMode: async (props: IThemeSetDarkMode) => {
      return await Responses(
        instance.post('/setDarkMode', {
          darkMode: props.darkMode,
        }, getAuthConfig(props.token)),
      )
    },
  },
}

export default API
