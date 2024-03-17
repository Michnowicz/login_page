import { createSlice } from '@reduxjs/toolkit'
import { useNavigate } from "react-router-dom";


export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        value: {
            username: "",
            usernameCheck: false,
            password: "",
            passwordCheck: false,
            user: ["dummy", "test"],
        },
    },
    reducers: {
        username: (state, action) => {
            state.value.username = action.payload
        },
        password: (state, action) => {
            state.value.password = action.payload
        },
        userCheck: (state) => {
            if (state.value.username == state.value.user[0]) {
                state.value.usernameCheck = true
            }
            if (state.value.password == state.value.user[1]) {
                state.value.passwordCheck = true
            }
        },
    },
})

export const { username, password, userCheck } = loginSlice.actions

export default loginSlice.reducer
