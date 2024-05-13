import { useState } from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from  '../../../constants/images'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);



  return (
    <nav  className='app__navbar'>
      <div className='app__navbar-logo'>
          <img className="app__navbar-logo-image" src={images.logo} alt='nav logo'/>
      </div>
        <ul className='app__navbar-links'>
            <li className='p__opensans'><a href="#home">Inicio</a></li>
            <li className='p__opensans'><a href="#about">Sobre Nosotros</a></li>
            <li className='p__opensans'><a href="#menu">Nuestros Platos</a></li>
            <li className='p__opensans'><a href="#contact">Contactanos</a></li>
        </ul>
        <div className='app__navbar-login'>
          <a href="#login" className='p__opensans'>Log In / Register</a>
          <div/>
          <a href='/' className='p__opensans'>Book Table</a>

        </div>
        <div className='app__navbar-smallscreen'>
          <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>setToggleMenu(true)} />
          
          {toggleMenu && (

          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={()=>setToggleMenu(false)}   />
              <ul className='app__navbar-smallscreen_links'>
                <li className='p__opensans'><a href="#home">Inicio</a></li>
                <li className='p__opensans'><a href="#about">Sobre Nosotros</a></li>
                <li className='p__opensans'><a href="#menu">Nuestros Platos</a></li>
                <li className='p__opensans'><a href="#contact">Contactanos</a></li>
            </ul>
          </div>
          )}
          
        </div>
    </nav>
  )
}

export default Navbar