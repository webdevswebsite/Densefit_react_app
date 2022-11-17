import React, {useEffect} from "react";
import ShopfilterSection from "./ShopfilterSection";
import ShopPageRight from "./ShopPageRight";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function ShopPageBody(){
    useEffect(() => {
        Aos.init({
            offset: 100,
            easing: 'ease',
            delay: 0,
            once: true,
            duration: 800,
          
          });
    });
    return(
        <>
        <section className="total-body sub-pages py-5 d-block sp-bg-page">
            <div className="shop-page">
               <div className="container">
                  
                     <div className="mn-div-page-products">

                        <ShopPageRight/>

                     </div>

                     
                  
               </div>
            </div>
        </section>
        </>
    );
}
export default ShopPageBody;