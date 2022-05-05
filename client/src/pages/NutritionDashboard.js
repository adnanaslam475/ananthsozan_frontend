import React from 'react'
import { Navigate } from 'react-router-dom';
import { useStore } from '../ContextApi/MyContext'

function NutritionDashboard() {
    const [{ user }, dispatch] = useStore()

    return (
        <div class="gym-member-login-page member-dashboard instructor-page gym-member-details">
            <header>
                <div class="container">
                    <div class="text">
                        <h4 style="text-align: left; width: 100%;">
                            <a href="#">
                                <i class="fa fa-chevron-left"></i> &nbsp; <span>Nutrition</span>
                            </a>
                        </h4>
                    </div>
                </div>
            </header>

            <div class="main-container">
                <section class="main-content">
                    <div class="container">
                        <div class="">
                            <h2 class="text-center">
                                Ana Sofia
                            </h2>
                        </div>
                        <div class="button-wrapper">
                            <a href="/Instructor/instructor-booking.html" class="btn book-class">Book appoinment</a>
                            <a href="/Instructor/view-booking.html" class="btn view-class" style="margin-top: 35px !important;">See booked appoinments</a>
                        </div>
                        <div class="links">
                            <ul>
                                <li> <a href="#"><span>Personal information</span> <i class="fa-solid fa-chevron-right"></i>
                                </a>
                                </li>
                                <li> <a href="#"><span>Change password</span> <i class="fa-solid fa-chevron-right"></i> </a>
                                </li>
                            </ul>
                        </div>
                        <a href="#" class="sign-out-link">Delete Account</a>
                    </div>
                </section>
            </div>


            <footer>
                <div class="container text-center">
                    <div class="logo">
                        <a href="#">
                            <span>W</span> DEN
                        </a>
                    </div>
                    <div class="social-media">
                        <ul>
                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fa fa-phone"></i></a></li>
                        </ul>
                    </div>
                    <div>
                        <a href="#">hola@woddenstuido.mx</a>
                    </div>
                </div>
                <div class="footer-bottom text-center">
                    <p>Wodden Studio 2022 &copy; Todos Ios Derechos Reservados.</p>
                </div>
            </footer>

        </div>
    )
}

export default NutritionDashboard