import * as axios from 'axios'

const instance = axios.default.create({
  baseURL: 'http://localhost:5000',
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default instance
