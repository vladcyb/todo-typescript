import { RootState } from '../types'

export const getToken = (state: RootState) => state.user.token
export const getUsername = (state: RootState) => state.user.username
