import "./Login.css"
import { useSelector, useDispatch } from 'react-redux'

export default function Login() {

    const count = useSelector((state) => state.counter.value)

    return(
        <div className="Login">
            <h1>Login</h1>

            <div className="inputs">
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password" />
            </div>

            <div className="btn">
                <button></button>
            </div>

        </div>
    )
}