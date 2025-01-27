import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
        <Link to={"/"}> <h2>Star-Cafe</h2></Link>
        <div className="links">
            <Link to={"/paneladmin"}>Panel Administrador</Link>
            <Link to={"/menu"}>Menu</Link>
            <a target="_blank" href="https://wa.link/u145yu">Contactenos</a>
        </div>
        <div className="copyright">
          <p>Copyright © 2024 Star-Cafe & Luke Labruna. Todos los derechos reservados.</p>
        </div>
    </footer>
  )
}
export default Footer