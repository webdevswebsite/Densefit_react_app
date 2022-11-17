import React from "react";
import { FaExclamationCircle } from "react-icons/fa";
import $ from 'jquery';


class Paymentmethod extends React.Component {
    componentWillMount(){

        $(document).ready(function(){
            $("#customRadio1").click(function(){
                $("#ac-2").hide();
            });
            $("#customRadiocash").click(function(){
                $("#ac-1").hide();
            });

            $("#customRadiocash").click(function(){
                $("#ac-2").hide();
            });
            
            $("#customRadio1").click(function(){
                $("#ac-1").show();
            });
            $("#customRadioonline").click(function(){
                $("#ac-1").hide();
            });
            $("#customRadioonline").click(function(){
                $("#ac-2").show();
            });
        });
    
    }

    render() {
      return (
         <>
         <div className="payment-option-div mt-4">
            <h2> Payment Method </h2>
            <div className="payment-sec mt-4">
                <div className="custom-control custom-radio">
                    <input type="radio" id="customRadiocash" name="customRadio" className="custom-control-input" checked/>
                    <label className="custom-control-label ms-2" for="customRadiocash">
                    cash on delivery </label>
                </div>
                <div className="custom-control custom-radio">
                <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"  />
                <label className="custom-control-label ms-2" for="customRadio1">Credit Crads /
                    Debit Crads </label>
                </div>
            
                <div className="account-page-n" id="ac-1">
            
            
                        <div className="row row-cols-1 row-cols-lg-1">
                            <div className="col">
                                <div className="form-group mt-3">
                                <label> Cardholder Name </label>
                                <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group mt-3">
                                <label> Card Number </label>
                                <input type="text" className="form-control"/>
                                </div>
                            </div>
                        </div>
                

                        <div className="d-flex mt-3">
                        
                            <div className="left-sec-d1">
                                <h4> Ends Date </h4>
                                <div className="end-date">
                                    <select className="form-select">
                                        <option selected>MM</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                    
                                    <select className="form-select">
                                        <option selected>YYYY</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="left-sec-d2">
                                <h4> CVV</h4>
                                <div className="cvv">
                                    <input type="text" className="form-control"/>
                                    <span className="d-flex ms-2 align-items-center"> <FaExclamationCircle/> <b className="ms-2"> 3digits </b> </span>
                                </div>
                            </div>
                            
                        </div>
                        
                
                </div>

                <div className="custom-control custom-radio">
                <input type="radio" id="customRadioonline" name="customRadio" className="custom-control-input"/>
                <label className="custom-control-label ms-2" for="customRadioonline">Online Banking</label>
                </div>

                <div className="account-page-n" id="ac-2">
                                
                    <div className="form-group">
                        <label> Select Bank </label>
                        <select className="form-select">
                        <option selected>This is a select menu</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        </select>
                        
                    </div>
                            
                </div>

            </div>

         </div>
         </>
      );
    }
  }


export default Paymentmethod;