
import SubHeading from '../SubHeading/SubHeading'
import chef from '../../assets/chef.png'

const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
        <div className='app__wrapper_img app__wrapper_img-reverse'>
            <img src={chef} alt='chef' style={{width:'35%'}}/>

            <div className='app__wrapper_info'>
                <SubHeading title="Palabras del Chef"/>
                <h1 className='headtext__cormorant'>En lo que creemos</h1>
            </div>
        </div>
        </div>
  )
}

export default Chef