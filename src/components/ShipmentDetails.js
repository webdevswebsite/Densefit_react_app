import React from "react";
import BillingDetais from "./BillingDetais";

function ShipmentDetails() {
  return (
    <>
      <div className="checkout-body-div my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" style={{ magingTop: '50px', boder: '1px solid red' }}>
              <div className="left-checkout">
                <BillingDetais />
                {/* <Paymentmethod/> */}
              </div>
            </div>
            <div className="col-lg-4">
              {/* <CheckoutPayright/> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ShipmentDetails;