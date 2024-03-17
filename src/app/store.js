import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import loginSlice from './features/loginSlice'

export default configureStore({
    reducer: {
        counter : counterReducer,
        login : loginSlice,
    },
})