import logo from '../images/logo.svg'
import menu from '../images/list.png'
import xBtn from '../images/icon-close-menu.svg'
import arrDown from '../images/icon-arrow-down.svg'
import arrUp from '../images/icon-arrow-up.svg'

import Features from './Features'
import Company from './Company'

import { useState } from 'react'

const Navigation = () => {
    const[showSideBar, setShowSideBar] = useState(false)

    const primary_nav_hidden = 'primary-nav tr-100'
    const primary_nav_visible = 'primary-nav tr-0'
    const dark_bg_hidden = 'dark-bg tr--100'
    const dark_bg_visible = 'dark-bg tr-0'
    
  return (
    <nav className="navbar" >
        <div className='logo-icon'>
            <img src={logo} alt='logo'></img>
        </div>
        <div className='menu-icon' onClick={() => setShowSideBar(!showSideBar)}>
            <img src={showSideBar === false ? menu: xBtn} alt='menu'></img>
       </div>
      <div className={showSideBar === false ? primary_nav_hidden: primary_nav_visible}>
        <ul className='left-list'>
            <Features />            
            <Company />            
            <li>
                <a>Careers</a>
            </li>
            <li>
                <a>About</a>
            </li>
        </ul>
        <ul className='right-list'>
            <li className='li-btn'>
                <button className='btn-link-login'><a href='#'>Login</a></button>
            </li>
            <li className='li-btn'>
                <button className='btn-link-register'><a href='#'>Register</a></button>
            </li>
        </ul>
      </div>
      <div className={showSideBar === false ? dark_bg_hidden: dark_bg_visible}>

      </div>
    </nav>
  )
}

export default Navigation



