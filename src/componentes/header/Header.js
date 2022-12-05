import React from "react"
import Desplegable from "./Desplegable"
import Inicio from "./Inicio"
import { Link } from "react-router-dom"
import './Header.css';
function Header() {
    return (
        <header className="header">
            <hr className="linea1" />
            <hr className="linea2" />
            <nav>
                <div className="nav">
                    <Link to="/">Un viaje con Alegria</Link>
                </div>
            </nav>

            <div className="menuDerecha">
                <Inicio />
                <Desplegable />
            </div>

            <hr className="linea3" />
            <hr className="linea4" />
        </header>
    )
}
export default Header