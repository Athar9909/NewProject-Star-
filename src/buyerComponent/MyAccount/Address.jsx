import React ,{useEffect,useState}from "react";
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
import { BiEdit } from "react-icons/bi";

const Address = () => {
  const [users , setUsers] = useState()
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("UserData"))
    setUsers(data)
  },[])
  const EditAddress = () => {
    document.getElementById('floatingInputValue').disabled=false;
    document.getElementById('floatingInputValue')
  };
  return (
    <div className="">
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
                      to="/Order"
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
                      data-bs-toggle="tab"
                    >
                      <div
                        className="nav d-flex flex-coloumn align bg-danger text-white p-2 border  "
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
                        className="nav d-flex flex-coloumn align p-2 border  "
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
                    >
                      <div
                        className="nav d-flex flex-coloumn align p-2 border  "
                        role="tablist"
                      >
                        <h4 className="">
                          <IoMdLogOut
                            size={20}
                          />
                          <span className="fs-6 mx-1">GO HOME</span>
                        </h4>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 bg-white shadow">
                <div className="myaccount-content">
                  <h3 className="mb-1 mt-3 border-bottom pb-2">
                    SAVED ADDREESES
                  </h3>
                  <div className="row mb-5">
                    <h1 className="fs-5 fw-bold">Address Line 1</h1>
                    <div class="form-floating col-md-12 mb-1">
                      <textarea
                        class="form-control"
                      value={users?.addressLine}
                         disabled
                        id="floatingTextarea"
                      ></textarea>
                      <label for="floatingTextarea" className="mx-1">ADDRESS</label>
                    </div>
                    <div class="form-floating col-md-6 mb-1">
                      <input
                        class="form-control"
                      value={users?.city}
                         disabled
                        id="floatingInputValue"
                      ></input>
                      <label for="floatingInputValue" className="mx-1">CITY</label>
                    </div>
                    <div class="form-floating col-md-6">
                      <input
                        class="form-control"
                      value={users?.zipcode}
                         disabled
                        id="floatingInputValue"
                      ></input>
                      <label for="floatingInputValue" className="mx-1">PINCODE</label>
                    </div>
                    <div class="form-floating col-md-6">
                      <input
                        class="form-control"
                      value={users?.state}
                         disabled
                        id="floatingInputValue"
                      ></input>
                      <label for="floatingInputValue" className="mx-1">STATE</label>
                    </div>
                    </div>
                  <button
                    className="btn btn-danger rounded-pill fs-6"
                    onClick={EditAddress}
                  >
                    <span>
                      <BiEdit size={15} />
                    </span>
                    Edit Address
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Address;
