import React, { useState } from 'react'
import { useStore } from '../ContextApi/MyContext'

function ChangePassword() {
    const [inputs, setInputs] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    })
    const [, dispatch] = useStore()

    const sumit = e => {
        e.preventDefault()
    }
    return (
        <div className="gym-member-login-page booking-page instructor-page change-password-page">

            <div className="main-container">
                <section className="main-content">
                    <div className="container">
                        <div className="wrapper">
                            <div className="heading">
                                <i className="fa fa-chevron-left"></i> &nbsp; &nbsp; Personal Information
                            </div>
                            <form action="">
                                <div className="form-group">
                                    <input type="password" placeholder="Current Password" />
                                </div>
                                <div className="form-group">
                                    <input type="password" placeholder="New Password" />
                                </div>
                                <div className="form-group">
                                    <input type="password" placeholder="Confirm new Password" />
                                </div>
                                <div className="form-group">
                                    {/* <!-- Should take to user dashboard after clicking--> */}
                                    <button href="/GymMember/dashboard.html" className="btn">Save Changes</button>
                                </div>
                            </form>
                        </div>
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
        </div>

    )
}

export default ChangePassword