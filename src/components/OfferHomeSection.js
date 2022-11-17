import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function OfferHomeSection(){
    useEffect(() => {
        Aos.init({
            offset: 100,
            easing: 'ease',
            delay: 0,
            once: true,
            duration: 800,
          
          });
    });
    return (
        <>
        <div className="first-order-div">
            <div className="container">
                <h2 className="text-center text-white" data-aos="fade-down"> Get an Extra 10% off your  first order </h2>
                <p className="text-center text-white col-md-7 m-auto" data-aos="fade-up"> With a large selection of popular spirits and hard to find rare liquors, 
                    we are your one stop shop for all your alcohol needs. </p>
                <NavLink to="/shop" className="btn shop-bn-offer" data-aos="fade-up"> Shop Now </NavLink>
            </div>
        </div>
        </>
    );
}
export default OfferHomeSection;