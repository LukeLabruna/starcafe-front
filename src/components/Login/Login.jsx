import api from "../../config/axiosConfig.js"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { useState } from "react"

const Login = () => {

    const [bodyData, setBodyData] = useState({
        userName: null,
        password: null
    })

    const navigate = useNavigate()

    const handleChange = (name, value) => {
        setBodyData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await api.post("/user/login", bodyData)
            navigate("/paneladmin")
        } catch (error) {
            console.log(error.response.data)
        }

    }

    return (
        <div>
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
    )
}
export default Login