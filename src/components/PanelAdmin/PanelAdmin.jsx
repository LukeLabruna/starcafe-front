import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext.jsx'
import { useNavigate } from 'react-router-dom'
import ItemContainer from '../ItemContainer/ItemContainer.jsx'
import api from '../../config/axiosConfig.js'

const PanelAdmin = () => {

    const navigate = useNavigate()

    const { user, isAuth, setIsAuth, setUser } = useContext(UserContext)

    useEffect(() => {
            if (isAuth === false) return navigate("/login")
    }, [isAuth, navigate])

    const handleClick = async () => {
        try {
            const response = await api.post("/user/logout")
            setIsAuth(false)
            setUser(null)
            navigate("/")
        } catch (error) {
            
        }
    }

    console.log(isAuth, user)
    if (isAuth === undefined) return (<h2>Verificando autenticación...</h2>)
    if (user?.role !== "admin") return <h2>No tienes permisos para acceder a esta sección</h2>
    if (user?.role === "admin") {
        return (
            <>
                <ItemContainer title="Panel Administrador" />
                <button onClick={handleClick}>LogOut</button>
            </>
        )
    }
}
export default PanelAdmin