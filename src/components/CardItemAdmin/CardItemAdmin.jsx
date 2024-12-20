import { useState } from "react";
import api from "../../config/axiosConfig.js";

const CardItemAdmin = ({ productName, price, category, _id }) => {

  const [inputPrice, setInputPrice] = useState(price)

  const handleChange = (e) => {
    setInputPrice(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await api.put(`/products`, {pid: _id, newPrice: inputPrice })
      console.log(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  return (
    <form className="cardItem">
      <div className="nameCategory">
        <h2> {productName} </h2>
        <p> {category} </p>
      </div>
      <p>$<input type="text" value={inputPrice} onChange={handleChange} /></p>
      <button type="submit">Cambiar Precio</button>
    </form>
  )
}
export default CardItemAdmin