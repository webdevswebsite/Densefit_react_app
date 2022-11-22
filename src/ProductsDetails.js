import React, { useEffect} from "react";
import SubpageBanner from "./components/SubpageBanner";
import ProductsDetailsBody from "./components/ProductsDetailsBody";


function ProductsDetails(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    document.title ="Vintagewine - Products Details"
    return(
        
        <>
         <SubpageBanner name="Products Details" indexpage="Home" indexvisit="/" activepage="Products Details" />
         <ProductsDetailsBody/>
        </>
    );
}
export default ProductsDetails;
