import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useStore } from '../ContextApi/MyContext';

function PersonalInfo() {
    const [{ user }, dispatch] = useStore()
    
    return (
        <div className="gym-member-login-page booking-page instructor-page personal-info-page">

            <div className="main-container">
                <section className="main-content">
                    <div className="container">
                        <div className="wrapper">
                            <div className="heading">
                                <i className="fa fa-chevron-left"></i> &nbsp; &nbsp; Personal Information
                            </div>
                            <div className="list">
                                <ul>
                                    <li>
                                        <span>Name</span> <strong>Michelle Cohen</strong>
                                    </li>
                                    <li>
                                        <span>Email</span> <strong>Michelle@gmail.com</strong>
                                    </li>
                                    <li>
                                        <span>Number</span> <strong>(442) 114 3497</strong>
                                    </li>
                                    <li>
                                        <span>Birthday</span> <strong>10 / 10 / 1998</strong>
                                    </li>
                                    <li>
                                        <span>Gender</span> <strong>Femenino</strong>
                                    </li>
                                </ul>
                            </div>
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

export default PersonalInfo