import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../AdminDashboard/dashboard.css";
import Starlogo from "../../assets/img/logo.png";
import profile from "../../assets/img/profile_img1.png";
import { HiMenuAlt1 } from "react-icons/hi";
import $ from 'jquery'; 

const Dashboard = () => {
  $(document).ready(function () {
    $('.sidebar_btn').on('click', function () { 
        $('.siderbar_section').toggleClass('hide_sidebar'); 
        $('.admin_main').toggleClass('admin_full'); 
    })
});
  return (
    <div>
      <div className="siderbar_section">
        <div className="siderbar_inner">

          <div className="sidebar_logo">
            <Link to="" className="">
              <img src={Starlogo} alt="Logo" />{" "}
            </Link>
          </div>
          <div className="sidebar_menus">
            <ul className="list-unstyled ps-1 m-0">
              <li>
                <Link
                  className=" fw-bold bg-white"
                  to="/AdminDashboard"
                  style={{
                    textDecoration: "none",
                    fontSize: "18px",
                    color: "#3e4093",
                  }}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  className=""
                  to="/UserManage"
                  style={{ textDecoration: "none", fontSize: "18px" }}
                >
                  User Management
                </Link>
              </li>
              <li>
                <Link
                  className=""
                  to="/CategorySub"
                  style={{ textDecoration: "none", fontSize: "18px" }}
                >
                  Category &amp; Sub Category
                </Link>
              </li>
              <li>
                <Link
                  className=""
                  to="/Inventory"
                  style={{ textDecoration: "none", fontSize: "18px" }}
                >
                  Inventory Management
                </Link>
              </li>
              <li>
                <Link
                  className=""
                  to="/brandsManage"
                  style={{ textDecoration: "none", fontSize: "18px" }}
                >
                  Brands Management
                </Link>
              </li>
              <li>
                <Link
                  className=""
                  to="/OrderRequest"
                  style={{ textDecoration: "none", fontSize: "18px" }}
                >
                  Order request
                </Link>
              </li>
              <li>
                <Link
                  className=""
                  to="/Cms"
                  style={{ textDecoration: "none", fontSize: "18px" }}
                >
                  CMS
                </Link>
              </li>
              <li>
                <Link
                  className=""
                  to="/AdminLogin"
                  style={{ textDecoration: "none", fontSize: "18px" }}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="admin_main_inner">
        <div className="admin_header shadow">
          <div className="row align-items-center mx-0 justify-content-between w-100">
            <div className="col">
              <a className="sidebar_btn" href="javscript:;">
                <p>☰</p>
              </a>
            </div>
            <div className="col-auto">
              <div className="dropdown Profile_dropdown">
                <button
                  className="btn btn-secondary p-0"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img className="" src={profile} alt="" width={50} />
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="edit-profile.html">
                      Edit Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="change-password.html">
                      Change Password
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
