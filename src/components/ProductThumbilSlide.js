import React, {useState} from "react";
import Productmorepic from "./ProdcutscarasoleApi";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function ProductThumbilSlide(){
    const [ workData , setworkData] =useState(Productmorepic);
    console.log(workData);
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: false,
        responsive: {
            0: {
                items: 4,
            },
           
        },
    };
    return(
        <>
            

            <OwlCarousel id="sync2" className='owl-theme'
            {...options}>
            {
                workData.map((curElem) =>{
                    const { id, img } = curElem;
                    return(
                        <>
                        <div className="item">
                          <div className="thum-pic-slide">
                                <figure>
                                    <img src={img} alt="re3"/>
                                </figure>
                          </div>
                        </div>
                        </>
                    );
                })
            }

            </OwlCarousel>

            
        </>
    );
}
export default ProductThumbilSlide;