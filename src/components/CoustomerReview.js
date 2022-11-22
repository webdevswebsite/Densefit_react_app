import React, {useState} from "react";
import AllReviw from "./CustomerrevieApi";

function CoustomerReview(){
    const [ workData , setworkData] =useState(AllReviw);
    console.log(workData);
    return(
        <>

        {
            workData.map((curElem) =>{
                const { images, name, decription, date } = curElem;
                return(
                    <>
                    <div className="comment-user-div">
                        <div className="userp">
                        <div className="us-pic">  
                            <img src={images} alt={name}/> 
                        </div>
                        </div>
                        <div className="user-dsl">
                        <h6>{name} <span className="d-block mt-2">  {date} </span> </h6>
                        
                        <p> {decription} </p>
                        </div>
                    </div>
                    </>
                );
            })
        }
            
        </>
    );
}
export default CoustomerReview;