import React from "react";
import { FaRegTimesCircle , FaPlus , FaMinus ,FaShoppingCart , FaFacebookSquare, FaGooglePlusSquare, FaTwitterSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Count from "./Count";

function ProductRightDetails(){
    return(
        <>
           <div className="menu-dl-right">
               <h2>Classic Designer Sunshade - For Ladies With Free Zipper Black Hard Case</h2>
               <h3> ₦10,500 </h3>
               <p> POLARIZED HD VISION SUNGLASSES LENS - The lens of DIZZY sunglasses are made from first class materials to make sure it is durable, light weight and polarized. Block out 99% harmful UVA&UVB rays and strong light. Protect your eyes perfectly.SPECIAL ERGONOMIC DESIGN ENSURE COMFORTABLE WEARING EXPERIENCE - Our polarized sunglasses not only have the fashionable style but also have the Humanized Design. Fit your ear skin and head perfectly. </p>
                {/* <h5> Size Of Crust </h5> */}
               
                {/* <div className="sel-size mb-3">
                        <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                            <input type="checkbox" className="btn-check" id="btncheck1" autocomplete="off"/>
                            <label className="btn btn-outline-primary" for="btncheck1">50ml</label>
                    
                            <input type="checkbox" className="btn-check" id="btncheck2" autocomplete="off"/>
                            <label className="btn btn-outline-primary" for="btncheck2">100ml</label>
                    
                            <input type="checkbox" className="btn-check" id="btncheck3" autocomplete="off"/>
                            <label className="btn btn-outline-primary" for="btncheck3">200ml</label>

                            <input type="checkbox" className="btn-check" id="btncheck4" autocomplete="off"/>
                            <label className="btn btn-outline-primary" for="btncheck4">250ml</label>
                        </div>
                            
                </div> */}
                <h5> Quantity </h5>
                <div className="col-4">
                   <Count/>
                </div>
                
                {/* <h5 className="mt-3"> Share This : </h5> */}
                {/* <ul className="list-unstyled share-links mt-2">
                    <li className="d-flex"> 
                        <NavLink to="/"> <FaFacebookSquare/> </NavLink>
                        <NavLink to="/"> <FaTwitterSquare/> </NavLink>
                        <NavLink to="/"> <FaGooglePlusSquare/> </NavLink>
                    </li>
                </ul> */}
                <div className="d-flex align-content-center mt-4">
                   <a id="" className="btn cart-bn-ds"> <FaShoppingCart/> Add to Cart</a>
                   <NavLink to="/" className="btn buy-bn-ds ms-3"> Checkout </NavLink>
                </div>
                
           </div>
        </>
    );
}
export default ProductRightDetails;