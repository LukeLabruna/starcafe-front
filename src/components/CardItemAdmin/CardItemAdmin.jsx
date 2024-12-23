import { useState } from "react"
import api from "../../config/axiosConfig.js"
import showToast from "../../utils/swetAlert.js"
import "./CardItemAdmin.css"

const CardItemAdmin = ({ productName, price, category, _id }) => {

  const [inputPrice, setInputPrice] = useState(price)

  const handleChange = (e) => {
    setInputPrice(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await api.put(`/products`, {pid: _id, newPrice: inputPrice })
      showToast("Precio actualizado", "success")
    } catch (error) {
      showToast("Error al actualizar el precio", "error")
    }
  }

  return (
    <form className="cardItem" onSubmit={handleSubmit}>
      <div className="nameCategory">
        <h2> {productName} </h2>
        <p> {category} </p>
      </div>
      <div className="priceAdmin"><p>$</p><input type="text" value={inputPrice} onChange={handleChange} /></div>
      <button type="submit">Cambiar Precio</button>
    </form>
  )
}
export default CardItemAdmin