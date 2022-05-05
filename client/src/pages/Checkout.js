import React from 'react'

function Checkout() {
    return (
        <div className="gym-member-login-page checkout-page">
            <header>
                <div className="logo">
                    <a href="#">
                        <span>W</span>DEN
                    </a>
                </div>
            </header>
            <section className="main-content">
                <div className="container">
                    <h4>Summary</h4>
                    <div className="box-wrapper">
                        <div className="box">
                            <h5>Concept</h5>
                            <span>1 class</span>
                        </div>
                        <div className="box">
                            <h5>Price</h5>
                            <span style="font-size: 13px;">150 MXN</span>
                        </div>
                    </div>
                    <div className="box-wrapper">
                        <div className="box">
                            <h5>Subtotal</h5>
                            <h5>Total</h5>
                        </div>
                        <div className="box">
                            <h5>150 MXN</h5>
                            <h5>150 MXN</h5>
                        </div>
                    </div>
                    <form action="./member-dashboard.html" className="form-wrapper">
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Card information</label>
                            <div className="row">
                                <div className="col-12">
                                    <input type="text" placeholder="1234 1234 1234 1234" />
                                </div>
                                <div className="col-6 col-6-first">
                                    <input type="text" placeholder="MM/AA" />
                                </div>
                                <div className="col-6 col-6-second">
                                    <input type="text" placeholder="CVC" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Name on the card</label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Country or Region</label>
                            <select name="" id="">
                                <option value="Mexico">Mexcio</option>
                                <option value="Bangladesh">Bangladesh</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn">Buy</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Checkout