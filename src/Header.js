import React from "react";
import { BsPerson, BsSearch } from "react-icons/bs";
import { FaShoppingBasket, FaRegWindowClose, } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../src/images/logo.png";
import logomobiletop from "../src/images/logomb.png";
import cartimgn from "../src/images/product-5.png";
import cartimgm from "../src/images/product-3.png";
import $ from 'jquery';

$(document).ready(function() {
    $( window ).scroll(function() {
          var height = $(window).scrollTop();
          if(height >= 100) {
              $('.mn-head').addClass('fixed-menu');
          } else {
              $('.mn-head').removeClass('fixed-menu');
          }
      });
      
  });

function Header(){
    return (
        <div>
           <header>  
     
                <div className="mn-head">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light align-items-center justify-content-between">
                            <NavLink to="/" href="#">
                              Densefit
                                {/* <img src={logo} className="logo-main" alt="logo"/>
                                <img src={logomobiletop} className="logo-mobile" alt="logo"/> */}
                            </NavLink>
                            {/* mobile header starts here------------------------ */}
                            <div className="d-block mbile-checkout ms-auto d-lg-none">
                                <div className="dropdown">
                                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <FaShoppingBasket/>
                                        <span className="cart-nuber">
                                            2
                                        </span>
                                        </button>
                                        <ul className="dropdown-menu shadow cart-dropdown-ne" aria-labelledby="dropdownMenuButton1">        
                                            <li>
                                            <div className="comon-cart-ps">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <NavLink exact="true"  to="/" className="products-sm-pic">
                                                        <figure>
                                                            <img src={cartimgn} alt="bn"/>
                                                        </figure>
                                                    </NavLink>
                                                    <div className="cart-ps-details">
                                                        <NavLink exact="true" to="/" className="titel-crt-products">
                                                        Item name
                                                        </NavLink>
                                                        <h6> $ $00:00</h6>
                                                        
                                                    </div>
                                                    <a  className="close-crt"> <FaRegWindowClose/> </a>
                                                </div>
                                            </div>
                                            <div className="comon-cart-ps">
                                                <div className="d-flex align-items-center justify-content-between">
                                                <NavLink exact="true" to="/" className="products-sm-pic">
                                                    <figure>
                                                        <img src={cartimgm} alt="bn2"/>
                                                    </figure>
                                                </NavLink>
                                                <div className="cart-ps-details">
                                                    <NavLink exact="true" to="/" className="titel-crt-products">
                                                    Item name
                                                    </NavLink>
                                                    <h6> $00:00 </h6>
                                                
                                                </div>
                                                <a className="close-crt"> <FaRegWindowClose/> </a>
                                            
                                                </div>
                                            </div>
                                            </li>
                                            <li>
                                            <div className="sub-total-products d-flex align-items-center justify-content-between">
                                                <h6> Subtotal:  </h6>
                                                <h4> $ $00:00</h4>
                                            </div>
                                            </li>
                                            <li>
                                            <NavLink exact to="/cart" className="btn d-table cart-drop-bn"> View Cart </NavLink>
                                            </li>
                                            <li>
                                            <NavLink exact to="/checkout" className="btn d-table check-drop-bn"> Check out </NavLink>
                                            </li>
                                        
                                        </ul>
                                </div>
                            </div>
                            {/* Nav bar here--------------------- */}
                            <button className="navbar-toggler ms-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobile-menu" aria-controls="offcanvasExample">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-lg-center">
                                    <li className="nav-item">
                                      {/* <NavLink className="nav-link" to="/">Home</NavLink> */}
                                    </li>
                                </ul>
                                
                            </div>
                           
                            <div className="justify-content-lg-end right-menu d-none  d-lg-grid justify-content-end">
                                <ul className="list-unstyled mb-0">
                                  <li className="d-flex align-items-center"> 
                                    
                                    <div className="dropdown position-relative mr-3">
                                    <button className="btn dropdown-toggle com-link cart-new-icon " type="button"
                                    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FaShoppingBasket/>
                                    </button>
                                    <ul className="dropdown-menu shadow cart-dropdown-ne" aria-labelledby="dropdownMenuButton1">
                                        <li>
                                        <div className="comon-cart-ps">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <NavLink to="/" className="products-sm-pic">
                                                    <figure>
                                                        <img src={cartimgn} alt="bn"/>
                                                    </figure>
                                                </NavLink>
                                                <div className="cart-ps-details">
                                                    <NavLink to="/" className="titel-crt-products">
                                                    Item name
                                                    </NavLink>
                                                    <h6> $ $00:00 </h6>
                                                </div>
                                                <a id="" className="close-crt"> <FaRegWindowClose/> </a>
                                            </div>
                                        </div>
                                        <div className="comon-cart-ps">
                                            <div className="d-flex align-items-center justify-content-between">
                                            <NavLink to="/" className="products-sm-pic">
                                                <figure>
                                                    <img src={cartimgm} alt="bn"/>
                                                </figure>
                                            </NavLink>
                                            <div className="cart-ps-details">
                                                <NavLink to="/" className="titel-crt-products">
                                                    Item name
                                                </NavLink>
                                                <h6> $00:00 </h6>
                                            </div>
                                            <a id="" className="close-crt"> <FaRegWindowClose/> </a>
                                            </div>
                                        </div>
                                        </li>
                                        <li>
                                        <div className="sub-total-products d-flex align-items-center justify-content-between">
                                            <h6> Subtotal:  </h6>
                                            <h4> $ $00:00 </h4>
                                        </div>
                                        </li>
                                        <li>
                                        <NavLink to="/cart" className="btn cart-drop-bn"> View Cart </NavLink>
                                        </li>
                                        <li>
                                        <NavLink to="/checkout" className="btn check-drop-bn"> Check out </NavLink>
                                        </li>
                                        
                                    </ul>
                                    <span className="cat-count"> 0 </span>
                                    </div>
                                    <a data-bs-toggle="modal" data-bs-target="#loginModal" className="btn com-link login-top"> <BsPerson/> </a>
                                    
                                 </li>
                                
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    );
}
export default Header;