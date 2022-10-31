import React,{useEffect,useState} from 'react'
import Footer from "../Footer/Footer";
import Navbar from "../Homepage/Navbar";
import { Link } from "react-router-dom";
import Profile from './Profile';
import axios from 'axios';
const Account = () => {
  const editProfile = "http://localhost:7000/user/editProfile"
  const [disable,setDisable] = useState(true)
  const [hideSave,setHideSave] = useState(true)
  const[editedName,setEditedName] = useState("")
  const [editedPhone,setEditedPhone] = useState()
  const [users , setUsers] = useState()

  axios.defaults.headers.common["x-auth-token-user"] =
    localStorage.getItem("loginToken");

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("UserData"))
    axios.get("http://localhost:7000/user/getUserProfile").then((res)=>{
    setUsers(res?.data.results)

    })
  },[])
  
  const onEdit = (e) => {
    e.preventDefault();
    setDisable(!disable);
    setHideSave(!hideSave);
  };
  console.log(editedName);
  const SaveProfile = async (e) => {
    await axios
      .post(editProfile, {
        firstName:editedName,
        phoneNumber:editedPhone
      })
      .then((res) => {
        if ((res.data.message === "Profile updated Successfully")) {
          setDisable(true);
          setHideSave(true);
        }
      });
  };
  return (
    <div className="main_myaccount">
    <Navbar />
    <section className="comman_banner _banner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>My Account</h1>
            <div className="breadcrumbs mt-2">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="item_nanner">
                    <Link
                      to=""
                      className="text-decoration-none text-white fs-6  "
                    >
                      Home <span className="arrow">&#62;</span>{" "}
                    </Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    <Link
                      to=""
                      className="text-decoration-none text-white fs-6 mx-2"
                    >
                      My Account
                    </Link>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="myaccount mb-4 ">
      <div className="container-lg position-relative">
       <Profile/>
      </div>
      <div className="container container-sm">
        <div className="row mt-5  justify-content-center">
          <div className="col-lg-3   col-md-3 col-sm-5 col-xs-5 ">
            <div className="row  ">
              {/* My Account Tab Menu Start */}
              <div className="myaccount_tabs bg-white p-2">
                <Link
                  to="/MyAccount"
                  style={{ textDecoration: "none", fontSize: "15px" }}
                  className="nav-link"
                >
                  <div
                    className="  nav flex-coloumn text-white  px-3 py-2 border  "
                    role=""
                  >
                    <h4 className="mt-1">
                      <i className="fa fa-clipboard-list" />
                      <span className="fs-6 mx-2">ORDER HISTORY</span>
                    </h4>
                  </div>
                </Link>
                <Link
                  to="/RequestOrder"
                  style={{ textDecoration: "none", fontSize: "15px" }}
                  className="nav-link"
                >
                  <div
                    className="nav px-3 py-2 border   "
                    role="tablist"
                  >
                    <h4 className="">
                      <i className="fas fa-file mt-1" />
                      <span className="fs-6 mx-2">REQUEST ORDER</span>
                    </h4>
                  </div>
                </Link>
                <Link
                  to="/Address"
                  style={{ textDecoration: "none", fontSize: "15px" }}
                  className="nav-link"
                >
                  <div className="nav px-3 py-2 border" role="tablist">
                    <h4 className="">
                      <i className="fa fa-map-signs" />
                      <span className="fs-6 mx-2">ADDRESS BOOK</span>
                    </h4>
                  </div>
                </Link>
                <Link
                  to="/Account"
                  style={{ textDecoration: "none", fontSize: "15px" }}
                  className="nav-link"
                >
                  <div className="nav-active  text-white px-3 py-2  border  " role="nav-link">
                    <h4 className="">
                      <i className="fas fa-user" />
                      <span className="fs-6 mx-2">ACCOUNT SETTING</span>
                    </h4>
                  </div>
                </Link>
                <Link
                  to="/Favourites"
                  style={{ textDecoration: "none", fontSize: "15px" }}
                  className="nav-link"
                >
                  <div className="nav px-3 py-2  border  " role="tablist">
                    <h4 className="">
                      <i className="fas fa-heart" />
                      <span className="fs-6 mx-2">MY FAVOURITES</span>
                    </h4>
                  </div>
                </Link>
                <Link
                  to="/MainMenu"
                  style={{ textDecoration: "none", fontSize: "15px" }}
                  className="nav-link"
                >
                  <div className="nav px-3 py-2 border  " role="tablist">
                    <h4 className="">
                      <i className="fa fa-list" />
                      <span className="fs-6 mx-2">MAIN MENU</span>
                    </h4>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-9 ">
            <div className="bg-white p-4 ">
            <div className="row mx-0 py-2">
                        <div className="col-12 text-end mb-4">
                          <Link
                            className="text-center comman_btn"
                            onClick={onEdit}
                          >
                            Edit
                          </Link>
                        </div>
                        <div className="col-12">
                          <form className="form-design row" action="">
                            <div className="form-floating col-6 mb-4">
                              <input
                                type="text"
                                className="form-control shadow-none"
                                defaultValue={users?.firstName}
                                id="floatingInput"
                                placeholder=" "
                                disabled={disable}
                                onChange={(e) => {
                                  setEditedName(e.target.value);
                                }}
                              />
                              <label htmlFor="floatingInput">Name</label>
                            </div>
                            <div className="form-floating col-6 mb-4">
                              <input
                                type="email"
                                className="form-control shadow-none"
                                defaultValue={users?.email}
                                id="floatingInput"
                                placeholder=" "
                                disabled

                              />
                              <label htmlFor="floatingInput">
                                Email Address
                              </label>
                            </div>
                            <div className="form-floating col-6 mb-4">
                              <input
                                type="email"
                                className="form-control shadow-none"
                                defaultValue={users?.phoneNumber}
                                id="floatingInput"
                                placeholder=" "
                                disabled={disable}
                                onChange={(e) => {
                                  setEditedPhone(e.target.value);
                                }}
                              />
                              <label htmlFor="floatingInput">
                                Mobile Number
                              </label>
                            </div>
                            <div className="form-floating col-6 mb-4 position-relative">
                              <input
                                type="password"
                                name="password"
                                defaultValue="idontknow"
                                className="form-control shadow-none"
                                id="password-field"
                                disabled
                              />
                              <label htmlFor="password-field">Password</label>
                              <span
                                toggle="#password-field"
                                className="fa fa-fw fa-eye field-icon toggle-password"
                              />
                            </div>
                            <div className="col-12 text-center">
                              <Link
                                className="text-center my-2 comman_btn"
                                onClick={SaveProfile}
                                hidden={hideSave}

                              >
                                Save
                              </Link>
                              <a
                                className="text-center my-2 comman_btn2 ms-2"
                                href="javascript:;"
                              >
                                Log Out
                              </a>
                            </div>
                          </form>
                        </div>
                      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default Account
