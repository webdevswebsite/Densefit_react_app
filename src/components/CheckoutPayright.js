import React from "react";
import { NavLink } from "react-router-dom";

function CheckoutPayright () {

    return(
        <>
          <div className="checkout-right mt-5 mt-lg-0">
             <h2> Your Order </h2>
             <div className="oder-summary-item mt-3">

                <table className="table checkout-table">
                    <thead>
                        <tr>
                        <th scope="col"> Product </th>
                        <th scope="col">Quantity</th>
                        <th scope="col">amount</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                          ornare euismod
                        </td>
                        <td>x 1</td>
                        <td>$15</td>
                        
                        </tr>
                        <tr>
                        <td>ornare euismod</td>
                        <td>x 1</td>
                        <td>$15</td>
                        
                        </tr>
                        
                    </tbody>
                </table>

                
             </div>
             <div className="oder-right-details-new">
                              
                    <hr/>
                    <div className="price-sec-order">
                    <p className="price-am"> Price <span> $250 </span></p>
                    <p className="delivery-am"> Delivery charges <span> Free </span></p>
                    <p className="discount-am"> Discount price <span> $ 10 </span></p>
                    <div className="total-price p-0">
                        <p className="discount-am mb-lg-0"> Total Amount <span> $ 280 </span></p>
                    </div>
                    
                    </div>
                    
             </div>
          </div>

          <NavLink to="/checkout" className="btn paybn mt-3 w-100"> Payment now </NavLink>
        </>
    );
    
}
export default CheckoutPayright;