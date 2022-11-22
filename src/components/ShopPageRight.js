import React from "react";
import ShopPageProducts from "./ShopPageProducts";
import "aos/dist/aos.css";

class ShopPageRight extends React.Component {


  render() {

    return (
      <>

        <div className="view-group ">
          <div className="list-wrapper">
            <ShopPageProducts />
          </div>
        </div>

      </>
    );
  }
}

export default ShopPageRight;