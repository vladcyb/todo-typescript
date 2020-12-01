import * as axios from 'axios'

const instance = axios.default.create({
  baseURL: 'https://awesome-todo-app-be.herokuapp.com',
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default instance
