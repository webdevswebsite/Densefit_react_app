import React ,{ useState, useEffect } from "react";
import whychosedetails from "./WhychoosApi";
import Aos from "aos";
import "aos/dist/aos.css";
import smallpicone from "../images/109076-cypruswine-Cyprus-Maratheftiko-Shiraz-wine-748x549.jpg";
import landscapepictwo from "../images/istockphoto-1183406603-170667a.jpg";
import bigpictwo from "../images/JP-wine-under-250-_255x255_cd3b2cb5-b368-408a-b28b-4ba802f9ee27.webp";

function Whychoose(){
    const [ workData, setworkData ] =useState (whychosedetails);
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
    return(
        <>
            <div className="offer-div-sec py-5">
            <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row row-cols-1 mb-4 mb-lg-0 mt-4 justify-content-between align-items-center">
                            {/* <div className="row row-cols-1 row-cols-md-2 gy-4 gy-lg-0 gx-lg-4 justify-content-between align-items-center"> */}
                                <div className="col" data-aos="fade-up">
                                    <div className="comon-offer">
                                        <figure>
                                            <img src={smallpicone} alt="bg" />
                                        </figure>
                                        <h5 className="col-lg-11 m-auto"> <span className="d-block"> 10% Off</span>
                                            Special party offers</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="big-div-offer mb-4 mb-lg-0 mt-4" data-aos="fade-up">
                                <button style={{ border: 'none', background: "none" }} href="#" className="comon-offer">
                                    <figure>
                                        <img src={landscapepictwo} alt="bg" />
                                    </figure>
                                    <h5 className="col-lg-6 ms-md-auto"> <span className="d-block">  5% Off</span>
                                       Special dinner slash sales </h5>
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-4" data-aos="fade-down">
                            <button style={{ border: 'none', background: "none" }} href="#" className="comon-offer height-offer">
                                <figure>
                                    <img src={bigpictwo} alt="bg" />
                                </figure>
                                <h5 className="col-lg-11 text-center m-auto"> <span className="d-block">  15% Off </span>
                                    Yearly thanksgiving offer</h5>
                            </button>
                        </div>
                    </div>
                </div>
           </div>
        </>
    );
}
export default Whychoose;