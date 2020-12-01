import storage from 'redux-persist/lib/storage'
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import rootReducer from './rootReducer'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { AppDispatch } from './types'
import { useDispatch } from 'react-redux'


const persistConfig = {
  key: 'root',
  version: 1,
  whitelist: ['user'],
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
