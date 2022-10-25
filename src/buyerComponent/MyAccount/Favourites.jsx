import React,{useState,useEffect} from 'react'
import Footer from "../Footer/Footer";
import Navbar from "../Homepage/Navbar";
import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";


const Favourites = () => {
  const [users , setUsers] = useState()
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("UserData"))
    setUsers(data)
  },[])
  return (
    <div>
        <Navbar/>

      <div className="Menu mb-5">
        <div className="my-account-section section position-relative">
          <div className="container-md">
            <div className="row mt-5  justify-content-center">
              <div className="col-lg-3 col-md-3">
                <div className="row">
                  {/* My Account Tab Menu Start */}
                  <div className="col-lg-10 ">
                    <Link
                      to="/MyAccount"
                      style={{ textDecoration: "none", fontSize: "15px" }}
                      className="Tabtext"
                      
                    >
                      <div
                        className="nav d-flex flex-coloumn  align p-2 border  "
                        role="tablist"
                      >
                        <h4 className="">
                          <AiOutlineDashboard size={20} />
                          <span className="fs-6 mx-1">DASHBOARD</span>
                        </h4>
                      </div>
                    </Link>
                    <Link
                      to='/Order'
                      style={{ textDecoration: "none", fontSize: "15px" }}
                      className="Tabtext"
                      
                    >
                      <div
                        className="nav d-flex flex-coloumn  align p-2 border  "
                        role="tablist"
                      >
                        <h4 className="">
                          <FaCartArrowDown size={20} />
                          <span className="fs-6 mx-1">ORDERS</span>
                        </h4>
                      </div>
                    </Link>
                    <Link
                      to="/Payment"
                      style={{ textDecoration: "none", fontSize: "15px" }}
                      className="Tabtext"
                
                    >
                      <div
                        className="nav d-flex flex-coloumn align  p-2 border  "
                        role="tablist"
                      >
                        <h4 className="">
                          <MdPayment size={20} />
                          <span className="fs-6 mx-1">PAYMENT METHOD</span>
                        </h4>
                      </div>
                    </Link>
                    <Link
                      to="/Address"
                      style={{ textDecoration: "none", fontSize: "15px" }}
                      className="Tabtext"
                    >
                      <div
                        className="nav   p-2 border  "
                        role="tablist"
                      >
                        <h4 className="">
                          <FaMapMarkerAlt size={20} />
                          <span className="fs-6 mx-1">ADDRESS</span>
                        </h4>
                      </div>
                    </Link>
                    <Link
                      to="/Account"
                      style={{ textDecoration: "none", fontSize: "15px" }}
                      className="Tabtext"
                    >
                      <div
                        className="nav  p-2 border  "
                        role="tablist"
                      >
                        <h4 className="">
                          <MdManageAccounts size={20} />
                          <span className="fs-6 mx-1">ACCOUNT DETAILS</span>
                        </h4>
                      </div>
                    </Link>
                    <Link
                      to="/Favourites"
                      style={{ textDecoration: "none", fontSize: "15px" }}
                      className="Tabtext"
                    >
                      <div
                        className="nav  bg-danger text-white p-2 border  "
                        role="tablist"
                      >
                        <h4 className="">
                          <FaCloudDownloadAlt size={20} />
                          <span className="fs-6 mx-1">FAVOURITES</span>
                        </h4>
                      </div>
                    </Link>
                    <Link
                      to="/"
                      style={{ textDecoration: "none", fontSize: "15px" }}
                      className="Tabtext"
                    >
                      <div
                        className="nav d-flex flex-coloumn align p-2 border  "
                        role="tablist"
                      >
                        <h4 className="">
                          <IoMdLogOut size={20} />
                          <span className="fs-6 mx-1">GO HOME</span>
                        </h4>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 bg-white shadow">
                <div className="myaccount-content">
                  <h3 className="mb-4 mt-3 border-bottom pb-2">YOUR FAVOURITES</h3>
                  <div className="welcome">
                    <p>
                      <strong></strong>
                    </p>
                  </div>
                  <p className="mb-0">
                    No Favourites
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Favourites
