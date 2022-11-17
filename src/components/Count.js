import React from "react";
import { FaRegTimesCircle , FaPlus , FaMinus } from "react-icons/fa";
import $ from 'jquery';

class Count extends React.Component {
    componentWillMount(){

        $(document).ready(function() {
            $('.minus').click(function () {
              var $input = $(this).parent().find('input');
              var count = parseInt($input.val()) - 1;
              count = count < 1 ? 1 : count;
              $input.val(count);
              $input.change();
              return false;
            });
            $('.plus').click(function () {
              var $input = $(this).parent().find('input');
              $input.val(parseInt($input.val()) + 1);
              $input.change();
              return false;
            });
          });
    
    }
    render() {
      return (
        <>
        <div className="form-group">
                                            
                <div className="input-group w-auto justify-content-end align-items-center">
                    <div class="number">
                        <span class="minus"><FaMinus/></span>
                        <input type="text" value="1"/>
                        <span class="plus"><FaPlus/></span>
                    </div>
                </div>
            
        </div>
        </>
      );
    }
  }
export default Count;