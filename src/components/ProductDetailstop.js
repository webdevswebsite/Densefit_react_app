import React from "react";
import ProductsLeftCarasoule from "./ProductsLeftCarasoule";
import ProductRightDetails from "./ProductRightDetails";
import ProductsComment from "./ProductsComment";


class ProductDetailstop extends React.Component {
        
    render() {
      return (
        <div className="products-details-sec">
             <div className="container">
                <div className="row gx-5 row-cols-1 row-cols-md-2">
                    <div class="col">
                        <ProductsLeftCarasoule/>
                    </div>
                    <div className="col">
                        <ProductRightDetails/>
                    </div>
                </div>
                <ProductsComment/>
             </div>
          </div>
      );
    }
  }

export default ProductDetailstop;