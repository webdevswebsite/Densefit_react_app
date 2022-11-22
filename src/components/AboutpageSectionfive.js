import React, {useState} from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Teammember from "./TeamApi";

function AboutpageSectionfive(){
    const [ workData , setworkData] =useState(Teammember);
    console.log(workData, setworkData);
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
                items: 3,
            },
            1000: {
                items: 4,
    
            }
        },
    };
    return(
        <>
          <div className="our-staff py-5">
              <div className="container">
                 <h6 className="text-center"> Our Staff </h6>
                 <h2 className="text-center"> Meet our team Member </h2>
                 <div className="team-slide mt-5">
                     
                        <OwlCarousel className='owl-theme'
                        {...options}>

                        {
                            workData.map((curElem) =>{
                                const { id, images, name, jobpostion} = curElem;
                                return(
                                    <>
                                    <div className="team-item text-center  m-auto" key={id}>
                                        <figure>
                                           <img src={images} alt={name}/>
                                        </figure>
                                        <h5 className="my-3"> {name} </h5>
                                        <h6> {jobpostion} </h6>
                                      
                                    </div>
                                    </>
                                );
                            })
                        }

                        </OwlCarousel>

                 </div>
              </div>
          </div>
        </>
    );
}
export default AboutpageSectionfive;