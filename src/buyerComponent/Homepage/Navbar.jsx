import React, { useState, useEffect } from "react";
import Starlogo from "../../assets/img/logo.png";
import "../../assets/css/main.css"
import { IoSearchCircle } from "react-icons/io5";
import { AiOutlineBell } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { TbMinusVertical } from "react-icons/tb";
import Login from "../LoginRegister/Login";

import {Link, useNavigate } from "react-router-dom";
import ForgotPassword from "../LoginRegister/ForgotPassword";
import SendOtp from "../LoginRegister/SendOtp";
import UpdatePassword from "../LoginRegister/UpdatePassword";

const Navbar = () => {
  const navigate = useNavigate();

  const [otpEmail, setOtpEmail] = useState();
  const [UserAuth, setUserAuth] = useState("");
  const getEmail = (data) => {
    setOtpEmail(data);
  };

  useEffect(() => {
    // if (window.localStorage !== undefined) {
    const authToken = localStorage.getItem("loginToken");
    setUserAuth(authToken);
    // }
  }, [UserAuth]);

  const LogOut = () => {
    setUserAuth(localStorage.removeItem("loginToken"));
    setUserAuth(localStorage.removeItem("UserData"));
    window.location.reload();
  };

  return (
    <div>
       <header className="header_main">
        <div className="row header_top py-3 px-4 align-items-center justify-content-between">
          <div className="col-auto">
            <Link className="header_logo" href="index.html">
              <img src={Starlogo} alt="" />
            </Link>
          </div>
          <div className="col-lg-6 col-md-5 d-flex align-items-center">
            <div className="header_search">
              <form className="row justify-content-center" action="">
                <div className="col pe-0">
                  <div className="form-group">
                    <input
                      type="text"
                      id="search"
                      name="search"
                      className="form-control shadow-none"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div className="col-auto ps-0">
                  <div className="form-group">
                    <button type="search" className="Btn-design rounded-end">
                    <i class="fa fa-search"></i>
                      
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-auto d-flex align-items-center">
            <div className="social_icon d-flex">
              <Link to="#">
                <i className="fa fa-cart-arrow-down" />
                
                <span className="count">4</span>
              </Link>
              <Link to="javascript:;">
                <i className="far fa-bell" />
                <span className="count">4</span>
              </Link>
            </div>
            {UserAuth ? (
                <div className="d-flex mt-2 ">
                    <Link to="/MyAccount" className="text-decoration-none mx-1">
                      <button className="signup_btns m-2  ">
                        My Account
                      </button>
                    </Link>
                 
                    <Link
                      to=""
                      className="login_btns mt-3 text-decoration-none"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop1"
                      aria-current="page"
                      href="#"
                      onClick={() => {
                        LogOut();
                      }}
                    >
                      Logout
                    </Link>
                  
                </div>
              ) : (
                <div className="d-flex mt-2">
                    <Link
                      to=""
                      className="login_btns mt-2"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop1"
                      aria-current="page"
                      href="#"
                    >
                      Login
                      </Link>
                    <Link to="/Register" style={{ textDecoration: "none" }}>
                      <div className="btn-group ">
                        <button className="signup_btns">
                          SignUp
                        </button>
                        
                      </div>
                    </Link>
                </div>
              )}
           
          </div>
        </div>
        <div className="row header_bottom px-0">
          <div className="col-12">
            <ul className="header_menus mb-0 ps-0">
              <li>
                <Link className="text-decoration-none" to="/" >Home</Link>
              </li>
              <li>
                <Link className="text-decoration-none" to="">Top Selling</Link>
              </li>
              <li>
                <Link className="text-decoration-none" to="">New Arrivals</Link>
              </li>
              <li>
                <Link className="dropdown-toggle text-decoration-none" href="Javascript:;">
                  Vape
                </Link>
                <div className="dropdown-menu maga_drop_down py-lg-4 py-md-3 shadow">
                  <div className="container-fluid px-0">
                    <div className="row w-100 mx-0">
                      <div className="col-lg-3 col-md-6">
                        <div className="maga_drop__menus">
                          <h3 className="dropdown_heading">
                            Free Base E-Juice
                          </h3>
                          <ul>
                            <li>
                              <Link className="text-decoration-none" to="">BLVK Unicorn</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Candy King</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Coastal Clouds</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Cuttwood</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Double Stuffed</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Halo</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Heisenberg</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="maga_drop__menus">
                          <h3 className="dropdown_heading">
                            Nic Salt E-Juice{" "}
                          </h3>
                          <ul>
                            <li>
                              <Link className="text-decoration-none" to="">BLVK Unicorn</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Candy King</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Coastal Clouds</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Cuttwood</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Double Stuffed</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Halo</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Heisenberg</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="maga_drop__menus">
                          <h3 className="dropdown_heading">Disposables</h3>
                          <ul>
                            <li>
                              <Link className="text-decoration-none" to="">BLVK Unicorn</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Candy King</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Coastal Clouds</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Cuttwood</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Double Stuffed</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Halo</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Heisenberg</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="maga_drop__menus">
                          <h3 className="dropdown_heading">Hardware</h3>
                          <ul>
                            <li>
                              <Link className="text-decoration-none" to="">BLVK Unicorn</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Candy King</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Coastal Clouds</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Cuttwood</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Double Stuffed</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Halo</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Heisenberg</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link className="dropdown-toggle text-decoration-none" href="Javascript:;">
                  Smoke
                </Link>
                <div className="dropdown-menu maga_drop_down py-4 shadow">
                  <div className="container-fluid px-0">
                    <div className="row w-100 mx-0">
                      <div className="col-lg-3 col-md-6">
                        <div className="maga_drop__menus">
                          <h3 className="dropdown_heading">Cigarillos</h3>
                          <ul>
                            <li>
                              <Link className="text-decoration-none" to="">BLVK Unicorn</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Candy King</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Coastal Clouds</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Cuttwood</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Double Stuffed</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Halo</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Heisenberg</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="maga_drop__menus">
                          <h3 className="dropdown_heading">Pipe Tobacco</h3>
                          <ul>
                            <li>
                              <Link className="text-decoration-none" to="">BLVK Unicorn</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Candy King</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Coastal Clouds</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Cuttwood</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Double Stuffed</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Halo</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Heisenberg</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="maga_drop__menus">
                          <h3 className="dropdown_heading">Rolling Paper</h3>
                          <ul>
                            <li>
                              <Link className="text-decoration-none" to="">BLVK Unicorn</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Candy King</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Coastal Clouds</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Cuttwood</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Double Stuffed</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Halo</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Heisenberg</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="maga_drop__menus">
                          <h3 className="dropdown_heading">Hookah</h3>
                          <ul>
                            <li>
                              <Link className="text-decoration-none" to="">BLVK Unicorn</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Candy King</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Coastal Clouds</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Cuttwood</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Double Stuffed</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Halo</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Heisenberg</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link  className="dropdown-toggle text-decoration-none" href="Javascript:;">
                  C-Store &amp; Novelty
                </Link>
                <div className="dropdown-menu maga_drop_down py-4 shadow">
                  <div className="container-fluid px-0">
                    <div className="row w-100 mx-0">
                      <div className="col-lg-3 col-md-6">
                        <div className="maga_drop__menus">
                          <h3 className="dropdown_heading">Novelty</h3>
                          <ul>
                            <li>
                              <Link className="text-decoration-none" to="">BLVK Unicorn</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Candy King</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Coastal Clouds</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Cuttwood</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Double Stuffed</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Halo</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Heisenberg</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="maga_drop__menus">
                          <h3 className="dropdown_heading">C-Store</h3>
                          <ul>
                            <li>
                              <Link className="text-decoration-none" to="">BLVK Unicorn</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Candy King</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Coastal Clouds</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Cuttwood</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Double Stuffed</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Halo</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Heisenberg</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="maga_drop__menus">
                          <h3 className="dropdown_heading">Novelty</h3>
                          <ul>
                            <li>
                              <Link className="text-decoration-none" to="">BLVK Unicorn</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Candy King</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Coastal Clouds</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Cuttwood</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Double Stuffed</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Halo</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Heisenberg</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="maga_drop__menus">
                          <h3 className="dropdown_heading">C-Store</h3>
                          <ul>
                            <li>
                              <Link className="text-decoration-none" to="">BLVK Unicorn</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Candy King</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Coastal Clouds</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Cuttwood</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Double Stuffed</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Halo</Link>
                            </li>
                            <li>
                              <Link className="text-decoration-none" to="">Heisenberg</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link className="text-decoration-none" to="">Brands</Link>
              </li>
              <li>
                <Link className="text-decoration-none" to="/Contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    
    
      
      <div
        className="modal  login_modal forms_modal"
        id="staticBackdrop1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="false"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <Login />
          </div>
        </div>
      </div>

      <div
        className="modal  comman_modal_form forms_modal"
        id="staticBackdrop2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 rounded-0">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
              <ForgotPassword getEmail={getEmail} />
            </div>
          </div>
        </div>
      </div>
      <>
        <div
          className="modal  comman_modal_form"
          id="staticBackdrop3"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 rounded-0">
              <div className="modal-body">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
                <SendOtp otpEmail={otpEmail} />
              </div>
            </div>
          </div>
        </div>
        {/* OTP Verification Modal  */}
        {/* Confirm Password Modal  */}
        <div
          className="modal  comman_modal_form forms_modal"
          id="staticBackdrop4"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 rounded-0">
              <div className="modal-body">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
                <UpdatePassword otpEmail={otpEmail} />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>

  );
};

export default Navbar;
