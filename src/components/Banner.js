import React from "react";
import { NavLink } from "react-router-dom";
import Bannerpicone from "../images/banner2-1.jpg";
import Bannerpictwo from "../images/banner2-3.jpg";
import Bannerpicthree from "../images/banner3.jpg";
import { FaShoppingCart } from "react-icons/fa";

function Banner() {
    return (
        <div className="banner-part" >

            <div className="css-slider-wrapper">
                <input
                    type="radio"
                    name="slider"
                    className="slide-radio1"
                    checked
                    id="slider_1"
                />
                <input type="radio" name="slider" className="slide-radio2" id="slider_2" />
                <input type="radio" name="slider" className="slide-radio3" id="slider_3" />



                <div className="slider-pagination">
                    <label for="slider_1" className="page1">

                    </label>
                    <label for="slider_2" className="page2">

                    </label>
                    <label for="slider_3" className="page3">

                    </label>

                </div>


                <div className="slider slide-1">
                    <div className="img-div">

                        <div className="spring-animation">
                            <img src={Bannerpicone} alt="" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="col-lg-6 ms-auto">
                            <div className="slider-content" >
                                {/* <h4> Browse </h4> */}
                                <h2 style={{ color: 'red', fontWeight: '800' }}>Discover
                                    <span className="d-block" style={{ color: 'red', fontWeight: '800' }}> Pupolar products </span>  </h2>
                                <p style={{ color: 'white', fontWeight: '900' }}> Our onlinestore also offers you the best beauty products from world-wide known brands. Anything related to health and beauty, cosmetics and fragrances can be found at our online store.</p>
                                <NavLink to="/bestsellinghome" className="buy-now-btn" name="button"> <FaShoppingCart /> Shop Now </NavLink>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="slider slide-2">

                    <div className="img-div">

                        <div className="spring-animation">
                            <img src={Bannerpictwo} alt="" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="col-lg-6 ms-auto">
                            <div className="slider-content">
                                <h4> Browse </h4>
                                <h2>& discover
                                    <span className="d-block"> Pupolar products </span>  </h2>
                                {/* <p>  Read customer reviews and find best sellers. We ship to over 100 international destinations, right to your doorstep.</p> */}
                                <NavLink to="/shop" className="buy-now-btn" name="button"> <FaShoppingCart /> Shop Now </NavLink>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="slider slide-3">

                    <div className="img-div">
                        <div className="spring-animation">
                            <img src={Bannerpicthree} alt="" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="col-lg-6 ms-auto">
                            <div className="slider-content">
                                <h4> Browse </h4>
                                <h2>& discover
                                    <span className="d-block"> Pupolar products </span>  </h2>
                                {/* <p>  Read customer reviews and find best sellers. We ship to over 100 international destinations, right to your doorstep.</p> */}
                                <NavLink to="/shop" className="buy-now-btn" name="button"> <FaShoppingCart /> Shop Now </NavLink>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    );
}
export default Banner;