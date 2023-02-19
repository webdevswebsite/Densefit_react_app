import React from "react";
import { NavLink } from "react-router-dom";
import Subscribe from "./components/Subscribe";
import { FaUserCircle, FaWindowClose } from "react-icons/fa";



function Footer() {

  return (
    <>
      <Subscribe />
      <footer className="pt-5">

        <div className="container">

          <div className="row row-cols-2 gy-5 g-md-0 row-cols-lg-4 footer-bottom-div justify-content-lg-between">
            <div className="col" style={{width:'500px'}}>
              <div className="comon-footer">
                <h5> Densefit </h5>
                <ul className="list-unstyled text-white">
                  <li>
                    Densefit is an online shopping platform.
                    Our onlinestore offers you the best household products.
                    We offers deals, discounts, flash sales and never ceases to form campaigns all year around, all for the satisfaction and joy of our customers.
                    We promises to provide you with the best service and 100% genuine products. We deliver your order at your doorstep as fast as possible, offer you safe and secure payments and also provide free returns. Stay tuned and get the best prices on all your favorite products during all over the year.
                  </li>
                </ul>

                <ul className="list-unstyled socal">
                  <li> <NavLink to="/"> <i className="bi bi-facebook"></i>  </NavLink>
                    <NavLink to="/"> <i className="bi bi-twitter"></i> </NavLink>
                    <NavLink to="/"> <i className="bi bi-instagram"></i></NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col">
              <div className="comon-footer justify-content-lg-center d-grid">
                <h5> Contact </h5>
                <ul className="list-unstyled">
                  {/* <li> <NavLink to="/"> Help Center </NavLink>  </li>
                            <li> <NavLink to="/"> Privacy policy </NavLink></li> */}
                  <li> <NavLink to=""> <strong>Contact us: </strong>info@densefit.com</NavLink> </li>
                  {/* <li> <NavLink to="/"> Help Center </NavLink> </li> */}

                </ul>
              </div>
            </div>

            <div className="col">
              <div className="comon-footer justify-content-lg-center d-grid">
                <h5> Terms & Condition </h5>
                <ul className="list-unstyled">
                  <li> <NavLink to="/about">  Terms of Service </NavLink>  </li>
                  {/* <li> <NavLink to="/"> FAQ </NavLink> </li> */}
                  {/* <li> <NavLink to="/"> Terms of Service </NavLink> </li>
                            <li> <NavLink to="/"> Help Center </NavLink> </li>
                             */}
                </ul>
              </div>
            </div>


          </div>
        </div>
        <hr className="bg-white" />
        <div className="container">
          <div className="d-grid justify-content-between text-center d-table m-auto">
            <div className="text-white"> 2022 © Densefit. All rights reserved. </div>

          </div>
        </div>
      </footer>

      <div className="modal fade login-div-modal" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">


            </div>
            <div className="modal-body">

              <div id="login-td-div" className="com-div-md">
                <span className="text-center d-table m-auto user-icon">
                  <FaUserCircle />
                </span>
                <h5 className="text-center mb-3"> Sign In </h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
                <div className="login-modal-pn">

                  <div className="cm-select-login mt-3">
                    <div className="country-dp">

                      <input type="email" className="form-control" placeholder="Username Or Email" alt="pn" />
                    </div>
                    <div className="phone-div">

                      <input type="password" className="form-control" placeholder="Password" alt="pn" />
                    </div>


                  </div>



                  <button className="btn continue-bn">  SIGN IN </button>
                </div>

                <p className="text-center  mt-3">
                  <button style={{ border: 'none', background: "none" }} data-bs-toggle="modal" className="regster-bn" data-bs-target="#lostpsModal" data-bs-dismiss="modal"> Lost Password ? </button>  </p>


                <p className="text-center  mt-3"> Do not have an account?
                  <button style={{ border: 'none', background: "none" }} data-bs-toggle="modal" className="regster-bn" data-bs-target="#registerModal" data-bs-dismiss="modal"> Register </button>  </p>
              </div>

            </div>

          </div>
        </div>
      </div>



      <div className="modal fade login-div-modal" id="registerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">

            </div>
            <div className="modal-body">
              <div id="login-td-div" className="com-div-md">
                <span className="text-center d-table m-auto user-icon"> <FaUserCircle /> </span>
                <h5 className="text-center mb-3"> Register </h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
                <div className="login-modal-pn">

                  <div className="cm-select-login mt-3">
                    <div className="country-dp">

                      <input type="text" className="form-control" placeholder="Full Name" alt="pn" />
                    </div>
                    <div className="phone-div">

                      <input type="email" className="form-control" placeholder="Email or Phone Number" alt="pn" />
                    </div>
                    <div className="phone-div">

                      <input type="password" className="form-control" placeholder="Create Password" alt="pn" />
                    </div>
                    <div className="phone-div">

                      <input type="password" className="form-control" placeholder="Confirm Password" alt="pn" />
                    </div>

                    <div className="forget2 mt-3 ml-3 d-flex justify-content-between">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" for="exampleCheck1"> By clicking Register, you agree to our
                        Terms of Use
                        and
                        Cookie Policy</label>
                    </div>

                  </div>



                  <button class="btn continue-bn mt-3"> Register </button>
                </div>

                <p class="text-center  mt-3"> Do not have an account?
                  <button style={{ border: 'none', background: "none" }} data-bs-toggle="modal" class="regster-bn" data-bs-target="#loginModal" data-bs-dismiss="modal"> Login </button>  </p>
              </div>
            </div>

          </div>
        </div>
      </div>




      <div className="modal fade login-div-modal" id="lostpsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">

            </div>
            <div className="modal-body">
              <div id="login-td-div" className="com-div-md">
                <span className="text-center d-table m-auto user-icon">  </span>
                <h5 className="text-center mb-3"> Forget Your Password? </h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
                <div className="login-modal-pn">
                  <p> We'll email you a link to reset your password</p>
                  <div className="cm-select-login mt-3">

                    <div className="phone-div">

                      <input type="email" className="form-control" placeholder="Enter Your Email " alt="pn" />
                    </div>


                  </div>



                  <button className="btn continue-bn"> Send Me a password reset Link </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>


      <div className="offcanvas offcanvas-start menu-mobile-modal" tabindex="-1" id="mobile-menu" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">

          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
            Close <FaWindowClose />
          </button>
        </div>
        <div className="offcanvas-body menu-modal">
          <NavLink to="/">
            <h1>DENSEFIT</h1>
            {/* <img src={logomobileslide} alt="logom"/> */}
          </NavLink>

          <ul className="list-unstyled mt-4">
            <li data-bs-dismiss="offcanvas"><NavLink className="dropdown-item" to="/">Home </NavLink> </li>

          </ul>

        </div>
      </div>


    </>
  );
}
export default Footer;

