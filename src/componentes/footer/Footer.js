import React from "react"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


function Footer() {
    return (
        <>
            <div className="main-footer">
                        <div className="col">
                            <h4>Redes Sociales</h4>
                            <div className="ref">
                                <a href='https://www.instagram.com/'><InstagramIcon className="icon"/></a>
                                <a href='https://es-es.facebook.com/'><FacebookIcon className="icon"/></a>
                                <a href={'https://twitter.com/'}><TwitterIcon className="icon"/></a>
                            </div>
                        </div>
                        <div className="row">
                            <hr />
                            <p className="col-sm">
                                &copy;{new Date().getFullYear()} UN VIAJE CON ALEGRIA | ALL right reserved |Terms Of Service | Privacy
                            </p>
                        </div>
            </div>
        </>
    )
}

export default Footer