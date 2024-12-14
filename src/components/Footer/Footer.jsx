import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
        <Link to={"/"}> <h2>Star-Cafe</h2></Link>
        <div className="links">
            <Link to={"/admin"}>Panel Administrador</Link>
            <Link to={"/menu"}>Menu</Link>
            <a href="https://wa.link/u145yu">Contactenos</a>
        </div>
    </footer>
  )
}
export default Footer