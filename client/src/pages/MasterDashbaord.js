import axios from 'axios'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { getHeaders } from '../ContextApi/actions'
import { AUTH_SUCCESS, BACKENDURL } from '../ContextApi/actionTypes'
import { useStore } from '../ContextApi/MyContext'

function MasterDashbaord() {
  const [{ user }, dispatch] = useStore()
  const navigate = useNavigate()
  const logout = e => {
    e.preventDefault()
    axios.post(`${BACKENDURL}/api/logout`, {}, getHeaders()).then(res => {
      console.log('reslog', res)
      dispatch({ type: AUTH_SUCCESS })
    }).catch(e => console.log('er', e))
  }
  return (
    <div className="gym-member-login-page member-dashboard">
      <header>
        <div className="text" style={{ textAlign: 'right', width: '100%' }}>
          <span>Michelle Cohen</span>
        </div>
      </header>
      <section className="main-content">
        <div className="container">
          <div className="remaning-box">
            <h4>Remaining Classes</h4>
            <h1>0</h1>
          </div>
          <div className="button-wrapper">
            <a href="./packages.html" className="btn buy-class">Buy class</a>
            {/* // This is one is just for class bookings */}
            <a onClick={() => navigate('/calender')} className="btn book-class">Book class</a>
            {/* <!--This is a different one just for nutrition appointments--> */}
            <a onClick={() => navigate('/calender')} className="btn book-class">Book nutrition class</a>
            <a onClick={() => ''} className="btn view-class">View booked class</a>
          </div>
          <div className="links">
            <ul>
              <li> <a href="/Instructor/personal-info.html"><span>Personal information</span>
                <i className="fa-solid fa-chevron-right"></i> </a>
              </li>
              <li> <a href="/Instructor/change-password.html">
                <span>Change Password</span> <i className="fa-solid fa-chevron-right"></i> </a> </li>
              <li> <a onClick={logout}><span>Terms & Conditions</span>
                <i className="fa-solid fa-chevron-right"></i> </a> </li>
              <li> <a href="#"><span>Privacy Policy</span>
                <i className="fa-solid fa-chevron-right"></i> </a> </li>
            </ul>
          </div>
          <a onClick={logout} className="sign-out-link">Sign Out</a>
        </div>
      </section>
      <footer>
        <div className="container text-center">
          <div className="logo">
            <a href="#">
              <span>W</span> DEN
            </a>
          </div>
          <div className="social-media">
            <ul>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa fa-phone"></i></a></li>
            </ul>
          </div>
          <div>
            <a href="#">hola@woddenstuido.mx</a>
          </div>
        </div>
        <div className="footer-bottom text-center">
          <p>Wodden Studio 2022 &copy; Todos Ios Derechos Reservados.</p>
        </div>
      </footer>
    </div>

  )
}

export default MasterDashbaord