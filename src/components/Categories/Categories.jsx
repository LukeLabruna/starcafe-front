const Categories = ({ setCategory }) => {

    const handleOnClick = (e) => {
        setCategory(e.target.dataset.category)
    }

    return (
        <div className="categories">
            <button onClick={handleOnClick} data-category="Sandwiches">Sandwiches</button>
            <button onClick={handleOnClick} data-category="Pizzas">Pizzas</button>
            <button onClick={handleOnClick} data-category="Empanadas">Empanadas</button>
            <button onClick={handleOnClick} data-category="Tartas">Tartas</button>
            <button onClick={handleOnClick} data-category="Ensaladas">Ensaladas</button>
            <button onClick={handleOnClick} data-category="Desayuno">Desayuno</button>
            <button onClick={handleOnClick} data-category="PromoDesayuno">Promo desayuno</button>
        </div>
    )
}
export default Categories