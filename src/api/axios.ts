import * as axios from 'axios'

const instance = axios.default.create({
  baseURL: 'http://192.168.1.45:5000',
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default instance
