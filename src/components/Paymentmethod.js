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
                <input type="radio" id="customRadioonline" name="customRadio" className="custom-control-input"/>
                <label className="custom-control-label ms-2" for="customRadioonline">Online Banking</label>
                </div>
                {/* <div className="account-page-n" id="ac-2">        
                    <div className="form-group">
                        <label> Pay with Bank </label>
                        <select className="form-select">
                        <option selected>This is a select menu</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        </select>
                    </div>        
                </div> */}
            </div>

         </div>
         </>
      );
    }
  }


export default Paymentmethod;