import React, {useState, useEffect} from "react";
import { FaList , FaAngleRight,FaThList, FaPlus, FaShoppingBasket, FaDollarSign} from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import GridListBtn from "./GridListBtn";
import ShopPageProducts from "./ShopPageProducts";
import Aos from "aos";
import "aos/dist/aos.css";
import $ from 'jquery';

class ShopPageRight extends React.Component {


    render() {
      
      return (
          <>
          
            <div className="view-group ">
                <div className="list-wrapper">
                    <ShopPageProducts/>
                </div>
            </div>
            
          </>
      );
    }
  }

export default ShopPageRight;