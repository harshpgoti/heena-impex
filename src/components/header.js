import React from 'react';
import {Link} from 'react-router-dom';
import HEENALOGO from '../assets/images/HEENA LOGO.png';

const Header=()=>{
    window.onscroll = function(){
        scroll();
    }
    function scroll(){
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            document.getElementById("header").style.top = "0px";
        } else {
            document.getElementById("header").style.top = "-80px";
        }
    }
    return(
        //<Link to="/signin">Login</Link>
        <header id='header'>
            <ul>
                <li><Link to="/"><img className='header-logo' src={HEENALOGO} alt='first bg'/></Link></li>
            </ul>
        </header>
    )
}

export default Header;