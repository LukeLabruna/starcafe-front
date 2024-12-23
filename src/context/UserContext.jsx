import { useState, createContext, useEffect } from "react"

export const UserContext = createContext({
    user: null,
    isAuth: undefined,
    setIsAuth: () => {},
    setUser: () => {},
})

export const UserProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(undefined)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await api.get("/user/isauth")
                setIsAuth(response.data.isAuth)
                setUser(response.data.user)
            } catch (error) {
                setIsAuth(false)
                setUser(null)
            }
        }
        checkAuth()
    }, [])

    return (
        <UserContext.Provider value={{ user, isAuth, setIsAuth, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext