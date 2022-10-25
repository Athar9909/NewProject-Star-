import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "../AdminDashboard/dashboard.css"
import Starlogo from "../../assets/img/logo.png";
const CategorySub = () => {
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
                  className=""
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
                  className="fw-bold bg-white"
                  to="/CategorySub"
                  style={{ textDecoration: "none", fontSize: "18px",color: "#3e4093"}}
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
                  style={{ textDecoration: "none", fontSize: "18px" ,}}
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
      
    </div>
  )
}

export default CategorySub
