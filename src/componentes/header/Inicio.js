import React from "react";
import { Link } from 'react-router-dom'

function Inicio(){
    return(
        <div className="inicio">
            <Link className="enlace" to="/">Inicio</Link>
        </div>
    )
}

export default Inicio