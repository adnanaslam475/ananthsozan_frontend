import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../ContextApi/MyContext'

function InstructorDashboard() {
    const [, dispatch] = useStore()
    const navigate = useNavigate()
    return (
        <div className="gym-member-login-page member-dashboard instructor-page gym-member-details">
            <header>
                <div className="container">
                    <div className="text">
                        <h4 style={{ textAlign: 'left', width: '100%' }}>
                            <a href="#">
                                <i className="fa fa-chevron-left"></i> &nbsp; <span>Coach</span>
                            </a>
                        </h4>
                    </div>
                </div>
            </header>

            <div className="main-container">
                <section className="main-content">
                    <div className="container">
                        <div className="">
                            <h2 className="text-center">
                                Erika Nunez
                            </h2>
                        </div>
                        <div className="button-wrapper">
                            <a href="/GymMember/calendar.html" className="btn book-class">Book class</a>
                            <a href="/Instructor/view-booking.html" className="btn view-class">View booked classes</a>
                        </div>
                        <div className="links">
                            <ul>
                                <li> <a href="/Instructor/personal-info.html"><span>Personal information</span> <i className="fa-solid fa-chevron-right"></i>
                                </a>

                                </li>
                                <li> <a href="/Instructor/change-password.html"><span>Change password</span> <i className="fa-solid fa-chevron-right"></i> </a>
                                </li>
                            </ul>
                        </div>
                        <a href="#" className="sign-out-link">Eliminar coach</a>
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

export default InstructorDashboard