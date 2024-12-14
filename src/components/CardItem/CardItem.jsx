import "./CardItem.css"

const CardItem = ({productName, price, category}) => {
  return (
    <div className="cardItem">
        <div className="nameCategory">
            <h2> {productName} </h2>
            <p> {category} </p>
        </div>
        <p> ${price} </p>
    </div>
  )
}
export default CardItem