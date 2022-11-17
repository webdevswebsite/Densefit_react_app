import React from "react";
import { NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

function SubpageBanner(props){
    return(
        <>
        <div className="subpage-banner">
            <div className="container">
                <div className="sub-page-content d-grid pt-0 pt-lg-5 justify-content-center align-content-center">
                    <h1 className="text-white text-center"> {props.name} </h1>
                    <ul className="list-unstyled d-flex justify-content-center align-items-center">
                        <li>
                            <NavLink to={props.indexvisit}> {props.indexpage} </NavLink>
                        </li>
                        <li>
                           <FaAngleRight/> 
                        </li>
                        <li>
                                {props.activepage}
                        </li>
                    </ul>
                </div>
            
            </div>
        </div>
        </>
    );
}
export default SubpageBanner;