import React,{useEffect,useState} from 'react'
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


const Account = () => {
  const [users , setUsers] = useState()
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("UserData"))
    setUsers(data)
  },[])
  return (
    <div className=''>
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
                          <span2 className="fs-6 mx-1">DASHBOARD</span2>
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
                        className="nav  bg-danger text-white p-2 border  "
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
                        className="nav d-flex flex-coloumn align p-2 border  "
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
                      data-bs-toggle="tab"
                    >
                      <div
                        className="nav d-flex flex-coloumn align p-2 border  "
                        role="tablist"
                      >
                        <h4 className="">
                          <IoMdLogOut size={20}  />
                          <span className="fs-6 mx-1">GO HOME</span>
                        </h4>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 bg-white shadow">
                <div className="myaccount-content">
                  <h3 className="mb-4 mt-3 border-bottom pb-2">ACCOUNT DETAILS</h3>
                  <div className=" row">
                    <div className=" col-md-6 mb-4">
                     
                      <input
                        type="email"
                        className="form-control p-2 fs-6 "
                        id="Email"
                        name="email"
                        value={users?.firstName}
                        aria-describedby="emailHelp"
                        placeholder="Enter Email"
                        disabled
                      />
                     
                    </div>
                    <div className=" col-md-6 mb-4">
                     
                      <input
                        type="name"
                        className="form-control p-2 fs-6 "
                        id="Email"
                        name="email"
                        value={users?.lastName}
                        aria-describedby="emailHelp"
                        placeholder="Enter Email"
                        disabled
                      />
                     
                    </div>
                    <div className=" col-md-12 mb-4">
                     
                      <input
                        type="email"
                        className="form-control p-2 fs-6 "
                        id="Email"
                        name="email"
                        value={users?.email}
                        aria-describedby="emailHelp"
                        placeholder="Enter Email"
                        disabled
                      />
                     
                    </div>
                    <div className=" col-md-6 mb-4">
                     
                      <input
                        type="email"
                        className="form-control p-2 fs-6 "
                        id="Email"
                        name="compName"
                        value={users?.companyName}
                        aria-describedby="emailHelp"
                        placeholder="Enter Email"
                        disabled
                      />
                     
                    </div>
                    <div className=" col-md-6 mb-4">
                     
                      <input
                        type="name"
                        className="form-control p-2 fs-6 "
                        id="dba"
                        name="dbaField"
                        value={users?.dba}
                        aria-describedby="emailHelp"
                        placeholder="Enter Email"
                        disabled
                      />
                     
                    </div>
                    <div className=" col-md-6 mb-4">
                     
                      <input
                        type="text"
                        className="form-control p-2 fs-6 "
                        id="Email"
                        name="email"
                        value={users?.userId}
                        aria-describedby="emailHelp"
                        placeholder="Enter Email"
                        disabled
                      />
                     
                    </div>
                    </div>
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

export default Account
