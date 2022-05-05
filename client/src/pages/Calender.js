import React, { useState } from 'react'
import 'react-calendar/dist/Calendar.css';
import { Navigate, useNavigate } from 'react-router-dom'
import ReactCalendar from 'react-calendar'
import moment from 'moment'
import { useStore } from '../ContextApi/MyContext'
import { bookClass } from '../ContextApi/actions';

function Calender() {
    const [{ user }, dispatch] = useStore()
    const [value, onChange] = useState(new Date());
    const [show, setshow] = useState(false);
    const navigate = useNavigate()
    const submit = e => {
        e.preventDefault()
        bookClass(value)
    }
    // console.log('val', value)
    return (
        <div className="gym-member-login-page calendar-page">
            <header id="header">
                <div className="logo">
                    <a href="#">
                        <span>W</span> DEN
                    </a>
                </div>
            </header>
            <div className="main-container">
                <section className="main-content">
                    <div className="container">
                        <div className="calendar-wrapper">
                            <div className="box calendar-box">
                                <div className="heading">
                                    Find a class
                                </div>
                                <div className="calendars">
                                    <ReactCalendar minDate={new Date()}
                                        onChange={(v) => {
                                            onChange(moment(v).format('dddd, MMM DD'))
                                        }} />
                                </div>
                            </div>
                            <div className="box class-container">
                                <div className="heading">
                                    Saturday, March 26
                                </div>
                                <div className="class-wrapper">
                                    <div className="class">
                                        <div className="class-info">
                                            <h4 className="time">9:30 am - 10:30 am</h4>
                                            <h4 className="name">Fit Body</h4>
                                            <h4 className="tutor"><small>Sofia Nunez</small></h4>
                                            <h4 className="extra">5 available from 10</h4>
                                        </div>
                                        <div className="">
                                            <a onClick={() => ''}><button className="btn">Book</button></a>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <div className="detail-heading">
                                            <span className="see-details" onClick={() => setshow(!show)} > {'>'} {show ? 'Hide details' : ' See details'}</span>
                                        </div>
                                        {show && <div className="body">
                                            <h3>Class details</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aliquid itaque
                                                voluptatibus saepe totam assumenda consequuntur deserunt optio laborum numquam.
                                            </p>
                                            <hr />
                                            <h3>Coach details</h3>
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti id ducimus
                                                vitae aspernatur eveniet fugit laboriosam, voluptates molestias nihil ut
                                                reiciendis veniam placeat incidunt numquam vero mollitia aperiam quibusdam quo
                                                illum enim laborum eius quas. Blanditiis iusto fuga explicabo, ad sed enim minus
                                                in nisi nostrum eius labore assumenda ex?</p>
                                        </div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >

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
                    <p>Wodden Studio 2022 &copy; All Rights Reserved.</p>
                </div>
            </footer>
        </div >
    )
}

export default Calender