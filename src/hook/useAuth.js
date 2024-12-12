import { useState, useEffect } from "react"
import api from "../config/axiosConfig.js"

const useAuth = () => {
    const [auth, setAuth] = useState({ isAuth: false, user: null })

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await api.get("/user/isauth")
                setAuth({ isAuth: response.data.isAuth, user: response.data.user })
            } catch (error) {
                setAuth({ isAuth: false, user: null })
            }
        }
        checkAuth()
    }, [])

    return auth
}

export default useAuth
