import React, { useEffect, useState } from "react";
import whychosedetails from "./WhychoosApi";
import Aos from "aos";
import "aos/dist/aos.css";

function OfferHome() {
    const [ workData, setworkData ] = useState(whychosedetails);
    console.log(workData, setworkData)
    useEffect(() => {
        Aos.init({
            offset: 100,
            easing: 'ease',
            delay: 0,
            once: true,
            duration: 800,

        });
    });
    document.title = "Marketplace - Home"
    return (
        <>
            <div className="offer-div-sec py-5">
               <div className="container">
                   <h2 className="text-center mb-5 text-white" data-aos="fade-up"> Why Trust Us? </h2>
                   <div className="row row-cols-1 row-cols-md-2 gy-4 gy-lg-0 gx-lg-4 row-cols-md-2 row-cols-lg-4">
                   {
                       workData.map((curElem)=>{
                           const{ id, img, title } =curElem;
                           return(
                                <>
                                   <div className="col" data-aos="fade-down" key={id}>

                                        <div className="comon-our-text text-center">
                                            <figure>
                                                <img src={img} alt={title}/>
                                            </figure>
                                            <h5 className="text-white"> {title}  </h5>
                                            {/* <p className="text-white"> 
                                            {description}
                                            </p> */}
                                        </div>
                                            
                                    </div>
                                </>
                           );
                       })
                   }
                      

                   </div>
               </div>
           </div>
            <div className="top-offer-div-sec ">
                {/* <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row row-cols-1 row-cols-md-2 gy-4 gy-lg-0 gx-lg-4 justify-content-between align-items-center">
                                <div className="col" data-aos="fade-up">
                                    <div className="comon-offer">
                                        <figure>
                                            <img src={smallpicone} alt="bg" />
                                        </figure>
                                        <h5 className="col-lg-11 m-auto"> <span className="d-block"> 20% Off</span>
                                            on all weekend sale </h5>
                                    </div>
                                </div>
                                <div className="col" data-aos="fade-down">
                                    <div className="comon-offer">
                                        <figure>
                                            <img src={smallpictwo} alt="bg" />
                                        </figure>
                                        <h5 className="col-lg-11 m-auto"> <span className="d-block">  Free Shipping  </span>
                                            on order over 100,000 naira  </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="big-div-offer mb-4 mb-lg-0 mt-4" data-aos="fade-up">
                                <button style={{ border: 'none', background: "none" }} href="#" className="comon-offer">
                                    <figure>
                                        <img src={landscapepictwo} alt="bg" />
                                    </figure>
                                    <h5 className="col-lg-6 ms-md-auto"> <span className="d-block">  10% Off</span>
                                        on all weekend sale </h5>
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-4" data-aos="fade-down">
                            <button style={{ border: 'none', background: "none" }} href="#" className="comon-offer height-offer">
                                <figure>
                                    <img src={bigpictwo} alt="bg" />
                                </figure>
                                <h5 className="col-lg-11 text-center m-auto"> <span className="d-block">  20% Off </span>
                                    on all weekend sale </h5>
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
}
export default OfferHome;