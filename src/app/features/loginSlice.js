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
            message:["",""]
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
                state.value.message[0] = ""
            } else {
                state.value.message[0] = "wrong username"
            }
            if (state.value.password == state.value.user[1]) {
                state.value.passwordCheck = true
                state.value.message[1] = ""
            } else {
                state.value.message[1] = "wrong password"
            }
        },
    },
})

export const { username, password, userCheck } = loginSlice.actions

export default loginSlice.reducer
