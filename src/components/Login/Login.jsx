import { useState } from "react"
import "./Login.css"
import { useSelector, useDispatch } from 'react-redux'

import { username, password } from '../../app/features/loginSlice'

export default function Login() {

    const count = useSelector((state) => state.counter.value)
    const login = useSelector((state) => state.login.value)
    const dispatch = useDispatch()

    return(
        <div className="Login">
            <h1>Welcome to the login page</h1>

            <div className="inputs">
                <input type="text" placeholder="username" onChange={(e) => dispatch(username(e.target.value))}/>
                <input type="password" placeholder="password" onChange={(e) => dispatch(password(e.target.value))}/>
            </div>

            <div className="btn">
                <button>LOGIN</button>
            </div>

            <div className="test">
                <p>redux</p>
                <p>{login[0]}   {login[1]}</p>
            </div>

        </div>
    )
}