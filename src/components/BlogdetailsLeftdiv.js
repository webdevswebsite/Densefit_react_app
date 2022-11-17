import React from "react";

import { FaUser, FaRegCalendarAlt, FaRegComment, FaShareAlt } from "react-icons/fa";
import Blogdetailimg from "../images/b-7.jpg";
import CommentSection from "./CommentSection";


function BlogdetailsLeftdiv() {

    return(
        <>
          
          <div className="blogleft-sec">
             <figure className="mb-0 post-img">
                <img src={Blogdetailimg} alt="blogdetails"/>
             </figure>
             <div className="d-lg-flex mt-3 justify-content-between align-items-center">
                <ul className="list-unstyled d-flex mb-0">
                   <li className="d-flex align-items-center"> <FaUser/> Author </li>
                   <li className="d-flex align-items-center"> <FaRegCalendarAlt/> Oct 12, 2021</li>
                   <li className="d-flex align-items-center"> <FaRegComment/> <span> 2 </span> Oct 12, 2021</li>
                </ul>
                <a id="" className="btn share-bn"> <FaShareAlt/> Share </a>
             </div>
             <hr/>

             <div className="blog-para-details">
                <h2> It is a long established fact that a reader will be distracted by the readable </h2>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                 been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                 galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                 but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
                  in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                 of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
                 a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                  words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical 
                  literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
                  This book is a treatise on the theory of ethics, very popular during the Renaissance. 
                  The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>
                <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                 of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
                 a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                  words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical 
                  literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
                  This book is a treatise on the theory of ethics, very popular during the Renaissance. 
                  The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>
             </div>
             <hr/>

             <CommentSection/>
             
             <div className="leave-commnet-sec ">
                <h2 className="mb-0"> Leave a Comment </h2>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                        <input type="text" className="form-control" placeholder="Full Name" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group">
                            <textarea className="form-control" placeholder="Message" ></textarea>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group">
                            <input type="submit" className="btn post-bn" value="Post Comment" />
                        </div>
                    </div>

                </div>
            </div>
             
          </div>
        </>
    );
    
}
export default BlogdetailsLeftdiv;