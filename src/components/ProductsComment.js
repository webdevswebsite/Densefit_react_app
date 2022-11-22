import React from "react";

function ProductsComment(){
    return (
        <>
        <div className="bottom-details">
                            
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                            description
                        </button>
                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Shipping details</button>
                        <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Reviews</button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="comon-description-products">
                              <p>99% harmful UVA&UVB rays and strong light. </p>
                        </div>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div className="comon-description-products">
                                
                                <h5> Returns policy </h5>
                                
                                <h5> Shipping details </h5>
                               
                        </div>
                </div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                    {/* <CoustomerReview/> */}

                    <div className="review-form col-lg-7 mt-3">
                        <hp> <b> Write a review</b>  </hp>
                        <div className="row mt-3">
                            <div className="col-lg-12">
                                <div className="from-group">
                                <input type="text" className="form-control" placeholder="Full Name"/>
                                </div>
                            </div>
                            {/* <div className="col-lg-6">
                                <div className="from-group">
                                <input type="text" className="form-control" placeholder="Full Name"/>
                                </div>
                            </div> */}
                            <div className="col-lg-12">
                                <div className="from-group">
                                <textarea class="form-control ted"></textarea>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="from-group">
                                <input type="submit" className="btn submit" value="submit"/>
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
export default ProductsComment;