import { Link } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
  return (
    <header className="navBar">
        <Link to={"/menu"} >Menu</Link>
        <a target="_blank" href="https://wa.link/u145yu">Contacto</a>
    </header>
  )
}
export default NavBar