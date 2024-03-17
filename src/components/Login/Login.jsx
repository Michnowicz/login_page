import { useEffect } from "react"
import "./Login.css"
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom"

import { username, password, userCheck } from '../../app/features/loginSlice'


export default function Login() {

    const login = useSelector((state) => state.login.value)
    const dispatch = useDispatch()

    useEffect(()=>{
        console.log(`
        username: ${login.username}\n
        password: ${login.password}\n
        usernameCheck: ${login.usernameCheck}\n
        passwordCheck: ${login.passwordCheck}\n`);
    },[login])

    return(
        <div className="Login">
            <h1>Welcome to the login page</h1>

            <div className="inputs">
                <input type="text" placeholder="username" onChange={(e) => dispatch(username(e.target.value))}/>
                <p>wrong username</p>
                <input type="password" placeholder="password" onChange={(e) => dispatch(password(e.target.value))}/>
                <p>wrong password</p>
            </div>

            <div className="btn">
                {
                    (login.username == login.user[0]) & (login.password == login.user[1]) ?
                    <Link to="/loged"><button onClick={()=>dispatch(userCheck())}>OK</button></Link>
                    :
                    <button onClick={()=>dispatch(userCheck())}>LOGIN</button>
                }
                

            </div>

        </div>
    )
}