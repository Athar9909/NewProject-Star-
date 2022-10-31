import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/adminMain.css";
import Starlogo from "../../assets/img/logo.png";
import profile from "../../assets/img/profile_img1.png";
import { useForm } from "react-hook-form";
import axios from "axios";

const EditProfile = () => {
  const editProfil = "http://localhost:7000/api/admin/editProfile";
  const [files, setFiles] = useState([]);
  const [adminData,setAdminData] = useState([])
  axios.defaults.headers.common["x-auth-token-admin"] =
  localStorage.getItem("AdminLogToken");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  console.log(adminData);
  useEffect(() => {
    const AdminData = JSON.parse(localStorage.getItem("AdminData"));
    setAdminData(AdminData);
  }, []);
  const onFileSelection = (e, key) => {
    console.log(e);
    setFiles({ ...files, [key]: e.target.files[0] });
  };
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("adminProfile", files?.adminProfile);
    formData.append("firstName",data?.name)

    await axios.post(editProfil,formData).then((res)=>{
      console.log(res);
      if (res?.data.message === "Profile updated Successfully"){
        localStorage.setItem("AdminData", JSON.stringify(res?.data?.results.admin));
         window.location.reload()
      }
    
    })
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
                  className="fw-bold bg-white"
                  to="/AdminDashboard"
                  style={{
                    textDecoration: "none",
                    fontSize: "16px",
                    fontFamily: "'Rubik', sans-serif",
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
                  style={{
                    textDecoration: "none",
                    fontSize: "16px",
                    fontFamily: "'Rubik', sans-serif",
                  }}
                >
                  User Management
                </Link>
              </li>
              <li>
                <Link
                  className=""
                  to="/CategorySub"
                  style={{
                    textDecoration: "none",
                    fontSize: "16px",
                    fontFamily: "'Rubik', sans-serif",
                  }}
                >
                  Category &amp; Sub Category
                </Link>
              </li>
              <li>
                <Link
                  className=""
                  to="/Inventory"
                  style={{
                    textDecoration: "none",
                    fontSize: "16px",
                    fontFamily: "'Rubik', sans-serif",
                  }}
                >
                  Inventory Management
                </Link>
              </li>
              <li>
                <Link
                  className="/brandsManage"
                  to=""
                  style={{
                    textDecoration: "none",
                    fontSize: "16px",
                    fontFamily: "'Rubik', sans-serif",
                  }}
                >
                  Brands Management
                </Link>
              </li>
              <li>
                <Link
                  className=""
                  to="/OrderRequest"
                  style={{
                    textDecoration: "none",
                    fontSize: "16px",
                    fontFamily: "'Rubik', sans-serif",
                  }}
                >
                  Order request
                </Link>
              </li>
              <li>
                <Link
                  className=""
                  to="/Cms"
                  style={{
                    textDecoration: "none",
                    fontSize: "16px",
                    fontFamily: "'Rubik', sans-serif",
                  }}
                >
                  CMS
                </Link>
              </li>
              <li>
                <Link
                  className=""
                  to="/AdminLogin"
                  onClick={handleClick}
                  style={{
                    textDecoration: "none",
                    fontSize: "16px",
                    fontFamily: "'Rubik', sans-serif",
                  }}
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
                <p></p>
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
        <div className="admin_panel_data height_adjust">
          <div className="row">
            <div className="col-12 editprofile design_outter_comman shadow">
              <div className="row comman_header justify-content-between">
                <div className="col-auto">
                  <h2>Edit Profile</h2>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <form
                    className="row form-design justify-content-center position-relative mx-0 p-4"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="form-group col-auto">
                      <div className="account_profile position-relative">
                        <div className="admin_profile">
                          <img className="admin_img" src={profile} /> 
                        </div>
                        <div className="p-image">
                          <i className="upload-icon fas fa-camera " />
                          <input
                            className="Admin-upload"
                            name="adminProfile"
                            type="file"
                            accept="image/*"
                            {...register("adminProfile")}
                            onChange={(e) => onFileSelection(e, "adminProfile")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-12">
                      <label htmlFor="">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={adminData.firstName}
                        name="name"
                        id="name" 
                        {...register("name")}
                      />
                    </div>
                    <div className="form-group col-12 text-center">
                      <button
                        className="comman_btn"
                        href="javscript:;"
                        type="submit"
                      >
                        Save
                      </button>
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

export default EditProfile;
