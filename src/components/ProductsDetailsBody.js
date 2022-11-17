import React from "react";
import ProductDetailstop from "./ProductDetailstop";
import RelatedProductsSlider from "./RelatedProductsSlider";




function ProductsDetailsBody(){
    return(
        <>
           <section className="total-body sub-pages pt-5 d-block">
               <ProductDetailstop/>
               <RelatedProductsSlider/> 
           </section>
        </>
    );
}
export default ProductsDetailsBody;