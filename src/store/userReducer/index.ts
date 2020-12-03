import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SetTokenAndUsernamePayloadType } from './types'

const initialState = {
  username: '',
  token: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setTokenAndUsername: (state, { payload }: PayloadAction<SetTokenAndUsernamePayloadType>) => {
      state.token = payload.token
      state.username = payload.username
    },
    logout: () => initialState,
  },
})

export const { actions } = userSlice
