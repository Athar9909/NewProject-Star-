import React, { useState, useEffect } from "react";
import Starlogo from "../../assets/img/logo.png";
import "./Navbar.css";
import { IoSearchCircle } from "react-icons/io5";
import { AiOutlineBell } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { TbMinusVertical } from "react-icons/tb";
import Login from "../LoginRegister/Login";

import { Link, useNavigate } from "react-router-dom";
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
    <div className="header  shadow">
      <nav className="navbar  navbar-expand-lg  navbar-expand-md navbar-light ">
        <div className="container-fluid ">
          <Link to="/" className="navbar-brand mx-4 mt-1" href="#">
            <img src={Starlogo} width="170" height="80" alt="Brand"></img>
          </Link>

          <button
            className="navbar-toggler fs-4 border-"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse mx-lg-5"
            id="navbarTogglerDemo01"
          >
            <div className="header_search bg-white">
              <form className="row justify-content-center  " action="">
                <div className="col">
                  <div className="form-floating">
                    <input
                      type="text"
                      id="floatingSearch"
                      name="search"
                      className="Input-box mx-2"
                      placeholder="Search here"
                    />
                  </div>
                </div>
                <div className="col-auto ps-0">
                  <div className="form-group">
                    <button type="search" className="Btn-design rounded-end">
                      <IoSearchCircle size={35} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <ul className="navbar-nav   mb-2 mb-lg-1">
              <li className="nav-item mt-3">
                <Link
                  className="nav-link fw-bold "
                  aria-current="page"
                  href="#"
                >
                  <BsCart3 size={30} color={"#3e4093"} className="cart" />
                  <span class="count text-center">4</span>
                </Link>
              </li>
              <li>
                <Link to="" className="nav-link  mt-3 " aria-current="page">
                  <AiOutlineBell size={32} color={"#3e4093"} className="bell" />
                  <span class="count text-center">4</span>
                </Link>
              </li>
              <li className="mt-3 mx-2">
                <TbMinusVertical size={45} color={"#3e4093"} />
              </li>
              {UserAuth ? (
                <div className="d-flex mt-2">
                  <li className="">
                    <Link to="/MyAccount">
                      <button className="SignBtn rounded-pill w-100 m-2">
                        My_Account
                      </button>
                    </Link>
                  </li>
                  <li
                    className="mx-2"
                    onClick={() => {
                      LogOut();
                    }}
                  >
                    <Link
                      to=""
                      className="nav-link mt-2 fw-bold"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop1"
                      aria-current="page"
                      href="#"
                    >
                      Logout
                    </Link>
                  </li>
                </div>
              ) : (
                <div className="d-flex mt-2">
                  <li className="">
                    <Link
                      to=""
                      className="nav-link mt-2 fw-bold"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop1"
                      aria-current="page"
                      href="#"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/Register" style={{ textDecoration: "none" }}>
                      <div className="btn-group ">
                        <button className="SignBtn rounded-pill mt-2">
                          SignUp
                        </button>
                        <button
                          type="button"
                          className="btn border-none dropdown-toggle dropdown-toggle-split mt-2 fs-5"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item w-100" to="/AdminDashboard">
                              Login As Admin?
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div className="row header_bottom">
        <div className="col-lg-12 col-sm-12 ">
          <ul className="d-flex header_menus mx-lg-4 mt-lg-2 ">
            <li className="text-center mx-lg-3 ">
              <Link className="btm-headers" to="/">
                Home
              </Link>
            </li> 
            <li className=" mx-lg-3">
              <Link className="btm-headers" to="product.html">
                Top Selling
              </Link>
            </li>
            <li className="mx-lg-3">
              <Link className="btm-headers w-100" to="product.html">
                New Arrivals
              </Link>
            </li>
            <li className="text-center mx-lg-3">
              <Link className="dropdown-toggle btm-headers" href="Javascript:;">
                Vape
              </Link>
              <div className="dropdown-menu shadow">
                <div className="container-fluid px-0">
                  <div className="row w-100 mx-0">
                    <div className="col-lg-3 col-md-6">
                      <div className="maga_drop__menus">
                        <h3 className="dropdown_heading">
                          <TbMinusVertical size={50} className="" />
                          <span className="mt-1 fs-4 fw-bold">Cargolioger</span>
                        </h3>
                        <ul className="mx-2 fw-bold text-dark">
                          <li>
                            <Link to="" className="text-decoration-none">
                              BLVK Unicorn
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Candy King
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Coastal Clouds
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Cuttwood
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Double Stuffed
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Halo
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Heisenberg
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="maga_drop__menus">
                        <h3 className="dropdown_heading">
                          <TbMinusVertical size={50} className="" />
                          <span className="mt-1 fs-4 fw-bold">Cargolioger</span>
                        </h3>
                        <ul className="mx-2 fw-bold text-dark">
                          <li>
                            <Link to="" className="text-decoration-none ">
                              BLVK Unicorn
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Candy King
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Coastal Clouds
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Cuttwood
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Double Stuffed
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Halo
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Heisenberg
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="maga_drop__menus">
                        <h3 className="dropdown_heading">
                          <TbMinusVertical size={50} className="" />
                          <span className="mt-1 fs-4 fw-bold">Cargolioger</span>
                        </h3>
                        <ul className="mx-2 fw-bold text-dark">
                          <li>
                            <Link to="" className="text-decoration-none ">
                              BLVK Unicorn
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Candy King
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Coastal Clouds
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Cuttwood
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Double Stuffed
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Halo
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Heisenberg
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="maga_drop__menus">
                        <h3 className="dropdown_heading">
                          <TbMinusVertical size={50} className="" />
                          <span className="mt-1 fs-4 fw-bold">Cargolioger</span>
                        </h3>
                        <ul className="mx-2 fw-bold text-dark">
                          <li>
                            <Link to="" className="text-decoration-none ">
                              BLVK Unicorn
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Candy King
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Coastal Clouds
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Cuttwood
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Double Stuffed
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Halo
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Heisenberg
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="mx-lg-3">
              <Link className="dropdown-toggle btm-headers" href="Javascript:;">
                Smoke
              </Link>
              <div className="dropdown-menu maga_drop_down py-4 shadow">
                <div className="container-fluid px-0">
                  <div className="row w-100 mx-0">
                    <div className="col-lg-3 col-md-6">
                      <div className="maga_drop__menus">
                        <h3 className="dropdown_heading">
                          <TbMinusVertical size={50} className="" />
                          <span className="mt-1 fs-4 fw-bold">Cargolioger</span>
                        </h3>
                        <ul className="mx-2 fw-bold ">
                          <li>
                            <Link to="" className="text-decoration-none ">
                              BLVK Unicorn
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Candy King
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Coastal Clouds
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Cuttwood
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Double Stuffed
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Halo
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Heisenberg
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="maga_drop__menus">
                        <h3 className="dropdown_heading">
                          <TbMinusVertical size={50} className="" />
                          <span className="mt-1 fs-4 fw-bold">Cargolioger</span>
                        </h3>
                        <ul className="mx-2 fw-bold ">
                          <li>
                            <Link to="" className="text-decoration-none ">
                              BLVK Unicorn
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Candy King
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Coastal Clouds
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Cuttwood
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Double Stuffed
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Halo
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Heisenberg
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="maga_drop__menus">
                        <h3 className="dropdown_heading">
                          <TbMinusVertical size={50} className="" />
                          <span className="mt-1 fs-4 fw-bold">Cargolioger</span>
                        </h3>
                        <ul className="mx-2 fw-bold ">
                          <li>
                            <Link to="" className="text-decoration-none ">
                              BLVK Unicorn
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Candy King
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Coastal Clouds
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Cuttwood
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Double Stuffed
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Halo
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Heisenberg
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="maga_drop__menus">
                        <h3 className="dropdown_heading">
                          <TbMinusVertical size={50} className="" />
                          <span className="mt-1 fs-4 fw-bold">Cargolioger</span>
                        </h3>
                        <ul className="mx-2 fw-bold ">
                          <li>
                            <Link to="" className="text-decoration-none ">
                              BLVK Unicorn
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Candy King
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Coastal Clouds
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Cuttwood
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Double Stuffed
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Halo
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Heisenberg
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="mx-lg-3">
              <Link className="dropdown-toggle btm-headers" href="Javascript:;">
                C-Store & Novelty
              </Link>
              <div className="dropdown-menu maga_drop_down py-4 shadow">
                <div className="container-fluid px-0">
                  <div className="row w-100 mx-0">
                    <div className="col-lg-3 col-md-6">
                      <div className="maga_drop__menus">
                        <h3 className="dropdown_heading">
                          <TbMinusVertical size={50} className="" />
                          <span className="mt-1 fs-4 fw-bold">Cargolioger</span>
                        </h3>
                        <ul className="mx-2 fw-bold ">
                          <li>
                            <Link to="" className="text-decoration-none ">
                              BLVK Unicorn
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Candy King
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Coastal Clouds
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Cuttwood
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Double Stuffed
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Halo
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Heisenberg
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="maga_drop__menus">
                        <h3 className="dropdown_heading">
                          <TbMinusVertical size={50} className="" />
                          <span className="mt-1 fs-4 fw-bold">Cargolioger</span>
                        </h3>
                        <ul className="mx-2 fw-bold ">
                          <li>
                            <Link to="" className="text-decoration-none ">
                              BLVK Unicorn
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Candy King
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Coastal Clouds
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Cuttwood
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Double Stuffed
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Halo
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Heisenberg
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="maga_drop__menus">
                        <h3 className="dropdown_heading">
                          <TbMinusVertical size={50} className="" />
                          <span className="mt-1 fs-4 fw-bold">Cargolioger</span>
                        </h3>
                        <ul className="mx-2 fw-bold ">
                          <li>
                            <Link to="" className="text-decoration-none ">
                              BLVK Unicorn
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Candy King
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Coastal Clouds
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Cuttwood
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Double Stuffed
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Halo
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Heisenberg
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="maga_drop__menus">
                        <h3 className="dropdown_heading">
                          <TbMinusVertical size={50} className="" />
                          <span className="mt-1 fs-4 fw-bold">Cargolioger</span>
                        </h3>
                        <ul className="mx-2 fw-bold ">
                          <li>
                            <Link to="" className="text-decoration-none ">
                              BLVK Unicorn
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Candy King
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Coastal Clouds
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Cuttwood
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Double Stuffed
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Halo
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="text-decoration-none ">
                              Heisenberg
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="mx-lg-3">
              <Link className="btm-headers" to="brands.html">
                Brands
              </Link>
            </li>
            <li className="mx-lg-3">
              <Link to="/Contact" className="btm-headers">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
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
