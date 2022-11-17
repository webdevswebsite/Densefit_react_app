import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import Bestsellproducts from "./BestsellingApi";
import { FaShoppingBasket, FaExternalLinkAlt } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

function BestsellingHome(){
    const [ workData , setworkData] =useState(Bestsellproducts);
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
          <div className="Prodcuts-div mt-5 py-5">
              <div className="container"  style={{marginTop:'10px'}}>
                    <h6 className="text-center" data-aos="fade-down"> <span></span> Shop Now </h6>
                    <h2 className="text-center text-white comon-heading" data-aos="fade-up"> Best Selling  </h2>
                    <div className="products-slide">
                       <div className="filter-container">
                          <div className="row g-md-5 mt-5 row-cols-1 row-cols-md-2 row-cols-lg-4 gy-2 gy-lg-0">
                              {
                                  workData.map((curElem) => {
                                    const { id, img, title, offer, cate, oldprice, price, link} =curElem;
                                    return(
                                        <>
                                        <div className="col " data-aos="fade-down">
                                                <div className="produc-div">
                                                    <div className="products-box">
                                                        <div className="offer-text-div"> {offer} </div>
                                                        <figure>
                                                        <img src={img} alt="pic"/>
                                                        </figure>
                                                        <div className="hover-show-bn">
                                                        <a id="cart" className="comon-hv-bn"> <FaShoppingBasket/> </a>
                                                        <NavLink to='productsDetails' className="comon-hv-bn"> <FaExternalLinkAlt/> </NavLink>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="ps-details text-center">
                                                    <NavLink to={link} className="cate-text d-table text-center m-auto">{cate}</NavLink>
                                                    <NavLink to={link} className="products-titel m-auto"> {title} </NavLink>
                                                    <div className="d-flex align-items-center justify-content-center">
                                                        <h5  className="old-pice text-decoration-line-through"> {oldprice}</h5> <h5 class="price-text ms-3"> ₦{price} </h5>
                                                    </div>
                                                    
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
              </div>
          </div>
        </>
    );
}
export default BestsellingHome;