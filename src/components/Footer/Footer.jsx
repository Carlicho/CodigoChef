import './Footer.css'
import spoon from '../../assets/spoon.svg'
import logo from '../../assets/LogoPng.png'

import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='app__footer '>
        <div className='app__footer-links' >
            <div className='app__footer-links_contact'>Contactanos</div>
            <p className='p__opensans'>011 6765-1747</p>
            <p className='p__opensans'>codigochef@gmail.com</p>
            <p className='p__opensans'>México 3099, C1223 Cdad. Autónoma de Buenos Aires</p>

            <div className='app__footer-links_logo'>
                <img src={logo} alt='codigochef logo' style={{width:'20%'}}/>
                <img src={spoon} alt='spoon' className='spoon__img' style={{marginTop:'50px'}}/>
                <div>


                  <a href="https://www.facebook.com/profile.php?id=100014051853080"><FaFacebook size={'2rem'} /> </a>
                <a href="https://www.instagram.com/codigochefba/"><FaInstagram size={'2rem'}/></a>
                <a href="https://twitter.com/codigochefba?lang=es"><FaSquareXTwitter size={'2rem'}/></a>
                
                
                </div>
            </div>
            <div className='app__footer-links_work' ></div>
        </div>



        
    </div>
  )
}

export default Footer