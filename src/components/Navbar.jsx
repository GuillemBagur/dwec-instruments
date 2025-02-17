import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Logo</Link>

      <div>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/add">Añadir instrumento</NavLink>
        <NavLink to="/search">Buscar instrumentos</NavLink>
      </div>
    </nav>
  )
}
