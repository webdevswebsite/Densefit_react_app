import React, { useState } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import RelatedProducts from "./RectentlyPsApi";
import { NavLink } from "react-router-dom";
import { FaShoppingBasket, FaExternalLinkAlt } from "react-icons/fa";

function RelatedProductsSlider() {
    const [ workData, setworkData ] = useState(RelatedProducts);
    console.log(setworkData)
    console.log(workData);
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 4,

            }
        },
    };
    return (
        <>
            <div className="related-products py-5">

                <div className="container">
                    <h2> Recent Products </h2>
                    <div className="our-cs-silder mt-4">

                        <OwlCarousel className='owl-theme'
                            {...options}>
                            {
                                workData.map((curElem) => {
                                    const { id, img, title, cate, price, link } = curElem;
                                    return (
                                        <>
                                            <div className="comon-relate-items" key={id}>
                                                <div className="produc-div">
                                                    <div className="products-box">
                                                        <figure>
                                                            <img src={img} alt="pic" />

                                                        </figure>
                                                        <div className="hover-show-bn">
                                                            <button style={{ border: 'none', background: "none" }} id="cart" className="comon-hv-bn"> <FaShoppingBasket /> </button>
                                                            <NavLink to="/" className="comon-hv-bn"> <FaExternalLinkAlt /> </NavLink>
                                                        </div>
                                                    </div>

                                                    <div className="ps-details text-center">
                                                        <NavLink to={link} className="cate-text d-table text-center m-auto"> {cate} </NavLink>
                                                        <NavLink to={link} className="products-titel m-auto"> {title} </NavLink>

                                                        <h5 className="price-text"> {price} </h5>
                                                    </div>

                                                </div>
                                            </div>
                                        </>
                                    );
                                })
                            }
                        </OwlCarousel>

                    </div>
                </div>

            </div>
        </>
    );
}
export default RelatedProductsSlider;