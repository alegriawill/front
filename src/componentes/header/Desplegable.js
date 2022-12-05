import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'

function Desplegable(){
    let navigate = useNavigate()

    let [travel, setTravel] = useState(undefined)
    useEffect(()=>{
        if(travel !== undefined){
        navigate("/viaje/"+travel)
    }


    },[travel])
    return(
        <div className="desplegable">
            <select onChange={(e) => {setTravel(e.target.value)}} name="paises">
                <option disabled selected value="">Seleccionar pais</option>
                <option value='portugal'>Portugal</option>
                <option value="españa">España</option>
                <option value="italia">Italia</option>
                <option value="austria">Austria</option>
                <option value="jordania">Jordania</option>
                <option value="grecia">Grecia</option>
            </select>
        </div>

    )
}
export default Desplegable