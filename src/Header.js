import React, { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai"
import { FaShoppingBasket } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import $ from 'jquery';
import { CartState, CurrencyState } from "./context/Context";
// import { Converter } from './lib/currency'



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

//API REQUEST PROPERTIES
var myHeaders = new Headers();
// var key = 'bKOwUlmw2tXrEhTMCZIGi7K3KvDZiv5J'
var key = 'GKf58yqF3usBTj1HMEdcMCifxFYflQuZ'
myHeaders.append("apikey", key)
var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

function Header() {

    const {
        state: { cart },
        dispatch
    } = CartState();

    const {
        state: { currency, currencies, rate },
        dispatch: dispatchCurrency
    } = CurrencyState();

    const [ total, setTotal ] = useState()
    // const [ conversion, setConversion ] = useState()
    //manage active currency
    const [ activeCurrency, setActiveCurrency ] = useState(
        localStorage.getItem('currency')
    )

    //handle currency update
    const handleChangeCurrency = ({ target: { value } }) => {

        //update context currency state with the active state from select option
        dispatchCurrency({
            type: value,
            payload: value,
        })

        setActiveCurrency(value)

        //set the current current to local storage for persistency
    }


    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
    }, [ cart ])

    useEffect(() => {
        // on page reload activeCurency clears the state, prevent it from updating localstorage
        if (activeCurrency === undefined) return

        console.log(Converter(), 'conv');
        //only update local storage when activeCurrency has a value
        window.localStorage.setItem('currency', activeCurrency || 'USD');
    }, [ activeCurrency ]);

    // console.log(cart)

    async function Converter(amount) {
        // let res = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=NGN&from=USD&amount=${amount}`, requestOptions)
        let res = await fetch(`https://exchange-rates.abstractapi.com/v1/convert/?api_key=90c11f104f7d4dd8bf1a0b8a70f7440c&base=USD&target=NGN&base_amount=${amount}`, requestOptions)
            .then(response =>
                response.json()
            )
            .then((data) => {
                console.log(data, 'data');
                if (data) {
                    // setConversion(data.result)
                    return data
                }
            })
            .catch((error) => {
                console.error(error);
            });
        return res;
    }


    return (
        <div>
            <header>

                <div className="mn-head">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light align-items-center justify-content-between">
                            <NavLink style={{ color: '#ea2e49', fontWeight: '900' }} to="/" href="#">
                                DENSEFIT
                            </NavLink>
                            {/* mobile header starts here------------------------ */}
                            <div style={{ alignItems: 'center', justifyContent: 'space-between' }} className="d-flex mbile-checkout ms-auto d-lg-none">
                                <span>
                                    {/* <span>AC:{ activeCurrency }</span> */}
                                    {/* <span>SC:{currency }</span> */}
                                    {/* <span>{Converter(500)}</span> */}
                                    <select style={{ border: 'none' }} defaultValue={activeCurrency} onChange={handleChangeCurrency} >
                                        {currencies.map((currency, idx) => (
                                            <option
                                                defaultValue={activeCurrency}
                                                value={currency}
                                                key={idx + currency}>
                                                {currency}
                                            </option>
                                        ))}
                                    </select>
                                </span>
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
                                                                cart.map(prod => {
                                                                    let priceToNum = parseInt(prod.price.split(".")[ 0 ])

                                                                    return (
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
                                                                                    <h6> {currency} {currency !== '$' ? priceToNum * rate : priceToNum} </h6>
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
                                                                    )
                                                                }
                                                                )
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
                                                <p className="discount-am mb-lg-0"> Total Amount: <span> {currency +
                                                    //  total
                                                    (currency !== '$' ? total * rate : total)
                                                } </span></p>
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
                                                                                        <h6> {currency}{prod.price.split(".")[ 0 ]} </h6>
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
                                                        <p className="discount-am mb-lg-0"> Total Amount: <span> {currency}{total} </span></p>
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