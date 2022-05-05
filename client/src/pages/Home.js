import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../ContextApi/MyContext'


function Home({ props }) {
  const navigate = useNavigate()
  const [{ user }, dispatch] = useStore();
  
  return (
    <div className='gym-member-home-page'><header id="header" className="">
      <div className="wrapper">
        <div className="menu">
          <div className="menuToggle" id="menuToggle">
          </div>
          <div className="logo">
            <a href="/">
              <span>W</span>DEN
            </a>
          </div>
        </div>
        {!user && <div className="login">
          <Link to='/login' />
          <a href="/login" onClick={(e) => {
            e.preventDefault()
          }
          } className="btn">Login</a>
        </div>}
      </div>
      <div className="nav-menu">
        <ul>
          <li><a onClick={() => navigate('/login')}>Log in</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a onClick={() => navigate('/login')} className="btn">Book</a></li>
        </ul>
      </div>
    </header >
      <section className="hero-section">
        <div className="bg-color">
          <div className="container">
            <div className="content">
              <a onClick={() => navigate(`/${user ? 'master-dashboard' : 'login'}`)} className="btn">Book</a>
            </div>
          </div>
        </div>
      </section>
      <section className="section-01">
        <div className="wrapper">
          <div className="box" id="box-1">
            <div className="bg-color">
              <h2>Fit body</h2>
              <p>60 minutes intensos desafiantes y gratificantes.</p>
              <p>Pon a prueba todos los elementos del estado fisico para desarrollar resistencia,
                velocidad y
                flexibilidad. Encuentra tu energia en esta enriquecedora experiencia que eleva el
                cuerpo, la
                mente y el espirtu.</p>
              <a href="#" className="btn">Reservar</a>
            </div>
          </div>
          <div className="box" id="box-2">
            <div className="bg-color">
              <h2>Tone</h2>
              <p>60 minutes intensos desafiantes y gratificantes.</p>
              <p>Pon a prueba todos los elementos del estado fisico para desarrollar resistencia,
                velocidad y
                flexibilidad. Encuentra tu energia en esta enriquecedora experiencia que eleva el
                cuerpo, la
                mente y el espirtu.</p>
              <a href="#" className="btn">Reservar</a>
            </div>
          </div>
          <div className="box" id="box-3">
            <div className="bg-color">
              <h2>Itensity</h2>
              <p>60 minutes intensos desafiantes y gratificantes.</p>
              <p>Pon a prueba todos los elementos del estado fisico para desarrollar resistencia,
                velocidad y
                flexibilidad. Encuentra tu energia en esta enriquecedora experiencia que eleva el
                cuerpo, la
                mente y el espirtu.</p>
              <a href="#" className="btn">Reservar</a>
            </div>
          </div>
          <div className="box" id="box-4">
            <div className="bg-color">
              <h2>Recovery</h2>
              <p>60 minutes intensos desafiantes y gratificantes.</p>
              <p>Pon a prueba todos los elementos del estado fisico para desarrollar resistencia,
                velocidad y
                flexibilidad. Encuentra tu energia en esta enriquecedora experiencia que eleva el
                cuerpo, la
                mente y el espirtu.</p>
              <a href="#" className="btn">Reservar</a>
            </div>
          </div>
        </div>
      </section>
    </div >
  )
}

export default Home