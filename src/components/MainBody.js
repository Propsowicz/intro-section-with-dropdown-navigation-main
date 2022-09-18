import main_img from '../images/image-hero-mobile.png'
import logo_1 from '../images/client-databiz.svg'
import logo_2 from '../images/client-audiophile.svg'
import logo_3 from '../images/client-meet.svg'
import logo_4 from '../images/client-maker.svg'

const MainBody = () => {
  return (
    <article className='bg'>
      <div className="container">
        <div className="main-img">
          {/* <img src={main_img}></img> */}
        </div>
        <div className="description">
            <h1>Make remote work</h1>
            <p> Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar. </p>
            <form>
              <button class="btn">Learn more</button>
            </form>
            <ul class="logos">
              <li className='logo-1'><img src={logo_1} alt='client-databiz'></img></li>
              <li className='logo-2'><img src={logo_2} alt='client-audiophile'></img></li>
              <li className='logo-3'><img src={logo_3} alt='client-meet'></img></li>
              <li className='logo-4'><img src={logo_4} alt='client-maker'></img></li>

            </ul>
        </div>

      </div>

    </article> 
  )
}

export default MainBody