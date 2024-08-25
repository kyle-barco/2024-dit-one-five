// TODO:
// nav button that collapse for mobile

import { useState } from 'react';
import '../../src/styles/Header.css'
import logoSm from '../assets/images/r_dit_1-5_logo-xsm.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";
export default function Header() {
  const [isSideNavActive, setSideNavActive] = useState(false)
  const [isClick, setIsClicked] = useState(false)

  function handleIsClick() {
    setIsClicked(!isClick)
  }

  function handleClick() {
    setSideNavActive(!isSideNavActive)
  }

  return (
    <>
    <header className='header --padding'>
      <div className='container row'>
        <a onClick={handleIsClick} className={`header__logo ${isClick ? "header__logo--rotate" : ""}`}>
          <img className="header__logo--img" src={logoSm} alt="pup logo" />
        </a>
        <a onClick={handleClick} className='header__button --header-btn'>
          <MenuIcon className='header__btn-svg' />
        </a>
        <div className="header__top-nav">
          <ul className="top-nav__list">
            <li className="top-nav__list-item"><Link to="/">Home</Link></li>
            <li className="top-nav__list-item"><Link to="/Mtp">Meet The Peeps</Link></li>
            <li className="top-nav__list-item"><Link to="/About">About</Link></li>
          </ul>
        </div>
      </div>
    </header>
        <div className={`sidenav-wrapper ${isSideNavActive ? "open" : ""}`}>
          <a onClick={handleClick} className='sidenav__close-btn --header-btn' id='sideNav'>
            <CloseIcon className='header__btn-svg' />
          </a>
          <nav className='sidenav'>
            <ul className='sidenav__list'>
              <li onClick={handleClick} className='sidenav__list-item'><Link className='sidenav__link' to="/"><HomeIcon className='sidenav__icon' /> Home</Link></li>
              <li onClick={handleClick} className='sidenav__list-item'><Link className='sidenav__link' to="/Mtp"><WavingHandIcon className='sidenav__icon' /> Meet The Peeps</Link></li>
              <li onClick={handleClick} className='sidenav__list-item'><Link className='sidenav__link' to="/About"><InfoIcon className='sidenav__icon' /> About</Link></li>
            </ul>
          </nav>
        </div>
</>
  )
}
