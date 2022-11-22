import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import smallpicone from "../images/109076-cypruswine-Cyprus-Maratheftiko-Shiraz-wine-748x549.jpg";
import smallpictwo from "../images/navbharat-times.jpg";
import landscapepictwo from "../images/istockphoto-1183406603-170667a.jpg";
import bigpictwo from "../images/JP-wine-under-250-_255x255_cd3b2cb5-b368-408a-b28b-4ba802f9ee27.webp";
import Aos from "aos";
import "aos/dist/aos.css";

function OfferHome(){
    useEffect(() => {
        Aos.init({
            offset: 100,
            easing: 'ease',
            delay: 0,
            once: true,
            duration: 800,
          
          });
    });
    document.title ="Marketplace - Home"
    return(
        <>
        <div className="top-offer-div-sec ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row row-cols-1 row-cols-md-2 gy-4 gy-lg-0 gx-lg-4 justify-content-between align-items-center">
                            <div className="col" data-aos="fade-up">
                                <NavLink to="/shop" className="comon-offer">
                                    <figure>
                                        <img src={smallpicone} alt="bg"/>
                                    </figure>
                                    <h5 className="col-lg-11 m-auto"> <span className="d-block"> 20% Off</span>
                                    on all weekend sale </h5>
                                </NavLink>
                            </div>
                            <div className="col" data-aos="fade-down">
                                <NavLink to="/shop" className="comon-offer">
                                    <figure>
                                        <img src={smallpictwo} alt="bg"/>
                                    </figure>
                                    <h5 className="col-lg-11 m-auto"> <span className="d-block">  Free Shipping  </span>
                                    on order over 100,000 naira  </h5>
                                </NavLink>
                            </div>
                        </div>
                        <div className="big-div-offer mb-4 mb-lg-0 mt-4" data-aos="fade-up">
                                <button style={{ border: 'none', background: "none" }} href="#" className="comon-offer">
                            <figure>
                                <img src={landscapepictwo} alt="bg"/>
                            </figure>
                            <h5 className="col-lg-6 ms-md-auto"> <span className="d-block">  10% Off</span>
                            on all weekend sale </h5>
                            </button>
                        </div>
                    </div>
                    
                    <div className="col-lg-4" data-aos="fade-down">
                    <a href="#" className="comon-offer height-offer">
                        <figure>
                            <img src={bigpictwo} alt="bg"/>
                        </figure>
                        <h5 className="col-lg-11 text-center m-auto"> <span className="d-block">  20% Off </span>
                        on all weekend sale </h5>
                    </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default OfferHome;