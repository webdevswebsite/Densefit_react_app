import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import recentpost from "./RecentblogApi";

function RecentblogPost () {
    const [ workData , setworkData] =useState(recentpost);
    console.log(workData, setworkData);
    return (
        <>
            <div className="recent-blog-part">
                <h2 className="mb-2">Recent Post </h2>
                <div className="recent-all-post">
                {
                    workData.map((curElem) => {
                     const { repostimg, reposttitel, repostlink } = curElem;
                     return (
                         <>
                         <div className="comon-recent d-flex justify-content-between">
                            <NavLink to={repostlink}>
                                 <figure>
                                    <img src={repostimg} alt={reposttitel}/>
                                </figure>
                            </NavLink> 
                            <NavLink to={repostlink}>
                               <h5> {reposttitel} </h5>
                            </NavLink>
                            
                         </div>
                         </>
                      );
                    })
                }
                   
                </div>
            </div>
        </>
    );
    
}
export default RecentblogPost;