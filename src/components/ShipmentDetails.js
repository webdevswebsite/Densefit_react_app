import React from "react";
import BillingDetais from "./BillingDetais";
import SubpageBanner from "./SubpageBanner";

function ShipmentDetails() {
  return (
    <>
      <SubpageBanner name="Shipping details" indexpage="Home" indexvisit="/" activepage="shipment" />

      <div className="checkout-body-div my-5" >
        <div className="container">
          <div className="row">
            <div className="col-lg-12" style={{ magingTop: '50px' }}>
              <div className="left-checkout" style={{ marginTop: '50px' }}>
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