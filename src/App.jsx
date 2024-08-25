import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Mtp from './components/pages/Mtp'
import About from './components/pages/About'

import './App.css'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <section className="header-mtp">

        <Router>
          <Header />
          <Routes>
            <Route exact path='/' Component={Home} />
            <Route exact path='/Mtp' Component={Mtp} />
            <Route exact path='/About' Component={About} />
          </Routes>
        </Router>
      </section>
      <Footer />
    </>
  )
}

export default App
