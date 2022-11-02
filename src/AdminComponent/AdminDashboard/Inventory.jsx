import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/adminMain.css";
import { useForm } from "react-hook-form";
import Starlogo from "../../assets/img/logo.png";
import axios from "axios";

const Inventory = () => {
  const [files, setFiles] = useState([]);
   const addProduct = "http://localhost:7000/api/admin/inventory/addProduct"
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm();

  axios.defaults.headers.common["x-auth-token-admin"] =
  localStorage.getItem("AdminLogToken");

  const onFileSelection = (e, key) => {
    console.log(e);
    setFiles({ ...files, [key]: e.target.files[0] });
  };

   const onSubmit = async(data) =>{
        console.log(data,files);
        const formData = new FormData();
        formData.append("productImage", files?.productImage);
        formData.append("flavourImage", files?.flavourImg);
        formData.append("unitName", data?.productName);
        formData.append("category", data?.category);
        formData.append("quantity", data?.quantity);
        formData.append("subCategory", data?.subCategory);
        formData.append("brand", data?.brands);
        formData.append("productType", data?.type);
        formData.append("flavour", data?.flavour);
        formData.append("description", "temp");


        await axios.post(addProduct, formData).then((res) => {
          console.log(res);
         
        });

   }
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
                  className=""
                  to="/UserManage"
                  style={{
                    textDecoration: "none",
                    fontSize: "18px",
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
                  style={{
                    textDecoration: "none",
                    fontSize: "18px",
                    fontFamily: "'Rubik', sans-serif",
                  }}
                >
                  <i class="fa fa-layer-group"></i> Category &amp; Sub Category
                </Link>
              </li>
              <li>
                <Link
                  className="bg-white"
                  to="/Inventory"
                  style={{
                    textDecoration: "none",
                    fontSize: "18px",
                    fontFamily: "'Rubik', sans-serif",
                    color: "#3e4093",
                  }}
                >
                  <i class="far fa-building"></i> Inventory Management
                </Link>
              </li>
              <li>
                <Link
                  className=""
                  to="/brandsManage"
                  style={{
                    textDecoration: "none",
                    fontSize: "18px",
                    fontFamily: "'Rubik', sans-serif",
                  }}
                >
                  <i class="fa fa-ship"></i> Brands Management
                </Link>
              </li>
              <li>
                <Link
                  className=""
                  to="/OrderRequest"
                  style={{
                    textDecoration: "none",
                    fontSize: "18px",
                    fontFamily: "'Rubik', sans-serif",
                  }}
                >
                  <i class="fa fa-layer-group"></i> Order request
                </Link>
              </li>
              <li>
                <Link
                  className=""
                  to="/Cms"
                  style={{
                    textDecoration: "none",
                    fontSize: "18px",
                    fontFamily: "'Rubik', sans-serif",
                  }}
                >
                  <i class="fa fa-cog"></i> CMS
                </Link>
              </li>
              <li>
                <Link
                  className=""
                  to="/AdminLogin"
                  onClick={handleClick}
                  style={{
                    textDecoration: "none",
                    fontSize: "18px",
                    fontFamily: "'Rubik', sans-serif",
                  }}
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
              <a className="sidebar_btn" href="javscript:;">
                <i className="far fa-bars" />
              </a>
            </div>
            <div className="col-auto">
              <div className="dropdown Profile_dropdown">
                <button
                  className="btn btn-secondary"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="assets/img/profile.png" alt="" />
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
        <div className="admin_panel_data height_adjust">
          <div className="row inventory-management justify-content-center">
            <div className="col-12 text-end mb-4">
              <a href="javascript:;" className="comman_btn2">
                Import Inventory
              </a>
            </div>
            <div className="col-12">
              <div className="row mx-0">
                <div className="col-12 design_outter_comman shadow mb-4">
                  <div className="row comman_header justify-content-between">
                    <div className="col-auto">
                      <h2>Add New Inventory</h2>
                    </div>
                  </div>
                  <form
                    className="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                    action=""
                    onSubmit={handleSubmit(onSubmit)}

                  >
                    <div className="form-group col-4">
                      <label htmlFor="">Product Name</label>
                      <input type="text" className="form-control" name="productName" {...register("productName", {
                            required: "Product Name is Required*",
                          })}  />
                          
                    </div>
                    <div className="form-group col-4 choose_file position-relative">
                      <span>Product Image </span>
                      <label htmlFor="upload_video" className="inputText">
                        <i className="fa fa-camera me-1" />
                        Choose File
                      </label>{" "}
                      <input
                        type="file"
                        className="form-control "
                        defaultValue=""
                        name="productImage"
                        onChange={(e) =>
                          onFileSelection(e, "productImage")
                        }
                      />
                       
                    </div>
                    <div className="form-group col-4">
                      <label htmlFor="">Category</label>
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                        name="category"
                        {...register("category", {
                          required: "category is Required*",
                        })}
                      >
                        <option selected="">Select Category</option>
                        <option value="vaoe">Vape</option>
                        <option value="smoke">Smoke</option>
                        <option value="mnew">Kratom</option>
                    
                      </select>
                    
                    </div>
                    <div className="form-group col-4">
                      <label htmlFor="">Sub Category</label>
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                        name="subCategory"
                        {...register("subCategory", {
                          required: "SubCategory is Required*",
                        })}
                      >
                        <option selected="">Select Sub Category</option>
                        <option value="blue">Blue Kratom</option>
                        <option value="royal">Royal Relex</option>
                        <option value="mit">MIT-45 Kratom</option>
                       
                      </select>
                     
                    </div>
                    <div className="form-group col-4">
                      <label htmlFor="">Quantity</label>
                      <input type="text" className="form-control"  name="quantity" {...register("quantity", {
                          required: "quantity is Required*",
                        })} />
                        
                    </div>
                    <div className="form-group col-4">
                      <label htmlFor="">Brands</label>
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                        name="brands"
                        {...register("brands", {
                          required: "Brands is Required*",
                        })}
                      >
                        <option selected="">Select Brands</option>
                        <option value="Horxon">Horizon</option>
                        <option value="Hude">Hyde</option>
                        <option value="mondder">Monster Vape</option>
                        
                      </select>
                     
                    </div>
                    <div className="form-group col mt-2 mb-4">
                      <div className="row flavour_box align-items-end mx-0 py-4 px-3">
                        <div className="form-group mb-0 col">
                          <label htmlFor="">Type</label>
                          <input type="text" className="form-control" name="type" {...register("type")} />
                        </div>
                        <div className="form-group mb-0 col">
                          <label htmlFor="">Flavour</label>
                          <input type="text" className="form-control" name="flavour" {...register("flavour")}  />
                        </div>
                        <div className="form-group mb-0 col choose_file position-relative">
                          <span>Flavour Image </span>{" "}
                          <label htmlFor="upload_video" className="inputText">
                            <i className="fa fa-camera me-1" />
                            Choose File
                          </label>{" "}
                          <input
                            type="file"
                            className="form-control"
                            defaultValue=""
                            name="flavourImg"
                            onChange={(e) =>
                              onFileSelection(e, "flavourImg")
                            }
                          />
                        </div>
                        <div className="form-group mb-0 col-auto">
                          <button className="comman_btn">
                            <i className="fa fa-plus mt-1 mx-1" /> Add More
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-0 col-12 text-center mt-2">
                      <button className="comman_btn" type="submit">Save</button>
                    </div>
                  </form>
                </div>
                <div className="col-12 design_outter_comman recent_orders shadow">
                  <div className="row comman_header justify-content-between">
                    <div className="col-auto">
                      <h2>Inventory Management</h2>
                    </div>
                    <div className="col-3">
                      <form className="form-design" action="">
                        <div className="form-group mb-0 position-relative icons_set">
                          <input
                            type="text"
                            className="form-control bg-white "
                            placeholder="Search"
                            name="name"
                            id="name"
                          />
                          <i className="far fa-search" />
                        </div>
                      </form>
                    </div>
                  </div>
                  <form
                    className="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                    action=""
                  >
                    <div className="form-group mb-0 col-5">
                      <label htmlFor="">From</label>
                      <input type="date" className="form-control" />
                    </div>
                    <div className="form-group mb-0 col-5">
                      <label htmlFor="">To</label>
                      <input type="date" className="form-control" />
                    </div>
                    <div className="form-group mb-0 col-auto">
                      <button className="comman_btn">Search</button>
                    </div>
                  </form>
                  <div className="row">
                    <div className="col-12 comman_table_design px-0">
                      <div className="table-responsive">
                        <table className="table mb-0">
                          <thead>
                            <tr>
                              <th>S.No.</th>
                              <th>Date</th>
                              <th>Product Name</th>
                              <th>Product Image</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>26/09/2022</td>
                              <td>Kado Bar 5000puff</td>
                              <td>
                                <img
                                  className="table_img"
                                  src="assets/img/verification_bg.jpg"
                                  alt=""
                                />
                              </td>
                              <td>
                                <form className="table_btns d-flex align-items-center">
                                  <div className="check_toggle">
                                    {" "}
                                    <input
                                      type="checkbox"
                                      name="check2"
                                      id="check2"
                                      className="d-none"
                                    />{" "}
                                    <label htmlFor="check2" />{" "}
                                  </div>
                                </form>
                              </td>
                              <td>
                                <a
                                  className="comman_btn table_viewbtn"
                                  href="inventory-view.html"
                                >
                                  View
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>26/09/2022</td>
                              <td>Kado Bar 5000puff</td>
                              <td>
                                <img
                                  className="table_img"
                                  src="assets/img/verification_bg.jpg"
                                  alt=""
                                />
                              </td>
                              <td>
                                <form className="table_btns d-flex align-items-center">
                                  <div className="check_toggle">
                                    {" "}
                                    <input
                                      type="checkbox"
                                      name="check3"
                                      id="check3"
                                      className="d-none"
                                    />{" "}
                                    <label htmlFor="check3" />{" "}
                                  </div>
                                </form>
                              </td>
                              <td>
                                <a
                                  className="comman_btn table_viewbtn"
                                  href="inventory-view.html"
                                >
                                  View
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>26/09/2022</td>
                              <td>Kado Bar 5000puff</td>
                              <td>
                                <img
                                  className="table_img"
                                  src="assets/img/verification_bg.jpg"
                                  alt=""
                                />
                              </td>
                              <td>
                                <form className="table_btns d-flex align-items-center">
                                  <div className="check_toggle">
                                    {" "}
                                    <input
                                      defaultChecked=""
                                      type="checkbox"
                                      name="check4"
                                      id="check4"
                                      className="d-none"
                                    />{" "}
                                    <label htmlFor="check4" />{" "}
                                  </div>
                                </form>
                              </td>
                              <td>
                                <a
                                  className="comman_btn table_viewbtn"
                                  href="inventory-view.html"
                                >
                                  View
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>26/09/2022</td>
                              <td>Kado Bar 5000puff</td>
                              <td>
                                <img
                                  className="table_img"
                                  src="assets/img/verification_bg.jpg"
                                  alt=""
                                />
                              </td>
                              <td>
                                <form className="table_btns d-flex align-items-center">
                                  <div className="check_toggle">
                                    {" "}
                                    <input
                                      defaultChecked=""
                                      type="checkbox"
                                      name="check5"
                                      id="check5"
                                      className="d-none"
                                    />{" "}
                                    <label htmlFor="check5" />{" "}
                                  </div>
                                </form>
                              </td>
                              <td>
                                <a
                                  className="comman_btn table_viewbtn"
                                  href="inventory-view.html"
                                >
                                  View
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>26/09/2022</td>
                              <td>Kado Bar 5000puff</td>
                              <td>
                                <img
                                  className="table_img"
                                  src="assets/img/verification_bg.jpg"
                                  alt=""
                                />
                              </td>
                              <td>
                                <form className="table_btns d-flex align-items-center">
                                  <div className="check_toggle">
                                    {" "}
                                    <input
                                      defaultChecked=""
                                      type="checkbox"
                                      name="check6"
                                      id="check6"
                                      className="d-none"
                                    />{" "}
                                    <label htmlFor="check6" />{" "}
                                  </div>
                                </form>
                              </td>
                              <td>
                                <a
                                  className="comman_btn table_viewbtn"
                                  href="inventory-view.html"
                                >
                                  View
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
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
  );
};

export default Inventory;
