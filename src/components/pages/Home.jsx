import { HomeDummyText } from '../../sandbox/TestingDummies'
import { componentDitMount } from '../Utils'
import welcomepg from '../../assets/images/welcome-pg.webp'
import '../../styles/Home.css'

export default function Home() {
  componentDitMount()
  return (
    <section className="home container --margin-bottom">
      <div className="home__hero-section">
        <div className="home__img-wrapper">
          <img src={welcomepg} alt="" />
        </div>
        <h1 className="home__title --title-fs">Welcome to the DIT 1-5 Page!</h1>
      </div>
      <HomeDummyText className="--gen-fs"/>
    </section>
  )
}

