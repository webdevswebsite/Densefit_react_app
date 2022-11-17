import React from "react";
import { FaList , FaAngleRight,FaThList, FaPlus, FaShoppingBasket, FaDollarSign} from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import $ from 'jquery';


class GridListBtn extends React.Component {
    componentWillMount(){

        $(document).ready(function () {
            
                $('.listed-bn ul li a').click(function(){
                  $('.listed-bn li a').removeClass("active");
                  $(this).addClass("active");
              });
              
              $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
              $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
              $('#list').click(function(event){event.preventDefault();$('#products .item').removeClass('grid-group-item');});
        });
    
    }
    render() {
      return (
        <div className="listed-bn d-grid justify-content-lg-end justify-content-end">
            <ul className="m-0 d-flex align-items-center list-unstyled">
                <li>
                <a  id="list" className="active"> <FaThList/> </a> 
                </li>
                <li className="ms-3"> 
                <a  id="grid"> <BsFillGridFill/> </a> 
                </li>
            </ul>
        </div>
      );
    }
  }
export default GridListBtn;