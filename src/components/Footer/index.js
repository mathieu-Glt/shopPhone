import React from 'react';
import './footer.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';



function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer__socials'>
                    <a href='https://www.facebook.com/593-Cellphone-10033842268308' target="_blank" className='footer__social'>
                        <FacebookIcon />
                    </a>
                    <a href='/' className='footer__social'>
                        <InstagramIcon />
                    </a>
                    <a href='/' className='footer__social'>
                       <WhatsAppIcon />
                    </a>

                </div>
                <ul className='footer__links'>
                    <li className='footer__link'><a href='#' className='footer__socials'>Contactos : 0981528567 / 0997879244</a></li>
                </ul>

            </div>
        </footer>
    )
}

export default Footer;