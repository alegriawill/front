import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Icon, iconClasses } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';






const Lugar = () => {
    let [showButton, setShowButton] = useState(false)
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0, behavior:
                'smooth'
        })
    }

    useEffect(() => {
        // Button is displayed after scrolling for 300 pixels
        const handleScrollButtonVisiblity = () => {
            window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
        };
        window.addEventListener('scroll', handleScrollButtonVisiblity);
        return () => {
            window.removeEventListener('scroll', handleScrollButtonVisiblity);
        };
    }, [])
    let { pais } = useParams()
    console.log(pais)
    let [lugares, setLugares] = useState(undefined)
    useEffect(() => {
        fetch('http://localhost:8000/lugares/' + pais)
            .then((res) => res.json())
            .then(res => {
                console.log(res)
                setLugares(res)
            })
    }, [pais])
    return (
        <>
            <div className="titulocont">
                <h2 className="titulo">Lugares de interes</h2>
            </div>
            {lugares !== undefined ? lugares.map((lugar, i) => {
                return (

                    <div className="padre">
                        <div key={i} className="location">
                            <img className="photo" src={`http://localhost:8000/${lugar.pais}/${lugar.url}`} />
                        </div>
                        <div className="sitio">
                            <h2 >{lugar.lugar}</h2>
                        </div>
                        <div className="descripcion">
                            <p>{lugar.descripcion}</p>
                        </div>
                    </div>
                )
            }) : <></>}
            {
                showButton && (
                    <div className="scrollToTop">
                        <button
                            className="boton"
                            onClick={handleScrollToTop}>
                                <ExpandLessIcon/>
                        </button>
                    </div>
                )
            }
        </>
    )
}

export default Lugar