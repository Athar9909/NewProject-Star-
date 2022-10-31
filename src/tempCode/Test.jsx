import React from "react";
import "./test.css";
const Test = () => {
  return (
    <div>
      <header className="header_main">
        <div className="row header_top py-3 px-4 align-items-center justify-content-between">
          <div className="col-auto">
            <a className="header_logo" href="index.html">
              <img src="assets/img/logo.png" alt="" />
            </a>
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
                      <i className="fal fa-search" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-auto d-flex align-items-center">
            <div className="social_icon d-flex">
              <a href="cart.html">
                <i className="far fa-cart-arrow-down" />
                <span className="count">4</span>
              </a>
              <a href="javascript:;">
                <i className="far fa-bell" />
                <span className="count">4</span>
              </a>
            </div>
            <a
              className="login_btns"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop1"
              href="javscript:;"
            >
              Login
            </a>
            <a className="signup_btns" href="register.html">
              Sign Up
            </a>
          </div>
        </div>
        <div className="row header_bottom px-0">
          <div className="col-12">
            <ul className="header_menus mb-0 ps-0">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="product.html">Top Selling</a>
              </li>
              <li>
                <a href="product.html">New Arrivals</a>
              </li>
              <li>
                <a className="dropdown-toggle" href="Javascript:;">
                  Vape
                </a>
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
                              <a href="product.html">BLVK Unicorn</a>
                            </li>
                            <li>
                              <a href="product.html">Candy King</a>
                            </li>
                            <li>
                              <a href="product.html">Coastal Clouds</a>
                            </li>
                            <li>
                              <a href="product.html">Cuttwood</a>
                            </li>
                            <li>
                              <a href="product.html">Double Stuffed</a>
                            </li>
                            <li>
                              <a href="product.html">Halo</a>
                            </li>
                            <li>
                              <a href="product.html">Heisenberg</a>
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
                              <a href="product.html">BLVK Unicorn</a>
                            </li>
                            <li>
                              <a href="product.html">Candy King</a>
                            </li>
                            <li>
                              <a href="product.html">Coastal Clouds</a>
                            </li>
                            <li>
                              <a href="product.html">Cuttwood</a>
                            </li>
                            <li>
                              <a href="product.html">Double Stuffed</a>
                            </li>
                            <li>
                              <a href="product.html">Halo</a>
                            </li>
                            <li>
                              <a href="product.html">Heisenberg</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="maga_drop__menus">
                          <h3 className="dropdown_heading">Disposables</h3>
                          <ul>
                            <li>
                              <a href="product.html">BLVK Unicorn</a>
                            </li>
                            <li>
                              <a href="product.html">Candy King</a>
                            </li>
                            <li>
                              <a href="product.html">Coastal Clouds</a>
                            </li>
                            <li>
                              <a href="product.html">Cuttwood</a>
                            </li>
                            <li>
                              <a href="product.html">Double Stuffed</a>
                            </li>
                            <li>
                              <a href="product.html">Halo</a>
                            </li>
                            <li>
                              <a href="product.html">Heisenberg</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="maga_drop__menus">
                          <h3 className="dropdown_heading">Hardware</h3>
                          <ul>
                            <li>
                              <a href="product.html">BLVK Unicorn</a>
                            </li>
                            <li>
                              <a href="product.html">Candy King</a>
                            </li>
                            <li>
                              <a href="product.html">Coastal Clouds</a>
                            </li>
                            <li>
                              <a href="product.html">Cuttwood</a>
                            </li>
                            <li>
                              <a href="product.html">Double Stuffed</a>
                            </li>
                            <li>
                              <a href="product.html">Halo</a>
                            </li>
                            <li>
                              <a href="product.html">Heisenberg</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a className="dropdown-toggle" href="Javascript:;">
                  Smoke
                </a>
                <div className="dropdown-menu maga_drop_down py-4 shadow">
                  <div className="container-fluid px-0">
                    <div className="row w-100 mx-0">
                      <div className="col-lg-3 col-md-6">
                        <div className="maga_drop__menus">
                          <h3 className="dropdown_heading">Cigarillos</h3>
                          <ul>
                            <li>
                              <a href="product.html">BLVK Unicorn</a>
                            </li>
                            <li>
                              <a href="product.html">Candy King</a>
                            </li>
                            <li>
                              <a href="product.html">Coastal Clouds</a>
                            </li>
                            <li>
                              <a href="product.html">Cuttwood</a>
                            </li>
                            <li>
                              <a href="product.html">Double Stuffed</a>
                            </li>
                            <li>
                              <a href="product.html">Halo</a>
                            </li>
                            <li>
                              <a href="product.html">Heisenberg</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="maga_drop__menus">
                          <h3 className="dropdown_heading">Pipe Tobacco</h3>
                          <ul>
                            <li>
                              <a href="product.html">BLVK Unicorn</a>
                            </li>
                            <li>
                              <a href="product.html">Candy King</a>
                            </li>
                            <li>
                              <a href="product.html">Coastal Clouds</a>
                            </li>
                            <li>
                              <a href="product.html">Cuttwood</a>
                            </li>
                            <li>
                              <a href="product.html">Double Stuffed</a>
                            </li>
                            <li>
                              <a href="product.html">Halo</a>
                            </li>
                            <li>
                              <a href="product.html">Heisenberg</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="maga_drop__menus">
                          <h3 className="dropdown_heading">Rolling Paper</h3>
                          <ul>
                            <li>
                              <a href="product.html">BLVK Unicorn</a>
                            </li>
                            <li>
                              <a href="product.html">Candy King</a>
                            </li>
                            <li>
                              <a href="product.html">Coastal Clouds</a>
                            </li>
                            <li>
                              <a href="product.html">Cuttwood</a>
                            </li>
                            <li>
                              <a href="product.html">Double Stuffed</a>
                            </li>
                            <li>
                              <a href="product.html">Halo</a>
                            </li>
                            <li>
                              <a href="product.html">Heisenberg</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="maga_drop__menus">
                          <h3 className="dropdown_heading">Hookah</h3>
                          <ul>
                            <li>
                              <a href="product.html">BLVK Unicorn</a>
                            </li>
                            <li>
                              <a href="product.html">Candy King</a>
                            </li>
                            <li>
                              <a href="product.html">Coastal Clouds</a>
                            </li>
                            <li>
                              <a href="product.html">Cuttwood</a>
                            </li>
                            <li>
                              <a href="product.html">Double Stuffed</a>
                            </li>
                            <li>
                              <a href="product.html">Halo</a>
                            </li>
                            <li>
                              <a href="product.html">Heisenberg</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a className="dropdown-toggle" href="Javascript:;">
                  C-Store &amp; Novelty
                </a>
                <div className="dropdown-menu maga_drop_down py-4 shadow">
                  <div className="container-fluid px-0">
                    <div className="row w-100 mx-0">
                      <div className="col-lg-3 col-md-6">
                        <div className="maga_drop__menus">
                          <h3 className="dropdown_heading">Novelty</h3>
                          <ul>
                            <li>
                              <a href="product.html">BLVK Unicorn</a>
                            </li>
                            <li>
                              <a href="product.html">Candy King</a>
                            </li>
                            <li>
                              <a href="product.html">Coastal Clouds</a>
                            </li>
                            <li>
                              <a href="product.html">Cuttwood</a>
                            </li>
                            <li>
                              <a href="product.html">Double Stuffed</a>
                            </li>
                            <li>
                              <a href="product.html">Halo</a>
                            </li>
                            <li>
                              <a href="product.html">Heisenberg</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="maga_drop__menus">
                          <h3 className="dropdown_heading">C-Store</h3>
                          <ul>
                            <li>
                              <a href="product.html">BLVK Unicorn</a>
                            </li>
                            <li>
                              <a href="product.html">Candy King</a>
                            </li>
                            <li>
                              <a href="product.html">Coastal Clouds</a>
                            </li>
                            <li>
                              <a href="product.html">Cuttwood</a>
                            </li>
                            <li>
                              <a href="product.html">Double Stuffed</a>
                            </li>
                            <li>
                              <a href="product.html">Halo</a>
                            </li>
                            <li>
                              <a href="product.html">Heisenberg</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="maga_drop__menus">
                          <h3 className="dropdown_heading">Novelty</h3>
                          <ul>
                            <li>
                              <a href="product.html">BLVK Unicorn</a>
                            </li>
                            <li>
                              <a href="product.html">Candy King</a>
                            </li>
                            <li>
                              <a href="product.html">Coastal Clouds</a>
                            </li>
                            <li>
                              <a href="product.html">Cuttwood</a>
                            </li>
                            <li>
                              <a href="product.html">Double Stuffed</a>
                            </li>
                            <li>
                              <a href="product.html">Halo</a>
                            </li>
                            <li>
                              <a href="product.html">Heisenberg</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="maga_drop__menus">
                          <h3 className="dropdown_heading">C-Store</h3>
                          <ul>
                            <li>
                              <a href="product.html">BLVK Unicorn</a>
                            </li>
                            <li>
                              <a href="product.html">Candy King</a>
                            </li>
                            <li>
                              <a href="product.html">Coastal Clouds</a>
                            </li>
                            <li>
                              <a href="product.html">Cuttwood</a>
                            </li>
                            <li>
                              <a href="product.html">Double Stuffed</a>
                            </li>
                            <li>
                              <a href="product.html">Halo</a>
                            </li>
                            <li>
                              <a href="product.html">Heisenberg</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="brands.html">Brands</a>
              </li>
              <li>
                <a href="contact-us.html">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Test;
