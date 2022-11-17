import React, {useEffect} from "react";
import SubpageBanner from "./components/SubpageBanner";
import CheckoutBody from "./components/CheckoutBody";

function Checkout () {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      document.title ="Vwine - Check Out"
    return (
        <>
         <SubpageBanner name="Check Out" indexpage="Home" indexvisit="/" activepage="Check Out" />
         <CheckoutBody/>
        </>
    );
}
export default Checkout;