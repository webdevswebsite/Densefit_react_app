import React, { useState } from "react";
import RecentblogPost from "./RecentblogPost";
import { NavLink } from "react-router-dom";
import { FaRegCaretSquareRight } from "react-icons/fa";


function BlogdetailRight () {
    return (
        <>
           <div className="blogcategories-div mb-5">
                <h2 className="mb-2"> Categories </h2>
                <ul className="list-unstyled">
                <li>
                    <NavLink to="/blog"> <FaRegCaretSquareRight/> cursus vitae </NavLink>
                </li>

                <li>
                    <NavLink to="/blog"> <FaRegCaretSquareRight/> Typesetting Industry </NavLink>
                </li>

                <li>
                    <NavLink to="/blog"> <FaRegCaretSquareRight/> vitae semper enim rutrum </NavLink>
                </li>

                <li>
                    <NavLink to="/blog"> <FaRegCaretSquareRight/> enim fermentum </NavLink>
                </li>

                <li>
                    <NavLink to="/blog"> <FaRegCaretSquareRight/> bibendum convallis </NavLink>
                </li>
                </ul>
            </div>
            <RecentblogPost/>
        </>
    );
    
}
export default BlogdetailRight;