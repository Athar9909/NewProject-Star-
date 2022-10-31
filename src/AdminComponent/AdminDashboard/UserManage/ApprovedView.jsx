import React from 'react'
import { useState } from "react";

import { Link, Navigate, useNavigate } from "react-router-dom";
import "../../../assets/css/adminMain.css";
 
import Starlogo from "../../../assets/img/logo.png";
import profile from "../../../assets/img/profile_img1.png";
import { useEffect } from "react";
import axios from "axios";
import {FaFileUpload} from "react-icons/fa"


const ApprovedView = () => {
    const apiUrl = "http://localhost:7000/api/admin/getUser";
  
    const [user, setUser] = useState([]);
    const [editText,setEditText] = useState("Edit")
    axios.defaults.headers.common["x-auth-token-admin"] =
      localStorage.getItem("AdminLogToken");
    const objectId = localStorage.getItem("objectId");
    const navigate = useNavigate();

    useEffect(() => {
        const getUser = async () => {
          const res = await axios.post(apiUrl + "/" + objectId);
         let results=res.data.results
          setUser(res.data.results);
          if(results.quotation === false){
            document.getElementById('sh').checked= true
          }
    
          return res.data;
        };
        getUser();
      }, []);

      const handleClick = () => {
        localStorage.removeItem("AdminData");
        localStorage.removeItem("AdminLogToken");
        localStorage.removeItem("AdminEmail");
      };
  return (
    <div className="admin_main">
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
                  className=" "
                  to="/AdminDashboard"
                  style={{
                    textDecoration: "none",
                    fontSize: "18px",
                  }}
                >
                 <i className="fa fa-home"></i> Dashboard
                </Link>
              </li>
              <li>
                <Link
                  className="fw-bold bg-white"
                  to="/UserManage"
                  style={{ textDecoration: "none", fontSize: "18px",
                  fontFamily: "'Rubik', sans-serif",
                  color: "#3e4093",
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
                  fontFamily: "'Rubik', sans-serif", }}
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
            <Link
              href="javscript:;"
              style={{
                textDecoration: "none",
                fontSize: "16px",
                fontFamily: "'Rubik', sans-serif",
              }}
            >
              <h1 className="sidebar_btn">☰</h1>
            </Link>
          </div>
          <div className="col-auto">
            <div className="dropdown Profile_dropdown">
              <button
                className="btn btn-secondary rounded-circle p-0 "
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  className="border rounded-circle"
                  src={profile}
                  alt=""
                  width={50}
                />
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link className="dropdown-item" href="edit-profile.html">
                    Edit Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="change-password.html">
                    Change Password
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="admin_panel_data height_adjust">
      <div className="row Pending-view justify-content-center">
        <div className="col-12">
          <div className="row mx-0">
            <div className="col-12 design_outter_comman recent_orders shadow">
              <div className="row comman_header justify-content-between">
                <div className="col-auto">
                  <h2 className="main_headers">Edit Approved Details</h2>
                </div>
                <div className="col-auto">
                  <div className="Status_box">
                    Status: <strong>Active</strong>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 p-4 Pending-view-main">
                  <div className="row py-2">
                    <div className="col-12 text-center mb-4">
                      <div className="Pending-view_img">
                        <img src={profile} alt="" />
                      </div>
                      <h4 className="user_name">{user?.firstName}</h4>
                    </div>
                    <div className="col-md-6 mb-4 d-flex align-items-stretch">
                      <div className="row view-inner-box border mx-0 w-100">
                        <span className="fw-bold">Company:</span>
                        <div className="col">
                          <strong>{user?.companyName}</strong>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 d-flex align-items-stretch">
                      <div className="row view-inner-box border mx-0 w-100">
                        <span className="fw-bold">DBA:</span>
                        <div className="col">
                          <strong>{user?.dba}</strong>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 d-flex align-items-stretch">
                      <div className="row view-inner-box border mx-0 w-100">
                        <span className="fw-bold">
                          Company Address Line 1:
                        </span>
                        <div className="col">
                          <strong>{user?.addressLine}</strong>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 d-flex align-items-stretch">
                      <div className="row view-inner-box border mx-0 w-100">
                        <span className="fw-bold">
                          Company Address Line 2:
                        </span>
                        <div className="col">
                          <strong>{user?.addressLine}</strong>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4 d-flex align-items-stretch">
                      <div className="row view-inner-box border mx-0 w-100">
                        <span className="fw-bold">City:</span>
                        <div className="col">
                          <strong>{user?.city}</strong>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4 d-flex align-items-stretch">
                      <div className="row view-inner-box border mx-0 w-100">
                        <span className="fw-bold">State:</span>
                        <div className="col">
                          <strong>{user?.state}</strong>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4 d-flex align-items-stretch">
                      <div className="row view-inner-box border mx-0 w-100">
                        <span className="fw-bold">Zip/Postal Code:</span>
                        <div className="col">
                          <strong>{user?.zipcode}</strong>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 mb-4 d-flex align-items-stretch">
                      <div className="row view-inner-box border mx-0 w-100">
                        <span className="fw-bold">Federal Tax ID:</span>
                        <div className="col img_box_show">
                          <input
                            className="d-none"
                            type="file"
                            id="file1"
                            name="file"
                            disabled
                          />
                          <label htmlFor="file1">
                            <div className="">
                               <FaFileUpload size={25}/>
                              {user?.federalTaxId}
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 mb-4 d-flex align-items-stretch">
                      <div className="row view-inner-box border mx-0 w-100">
                        <span className="fw-bold">Tobacco License:</span>
                        <div className="col img_box_show">
                          <input
                            className="d-none"
                            type="file"
                            id="file1"
                            name="file"
                            disabled
                          />
                          <label htmlFor="file1">
                            <div className="">
                               <FaFileUpload size={25}/>
                              {user?.tobaccoLicence}
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 mb-4 d-flex align-items-stretch">
                      <div className="row view-inner-box border mx-0 w-100">
                        <span className="fw-bold">Sales Tax ID:</span>
                        <div className="col img_box_show">
                          <input
                            className="d-none"
                            type="file"
                            id="file1"
                            name="file"
                            disabled
                          />
                          <label htmlFor="file1">
                            <div className="">
                               <FaFileUpload size={25}/>
                              {user?.salesTaxId}
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 mb-4 d-flex align-items-stretch">
                      <div className="row view-inner-box border mx-0 w-100">
                        <span className="fw-bold">Business License:</span>
                        <div className="col img_box_show">
                          <input
                            className="d-none"
                            type="file"
                            id="file1"
                            name="file"
                            disabled
                          />
                          <label htmlFor="file1">
                            <div className="">
                               <FaFileUpload size={25}/>
                              {user?.businessLicense}
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 d-flex align-items-stretch">
                      <div className="row view-inner-box border mx-0 w-100">
                        <span className="fw-bold">Contact First name:</span>
                        <div className="col">
                          <strong> {user?.firstName}</strong>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 d-flex align-items-stretch">
                      <div className="row view-inner-box border mx-0 w-100">
                        <span className="fw-bold">Contact Last name:</span>
                        <div className="col">
                          <strong> {user?.lastName}</strong>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-4 d-flex align-items-stretch">
                      <div className="row view-inner-box border mx-0 w-100">
                        <span className="fw-bold">Account Owner ID:</span>
                        <div className="col img_box_show">
                          <input
                            className="d-none"
                            type="file"
                            id="file1"
                            name="file"
                            disabled
                          />
                          <label htmlFor="file1">
                            <div className="">
                               <FaFileUpload size={25}/>
                              {user?.accountOwnerId}
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4 d-flex align-items-stretch">
                      <div className="row view-inner-box border mx-0 w-100">
                        <span className="fw-bold">Email Address:</span>
                        <div className="col">
                          <strong>{user?.email}</strong>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4 d-flex align-items-stretch">
                      <div className="row view-inner-box border mx-0 w-100">
                        <span className="fw-bold">Phone Number:</span>
                        <div className="col">
                          <strong>{user?.phoneNumber}</strong>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4 d-flex align-items-stretch">
                      <div className="row view-inner-box border mx-0 w-100">
                        <span className="fw-bold">
                          How did you hear about us?:
                        </span>
                        <div className="col">
                          <strong>{user?.heardAboutUs}</strong>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4 d-flex align-items-stretch">
                        <div className="row view-inner-box border mx-0 w-100">
                          <span className="fw-bold fs-6">
                            Request for Quotation :
                          </span>
                          <div className="col">
                            <div className="action_filter filter_check">
                              <input
                                className="d-none"
                                type="radio"
                                id="vii"
                                checked={user?.quotation}

                                name="quotation"
                              />
                              <label htmlFor="vii">Yes </label>
                            </div>
                          </div>
                          <div className="col">
                            <div className="action_filter filter_check">
                              <input
                                className="d-none"
                                type="radio"
                                id="sh"
                                name="quotation"
                                
                              />
                              <label htmlFor="sh">No </label>
                            </div>
                          </div>
                        </div>
                      </div>

                    <div className="col-12 text-center">
                      <Link
                        to="/UserManage/ApprovedView-editUser"
                        className="comman_btn text-decoration-none"
                      >
                        {editText}
                      </Link>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ApprovedView
