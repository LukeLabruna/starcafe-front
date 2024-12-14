import { useState, useEffect } from "react"
import api from "../../config/axiosConfig.js"
import CardItem from "../CardItem/CardItem.jsx"

const ItemContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get("/products")
                const newProduct = response.data.data
                setProducts(newProduct)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts()
    }, [])

  return (
    <div>
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