import logoSm from '/assets/images/r_dit_1-5_logo-xsm.png'
import '../styles/Footer.css'
import { FacebookRounded } from '@mui/icons-material'
import Icon from '@mdi/react';
import { mdiFacebookMessenger } from '@mdi/js';
import PublicIcon from '@mui/icons-material/Public';
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__logo-desc-wrapper">
            <div className="footer__logo-desc">
              <a className="footer__logo">
                <img className="header__logo--img" src={logoSm} alt="pup logo" />
              </a>
              <div className="footer__name-section --gen-fs">PUP DIPLOMA IN INFORMATION TECHNOLOGY</div>
            </div>
            <p className='--gen-fs'>The official website of PUP DIT 1-5. <br />Kung nawawala kapa ano pang hinihintay mo sali na! </p>
            <div className="footer__icon-wrapper">
              <ul className='footer__icon-list'>
                <li className='footer__icon-list-item'><a href="https://www.facebook.com/profile.php?id=61564290314256" target='_blank'><FacebookRounded /></a></li>
                <li className='footer__icon-list-item'><a href="https://m.me/j/AbbKY8Eu30nNjBUT/" target='_blank'><Icon path={mdiFacebookMessenger} size={1.35} /></a></li>
                <li className='footer__icon-list-item'><a href="https://www.facebook.com/PUPITECHOMIT" target='_blank'><PublicIcon /></a></li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="footer__credits-wrapper">
            <p className="footer__year">©{new Date().getUTCFullYear()} PUP DIT 1-5 peeps</p> 
          </div>
        </div>
      </footer>
    </>
  )
} 
