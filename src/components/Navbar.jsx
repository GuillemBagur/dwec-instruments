import { Link, NavLink } from "react-router-dom"
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Instrumentos</Link>

      <div className="links">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/editor">Añadir</NavLink>
        <NavLink to="/search">Buscar</NavLink>
      </div>
    </nav>
  )
}
