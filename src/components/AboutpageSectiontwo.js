import React from "react";
import { NavLink } from "react-router-dom";

function AboutpageSectiontwo(){
    return(
        <>
         <div className="about-offer-section py-5">
            <div className="container">
               <h6 className="text-white text-center"> Winery Offers </h6>
               <h2 className="text-white text-center"> Our Latest Offers </h2>
               <p className="text-white text-center col-lg-10 m-auto"> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
               a Latin professor at Hampden-Sydney College in Virginia </p>
               <NavLink to="/shop" className="btn shop-bn-ab mx-auto mt-3 d-table"> Shop Now </NavLink>
            </div>
            
         </div>
        </>
    );
}
export default AboutpageSectiontwo;