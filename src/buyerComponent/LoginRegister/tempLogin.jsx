import React, { useEffect, useState } from "react";
import "../LoginRegister/Login.css";
import Footer from "../Footer/Footer";
import { omit } from "lodash";
import axios from "axios";
import swal from "sweetalert";
import Navbar from "../Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createGlobalState } from "react-hooks-global-state";
import { PropTypes } from "react";
import classNames from "classnames";

const Login = ({ auth, setAuth, newData }) => {
  const [profile, setProfile] = useState([]);
  const apiUrl = "http://localhost:7000/user/register";
  const apiUrl2 = "http://localhost:7000/user/login";
  const [values, setValues] = useState([]);
  const [files, setFiles] = useState([]);
  const [regPage, setRegPage] = useState(true);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm();

  useEffect(() => {
    if (window.localStorage !== undefined) {
      const data = JSON.parse(localStorage.getItem("user"));
      setProfile(data?.results);
    }
  }, [auth]);

  const onSubmit = (data) => {
    const LogData = async () => {
      let response = await axios
        .post(apiUrl2, {
          email: data.email,
          password: data.password,
        })
        .then((res) => {
          if (res?.data.message === "Logged In") {
            const UserData = res?.data;
            swal({
              title: "You have been loggedIn Successfully.",
              text: "",
              icon: "success",
              button: "Ok",
            });
            setAuth(false);
            navigate("/MyAccount");
            newData(profile);
          }
          if (res?.data.message === "Wrong Password") {
            swal({
              title: "Invalid email and Password.",
              text: "Please register first",
              icon: "warning",
              button: "Go Back",
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    LogData();
  };

  const Registred = () => {};

  const handleFiles = (e, key) => {
    setFiles({ ...files, [key]: e.target.files[0] });
  };

  const handleInput = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    setValues({ ...values, [name]: val });
  };
  const toFormData = (data) => {
    const req = new FormData();
    for (const key in data) {
      req.append(key, data[key]);
    }
    return req;
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const {
      federalTaxId,
      businessLicense,
      salesTaxId,
      tobaccoLicense,
      accountOwnerId,
    } = files;
    const {
      companyName,
      dbaName,
      addressLine1,
      cityName,
      state,
      postalCode,
      firstName,
      lastName,
      email,
      phoneNumber,
    } = values;
    const formData = toFormData({
      companyName: companyName,
      dba: dbaName,
      addressLine: addressLine1,
      city: cityName,
      state: state,
      zipcode: postalCode,
      federalTaxId: federalTaxId,
      businessLicense: businessLicense,
      salesTaxId: salesTaxId,
      tobaccoLicense: tobaccoLicense,
      firstName: firstName,
      lastName: lastName,
      accountOwnerId: accountOwnerId,
      email: email,
      phoneNumber: phoneNumber,
    });
    await axios
      .post(apiUrl, formData)
      .then((response) => {
        if (response?.data.status_code === 201) {
          swal({
            title: "Good job! You Have Been Registered Successfully.",
            text: "You clicked the button!",
            icon: "success",
            button: "Go Back to Login",
          });
          navigate("/login");
        } else if (response?.data.status_code === 200) {
          swal({
            title: "Email Already Registered",
            text: "Already Registered! Please Login",
            icon: "warning",
            button: "Go Back to Login",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
      });
  };

  const disableTobacco = () => {
    document.getElementById("Tobaccfield").disabled = true;
  };

  return (
    <div>
      <Navbar />
      <section className="bg-light p-3">
        {regPage ? (
          <div className="container-md mb-5">
            <div className="row  justify-content-center ">
              <div className="col-sm-10 col-md-12 col-xs-12 col-lg-7 mb-30 mt-5 ">
                {/* Login Form s*/}
                <form onSubmit={handleSubmit(onSubmit)} className="card p-4">
                  <div className="login-form row">
                    <h4 className="login-title mb-5 fs-2">Login</h4>
                    <div className=" col-md-12 mb-4">
                      <label
                        htmlFor="Email"
                        className="form-label fs-5 text-secondary fw-bold"
                      >
                        Email address*
                      </label>
                      <input
                        type="email"
                        className="form-control rounded-pill p-2 fs-6"
                        id="Email"
                        name="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email"
                        {...register("email", {
                          required: "Required Field",
                        })}
                      />
                      {errors.email && (
                        <small className="errorText mx-3">
                          {errors.email?.message}
                        </small>
                      )}
                      <div id="emailHelp" className="form-text mx-2">
                        We'll never share your email with anyone else.
                      </div>
                    </div>
                    <div className=" col-md-12 mb-4">
                      <label
                        htmlFor="Password"
                        className="form-label fs-5 text-secondary fw-bold"
                      >
                        Password*
                      </label>
                      <input
                        type="password"
                        className="form-control rounded-pill p-2 fs-6 "
                        id="Password"
                        name="password"
                        placeholder="Enter Password"
                        {...register("password", {
                          required: "Password is Required",
                          maxLength: {
                            value: 8,
                            message: "max 8 character Allowed", //
                          },
                          minLength: {
                            value: 4,
                            message: "min 8 character Allowed", // JS only: <p>error message</p> TS only support string
                          },
                        })}
                      />
                      {errors.password && (
                        <small className="errorText mx-3">
                          {errors.password?.message}
                        </small>
                      )}
                    </div>

                    <div className="col-md-6 col-sm-6 mb-0">
                      <div className="check-box d-inline-block ml-0 ml-md-2 mt-10">
                        <input
                          type="checkbox"
                          className="checkbox bg-dark"
                          id="remember_me"
                          name="check"
                          {...register("check", {
                            required: "Check Required Field",
                          })}
                        />

                        <label
                          htmlFor="remember_me"
                          className="form-label fs-5 mx-2 text-primary "
                        >
                          Remember me
                        </label>
                      </div>
                      <div>
                        {errors.check && (
                          <small className="errorText mx-3">
                            {errors.check?.message}
                          </small>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6 col-sm-6 mt-1 mb-2 text-start text-md-end">
                      <Link to="/forgot-password"> Forgotten pasward?</Link>
                    </div>
                    <div className="col-md-4 mt-3 mb-3 ">
                      <button
                        className="btn btn-danger w-100 py-2 fs-5 rounded-pill"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                    <div className="col-md-12 col-sm-12 mt-1 mb-2 fs-5">
                      <a
                        href="#"
                        onClick={() => {
                          setRegPage(false);
                        }}
                      >
                        {" "}
                        New User? Register Now!
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          // {Registration }//////
          <div>
            <div className="container-md mb-5 ">
              <div className="row  justify-content-center ">
                <div className="col-sm-9 col-md-12 col-xs-12 col-lg-7 mb-30 mt-5 ">
                  {/* Login Form s*/}
                  <form
                    onSubmit={submitHandler}
                    className="card shadow g-3 p-4 bg-light needs-validation"
                    autoComplete="off"
                  >
                    <div className="login-form row">
                      <h4 className="login-title mb-3  fs-1 text-center text-primary">
                        Create my account
                      </h4>

                      <p className=" text-center text-secondary fs-5">
                        Please fill in the information below
                      </p>
                      <p className="text-secondary mt-5 fs-6">Paragraph text</p>
                      <div className=" col-md-12 mb-4">
                        <label
                          htmlFor="validationCompany"
                          className="form-label fs-5 text-secondary"
                        >
                          Company*
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          className="form-control p-1 fs-6"
                          id="validationCompany"
                          placeholder=""
                          onChange={handleInput}
                          required
                        />
                        <div class="valid-feedback">Valid.</div>
                        <div class="invalid-feedback">
                          Please fill out this field.
                        </div>
                      </div>

                      <div className=" col-md-12 mb-4">
                        <label
                          htmlFor="DBA"
                          className="form-label fs-5 text-secondary "
                        >
                          DBA*
                        </label>
                        <input
                          type="text"
                          name="dbaName"
                          className="form-control p-1 fs-6"
                          id="DBA"
                          placeholder=""
                          onChange={handleInput}
                          required
                        />
                      </div>
                      <div className=" col-md-6 mb-4">
                        <label
                          htmlFor="Address1"
                          className="form-label fs-5 text-secondary "
                        >
                          Company Address line 1*
                        </label>
                        <input
                          type="text"
                          name="addressLine1"
                          className="form-control p-2 fs-6"
                          id="Address1"
                          placeholder=" "
                          onChange={handleInput}
                          required
                        />
                      </div>
                      <div className=" col-md-6 mb-4">
                        <label
                          htmlFor="Address2"
                          className="form-label fs-5 text-secondary "
                        >
                          Company Address line 2*
                        </label>
                        <input
                          type="name"
                          name="addressLine2"
                          className="form-control p-2 fs-6"
                          id="Address2"
                          placeholder=" "
                          onChange={handleInput}
                        />
                      </div>
                      <div className=" col-md-4 mb-4">
                        <label
                          htmlFor="City"
                          className="form-label fs-5 text-secondary "
                        >
                          City*
                        </label>
                        <input
                          type="name"
                          name="cityName"
                          className="form-control p-1 fs-6"
                          id="City"
                          placeholder=" "
                          onChange={handleInput}
                          required
                        />
                      </div>
                      <div className="col-md-4 mb-4 ">
                        <label
                          htmlFor="State"
                          className="form-label fs-5 text-secondary "
                        >
                          State/Province*
                        </label>
                        <select
                          name="state"
                          className="form-select fs-6 py-1"
                          onChange={handleInput}
                          required
                        >
                          <option selected>Choose...</option>
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Andaman and Nicobar Islands">
                            Andaman and Nicobar Islands
                          </option>
                          <option value="Arunachal Pradesh">
                            Arunachal Pradesh
                          </option>
                          <option value="Assam">Assam</option>
                          <option value="Bihar">Bihar</option>
                          <option value="Chandigarh">Chandigarh</option>
                          <option value="Chhattisgarh">Chhattisgarh</option>
                          <option value="Dadar and Nagar Haveli">
                            Dadar and Nagar Haveli
                          </option>
                          <option value="Daman and Diu">Daman and Diu</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Lakshadweep">Lakshadweep</option>
                          <option value="Puducherry">Puducherry</option>
                          <option value="Goa">Goa</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Haryana">Haryana</option>
                          <option value="Himachal Pradesh">
                            Himachal Pradesh
                          </option>
                          <option value="Jammu and Kashmir">
                            Jammu and Kashmir
                          </option>
                          <option value="Jharkhand">Jharkhand</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Madhya Pradesh">Madhya Pradesh</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Manipur">Manipur</option>
                          <option value="Meghalaya">Meghalaya</option>
                          <option value="Mizoram">Mizoram</option>
                          <option value="Nagaland">Nagaland</option>
                          <option value="Odisha">Odisha</option>
                          <option value="Punjab">Punjab</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Sikkim">Sikkim</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Telangana">Telangana</option>
                          <option value="Tripura">Tripura</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="Uttarakhand">Uttarakhand</option>
                          <option value="West Bengal">West Bengal</option>
                        </select>
                      </div>

                      <div className=" col-md-4 mb-4">
                        <label
                          htmlFor="PostalCode"
                          className="form-label fs-5 text-secondary "
                        >
                          Zip/Postal code
                        </label>
                        <input
                          type="text"
                          name="postalCode"
                          className="form-control p-1 fs-6"
                          id="PostalCode"
                          placeholder=" "
                          onChange={handleInput}
                          required
                        />
                      </div>

                      <div className=" col-md-3 mt-4 mb-3">
                        <label
                          htmlFor="FederalTax"
                          className="form-label fs-6  text-secondary "
                        >
                          Federal Tax ID*
                        </label>
                        <input
                          type="file"
                          name="federalTaxId"
                          className="form-control fs-6"
                          aria-describedby="inputGroupFileAddon04"
                          aria-label="Upload"
                          onChange={(e) => {
                            handleFiles(e, "federalTaxId");
                          }}
                          required
                        ></input>
                      </div>
                      <div className=" col-md-3 mt-4 mb-3">
                        <label
                          htmlFor="BusinessLicense"
                          className="form-label fs-6  text-secondary "
                        >
                          Business License*
                        </label>
                        <input
                          type="file"
                          name="businessLicense"
                          className="form-control fs-6"
                          aria-describedby="inputGroupFileAddon04"
                          aria-label="Upload"
                          onChange={(e) => {
                            handleFiles(e, "businessLicense");
                          }}
                          required
                        ></input>
                      </div>
                      <div className=" col-md-3 mt-4 mb-3">
                        <label
                          htmlFor="SalesTax"
                          className="form-label fs-6  text-secondary "
                        >
                          Sales Tax ID*
                        </label>
                        <input
                          type="file"
                          name="salesTaxId"
                          className="form-control fs-6 "
                          aria-describedby="inputGroupFileAddon04"
                          aria-label="Upload"
                          onChange={(e) => {
                            handleFiles(e, "salesTaxId");
                          }}
                          required
                        ></input>
                      </div>
                      <div className=" col-md-3 mt-4 mb-3">
                        <label
                          htmlFor="Tobaccfield"
                          id="text"
                          className="form-label fs-6  text-secondary "
                        >
                          Tobacco License
                        </label>
                        <input
                          type="file"
                          name="tobaccoLicense"
                          className="form-control fs-6"
                          id="Tobaccfield"
                          aria-describedby="inputGroupFileAddon04"
                          aria-label="Upload"
                          onChange={(e) => {
                            handleFiles(e, "tobaccoLicense");
                          }}
                          required
                        ></input>
                        <div className=" form-check mx-2 mt-1">
                          <input
                            type="checkbox"
                            onChange={disableTobacco}
                            className="form-check-input fs-6"
                            id="remember_me"
                          />
                          <label className=" form-check-label fs-6 text-secondary">
                            Not Required
                          </label>
                        </div>
                      </div>

                      <div className=" col-md-6 mb-4 mt-3">
                        <label
                          htmlFor="FirstName"
                          className="form-label fs-5 text-secondary"
                        >
                          Contact First Name*
                        </label>
                        <input
                          type="name"
                          name="firstName"
                          className="form-control p-2 fs-6"
                          id="FirstName"
                          placeholder=""
                          onChange={handleInput}
                          required
                        />
                      </div>
                      <div className=" col-md-6 mb-4 mt-3">
                        <label
                          htmlFor="LastName"
                          className="form-label fs-5 text-secondary"
                        >
                          Contact Last Name*
                        </label>
                        <input
                          type="name"
                          name="lastName"
                          className="form-control p-2 fs-6"
                          id="Company"
                          placeholder=""
                          onChange={handleInput}
                          required
                        />
                      </div>
                      <div className=" col-md-6 mt-3">
                        <label
                          htmlFor="ownerId"
                          className="form-label fs-6  text-secondary "
                        >
                          Account Owner ID*
                        </label>
                        <input
                          type="file"
                          name="accountOwnerId"
                          className="form-control fs-6"
                          aria-describedby="inputGroupFileAddon04"
                          aria-label="Upload"
                          onChange={(e) => {
                            handleFiles(e, "accountOwnerId");
                          }}
                          required
                        ></input>
                      </div>
                      <p className="text-secondary mt-1">
                        Please provide a state or federal issued ID of the
                        Account Holder
                      </p>
                      <div className="">
                        <label
                          htmlFor="ownerId"
                          className="form-label fs-5  text-secondary "
                        >
                          How would you like to be contacted?
                        </label>
                      </div>
                      <div className="col-md-12 d-flex ">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            onChange={handleInput}
                            required
                          ></input>
                          <label
                            class="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Email
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input mx-3"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            onChange={handleInput}
                            required
                          ></input>
                          <label
                            class="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            Phone
                          </label>
                        </div>
                      </div>
                      <div className=" col-md-12 mt-5">
                        <label
                          htmlFor="Email"
                          className="form-label fs-5 text-secondary"
                        >
                          Email Address*
                        </label>
                        <input
                          type="name"
                          name="email"
                          className="form-control p-1 fs-6"
                          id="Email"
                          placeholder=""
                          onChange={handleInput}
                          required
                        />
                        <p className="text-secondary mt-1">
                          Used for account login and order notifications
                        </p>
                      </div>
                      <div className=" col-md-12 mb-1 ">
                        <label
                          htmlFor="Phone"
                          className="form-label fs-5 text-secondary"
                        >
                          Phone*
                        </label>
                        <div class="input-group col-md-12 mb-3">
                          <input
                            type="text"
                            name="phoneNumber"
                            className="form-control fs-6 p-1"
                            aria-label="Text input with dropdown button"
                            onChange={handleInput}
                          ></input>
                          <button
                            className="btn btn-outline-secondary fs-6 dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            US
                          </button>
                          <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                              <a class="dropdown-item" href="#">
                                Action
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-12 mb-4 ">
                        <label
                          htmlFor="question"
                          className="form-label fs-4 text-secondary "
                        >
                          How did you hear about us?*
                        </label>
                        <select
                          className="form-select fs-6 py-2"
                          id="question"
                          onChange={handleInput}
                          required
                        >
                          <option selected>Choose...</option>
                          <option value="Email Flyers">Email Flyers</option>
                          <option value="Search Engines(Google,Yahoo etc)">
                            Search Engines(Google,Yahoo etc)
                          </option>
                          <option value="SMS">SMS</option>
                          <option value="Referal">Referal</option>
                          <option value="Instagram">Instagram</option>
                        </select>
                      </div>
                      <div className="col-md-12 d-flex">
                        <input
                          type="checkbox"
                          className=" form-check-input fs-5"
                          id="remember_me"
                          required
                        />
                        <label className="form-check-label fs-5 mx-2 text-secondary">
                          WholeSale Confirmation
                        </label>
                      </div>
                      <p className="text-secondary mt-1 fs-sm-4">
                        By checking this box you are agreeing that the
                        information provided above is of a valid business that
                        you own/represent.
                      </p>
                      <div className="col-md-12 d-flex mt-3">
                        <input
                          type="checkbox"
                          className=" form-check-input fs-6 "
                          id="remember_me"
                          required
                        />
                        <label className="form-check-label fs-6 mx-2 text-secondary">
                          Subscribe to our email Newsletter
                        </label>
                      </div>

                      <div className="row justify-content-center mt-3">
                        <div className="col-md-3 col-sm-12 mt-4 mb-4">
                          <button
                            className="btn btn-danger w-100 fs-5 "
                            onClick={() => {
                              setRegPage(true);
                            }}
                          >
                            Cancel
                          </button>
                        </div>
                        <div className="col-md-3  mt-4 mb-4 ">
                          <button
                            className="btn btn-danger w-100 fs-5"
                            onClick={Registred}
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
