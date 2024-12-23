import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext.jsx'
import { useNavigate } from 'react-router-dom'
import Login from '../Login/Login.jsx'
import ItemContainer from '../ItemContainer/ItemContainer.jsx'

const PanelAdmin = () => {

    const navigate = useNavigate()

    const { user, isAuth } = useContext(UserContext)

    useEffect(() => {
        if (isAuth !== undefined) {
            if (!isAuth) navigate("/login")
          }
    }, [isAuth, navigate])

    if (!user) return <h2>Cargando...</h2>;
    if (user.role !== "admin") return <h2>No tienes permisos para acceder a esta sección</h2>  
    if (user.role === "admin") return <ItemContainer title="Panel Administrador" />
}
export default PanelAdmin