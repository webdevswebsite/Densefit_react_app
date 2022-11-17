import React, {useEffect} from "react";
import iconone from "../images/3401521.png";
import icontwo from "../images/2872086.png";
import iconthree from "../images/2727975.png";
import iconfour from "../images/main-wine.png";
import iconfive from "../images/5699771.png";
import iconsix from "../images/4208408.png";
import iconseven from "../images/2197366.png";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function WhychooseHome(){
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
        <div class="choose-bread py-5">
                <div class="container">
                    <h6 class="text-center" data-aos="fade-down"> <span></span> 100% natural </h6>
                    <h2 class="text-center" data-aos="fade-up"> What Makes our Wine Special ? </h2>
                    <div class="row mt-5">
                        <div class="col-lg-3 order-2 order-lg-1 mt-5 mt-lg-0">
                        <div class="comon-special" data-aos="fade-up">
                            <div class="d-flex justify-content-between">
                                <div class="col-4 col-sm-3 col-md-2 col-lg-4 col-xl-4">
                                    <figure class="icon-sp">
                                        <img src={iconone} alt="bnerpic"/>
                                    </figure>
                                </div>
                                <div class="col-8 col-sm-9 col-md-10 col-lg-7 col-xl-8">
                                    <h5> Harvesting </h5>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis. </p>
                                </div>
                            </div>
                            
                        </div>

                        <div class="comon-special" data-aos="fade-down">
                            <div class="d-flex justify-content-between">
                            <div class="col-4 col-sm-3 col-md-2 col-lg-4 col-xl-4">
                                <figure class="icon-sp">
                                        <img src={icontwo} alt="bnerpic"/>
                                </figure>
                            </div>
                            <div class="col-8 col-sm-9 col-md-10 col-lg-7 col-xl-8">
                                <h5> Corkscrews</h5>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis. </p>
                            </div>
                            </div>
                            
                        </div>


                        <div class="comon-special" data-aos="fade-up">
                            <div class="d-flex justify-content-between">
                            <div class="col-4 col-sm-3 col-md-2 col-lg-4 col-xl-4">
                                <figure class="icon-sp">
                                        <img src={iconthree} alt="bnerpic"/>
                                </figure>
                            </div>
                            <div class="col-8 col-sm-9 col-md-10 col-lg-7 col-xl-8">
                                <h5> Fermentation </h5>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis. </p>
                            </div>
                            </div>
                            
                        </div>


                        </div>
                        <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-up">
                            <figure class="middle-big-pic">
                                <img src={iconfour} alt="wine"/>
                            </figure>
                        </div>

                        <div class="col-lg-3 order-3 order-lg-3">
                        <div class="comon-special" data-aos="fade-down">
                            <div class="d-flex justify-content-between">
                            <div class="col-4 col-sm-3 col-md-2 col-lg-4 col-xl-4">
                                <figure class="icon-sp">
                                        <img src={iconfive} alt="bnerpic"/>
                                </figure>
                            </div>
                            <div class="col-8 col-sm-9 col-md-10 col-lg-7 col-xl-8">
                                <h5> Ecological Safety </h5>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis. </p>
                            </div>
                            </div>
                            
                        </div>

                        <div class="comon-special" data-aos="fade-up">
                            <div class="d-flex justify-content-between">
                            <div class="col-4 col-sm-3 col-md-2 col-lg-4 col-xl-4">
                                <figure class="icon-sp">
                                        <img src={iconsix} alt="bnerpic"/>
                                </figure>
                            </div>
                            <div class="col-8 col-sm-9 col-md-10 col-lg-7 col-xl-8">
                                <h5> Amazing Taste </h5>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis. </p>
                            </div>
                            </div>
                            
                        </div>

                        <div class="comon-special" data-aos="fade-up">
                            <div class="d-flex justify-content-between">
                            <div class="col-4 col-sm-3 col-md-2 col-lg-4 col-xl-4">
                                <figure class="icon-sp">
                                        <img src={iconseven} alt="bnerpic"/>
                                </figure>
                            </div>
                            <div class="col-8 col-sm-9 col-md-10 col-lg-7 col-xl-8">
                                <h5> Catering Bowls </h5>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis. </p>
                            </div>
                            </div>
                            
                        </div>

                        </div>
                    
                    </div>
                    
                </div>
        </div>
        </>
    );
}
export default WhychooseHome;