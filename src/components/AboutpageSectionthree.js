import React from "react";
import { NavLink } from "react-router-dom";
import organicimg from "../images/istockphoto-1301017778-170667a.jpg";
import { FaCheckCircle } from "react-icons/fa";

function AboutpageSectionthree(){
    return(
        <>
         <div className="about-poroduction-section py-5">
            <div className="container">
               <div className="row row-cols-1 row-cols-lg-2 gx-lg-5">
                   <div className="col">
                      <figure>
                          <img src={organicimg} alt="banner"/>
                      </figure>
                   </div>
                   <div className="col">
                        <h6 > Winery Offers </h6>
                        <h2 > Organic and nature wine </h2>
                        <p > Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
                        a Latin professor at Hampden-Sydney College in Virginia </p>

                        <p > Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of 
                        the word. </p>
                        <ul className="list-unstyled">
                           <li> <FaCheckCircle/> Pellentesque at mauris  </li>
                           <li> <FaCheckCircle/> Phasellus bibendum est ac  </li>
                           <li> <FaCheckCircle/> Vivamus nec dui convallis, suscipit  </li>
                          
                        </ul>
                        <NavLink to="/shop" className="btn shop-bn-ab mt-3"> Shop Now </NavLink>
                   </div>
               </div>
              
               
            </div>
            
         </div>
        </>
    );
}
export default AboutpageSectionthree;