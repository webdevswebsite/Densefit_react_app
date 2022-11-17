import React from "react";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

function OrderTotal () {
    return (
        <>
          <div className="oder-total-div mt-5 mt-md-0">
             <h2> Order Details </h2>
             <hr/>
             <div className="price-table">
                <p className="price-am"> Price <span> $250 </span> </p>
                <p className="delivery-am"> Delivery charges <span> Free </span> </p>
                <p className="discount-am"> Discount price <span> $10 </span> </p>
                <div className="form-group d-flex align-items-center">
                  <input type="text" className="form-control new-input" placeholder="Discount Coupon"/>
                  <input type="submit" value="Apply" className="btn cp-bn me-0"/>
                 </div>
                 <div class="total-price">
                   <p class="discount-am mb-lg-0"> Total Amount <span> $ 280 </span></p>
                 </div>
             </div>
          </div>
          <NavLink to="/checkout" className="btn mt-3 w-100 paybn"> Place Order <FaLongArrowAltRight/> </NavLink>
        </>
    );
}
export default OrderTotal;