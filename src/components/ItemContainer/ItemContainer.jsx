import { useState, useEffect, useContext } from "react"
import { UserContext } from "../../context/UserContext.jsx"
import api from "../../config/axiosConfig.js"
import CardItem from "../CardItem/CardItem.jsx"
import Categories from "../Categories/Categories.jsx"
import CardItemAdmin from "../CardItemAdmin/CardItemAdmin.jsx"
import showToast from "../../utils/swetAlert.js"
import Loading from "../Loading/Loading.jsx"
import "./ItemContainer.css"

const ItemContainer = ({ title }) => {

    const { user, isAuth } = useContext(UserContext)

    const [products, setProducts] = useState([])
    const [category, setCategory] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true)
            try {
                const response = await api.get(`/products${category ? "?category=" + category : ""}`)
                const newProduct = response.data.data
                setProducts(newProduct)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                showToast("Error al obtener los productos", "error")
            }
        }
        fetchProducts()
    }, [category])

    return (
        <div className="itemContainer">
            {loading
                ? <Loading />
                : <>
                    <h2>{title}</h2>
                    <Categories setCategory={setCategory} />
                    {category && <h3>{category}</h3>}
                    {products.length >= 1
                        ? products.map(item => (
                            isAuth && user.role === "admin" && title === "Panel Administrador"
                                ? <CardItemAdmin key={item._id} {...item} />
                                : <CardItem key={item._id} {...item} />
                        ))
                        : <p>No se encontraron productos</p>
                    }
                </>
            }
        </div>
    )
}
export default ItemContainer