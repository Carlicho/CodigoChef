import welcomeimg from '../../assets/welcome.jpg'
import SubHeading from '../SubHeading/SubHeading';
import './Header.css'

const Header = () => {
  return (
    <div className='app__header app__wraper section__padding' id='home'>
        <div className='app__wrapper__info'>
            <SubHeading title="Chase the new flavour"/>
            <h1 className='app__header-h1'>La clave de la buena comida</h1>
            <p className='p__opensans' style={{margin:'2rem 0'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <button type='button' className='custom__button'>Explore Menu</button>
        </div>

        <img src={welcomeimg} className='app__wrapper-img' alt="app__wrapper-img" />

    </div>
  )
}

export default Header