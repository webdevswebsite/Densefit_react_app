import React from "react";
import Abouttopimg from "../images/6022263c97d5fb0021955751_optimized_740_c740x1120-0x0.webp";

function AboutpageSectionone(){
    return(
        <>
          <div className="about-sec-1">
              <div className="container">
                  <div className="row row-cols-1 row-cols-lg-2">
                      <div className="col">
                          <figure>
                             <img src={Abouttopimg} alt="about"/>
                          </figure>
                      </div>
                      <div className="col">
                         <h6> Timeless classic </h6>
                         <h2> Traditional Wine Varieties for Connoisseurs </h2>
                         <p> From the very beginning of our winery, we have concentrated on the production of classic wines. 
                         </p>
                         <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, 
                         sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                         <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators.</p>
                      </div>
                  </div>
              </div>
          </div>
        </>
    );
}
export default AboutpageSectionone;
