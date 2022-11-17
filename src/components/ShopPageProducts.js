import React, {useState, useEffect} from "react";
import allproductsdetails from "./Allproducts";
import { FaList , FaAngleRight,FaThList, FaPlus, FaShoppingBasket, FaExternalLinkAlt,  FaDollarSign} from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import Paginnation from "./Paginnation";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import $ from 'jquery';


function ShopPageProducts(){
    const [ items , setItems] =useState(allproductsdetails);
    const filterItems = (cateItem) => {
        const updatedItems = allproductsdetails.filter((curElem) => {
               return curElem.category == cateItem;

        }); 

        setItems(updatedItems);
    }
    const [ showPerPgae , setShowPerPage] = useState(8);
    const [ pagination , setPagination] = useState({
        start:0,
        end: showPerPgae,
    });
    const onchangepagination = ( start, end) =>{
      setPagination({start:start, end:end});
    }
    var selector = '.filter-menu-q li';
        
        $(selector).on('click', function(){
            $(selector).removeClass('active');
            $(this).addClass('active');
        });
    
    useEffect(() => {
        Aos.init({
            offset: 100,
            easing: 'ease',
            delay: 0,
            once: true,
            duration: 800,
          
          });
        
    });
  

    return(
        <>
        <ul className="fiter-btn list-unstyled filter-menu-q d-flex justify-content-center">
            <li className="active">
            <button type="button" class="btn comon-filter-bn" onClick={ () => setItems(allproductsdetails)}>All</button>
            </li>
          <li>
            <button type="button"  class="btn comon-filter-bn" onClick={()=> filterItems('dessertwine')}>Red Wine</button>
          </li>
          <li>
           <button type="button" class="btn comon-filter-bn" onClick={ () => filterItems ('sparklingwine')}>Sparkling Wine  </button>
          </li> 
          <li>
           <button type="button" class="btn comon-filter-bn" onClick={ () => filterItems ('redwine')}>Dessert Wine</button>
          </li>
          <li>
           <button type="button" class="btn comon-filter-bn" onClick={ () => filterItems ('rosewine')}>Rose Wine</button>
          </li>
          <li>
           <button type="button" class="btn comon-filter-bn" onClick={ () => filterItems ('whitewine')}>White Wine</button>
          </li>
         
           
            
        </ul>
         <div className="row gy-5 gx-lg-5 mt-0">
                {
                    items.slice(pagination.start, pagination.end).map((curElem) => {
                    const { id, img, title, offer, category, oldprice, price, link} =curElem;
                    return(
                        <>
                        <div className="item list-item content col-md-4 col-lg-3 view-group" data-aos="fade-up" key={items.id}>
                            <div className="comon-items-d1">
                                <div className="products-img-div" >
                                    <figure>
                                        <div className="offer">{offer}</div>
                                        <NavLink to={link} className="pro-images"> 
                                            <img src={img} alt={title}/> 
                                        </NavLink>
                                    </figure>
                                    <div className="hover-show-bn">
                                        <a id="cart" className="comon-hv-bn"> <FaShoppingBasket/> </a>
                                        <NavLink to={link} className="comon-hv-bn"> <FaExternalLinkAlt/> </NavLink>
                                    </div>
                                </div>
                                <div className="caption card-body">
                                    <NavLink to={link} className="cate-text">{id} {category} </NavLink>
                                    
                                    <NavLink to={link} className="my-1 products-titel"> {title}</NavLink>
                                    
                                    <h4> 
                                        <span className="old-pice text-decoration-line-through"> <FaDollarSign/> {oldprice} </span> 
                                        <span className="price-text ms-3"><FaDollarSign/> {price} </span>
                                    </h4>

                                    
                                </div>
                            </div>
                        </div>
                        </>
                    );
                })
                }
                

         </div>

         <Paginnation showPerPage={showPerPgae}
         onchangepagination={onchangepagination}
         total={items.length}/>
        </>
    );
}
export default ShopPageProducts;