import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import recentpost from "./RecentlblogApi";
import { FaUser, FaTags, autor} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

function BlogHome(){
    const [ workData , setworkData] =useState(recentpost);
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
            <div className="news-sec-div py-5">
                 <div className="container">
                    <h6 className="text-center" data-aos="fade-down"> <span></span> News & Articles </h6>
                    <h2 className="text-center" data-aos="fade-up"> Our Latest Blogs </h2>
                    <div className="news-sec-div-part mt-5" data-aos="fade-down">
                         
                         <OwlCarousel className='owl-theme'
                            {...options}>
                            {
                                workData.map((curElem) =>{
                                    const { id, repostimg, cate, autor, postmonth, decription, postdate, reposttitel, repostlink} = curElem;
                                    return(
                                        <>
                                        <div className="item">
                                            <div className="comon-news-part">
                                                <div className="comon-pic-news">
                                                    <figure className="position-relative">
                                                    <NavLink to="/"> <img src={repostimg} alt="picb"/> </NavLink>
                                                    </figure>
                                                    <div className="date-text"> {postdate} <span className="d-block"> {postmonth} </span> </div>
                                                </div>
                                                <div className="dtails-idv-text">
                                                <ul className="list-unstyled d-flex">
                                                    <li>
                                                        <NavLink to="/blog"> <FaUser/> Post by {autor} </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/blog"> <FaTags/> 
                                                        {cate} </NavLink>
                                                    </li>
                                                </ul>
                                                <h5> {reposttitel} </h5>
                                                <p> {decription} </p>
                                                <NavLink to={repostlink} className="btn read-more-bn text-uppercase"> read more </NavLink>
                                                </div>
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
        </>
    );
}
export default BlogHome;