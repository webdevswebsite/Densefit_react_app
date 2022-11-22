import React, { useState } from "react";

import Allcomments from "./CommentdetailsApi";

function CommentSection() {
    const [ workData , setworkData] =useState(Allcomments);
    console.log(workData, setworkData);
    return(
        <>
          <div className="comment-sec-part">
             <h2> Comments </h2>
             <div className="all-cm-div mt-4">
               {
                   workData.map((curElem) => {
                     const { userimg, usernames, date, description} = curElem;
                     return(
                         <>
                         <div className="comon-comnet-sec d-lg-flex">
                            <figure>
                              <img src={userimg} alt="usernames"/>
                            </figure>
                            <div className="user-cmn">
                                <h5 className="d-flex align-items-center"> {usernames} <span> {date} </span>
                                </h5>
                                <p> {description}</p>
                            </div>
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
export  default CommentSection;