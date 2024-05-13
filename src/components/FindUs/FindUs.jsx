import SubHeading from '../SubHeading/SubHeading'
import findus from '../../assets/findusAReemplazar.png'

const FindUs = () => {
  return (
    <div className='app__bg app__wrapper section__padding' id='contact'>
        <div className='app__wrapper__info'>
            <SubHeading title="Contact"/>
            <h1 className='HeadText__cormorant' style={{marginBottom:'3rem', color:'#fff'}}>FindUs</h1>
            <div className='app__wrapper-content'>
                <p className='p__opensans'>Texto acerca de find us, donde nos encontramos y como encontrarnos</p>
                <p className='p__cormorant' style={{color:'#DCCA87', margin:'2rem 0'}}>Horarios de Apertura</p>
                <p className='p__opensans'>Lunes a Jueves de 8hs a 20hs</p>
                <p className='p__opensans'>Viernes de 8 a 22hs</p>
            </div>
        <button className='custom__button' style={{marginTop:'2rem'}}>Visitanos</button>
        </div>

        <div className='app__wrapper_img'>
            <img src={findus} alt='FindUs' style={{width:'75%'}}/>
        </div>
        FindUs</div>
  )
}

export default FindUs