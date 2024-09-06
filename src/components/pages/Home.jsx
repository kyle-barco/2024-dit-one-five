import { HomeDummyText } from '../../sandbox/TestingDummies'
import { componentDitMount } from '../Utils'
import welcomepg from '/assets/images/welcome-pg.webp'
import '../../styles/Home.css'

export default function Home() {
  componentDitMount()
  return (
    <section className="home container --margin-bottom">
      <div className="home__hero-section">
        <div className="home__img-wrapper">
          <img src={welcomepg} alt="" />
        </div>
        <h1 className="home__title --title-fs">Welcome to PUP DIT 1-5 Hub!</h1>
      </div>
      <div className="home__content --gen-fs">
        <div className="meet-the-peeps --content">
          <h2>1. Meet the Peeps Page:</h2>
          <p>Discover who’s who in your PUP DIT 1-5 section! This section introduces you to the class officers and fellow students, helping you build connections and stay informed. Use the hamburger menu for more!

          </p>
          <p>
            <b>Class Officers:</b> Meet the dedicated individuals who will be leading and representing you throughout the year. They’re here to support you and ensure a smooth and engaging experience.
          </p>
          <p><b>Student Directory:</b> Get to know your classmates! Browse through profiles to find out more about your peers. This is a great way to find study partners, project collaborators, or simply to make new friends.
          </p>
        </div>

        <div className="about --content">
          <h2>2. About PUP DIT 1-5 Page: </h2>
          <p>Welcome to the PUP DIT 1-5 section, where your journey in the Diploma in Information Technology program begins!</p>
          <p>The PUP DIT 1-5 section is a vibrant group of 49 students, including 7 class officials and 42 fellow peers, all starting their journey in the Diploma in Information Technology program. We come together as a dynamic and supportive community, eager to explore the world of technology and build connections.</p>
          
        </div>

      </div>
    </section >
  )
}

