import React from "react";
import { FaList , FaAngleRight,FaThList, FaPlus, FaShoppingBasket, FaDollarSign} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import $ from 'jquery';

class ShopfilterSection extends React.Component {
    componentWillMount(){

        $(document).ready(function () {
    
            $('#more-link').click(function () {
              $('#more-div-text').slideToggle("slow");
            $('#more-link').hide();
            });

          $('#more-link2').click(function () {
            $('#more-div-text2').slideToggle("slow");
            $('#more-link2').hide();
            });

          $('#more-link3').click(function () {
            $('#more-div-text3').slideToggle("slow");
            $('#more-link3').hide();
            });
        });
    
    }
    render() {
      return (
         <>
         <div className="left-sec-shop">
                               

                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Category
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body">
                                <ul className="list-unstyled cate-list list-group">
                                <li className="list-group-item "> 
                                <NavLink to="/" className="d-flex justify-content-between align-items-center"> Maecenas mollis 
                                <span className="badge bg-primary rounded-pill">14</span> 
                                </NavLink> </li>
                                <li className="list-group-item "> <NavLink to="/" className="d-flex justify-content-between align-items-center">  Nulla accumsan <span className="badge bg-primary rounded-pill">10</span> </NavLink> </li>
                                <li className="list-group-item "> <NavLink to="/" className="d-flex justify-content-between align-items-center"> Proin dictum  <span className="badge bg-primary rounded-pill">10</span> </NavLink> </li>
                                <li className="list-group-item "> <NavLink to="/" className="d-flex justify-content-between align-items-center"> convallis pharetra  <span className="badge bg-primary rounded-pill">10</span> </NavLink> </li>
                                <li className="list-group-item "> <NavLink to="/" className="d-flex justify-content-between align-items-center"> Maecenas mollis <span className="badge bg-primary rounded-pill">16</span> </NavLink> </li>
                                <li className="list-group-item "> <NavLink to="/" className="d-flex justify-content-between align-items-center"> Maecenas mollis <span className="badge bg-primary rounded-pill">8</span> </NavLink> </li>
                                <div id="more-div-text">
                                    <li className="list-group-item "> <NavLink to="/" className="d-flex justify-content-between align-items-center">  Nulla accumsan <span className="badge bg-primary rounded-pill">10</span> </NavLink> </li>
                                    <li className="list-group-item "> <NavLink to="/" className="d-flex justify-content-between align-items-center"> Proin dictum  <span className="badge bg-primary rounded-pill">10</span> </NavLink> </li>
                                    <li className="list-group-item "> <NavLink to="/" className="d-flex justify-content-between align-items-center"> convallis pharetra  <span className="badge bg-primary rounded-pill">10</span> </NavLink> </li>
                                    
                                </div>
                                </ul>
                                <p id="more-link" className="mt-3"> <FaPlus/> 5 more </p>
                            
                            </div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Shop By Size
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                                    
                            <div className="sel-size">
                                    <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                        <input type="checkbox" className="btn-check" id="btncheck1" autocomplete="off"/>
                                        <label className="btn btn-outline-primary" for="btncheck1">50ml</label>
                                
                                        <input type="checkbox" className="btn-check" id="btncheck2" autocomplete="off"/>
                                        <label className="btn btn-outline-primary" for="btncheck2">100ml</label>
                                
                                        <input type="checkbox" className="btn-check" id="btncheck3" autocomplete="off"/>
                                        <label className="btn btn-outline-primary" for="btncheck3">200ml</label>

                                        <input type="checkbox" className="btn-check" id="btncheck4" autocomplete="off"/>
                                        <label className="btn btn-outline-primary" for="btncheck4">250ml</label>
                                    </div>
                            
                            </div>
                                    


                            </div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Shop By Price
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body">
                                
                            <div className="sel-size">
                                    <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                        <input type="checkbox" className="btn-check" id="btncheck5" autocomplete="off"/>
                                        <label className="btn btn-outline-primary" for="btncheck5">$100 - $200</label>
                                
                                        <input type="checkbox" className="btn-check" id="btncheck6" autocomplete="off"/>
                                        <label className="btn btn-outline-primary" for="btncheck6">$200 -$300</label>
                                
                                        <input type="checkbox" className="btn-check" id="btncheck7" autocomplete="off"/>
                                        <label className="btn btn-outline-primary" for="btncheck7">$400 -$500</label>

                                        <input type="checkbox" className="btn-check" id="btncheck8" autocomplete="off"/>
                                        <label className="btn btn-outline-primary" for="btncheck8">$500 -$1000</label>
                                    </div>
                    
                            </div>


                            </div>
                        </div>
                    </div>
                </div>


         </div>
         </>
      );
    }
  }
export default ShopfilterSection;