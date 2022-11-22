import React, { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import productsorder from "./OrderSummery";
import Count from "./Count";



function CartLeft() {
    const [ workData, setworkData ] = useState(productsorder);
    console.log(workData, setworkData);
    return (
        <>
            <div className="cart-left-sec">
                <h2> Order Summary </h2>
                <hr />
                <div className="tbale-cart">
                    {
                        workData.map((curElem) => {
                            const { prdocuts, proname, proamount, cate, size } = curElem;
                            return (
                                <>
                                    <div className="comon-sec-div-mn">
                                        <div className="row align-items-center">


                                            <div className="col-lg-4">
                                                <div className="cart-products-div">
                                                    <button style={{ border: 'none', background: "none" }} id="#" className="btn cross-bn">
                                                        <FaRegTimesCircle />
                                                    </button>
                                                    <figure className="order-pic">
                                                        <img src={prdocuts} alt="ps" />
                                                    </figure>


                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="pro-sec">
                                                    <h6 className="products-cate mt-2 mt-lg-0"> {cate} </h6>
                                                    <h5 className="cart-products-titel"> {proname} </h5>
                                                    <h5 className="products-size mt-2 mt-lg-0"> {size} </h5>
                                                    <h5 className="mb-0 price-text"> $ {proamount} </h5>
                                                    <Count />


                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            );
                        })
                    }

                </div>
            </div>
        </>
    );
}
export default CartLeft;