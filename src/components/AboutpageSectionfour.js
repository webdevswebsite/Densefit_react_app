import React, {useState} from "react";
import ourproductiondetails from "./AboutpageFoursectionApi";

function AboutpageSectionfour(){
    const [ workData , setworkData] =useState(ourproductiondetails);
    console.log(workData);
      return(
          <>
            <div className="About-client-sec py-5">
               <div className="container">
                   
                   <div className="row row-cols-1 row-cols-lg-3">

                   {
                    workData.map((curElem) => {
                      const { id, img, title, number} =curElem;
                      return(
                          <>
                          <div className="col" key={id}>
                                <div className="comon-about text-center">
                                    <figure className="comon-about-iocn">
                                        <img src={img} alt="wine"/>
                                    </figure>
                                    <h2 className="mt-3">{number}</h2>
                                    <h5> {title} </h5>
                                </div>
                            </div>
                          </>
                        );
                      })
                    }
               
                    

                  </div>
               </div>
               
            </div>
          </>
      );

}
export default AboutpageSectionfour;