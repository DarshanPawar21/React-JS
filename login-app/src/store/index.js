import { configureStore } from '@reduxjs/toolkit'
import signUpReducer from '../slices/sign_up'

export const store = configureStore({
  reducer: {
    sign_up: signUpReducer,
  },
})