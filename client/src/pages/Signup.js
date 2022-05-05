import React, { useState, useRef } from 'react'
import { register } from '../ContextApi/actions';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useStore } from '../ContextApi/MyContext';
import Loader from '../components/Loader'
import { ERROR } from '../ContextApi/actionTypes';

function Signup() {
  const { enqueueSnackbar } = useSnackbar();
  const formref = useRef(null)
  const navigate = useNavigate()
  const [{ isLoading, user }, dispatch] = useStore();
  const [inputs, setInputs] = useState({
    email: '', password: '', confirmPassword: '',
    name: '', lastName: '', gender: 'Male',
    birthday: '', accountType: '', tos: ''
  })
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name || e.target.id]: e.target.value,
    }));
  };
  const handleSubmit = e => {
    e.preventDefault()
    const update = { ...inputs }
    let isValid = Object.values(update).findIndex(value => !value.trim().length)
    if (isValid !== -1) {
      return enqueueSnackbar(`${update[isValid]} is required`, {
        variant: ERROR
      })
    }
    if (user && user.type !== 'Master') {
      delete update.accountType
      delete update.tos
    }
    register(update, navigate, dispatch, enqueueSnackbar)
    // formref.current.reset()
  };
  console.log('user', user)
  return (
    <div className="gym-member-login-page booking-page instructor-page instructor-booking-page create-account-page">
      {isLoading && <Loader />}
      <header id="header">
        <div className="logo">
          <a href="#">
            <span>W</span> DEN
          </a>
        </div>
      </header>
      <section className="main-content">
        <div className="container">
          <h4 className="">Create Account</h4>
          <form action="" ref={formref}>
            <div className="form-group">
              <input type="email" name='email' id='email' onChange={handleChange} placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" name='password' id='password' onChange={handleChange} placeholder="Password" />
            </div>
            <div className="form-group">
              <input type="password" name='confirmPassword' id='confirmPassword' onChange={handleChange} placeholder="Confirm password" />
            </div>
            <div>
              <h4>Basic Information</h4>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Name" name='name' id='name' onChange={handleChange} />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Last Name" name='lastName' id='lastName' onChange={handleChange} />
            </div>
            <div className="form-group">
              <select name='gender' title='aaaaaaaaaaaa' placeholder="Gender" id='gender' onChange={handleChange}>
                <option value='Male' selected >Male</option>
                <option value='Female' >Female</option>
                <option value='Other' >Other</option>
                <option value='preferNotToSay' >Prefer not to say</option>
              </select>
              {inputs.gender === 'other' && <input type="text" placeholder="Other" name='gender' />}
            </div>
            <div className="form-group">
              <label htmlFor="">Birthdate</label>
              <input type="date" placeholder="Birthdate" name='birthDate' id='birthDate' onChange={handleChange} />
            </div>
            <div className="form-group form-radio-group">
              <input type="radio" name="tos" id='tos' onChange={handleChange} />
              <label htmlFor="radio" >I understand and accept the Terms & Conditions</label>
            </div>
            {user?.userType == 'Master' && < div className="form-group form-radio-type">
              <div className="box">
                <input type="radio" name="type" /> <label htmlFor="">Member</label>
              </div>
              <div className="box">
                <input type="radio" name="type" /> <label htmlFor="">Coach</label>
              </div>
              <div className="box">
                <input type="radio" name="type" /> <label htmlFor="">Nutricion</label>
              </div>
            </div>}
            <div className="form-group">
              <button className="btn"
                style={{ backgroundColor: !inputs.tos && 'gray' }}
                disabled={!inputs.tos}
                onClick={handleSubmit} id="booking">Create Account</button>
            </div>
          </form>
        </div>
      </section >
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
    </div >

  )
}

export default Signup