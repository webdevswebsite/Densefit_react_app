import React, {useEffect} from "react";
import SubpageBanner from "./components/SubpageBanner";
import BlogdetailsLeftdiv from "./components/BlogdetailsLeftdiv";
import BlogdetailRight from "./components/BlogdetailRight";


function Blogdetails(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      document.title ="Vwine - Blog Details"
    return (
        <>
        <SubpageBanner name="Blog Details" indexpage="Home" indexvisit="/" activepage="Blog Details" />
        <div className="blog-details-total my-5">
            <div className="container">
                <div className="row g-lg-5 mt-0">
                    <div className="col-md-7 col-lg-8">
                    <BlogdetailsLeftdiv/>
                    </div>
                    <div className="col-md-5 col-lg-4">
                        <BlogdetailRight/>
                    </div>
                </div>
            </div>
         </div>
        </>
    );
}
export default Blogdetails;