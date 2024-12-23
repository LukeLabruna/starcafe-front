import { useState } from "react"
import api from "../../config/axiosConfig.js"
import Swal from "sweetalert2"
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
      Swal.fire({
        toast: true,
        position: "top-end",
        title: "Precio cambiado con exito",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        customClass: {
          popup: "custom-swal-popup", 
          timerProgressBar: "custom-swal-timer",
      }
    });
    } catch (error) {
      console.log(error.response.data)
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