import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SetTokenAndUsernamePayloadType } from './types'
import globalActions from '../globalActions'

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(globalActions.logout, () => {
        return initialState
      })
  },
})

export const { actions } = userSlice
