import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
        <Link to={"/"}>Star-Cafe</Link>
        <div className="links">
            <Link to={"/admin"}>Panel Administrador</Link>
            <Link to={"/menu"}>Menu</Link>
            <a href="https://wa.link/u145yu">Contactenos</a>
        </div>
    </footer>
  )
}
export default Footer