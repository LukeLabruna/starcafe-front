import { useState, createContext } from "react"
import useAuth from "../hook/useAuth"

export const UserContext = createContext({
    user: null,
    isAuth: false,
})

export const UserProvider = ({ children }) => {
    const { user, isAuth } = useAuth()

    return (
        <UserContext.Provider value={{ user, isAuth}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext