import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import FeaturedProducts from "./FeaturedProdcutApi";
import { FaShoppingBasket, FaExternalLinkAlt } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

function FeaturedProdcuts(){
    const [ workData , setworkData] =useState(FeaturedProducts);
    console.log(workData);

    useEffect(() => {
        Aos.init({
            offset: 100,
            easing: 'ease',
            delay: 0,
            once: true,
            duration: 800,
          
          });
    });

    return(
        <>
            <div className="our-production-div py-5">
               <div className="container">
                    <h6 className="text-center" data-aos="fade-up"> Own Producton </h6>
                    <h2 className="text-center" data-aos="fade-down">  Featured Products  </h2>
                    <div className="row gy-5 gy-lg-0 g-md-5 mt-0 row-cols-1 row-cols-md-2 row-cols-lg-4 g-lg-5 ">
                         {
                             workData.map((curElem) => {
                                const { id, img, title, cate, price, link} =curElem;
                                return(
                                     <> 
                                        <div className="col " data-aos="fade-up">
                                            <div className="produc-div">
                                                <div className="products-box">
                                                <figure>
                                                    <img src={img} alt="pic"/>
                                                    
                                                </figure>
                                                <div className="hover-show-bn">
                                                    <a id="cart" className="comon-hv-bn"> <FaShoppingBasket/> </a>
                                                    <NavLink to="/" className="comon-hv-bn"> <FaExternalLinkAlt/> </NavLink>
                                                </div>
                                                </div>
                                            
                                            <div className="ps-details text-center">
                                                <NavLink to={link} className="cate-text d-table text-center m-auto"> {cate} </NavLink>
                                                <NavLink to={link} className="products-titel m-auto"> {title} </NavLink>
                                                
                                                <h5  className="price-text"> {price} </h5>
                                            </div>
                                            
                                            </div>
                                        </div>
                                         
                                     </>
                                );
                             })
                         }
                            

                    </div>
               </div>
            </div>
        </>
    );
}
export default FeaturedProdcuts;