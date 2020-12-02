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
        instance.get('/todos', {
          headers: {
            Authorization: props.token,
          },
        }),
      )
    },
    add: async (props: ITodosAdd) => {
      return await Responses(
        instance.post('/addTodo', {
          ...props.todo,
        }, {
          headers: {
            Authorization: props.token,
          },
        }),
      )
    },
    setTodoState: async (props: ITodosSetState) => {
      return await Responses(
        instance.post('/setDone', {
          id: props.id,
          done: props.done,
        }, {
          headers: {
            Authorization: props.token,
          },
        }),
      )
    },
    delete: async (props: ITodosDelete) => {
      return await Responses(
        instance.delete('/deleteTodo', {
          headers: {
            Authorization: props.token,
          },
          data: {
            id: props.id,
          },
        }),
      )
    },
    deleteDone: async (props: ITodosDeleteDone) => {
      return await Responses(
        instance.delete('/delDone', {
          headers: {
            Authorization: props.token,
          },
        }),
      )
    },
  },
  Theme: {
    get: async (props: IThemeGet) => {
      return await Responses(
        instance.get('/theme', {
          headers: {
            Authorization: props.token,
          },
        }),
      )
    },
    setBackgroundColor: async (props: IThemeSetBg) => {
      return await Responses(
        instance.post('/setBG', {
          bg: props.bg,
        }, {
          headers: {
            Authorization: props.token,
          },
        }),
      )
    },
    setDarkMode: async (props: IThemeSetDarkMode) => {
      return await Responses(
        instance.post('/setDarkMode', {
          darkMode: props.darkMode,
        }, {
          headers: {
            Authorization: props.token,
          },
        }),
      )
    },
  },
}

export default API
