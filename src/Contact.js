import React, {useEffect} from "react";
import SubpageBanner from "./components/SubpageBanner";
import ContactForm from "./components/ContactForm";
import { FaPhoneAlt, FaEnvelope, FaFax   } from "react-icons/fa";
function Contact(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      document.title ="Vintagewine - Contact"
    return (
        <>
           <SubpageBanner name="Contact" indexpage="Home" indexvisit="/" activepage="Contact" />
           <section className="total-body sub-pages py-5 d-block">
               <div className="container">
                   <div className="row ">
                       <div className="col-lg-5">
                          <div className="left-sec-div1 cm-text-n">
                                <h6 className=""> Let's Talk </h6>
                                <h2> We Are Here To Help You </h2>
                                <ul className="list-unstyled mt-4">
                                    <li className="d-flex">
                                    <span  className="icon-c"> <FaPhoneAlt/> </span> 
                                    <span className="text-c">  Call Us 
                                        <small className="d-block"> +990-123-4567 </small> 
                                    </span>
                                    </li>
                                    <li className="d-flex">
                                    <span  className="icon-c"> <FaEnvelope/> </span> 
                                    <span className="text-c">  
                                        Email: 
                                        <small className="d-block"> support@rdememe.com </small> 
                                    </span>
                                    </li>
                                    <li className="d-flex">
                                    <span  className="icon-c"> <FaFax/> </span> 
                                    <span className="text-c"> Fax: 
                                        <small className="d-block"> +990-123-4567 </small> 
                                    </span>
                                    </li>
                                </ul>
                          </div>
                       </div>
                       <div className="col-lg-7">
                            <div className="contact-form-div">
                                <h6 className="">Send us a message</h6>
                                <h2> Fill The Form Below </h2>
                                <ContactForm/>
                            </div>
                       </div>
                   </div>
               </div>
           </section>
        </>
    );
}
export default Contact;