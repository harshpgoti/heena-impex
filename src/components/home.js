import React from 'react';
import {Link} from 'react-router-dom';
import HEENALOGO from '../assets/images/HEENA LOGO.png';
import homess from '../assets/images/home-ss.jpeg';
import homets from '../assets/images/home-ts.jpg';
import homefs from '../assets/images/home-fs.jpeg';

const Home=()=>{
    function openNav() {
      document.getElementById("mySidenav").style.width = "100%";
      document.getElementById("body").style.overflowY = "hidden";
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("body").style.overflowY = "visible";
    }
    return(
      <div className='home-div' id='home-div'>

        {/* first section */}
        <section className='home-first-section home-section'>
          <div id="mySidenav" className="sidenav">
              <p className="menu-close" onClick={closeNav}>&times;</p>
              <Link to="/"><img src={HEENALOGO} alt='first bg'/></Link>
          </div>
          <p className='menu-icon' onClick={openNav}>&#9776;</p>
          <img src={HEENALOGO} alt='first bg' className='fs-logo' />
        </section>
          
        {/* second section */}
        <section  className='home-second-section home-section'>
          <img src={homess} alt='home ss' className='home-ss' />
          <p className='section-heading'>Standard of Heena Impex</p>
          <p className='contant'>Our operations at <span>Heena Impax</span> are focused on creating high-quality diamonds,
           improving customer relationships, fostering continuous innovation, supporting our plan to empower retailers,
            offering considerable value to organizations, and ensuring human well-being. We've been delighting the diamond
             fraternity in every way we can for more than 25 years, but our focus on Artistry, Perfection, Respect, and value has been consistent.</p>
        </section>

        <section className='home-third-section home-section' style={{backgroundImage:`url(${homets})`}}>
          <p className='section-heading'>Transparency</p>
          <p className='section-heading-sub'>Heena Impex grading method</p>
          <p className='contant'>Fancy coloured diamonds are our speciality. Yellow, brown, and pink are just a few of the bright
           colours available. We have an unrivalled selection of diamonds in various unique shapes, specially cut.
            When purchasing diamonds, the shape is a significant consideration. Every form made by <span>Heena Impex</span> has its unique characteristics,
             from princess cut, pear, or oval-shaped diamonds to heart, cushion, marquise shape, and emerald.</p>
        </section>

        <section className='home-forth-section home-section'>
          <img src={homefs} alt='home fs' className='home-fs' />
          <p className='section-heading'>Artisanship</p>
          <p className='contant'>Our <span>experienced and professional, qualified, and high-calibre artisans</span> manufacture diamonds
            with three factors in mind exceptional quality, distinctive cut, and impressive sparkle. With a fair pricing structure,
            we guarantee transparent polished categorization to suit the particular needs of our clients.
            The system has been fine-tuned to the point where objectivity triumphs over subjectivity.</p>
        </section>
      </div>
    )
}

export default Home;