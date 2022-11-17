import React , {useEffect} from "react";
import SubpageBanner from "./components/SubpageBanner";
import CartBody from "./components/CartBody";

function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  document.title ="Vwine - Cart"
    return (
        <>
          <SubpageBanner name="Cart" indexpage="Home" indexvisit="/" activepage="Cart" />
          <CartBody/>
        </>
    );
}
export default Cart;