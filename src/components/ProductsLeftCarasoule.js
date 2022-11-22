import React from "react";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import imga from "../Densefitimg/ladiesglass1.png";
import imgb from "../Densefitimg/ladiesglass1.png";
import imgc from "../Densefitimg/ladiesglassoversize.png";
import imgd from "../Densefitimg/ladiesglassblack.png";
import $ from 'jquery';

$(document).ready(function () {

  //Show carousel-control

  $("#myCarousel").mouseover(function () {
    $("#myCarousel .carousel-control").show();
  });

  $("#myCarousel").mouseleave(function () {
    $("#myCarousel .carousel-control").hide();
  });

  //Active thumbnail

  $("#thumbCarousel .thumb").on("click", function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

  });

  //When the carousel slides, auto update

  $('#myCarousel').on('slid.bs.carousel', function () {
    var index = $('.carousel-inner .item.active').index();
    //console.log(index);
    var thumbnailActive = $('#thumbCarousel .thumb[data-slide-to="' + index + '"]');
    thumbnailActive.addClass('active');
    $(thumbnailActive).siblings().removeClass("active");
    //console.log($(thumbnailActive).siblings()); 
  });
});

function ProductsLeftCarasoule() {


  return (
    <>
      <div className="products-slide-1">

        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" data-interval="false">

          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <figure className="mn-big-pic">
                <img src={imga} alt="img" />
              </figure>
            </div>
            <div className="carousel-item">
              <figure className="mn-big-pic">
                <img src={imgb} alt="img" />
              </figure>
            </div>
            <div className="carousel-item">
              <figure className="mn-big-pic">
                <img src={imgc} alt="img" />
              </figure>
            </div>
            <div className="carousel-item">
              <figure className="mn-big-pic">
                <img src={imgd} alt="img" />
              </figure>
            </div>
            <div className="carousel-item">
              <figure className="mn-big-pic">
                <img src={imgc} alt="img" />
              </figure>
            </div>


          </div>

          <div id="thumbCarousel" className="d-flex justify-content-between">
            <div data-bs-target="#myCarousel" data-bs-slide-to="0" className="thumb active"><img src={imga} /></div>
            <div data-bs-target="#myCarousel" data-bs-slide-to="1" className="thumb"><img src={imgb} alt="img" /></div>
            <div data-bs-target="#myCarousel" data-bs-slide-to="2" className="thumb"><img src={imgc} alt="img" /></div>
            <div data-bs-target="#myCarousel" data-bs-slide-to="3" className="thumb"><img src={imgd} alt="img" /></div>
            <div data-bs-target="#myCarousel" data-bs-slide-to="4" className="thumb"><img src={imgc} alt="img" /></div>
          </div>

        </div>


      </div>
    </>
  );
}
export default ProductsLeftCarasoule;