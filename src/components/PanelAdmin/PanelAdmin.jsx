import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext.jsx'
import { useNavigate } from 'react-router-dom'
import ItemContainer from '../ItemContainer/ItemContainer.jsx'
import Loading from '../Loading/Loading.jsx'
import api from '../../config/axiosConfig.js'
import "./PanelAdmin.css"

const PanelAdmin = () => {

    const navigate = useNavigate()

    const { user, isAuth, setIsAuth, setUser } = useContext(UserContext)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (isAuth === false) return navigate("/login")
    }, [isAuth, navigate])

    const handleClick = async () => {
        setLoading(true)
        try {
            const response = await api.post("/user/logout")
            setLoading(false)
            setIsAuth(false)
            setUser(null)
            navigate("/")
        } catch (error) {
            setLoading(false)
        }
    }

    if (isAuth === undefined) return (<h2>Verificando autenticación...</h2>)
    if (user?.role !== "admin") return <h2>No tienes permisos para acceder a esta sección</h2>
    if (user?.role === "admin") {
        return (
            <>
                {loading
                    ? <Loading />
                    : <>
                        <ItemContainer title="Panel Administrador" />
                        <button className='logout' onClick={handleClick}>LogOut</button>
                    </>
                }
            </>
        )
    }
}
export default PanelAdmin