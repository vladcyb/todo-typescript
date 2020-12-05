import { createAction } from '@reduxjs/toolkit'

const logout = createAction('LOGOUT')

const globalActions = {
  logout,
}

export default globalActions
