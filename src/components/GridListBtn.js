import React from "react";
import { FaThList } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import $ from 'jquery';


class GridListBtn extends React.Component {
  componentWillMount() {

    $(document).ready(function () {

      $('.listed-bn ul li a').click(function () {
        $('.listed-bn li a').removeClass("active");
        $(this).addClass("active");
      });

      $('#list').click(function (event) { event.preventDefault(); $('#products .item').addClass('list-group-item'); });
      $('#grid').click(function (event) { event.preventDefault(); $('#products .item').removeClass('list-group-item'); $('#products .item').addClass('grid-group-item'); });
      $('#list').click(function (event) { event.preventDefault(); $('#products .item').removeClass('grid-group-item'); });
    });

  }
  render() {
    return (
      <div className="listed-bn d-grid justify-content-lg-end justify-content-end">
        <ul className="m-0 d-flex align-items-center list-unstyled">
          <li>
            <button style={{ border: 'none', background: "none" }} id="list" className="active"> <FaThList /> </button>
          </li>
          <li className="ms-3">
            <button style={{ border: 'none', background: "none" }} id="grid"> <BsFillGridFill /> </button>
          </li>
        </ul>
      </div>
    );
  }
}
export default GridListBtn;