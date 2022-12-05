import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'



function Home() {
    let [viajes, setViajes] = useState(undefined)
    useEffect(() => {
        fetch('http://localhost:8000/viajes')
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setViajes(res)
            })

    }, [])
    return (
        <main>
            <div className='contenedor'>
                <hr className='linea5' />
                <h1 className='viajes'>Viajes</h1>
                <hr className='linea6' />
                </div>
               <div className="container">
                {viajes !== undefined ?
                    <>
                       {viajes.map((viaje, i)=>{
                        return (<Link className="item" to={`/viaje/${viaje.pais}`}>
                            <h3 className="itemTitle">{viaje.pais}</h3>
                            <img src={`http://localhost:8000/${viaje.url}`} className="img" />
                            </Link>)
                       })}  
                    </>
                : <></>}
                </div>
        </main>
    )
}
export default Home