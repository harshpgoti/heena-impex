import React from 'react';
import {Link} from 'react-router-dom';
import HEENALOGO from '../assets/images/HEENA LOGO.png';
import footerbg from '../assets/images/footer.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer=()=>{
    return(
        <footer id='footer'>
            <img src={footerbg} alt='footer bg' className='footer-bg' />
            <div className='footer-main'>
                <div className='footer-logo'>
                    <Link to="/"><img src={HEENALOGO} alt='first bg'/></Link>
                </div>
                <div className='footer-link'>
                    <div className='contact-details'>
                        <p className='contant'><span>Contact On</span></p>
                        <a className='contant' href='mailto:heenaimpexmumbai@gmail.com'>heenaimpexmumbai@gmail.com</a>
                        <a className='contant' href='tel:+912233929335'>+91 22 3392 9335</a>
                    </div>
                    <div className='social-links'>
                        <p className='contant'><span>Connect On</span></p>
                        <a href='https://www.facebook.com/HEENA-IMPEX-101181011917205/' target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href='https://www.instagram.com/heena_impex/' target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                </div>
                <div className='footer-map'>
                    <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.986062719936!2d72.86174321469724!3d19.06435038709467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9bb8b9684e7%3A0xa6a59dacfc2a0c87!2sHeena%20Impex!5e0!3m2!1sen!2sca!4v1651374589784!5m2!1sen!2sca" width="400" height="300" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <p className='contant copyright'>COPYRIGHT 2022 HEENA IMPEX PVT. LTD. ALL RIGHTS RESERVED.</p>
        </footer>
    )
}

export default Footer;