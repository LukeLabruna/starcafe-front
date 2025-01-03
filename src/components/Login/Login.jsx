import { useContext, useState } from "react"
import UserContext from "../../context/UserContext.jsx"
import { useNavigate } from "react-router-dom"
import api from "../../config/axiosConfig.js"
import showToast from "../../utils/swetAlert.js"
import Loading from "../Loading/Loading.jsx"
import "./Login.css"

const Login = () => {

    const { setIsAuth, setUser } = useContext(UserContext)

    const [bodyData, setBodyData] = useState({
        userName: null,
        password: null
    })

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleChange = (name, value) => {
        setBodyData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await api.post("/user/login", bodyData)
            setLoading(false)
            setIsAuth(true)
            setUser(response.data.data.user)
            showToast("Bienvenido", "success")
            navigate("/paneladmin")
        } catch (error) {
            setLoading(false)
            showToast("Error al iniciar sesión", "error")
        }

    }

    return (
        <>
            {loading
                ? <Loading />
                : <div>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit} className="loginForm">
                        <label htmlFor="userName">User Name:</label>

                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                        />

                        <label htmlFor="password">Password:</label>

                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                        />

                        <button type="submit">Login</button>
                    </form>
                </div>
            }
        </>
    )
}
export default Login