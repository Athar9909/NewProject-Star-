import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/adminMain.css";

import Starlogo from "../../assets/img/logo.png";
import profile from "../../assets/img/profile_img1.png";
import { HiMenuAlt1 } from "react-icons/hi";
import $ from "jquery";

const Dashboard = () => {
  const [sideBar, setSideBar] = useState(true);

  $(document).ready(function () {
    $(".sidebar_btn").on("click", function () {
      $(".siderbar_section").toggleClass("hide_sidebar");
      $(".admin_main").toggleClass("admin_full");
    });
  });

  const handleClick = () => {
    localStorage.removeItem("AdminData");
    localStorage.removeItem("AdminLogToken");
    localStorage.removeItem("AdminEmail");
  };
  return (
    <div className={sideBar? "admin_main" : "expanded_main"}>
    <div className={sideBar? "siderbar_section": "d-none"}>
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
                  className="bg-white "
                  to="/AdminDashboard"
                  style={{
                    textDecoration: "none",
                    fontSize: "18px",
                  color: "#3e4093",

                  }}
                >
                 <i className="fa fa-home"></i> Dashboard
                </Link>
              </li>
              <li>
                <Link
                  className=""
                  to="/UserManage"
                  style={{ textDecoration: "none", fontSize: "18px",
                  fontFamily: "'Rubik', sans-serif",
                }}
                >
                 <i class="fa fa-user"></i> User Management
                </Link>
              </li>
              <li>
                <Link
                  className=""
                  to="/CategorySub"
                  style={{ textDecoration: "none",  fontSize: "18px",
                  fontFamily: "'Rubik', sans-serif",
                 }}
                >
                 <i class="fa fa-layer-group"></i> Category &amp; Sub Category
                </Link>
              </li>
              <li>
                <Link
                  className=""
                  to="/Inventory"
                  style={{ textDecoration: "none",  fontSize: "18px",
                  fontFamily: "'Rubik', sans-serif", }}
                >
                <i class="far fa-building"></i>  Inventory Management
                </Link>
              </li>
              <li>
                <Link
                  className=""
                  to="/brandsManage"
                  style={{ textDecoration: "none",  fontSize: "18px",
                  fontFamily: "'Rubik', sans-serif", }}
                >
                <i class="fa fa-ship"></i>  Brands Management
                </Link>
              </li>
              <li>
                <Link
                  className=""
                  to="/OrderRequest"
                  style={{ textDecoration: "none",  fontSize: "18px",
                  fontFamily: "'Rubik', sans-serif", }}
                >
                 <i class="fa fa-layer-group"></i>  Order request
                </Link>
              </li>
              <li>
                <Link
                  className=""
                  to="/Cms"
                  style={{ textDecoration: "none",  fontSize: "18px",
                  fontFamily: "'Rubik', sans-serif", }}
                >
                 <i class="fa fa-cog"></i> CMS
                </Link>
              </li>
              <li>
                <Link
                  className=""
                  to="/AdminLogin"
                  onClick={handleClick}
                  style={{ textDecoration: "none",  fontSize: "18px",
                  fontFamily: "'Rubik', sans-serif", }}
                >
                  <i class="fa fa-sign-out-alt"></i>Logout
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
              {sideBar ? (
                <div>
                  <h1
                    className="mt-2 text-white"
                    onClick={() => {
                      console.log("yello");
                      setSideBar(!sideBar);
                    }}
                  ><i className="fa fa-bars"></i></h1>
                </div>
              ) : (
                <div>
                  <h3 className="">
                    <button
                      onClick={(e) => {
                        console.log(e);
                        setSideBar(!sideBar)
                      }}
                    >
                      X
                    </button>
                  </h3>
                </div>
              )}
            </div>
            <div className="col-auto d-flex ml-5">
              <div className="d-flex flex-column mt-2">
                <Link
                  className="text-decoration-none text-white"
                  to="/AdminDashboard/EditProfile"
                >
                  Edit Profile
                </Link>
                <Link
                  className="text-decoration-none text-white"
                  to="/AdminDashboard/changePassword"
                >
                  Change Password
                </Link>
              </div>
              <div className="dropdown mx-2">
                <div>
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
    </div>
  );
};

export default Dashboard;
