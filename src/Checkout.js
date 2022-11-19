import React, {useEffect} from "react";
import SubpageBanner from "./components/SubpageBanner";
import CheckoutBody from "./components/CheckoutBody";

function Checkout () {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      document.title ="CheckOut"
    return (
        <>
         <SubpageBanner name="Checkout" indexpage="Home" indexvisit="/" activepage="Checkout" />
         <CheckoutBody/>
        </>
    );
}
export default Checkout;