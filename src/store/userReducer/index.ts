import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SetTokenPayloadType, SetUsernamePayloadType } from './types'

const initialState = {
  username: '',
  token: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, { payload }: PayloadAction<SetTokenPayloadType>) => {
      state.token = payload.token
    },
    setUsername: (state, { payload }: PayloadAction<SetUsernamePayloadType>) => {
      state.username = payload.username
    },
    logout: (state) => {
      state.token = ''
    }
  },
})

export const { actions } = userSlice
