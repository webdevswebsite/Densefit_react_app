import React from "react";

function FaqBody(){
    return(
        <>
           <div className="faq-page-total">
               <h6 className="text-center"> Have a Question? </h6>
               <h2 className="text-center"> Frequently Asked Questions </h2>
               <div className="container">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="row row-cols-1 row-cols-lg-2 py-5">
                        <div className="col">
                                
                            
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        How will my order be delivered to me?
                                    </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                           <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                           </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        What do I need to know?
                                    </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                       <div className="accordion-body">
                                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                       </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                       How do I check the status of my order?
                                    </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                       <div className="accordion-body">
                                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                       </div>
                                    </div>
                                </div>
                           

                        </div>
                        <div className="col">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingfour">
                                <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
                                How do I check the status of my order?
                                </button>
                                </h2>
                                <div id="flush-collapsefour" className="accordion-collapse collapse show" aria-labelledby="flush-collapsefour" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingfive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefive" aria-expanded="false" aria-controls="flush-collapsefive">
                                How do I check the status of my order?
                                </button>
                                </h2>
                                <div id="flush-collapsefive" className="accordion-collapse collapse " aria-labelledby="flush-collapsefive" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingsix">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsesix" aria-expanded="false" aria-controls="flush-collapsesix">
                                How do I check the status of my order?
                                </button>
                                </h2>
                                <div id="flush-collapsesix" className="accordion-collapse collapse " aria-labelledby="flush-collapsesix" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                </div>
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
export default FaqBody;