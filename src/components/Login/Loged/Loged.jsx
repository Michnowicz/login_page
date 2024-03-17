import "./Loged.css"
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom"

export default function Loged() {

    const login = useSelector((state)=> state.login.value)

    return(
        <div className="Loged">
            <h1>Welcome {login.username}</h1>
            <Link to="/"><button>BACK</button></Link>
        </div>
    )
}