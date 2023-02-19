import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Subscribe(){
    useEffect(() => {
        Aos.init({
            offset: 100,
            easing: 'ease',
            delay: 0,
            once: true,
            duration: 800,
          
          });
    });
    return (
        <>
        <div className="subsribe-div py-5">
            <div className="container">
                <h6 className="text-center text-white" data-aos="fade-down"> Get notification about the special offers </h6>
                {/* <h2 className="text-center text-white" data-aos="fade-up"> Join Our Mailing List </h2> */}
                <p className="text-center text-white" data-aos="fade-down"> We would send you updates ahead.</p>
                <div className="col-md-6 m-auto bg-white" data-aos="fade-up">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="col-9">
                        <input type="text" className="form-control" placeholder="Your Email" />
                        </div>
                        <div className="col-3">
                        <input type="submit" className="btn subscribe-bn" value="Notify me"/>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
        </>  
    );
}
export default Subscribe;