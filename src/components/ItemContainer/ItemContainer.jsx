import { useState, useEffect } from "react"
import api from "../../config/axiosConfig.js"
import CardItem from "../CardItem/CardItem.jsx"
import "./ItemContainer.css"
import Categories from "../Categories/Categories.jsx"

const ItemContainer = ({title}) => {

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
            <CardItem key={item._id} {...item} />
        ))
        : <p>No se encontraron productos</p>
        }
    </div>
  )
}
export default ItemContainer