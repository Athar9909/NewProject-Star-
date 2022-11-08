import React, { useState, KeyboardEventHandler } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../../assets/css/adminMain.css";
import { useForm } from "react-hook-form";
import Starlogo from "../../../assets/img/logo.png";
import axios from "axios";
import { useEffect } from "react";

const EditInventory = () => {
  const [files, setFiles] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const getProducts = `${process.env.REACT_APP_APIENDPOINTNEW}api/admin/inventory/allProducts`;
  const categoryApi = `${process.env.REACT_APP_APIENDPOINTNEW}api/admin/category/getCategories`;
  const SubCategoryApi = `${process.env.REACT_APP_APIENDPOINTNEW}api/admin/subCategory/getSubCategories`;
  const brandsApi = `${process.env.REACT_APP_APIENDPOINTNEW}api/admin/brands/getBrands`;

  const location = useLocation();
  let index = location.state?.index;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm();

  useEffect(() => {
    const getBrands = async () => {
      await axios.get(categoryApi).then((res) => {
        setCategories(res?.data.results);
      });
      await axios.get(SubCategoryApi).then((res) => {
        setSubCategories(res?.data.results);
      });
      await axios.get(brandsApi).then((res) => {
        setBrands(res?.data.results);
      });
    };

    getBrands();
    GetProducts();
  }, []);
  axios.defaults.headers.common["x-auth-token-admin"] =
    localStorage.getItem("AdminLogToken");

  const GetProducts = async () => {
    await axios.post(getProducts).then((res) => {
      setAllProducts(res.data?.results);
    });
  };

  const onFileSelection = (e, key) => {
    console.log(e);
    setFiles({ ...files, [key]: e.target.files[0] });
  };

  //   let type = formValues?.map((a) => a.type);
  //   let flavour = formValues?.map((a) => a.flavour);
  //   let flavourImage = formValues?.map((a) => a.flavourImg);
  //   let barcode = formValues?.map((a) => a.Barcode);
  //   const onSubmit = async (data) => {
  //     console.log(data);
  //     const formData = new FormData();
  //     formData.append("productImage", files?.productImage);
  //     formData.append("unitName", data?.productName);
  //     formData.append("category", data?.category);
  //     formData.append("quantity", data?.quantity);
  //     formData.append("subCategory", data?.subCategory);
  //     formData.append("brand", data?.brands);
  //     formData.append("barcode", barcode);
  //     formData.append("productType", type);
  //     formData.append("flavour", flavour);
  //     formData.append("flavourImage", flavourImage);
  //     formData.append("description", "temp");

  //     await axios.post(addProduct, formData).then((res) => {
  //       console.log(res);
  //     });
  //   };

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
            <div className="col-12">
              <div className="row mx-0">
                <div className="col-12 design_outter_comman shadow mb-4">
                  <div className="row comman_header justify-content-between">
                    <div className="col-auto">
                      <h2>Edit Inventory</h2>
                    </div>
                  </div>
                  <form
                    className="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                    action=""
                  >
                    <div className="form-group col-6 text-center">
                      <label htmlFor="" className="text-center">
                        Product Image
                      </label>
                      <div className="account_profile position-relative d-inline-block">
                        <div className="circle d-inline-flex">
                          <img
                            className="profile-pic"
                            src={`${process.env.REACT_APP_APIENDPOINTNEW}/${allProducts[index]?.productImage}`}
                          />
                        </div>
                        <div className="p-image">
                          <i className="upload-iconIN fas fa-camera" />
                          <input
                            className="file-uploadIN"
                            type="file"
                            accept="image/*"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-6 text-center">
                      <label htmlFor="" className="text-center">
                        Flavour Image
                      </label>
                      <div className="account_profile position-relative d-inline-block">
                        <div className="circle d-inline-flex">
                          <img
                            className="profile-pic"
                            src={`${process.env.REACT_APP_APIENDPOINTNEW}/${allProducts[index]?.flavourImg}`}
                          />
                        </div>
                        <div className="p-image">
                          <i className="upload-iconIN fas fa-camera" />
                          <input
                            className="file-uploadIN"
                            type="file"
                            accept="image/*"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-4">
                      <label htmlFor="">Product Name</label>
                      <input
                        type="text"
                        defaultValue={allProducts[index]?.unitName}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group col-4">
                      <label htmlFor="">Category</label>
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option>{allProducts[index]?.category}</option>
                        <option selected="" value={1}>
                          Vape
                        </option>
                        <option value={2}>Smoke</option>
                        <option value={3}>Kratom</option>
                        <option value={3}>C-Store</option>
                        <option value={3}>Smoke</option>
                      </select>
                    </div>
                    <div className="form-group col-4">
                      <label htmlFor="">Sub Category</label>
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option selected="">
                          {allProducts[index]?.subCategory}
                        </option>
                        <option selected="" value={1}>
                          Blue Kratom
                        </option>
                        <option value={2}>Royal Relex</option>
                        <option value={3}>MIT-45 Kratom</option>
                        <option value={3}>Bliss Kratom</option>
                        <option value={3}>Matrix Kratom</option>
                      </select>
                    </div>
                    <div className="form-group col">
                      <label htmlFor="">Quantity</label>
                      <input
                        type="text"
                        defaultValue={allProducts[index]?.quantity}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group col">
                      <label htmlFor="">Brands</label>
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option>{allProducts[index]?.brand}</option>
                        <option value={1}>Horizon</option>
                        <option value={2}>Hyde</option>
                        <option value={3}>Monster Vape</option>
                        <option value={3}>Rare</option>
                        <option selected="" value={3}>
                          MIT-45
                        </option>
                      </select>
                    </div>
                    <div className="form-group col">
                      <label htmlFor="">Type</label>
                      <input
                        type="text"
                        defaultValue={allProducts[index]?.productType}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group col">
                      <label htmlFor="">Flavour</label>
                      <input
                        type="text"
                        defaultValue={allProducts[index]?.flavour}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group mb-0 col-12 text-center mt-2">
                      <button className="comman_btn">Save</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditInventory;
