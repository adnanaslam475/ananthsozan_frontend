import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../ContextApi/actions'
import { useStore } from '../ContextApi/MyContext'

function Login() {
    const [, dispatch] = useStore()
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar();
    const [show, setShow] = useState(false)
    const [inputs, setInputs] = useState({
        email: '', password: '', resetEmail: ''
    })
    const handleChange = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name || e.target.id]: e.target.value,
        }));
    };
    const submit = e => {
        e.preventDefault();
        let update = { ...inputs };
        delete update.resetEmail
        login(update, navigate, dispatch, enqueueSnackbar)
    }
    return (
        <div className="gym-member-login-page">
            <header>
                <div className="logo">
                    <a href="#">
                        <span>W</span>DEN
                    </a>
                </div>
            </header>
            <div className="main-container">
                <section className="login-form-section">
                    <div className="container">
                        <h4 className="text-center heading">Log in</h4>
                        <form className="login-form-wrapper">
                            <div className="group">
                                <input type="text" onChange={handleChange} name='email' id='email' placeholder="Email" />
                                <input type="text" onChange={handleChange} placeholder="Password" name='password' id='password' />
                            </div>
                            <a onClick={submit}><button>Log In</button></a>
                            <a href="#" className="text-center" onClick={() => setShow(true)}>Change password</a>
                            <a onClick={() => navigate('/register')} className="btn">Create Account</a>
                        </form>
                    </div>
                </section>
            </div>
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
            <Dialog open={show} className='' onClose={() => setShow(false)}>
                <DialogTitle>Reset Password</DialogTitle>
                <DialogContent>
                    <input placeholder='' id='resetEmail' onChange={handleChange}
                        value={inputs.resetEmail} className='' name='resetEmail' type='email' /></DialogContent>
                <DialogActions><button>Submit</button></DialogActions>
            </Dialog>
        </div>
    )
}
export default Login