import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../dashboard.css";
import Starlogo from "../../../assets/img/logo.png";
import profile from "../../../assets/img/profile_img1.png";
import { useEffect } from "react";
import axios from "axios";
import { post } from "jquery";

const Cms = () => {
  const [sideBar, setSideBar] = useState("");
  const [slideData,setSlideData] = useState([])
  const AllSlides = "http://localhost:7000/api/admin/cms/getAllSlides";
  const EditSlide = "http://localhost:7000/api/admin/cms/editSlide";
  const AddSlide = "http://localhost:7000/api/admin/cms/addSlide";
  const DeleteSlide = "http://localhost:7000/api/admin/cms/deleteSlide";

  const slide1Img = slideData[0]?.banner
  console.log(slide1Img);
  axios.defaults.headers.common["x-auth-token-admin"] =
    localStorage.getItem("AdminLogToken");

  useEffect(() => {
    getSlides();
  }, []);

  

  const getSlides = async () => {
    await axios.get(AllSlides).then((res) => {
      console.log(res);
      setSlideData(res?.data.results)
    });
    
  };

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
                  style={{ textDecoration: "none", fontSize: "18px" }}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  className=""
                  to="/UserManage"
                  style={{
                    textDecoration: "none",
                    fontSize: "18px",
                  }}
                >
                  User Management
                </Link>
              </li>
              <li>
                <Link
                  className="/CategorySub"
                  to=""
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
                  to="/BrandsManage"
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
                  className="fw-bold bg-white"
                  to="/Cms"
                  style={{
                    textDecoration: "none",
                    fontSize: "18px",
                    color: "#3e4093",
                  }}
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
              <h1 className="sidebar_btn">
                <button>☰</button>
              </h1>
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
        <div className="admin_panel_data height_adjust">
          <div className="row cms_management justify-content-center">
            <div className="col-12">
              <div className="row mx-0">
                <div className="col-12 design_outter_comman recent_orders shadow">
                  <div className="row">
                    <div className="col-12 user-management-cms px-0">
                      <nav>
                        <div
                          className="nav nav-tabs "
                          id="nav-tab"
                          role="tablist"
                        >
                          <button
                            className="nav-link active labels"
                            id="nav-home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-home"
                            type="button"
                            role="tab"
                            aria-controls="nav-home"
                            aria-selected="true"
                          >
                            Home Banner
                          </button>
                          <button
                            className="nav-link labels"
                            id="nav-profile1-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-profile1"
                            type="button"
                            role="tab"
                            aria-controls="nav-profile1"
                            aria-selected="false"
                          >
                            About Us
                          </button>
                          <button
                            className="nav-link labels"
                            id="nav-profile2-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-profile2"
                            type="button"
                            role="tab"
                            aria-controls="nav-profile2"
                            aria-selected="false"
                          >
                            T&amp;C
                          </button>
                          <button
                            className="nav-link labels"
                            id="nav-profile3-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-profile3"
                            type="button"
                            role="tab"
                            aria-controls="nav-profile3"
                            aria-selected="false"
                          >
                            Privacy Policy
                          </button>
                        </div>
                      </nav>
                      <div className="tab-content" id="nav-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="nav-home"
                          role="tabpanel"
                          aria-labelledby="nav-home-tab"
                        >
                          <div className="row mx-0 cms_home_banner">
                            <div className="col-12 p-4">
                              <ul
                                className="nav nav-tabs mb-4 bg-white"
                                id="myTab"
                                role="tablist"
                              >
                                <li
                                  className="nav-item me-2"
                                  role="presentation"
                                >
                                  <button
                                    className="nav-link active labels"
                                    id="home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#home"
                                    type="button"
                                    role="tab"
                                    aria-controls="home"
                                    aria-selected="true"
                                  >
                                    {slideData[0]?.slide}
                                  </button>
                                </li>
                                <li
                                  className="nav-item me-2"
                                  role="presentation"
                                >
                                  <button
                                    className="nav-link labels"
                                    id="profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="profile"
                                    aria-selected="false"
                                  >
                                    {slideData[1]?.slide}
                                    
                                  </button>
                                </li>
                                <li
                                  className="nav-item me-2"
                                  role="presentation"
                                >
                                  <button
                                    className="nav-link labels"
                                    id="contact-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#contact"
                                    type="button"
                                    role="tab"
                                    aria-controls="contact"
                                    aria-selected="false"
                                  >
                                    {slideData[2]?.slide}
                                    
                                  </button>
                                </li>
                              </ul>
                              <div className="tab-content" id="myTabContent">
                                <div
                                  className="tab-pane fade show active"
                                  id="home"
                                  role="tabpanel"
                                  aria-labelledby="home-tab"
                                >
                                  <div className="row mx-0 border rounded py-3 px-1">
                                    <div className="col-12">
                                      <form
                                        className="form-design row"
                                        action=""
                                      >
                                        <div className="form-group col-12 slide_img">
                                          <label htmlFor="" className="labels">
                                            Slide Image
                                          </label>
                                         
                                          <div className="account_profile position-relative d-inline-block">
                                            <div className="circle">
                                              <img
                                                className="profile-pic"

                                                src={slide1Img}
                                                
                                              />
                                            </div>
                                            <div className="p-image">
                                              <i className="upload-button fas fa-camera" />
                                              <input
                                                className="file-upload"
                                                type="file"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="form-group col-12">
                                          <label htmlFor="" className="labels">
                                            Title
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="Cherry E-Juice , New Taste new Experience"
                                            name="name"
                                            id="name"
                                          />
                                        </div>
                                        <div className="form-group col-12">
                                          <label htmlFor="" className="labels">
                                            Paragraph
                                          </label>
                                          <textarea
                                            className="form-control"
                                            name=""
                                            id=""
                                          />
                                        </div>
                                        <div className="form-group col-12 text-start">
                                          <Link
                                            className="comman_btn  text-decoration-none"
                                            href="javscript:;"
                                          >
                                            Save
                                          </Link>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="profile"
                                  role="tabpanel"
                                  aria-labelledby="profile-tab"
                                >
                                  <div className="row mx-0 border rounded py-3 px-1">
                                    <div className="col-12">
                                      <form
                                        className="form-design row"
                                        action=""
                                      >
                                        <div className="form-group col-12 slide_img">
                                          <label htmlFor="" className="labels">
                                            Slide Image
                                          </label>
                                          <div className="account_profile position-relative d-inline-block">
                                            <div className="circle">
                                              <img
                                                className="profile-pic"
                                                src={require("../../../assets/img/banner_img1.jpg")}
                                              />
                                            </div>
                                            <div className="p-image">
                                              <i className=" fas fa-camera" />
                                              <input
                                                className="file-upload"
                                                type="file"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="form-group col-12">
                                          <label htmlFor="" className="labels">
                                            Title
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="Cherry E-Juice , New Taste new Experience"
                                            name="name"
                                            id="name"
                                          />
                                        </div>
                                        <div className="form-group col-12">
                                          <label htmlFor="" className="labels">
                                            Paragraph
                                          </label>
                                          <textarea
                                            className="form-control"
                                            name=""
                                            id=""
                                          />
                                        </div>
                                        <div className="form-group col-12 text-start">
                                          <Link
                                            className="comman_btn  text-decoration-none"
                                            href="javscript:;"
                                          >
                                            Save
                                          </Link>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="contact"
                                  role="tabpanel"
                                  aria-labelledby="contact-tab"
                                >
                                  <div className="row mx-0 border rounded py-3 px-1">
                                    <div className="col-12">
                                      <form
                                        className="form-design row"
                                        action=""
                                      >
                                        <div className="form-group col-12 slide_img">
                                          <label htmlFor="" className="labels">
                                            Slide Image
                                          </label>
                                          <div className="account_profile position-relative d-inline-block">
                                            <div className="circle">
                                              <img
                                                className="profile-pic"
                                                src={require("../../../assets/img/banner_img1.jpg")}
                                              />
                                            </div>
                                            <div className="p-image">
                                              <i className="upload-button fas fa-camera" />
                                              <input
                                                className="file-upload"
                                                type="file"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="form-group col-12">
                                          <label htmlFor="" className="labels">
                                            Title
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="Cherry E-Juice , New Taste new Experience"
                                            name="name"
                                            id="name"
                                          />
                                        </div>
                                        <div className="form-group col-12">
                                          <label htmlFor="" className="labels">
                                            Paragraph
                                          </label>
                                          <textarea
                                            className="form-control"
                                            name=""
                                            id=""
                                          />
                                        </div>
                                        <div className="form-group col-12 text-start">
                                          <Link
                                            className="comman_btn  text-decoration-none"
                                            href="javscript:;"
                                          >
                                            Save
                                          </Link>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="nav-profile1"
                          role="tabpanel"
                          aria-labelledby="nav-profile1-tab"
                        >
                          <div className="row py-5 px-4 mx-0">
                            <div className="col-12">
                              <div className="  content_management_box">
                                <div className="d-flex justify-content-between">
                                  <h2>About Us</h2>
                                  <Link
                                    className="edit_content_btn mt-2 "
                                    href="javscript:;"
                                  >
                                    <i className="far fa-edit me-2" />
                                    Edit
                                  </Link>
                                </div>

                                <p className="bg-light p-3">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Aenean euismod bibendum
                                  laoreet. Proin gravida dolor sit amet lacus
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Aenean euismod bibendum
                                  laoreet. Proin gravida dolor sit amet lacus
                                  accumsan et viverra justo commodo. Proin
                                  sodales pulvinar sic tempor. Sociis natoque
                                  penatibus et magnis dis parturient montes,
                                  nascetur ridiculus mus. Proin sodales pulvinar
                                  sic tempor. Sociis natoque penatibus et magnis
                                  dis parturient montes, nascetur ridiculus mus.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="nav-profile2"
                          role="tabpanel"
                          aria-labelledby="nav-profile2-tab"
                        >
                          <div className="row py-5 px-4 mx-0">
                            <div className="col-12">
                              <div className="row content_management_box">
                                <div className="d-flex justify-content-between ">
                                  <h2>Terms & Condition</h2>
                                  <Link
                                    className="edit_content_btn mt-2 "
                                    href="javscript:;"
                                  >
                                    <i className="far fa-edit me-2" />
                                    Edit
                                  </Link>
                                </div>
                                <p className="bg-light p-3">
                                
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="nav-profile3"
                          role="tabpanel"
                          aria-labelledby="nav-profile3-tab"
                        >
                          <div className="row py-5 px-4 mx-0">
                            <div className="col-12">
                              <div className="row content_management_box bg-light p-3">
                                <div className="d-flex justify-content-between">
                                  <h2>Terms & Condition</h2>
                                  <Link
                                    className="edit_content_btn mb-4"
                                    href="javscript:;"
                                  >
                                    <i className="far fa-edit me-2" />
                                    Edit
                                  </Link>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Aenean euismod bibendum
                                  laoreet. Proin gravida dolor sit amet lacus
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Aenean euismod bibendum
                                  laoreet. Proin gravida dolor sit amet lacus
                                  accumsan et viverra justo commodo. Proin
                                  sodales pulvinar sic tempor. Sociis natoque
                                  penatibus et magnis dis parturient montes,
                                  nascetur ridiculus mus. Proin sodales pulvinar
                                  sic tempor. Sociis natoque penatibus et magnis
                                  dis parturient montes, nascetur ridiculus mus.
                                </p>
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
          </div>
        </div>
      </div>
      <div
        className="modal fade comman_modal"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Edit Category
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form
                className="form-design px-3 py-2 help-support-form row align-items-end justify-content-center"
                action=""
              >
                <div className="form-group col-12">
                  <label htmlFor="">Category Name</label>
                  <input
                    type="text"
                    defaultValue="Smoke"
                    className="form-control"
                  />
                </div>
                <div className="form-group col-12 choose_file position-relative">
                  <span>Category Image </span>{" "}
                  <label htmlFor="upload_video">
                    <i className="fal fa-camera me-1" />
                    Choose File
                  </label>{" "}
                  <input
                    type="file"
                    className="form-control"
                    name="upload_video"
                    id="upload_video"
                  />
                </div>
                <div className="form-group mb-0 col-auto mt-3">
                  <button className="comman_btn">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade comman_modal"
        id="staticBackdrop2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Edit Sub Category
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form
                className="form-design px-3 py-2 help-support-form row align-items-end justify-content-center"
                action=""
              >
                <div className="form-group col-12">
                  <label htmlFor="">Sub Category Name</label>
                  <input
                    type="text"
                    defaultValue="Matrix Kratom"
                    className="form-control"
                  />
                </div>
                <div className="form-group col-12 choose_file position-relative">
                  <span>Sub Category Image </span>{" "}
                  <label htmlFor="upload_video">
                    <i className="fal fa-camera me-1" />
                    Choose File
                  </label>{" "}
                  <input
                    type="file"
                    className="form-control"
                    name="upload_video"
                    id="upload_video"
                  />
                </div>
                <div className="form-group mb-0 col-auto mt-3">
                  <button className="comman_btn">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cms;
