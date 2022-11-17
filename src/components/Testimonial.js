import React, {useState, useEffect} from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import TesimonialReviw from "./TestimonialdetailsApi";
import { FaStar } from "react-icons/fa";
import webpic from "../images/602220dceb0d5d0021b07740_optimized_740_c711x1076-6x22.webp";
import Aos from "aos";
import "aos/dist/aos.css";

function Testimonial(){
    const [ workData , setworkData] =useState(TesimonialReviw);
    console.log(workData);
    useEffect(() => {
        Aos.init({
            offset: 100,
            easing: 'ease',
            delay: 0,
            once: true,
            duration: 800,
          
          });
    });
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 2,
            },
            851: {
                items: 2,
            },
            1000: {
                items: 3,
    
            }
        },
    };
    return(
        <>
           <div className="testimonal-sec pt-5 position-relative">
               <div className="container">
                    <h6 className="text-center" data-aos="fade-down"> <span></span> Testimonal </h6>
                    <h2 className="text-center" data-aos="fade-up">What Our Wine-Lovers Say </h2>
                    <div className="silder-div-text mt-5 pb-5" data-aos="fade-down">
                        <div className="w-100 overflow-hidden">
                            <OwlCarousel className='owl-theme'
                            {...options}>
                            {
                                workData.map((curElem) =>{
                                    const { id, name, decription, location} = curElem;
                                    return(
                                        <>
                                        <div className="item  m-auto">
                                            <div className="comon-div-ts">
                                                <h5> "{decription}"</h5>
                                                <span className="start">
                                                    <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                                                </span>
                                                
                                            </div>

                                            <div  className="d-flex mt-4 ">
                                            
                                            <h4> {name} <span className="d-block"> {location}  </span>  </h4>
                                           
                                            </div>

                                        </div>
                                        </>
                                    );
                                })
                            }
                            </OwlCarousel>
                        </div>
                    </div>
               </div>

               <div className="tesimonial-sec-div">
                    <figure>
                        <img src={webpic} alt="pic"/>
                    </figure>
                </div>
           </div>
        </>
    );
}
export default Testimonial;