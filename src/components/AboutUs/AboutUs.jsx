import bannerpng from '../../assets/bannerpng.png'
import spoon from '../../assets/spoon.png'
import knife from '../../assets/knife.png'
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about' >
        
        <div className='app__aboutus-overlay flex__center'>
            <img src={bannerpng} alt='bannerpng'/>

        </div>

            <div className='app__aboutus-content flex__center'>
                <div className='app__aboutus-content_about'>
                    <h1 className='headtext__cormorant'>Sobre Nosotros</h1>
                    <img src={spoon}/>
                    <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.</p>
                    <button type='button' className='custom__buttom'>Descubre mas</button>
                </div>

                <div className='app__aboutus-content_knife flex__center'>
                     <img src={knife} alt='about img'/> {/*que el cuchillo diga codigo chef en el filo */}

                </div>

                <div className='app__aboutus-content_history'>
                    <h1 className='headtext__cormorant'>Nuestra Historia</h1>
                    <img src={spoon}/>
                    <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.</p>
                    <button type='button' className='custom__buttom'>Descubre mas</button>
                </div>

                
            </div>


            

        </div>
  )
}

export default AboutUs