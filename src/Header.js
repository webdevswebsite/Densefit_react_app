import React, {useEffect, useState} from "react";
import { BsPerson } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai"
import { FaShoppingBasket } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import $ from 'jquery';
import { CartState } from "./context/Context";



$(document).ready(function () {
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height >= 100) {
            $('.mn-head').addClass('fixed-menu');
        } else {
            $('.mn-head').removeClass('fixed-menu');
        }
    });

});

function Header() {

    const {
        state: { cart },
        dispatch
    } = CartState();

    const [ total, setTotal ] = useState()

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
    }, [ cart ])

    console.log(cart)

    return (
        <div>
            <header>

                <div className="mn-head">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light align-items-center justify-content-between">
                            <NavLink style={{ color:'#ea2e49', fontWeight:'900'}} to="/" href="#">
                                DENSEFIT            
                            </NavLink>
                            {/* mobile header starts here------------------------ */}
                            <div className="d-block mbile-checkout ms-auto d-lg-none">
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <FaShoppingBasket />
                                    </button>
                                    <ul className="dropdown-menu shadow cart-dropdown-ne" aria-labelledby="dropdownMenuButton1">
                                        <li>
                                            <div className="comon-cart-ps">
                                                <div className="align-items-center justify-content-between">
                                                    {cart.length > 0 ? (
                                                        <>
                                                            {
                                                                cart.map(prod => (
                                                                    <>
                                                                        <div className="cart-item-container" key={prod.id}>
                                                                            <span to="/" className="products-sm-pic">
                                                                                <figure>
                                                                                    <img src={prod.img} alt="bn" />
                                                                                </figure>
                                                                            </span>
                                                                            <div className="cart-ps-details">
                                                                                <span to="/" className="titel-crt-products">
                                                                                    {prod.title}
                                                                                </span>
                                                                                <h6> ${prod.price.split(".")[ 0 ]} </h6>
                                                                            </div>
                                                                            <AiFillDelete style={{
                                                                                position: 'absolute',
                                                                                top: '24',
                                                                                right: '20',
                                                                                cursor: 'pointer'
                                                                            }}
                                                                                onClick={() =>
                                                                                    dispatch({
                                                                                        type: "REMOVE_FROM_CART",
                                                                                        payload: prod,
                                                                                    })
                                                                                }
                                                                            />
                                                                        </div>
                                                                    </>
                                                                ))
                                                            }
                                                        </>
                                                    ) : (
                                                        <span>Cart is Empty!</span>
                                                    )}
                                                </div>
                                            </div>
                                           
                                        </li>
                                       
                                        <li>
                                            <div className="sub-total-products d-flex align-items-center justify-content-between">
                                                <p className="discount-am mb-lg-0"> Total Amount: <span> $ {total} </span></p>
                                            </div>
                                        </li>
                                        <li>
                                            <NavLink exact to="/shipment" className="btn d-table check-drop-bn"> Check out </NavLink>
                                        </li>

                                    </ul>
                                    <span className="cat-count"> {cart.length} </span>
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
                                                <FaShoppingBasket />
                                            </button>
                                            <ul className="dropdown-menu shadow cart-dropdown-ne" aria-labelledby="dropdownMenuButton1">
                                                <li>
                                                    <div className="comon-cart-ps">
                                                        <div className="align-items-center justify-content-between">
                                                            {cart.length > 0 ? (
                                                                <>
                                                                    {
                                                                        cart.map(prod => (
                                                                            <>
                                                                                <div className="cart-item-container" key={prod.id}>
                                                                                    <span to="/" className="products-sm-pic">
                                                                                        <figure>
                                                                                            <img src={prod.img} alt="bn" />
                                                                                        </figure>
                                                                                    </span>
                                                                                    <div className="cart-ps-details">
                                                                                        <span to="/" className="titel-crt-products">
                                                                                            {prod.title}
                                                                                        </span>
                                                                                        <h6> ${prod.price.split(".")[ 0 ]} </h6>
                                                                                    </div>
                                                                                    <AiFillDelete style={{
                                                                                        position: 'absolute',
                                                                                        top: '24',
                                                                                        right: '20',
                                                                                        cursor:'pointer'
                                                                                    }}
                                                                                        onClick={() =>
                                                                                            dispatch({
                                                                                                type: "REMOVE_FROM_CART",
                                                                                                payload: prod,
                                                                                            })
                                                                                        }
                                                                                    />
                                                                                </div>
                                                                            </>
                                                                        ))
                                                                    }
                                                                </>
                                                            ) : (
                                                                <span>Cart is Empty!</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="sub-total-products d-flex align-items-center justify-content-between">
                                                        <p className="discount-am mb-lg-0"> Total Amount: <span> $ {total} </span></p>
                                                    </div>
                                                </li>
                                                
                                                <li>
                                                    <NavLink to="/shipment" className="btn check-drop-bn"> Check out </NavLink>
                                                </li>
                                            </ul>
                                            <span className="cat-count"> {cart.length} </span>
                                        </div>
                                        <button style={{ border: 'none', background: "none" }} data-bs-toggle="modal" data-bs-target="#loginModal" className="btn com-link login-top"> <BsPerson /> </button>

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