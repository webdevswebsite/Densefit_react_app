import React, { useState, useEffect } from "react";
import AllBlogpost from "./BlogpostApi";

import { FaAngleDoubleRight , FaUser , FaTags } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function BlogPage() {
    
    const [ posts , setworkData] =useState(AllBlogpost);
    console.log(posts);

    return(
        <>
          <div className="blog-page-div my-5">
             <div className="container">
                <h2 className="text-center" > Our Blog </h2>
                
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 gy-5 gy-lg-0 g-lg-5 mt-0" >
                {
                    posts.map((post) => {
                    const{ id, cate, author, images, postmonth, date, blogtitle, descrition, link } = post;
                      return(
                          <>
                            <div className="col">
                                <div className="item">
                                        <div className="comon-news-part">
                                            <div className="comon-pic-news">
                                                <figure className="position-relative">
                                                <NavLink to={link}> <img src={images} alt="picb"/> </NavLink>
                                                </figure>
                                                <div className="date-text"> {date} <span className="d-block"> {postmonth} </span> </div>
                                            </div>
                                            <div className="dtails-idv-text">
                                            <ul className="list-unstyled d-flex">
                                                <li>
                                                    <NavLink to="/blog"> <FaUser/> Post by {author} </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/blog"> <FaTags/> 
                                                    {cate} </NavLink>
                                                </li>
                                            </ul>
                                            <h5> {blogtitle} </h5>
                                            <p> {descrition} </p>
                                            <NavLink to={link} className="btn read-more-bn text-uppercase"> read more </NavLink>
                                            </div>
                                        </div>
                                </div>
                            </div>
                          </>
                      )
                    })
                }
                    
                </div>
             </div>
          </div>
        </>
    );
    
}
export default BlogPage;