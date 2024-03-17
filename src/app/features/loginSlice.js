import { createSlice } from '@reduxjs/toolkit'



export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        value: ["",""],
    },
    reducers: {
        username: (state, action) => {
            state.value[0] = action.payload
        },
        password: (state, action) => {
            state.value[1] = action.payload
        },
    },
})

export const { username, password,  } = loginSlice.actions

export default loginSlice.reducer
