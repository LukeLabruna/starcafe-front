import { useState, useEffect, useContext } from "react"
import { UserContext } from "../../context/UserContext.jsx"
import api from "../../config/axiosConfig.js"
import CardItem from "../CardItem/CardItem.jsx"
import Categories from "../Categories/Categories.jsx"
import CardItemAdmin from "../CardItemAdmin/CardItemAdmin.jsx"
import "./ItemContainer.css"

const ItemContainer = ({title}) => {

    const { user, isAuth } = useContext(UserContext)

    const [products, setProducts] = useState([])
    const [category, setCategory] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get(`/products${category ? "?category=" + category : ""}`)
                const newProduct = response.data.data
                setProducts(newProduct)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts()
    }, [category])

  return (
    <div className="itemContainer">
        <h2>{title}</h2>
        <Categories setCategory={setCategory} />
        {products.length >= 1 
        ? products.map( item => (
            isAuth && user.role === "admin" && title === "Panel Administrador"
            ? <CardItemAdmin key={item._id} {...item} />
            : <CardItem key={item._id} {...item} />
        ))
        : <p>No se encontraron productos</p>
        }
    </div>
  )
}
export default ItemContainer