import { useState, useEffect, useRef } from "react"
import "./Categories.css"

const Categories = ({ setCategory }) => {

    const [showCategory, setShowCategory] = useState(false)
    const categoryRef = useRef(null)

    const handleSetCategory = (e) => {
        setCategory(e.target.dataset.category)
    }

    const handleShowAll = () => {
        setShowCategory(!showCategory)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (categoryRef.current && !categoryRef.current.contains(event.target)) {
                setShowCategory(false)
            }
        }

        document.addEventListener("click", handleClickOutside)
        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, [])

    return (
        <div ref={categoryRef} className="categoriesContainer">
        <h3 onClick={handleShowAll}>Categorias<span>▼</span></h3>
        <div className={`categories ${showCategory && "showCategories"}`}>
            <p onClick={handleSetCategory} data-category="Desayuno">Desayuno</p>
            <p onClick={handleSetCategory} data-category="Empanadas">Empanadas</p>
            <p onClick={handleSetCategory} data-category="Ensaladas">Ensaladas</p>
            <p onClick={handleSetCategory} data-category="Pizzas">Pizzas</p>
            <p onClick={handleSetCategory} data-category="PromoDesayuno">Promo desayuno</p>
            <p onClick={handleSetCategory} data-category="Sandwiches">Sandwiches</p>
            <p onClick={handleSetCategory} data-category="Tartas">Tartas</p>
            <p onClick={handleSetCategory} data-category="">Todo</p>
        </div>
        </div>
    )
}
export default Categories