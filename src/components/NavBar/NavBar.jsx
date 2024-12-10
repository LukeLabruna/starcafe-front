import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
        <Link to={"/menu"} >Menu</Link>
        <a href="https://wa.link/u145yu">Contacto</a>
    </header>
  )
}
export default NavBar