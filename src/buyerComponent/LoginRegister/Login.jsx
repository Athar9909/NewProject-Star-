import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import Swal from "sweetalert2";
import classNames from "classnames";

const Login = () => {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();
  const Swal = require("sweetalert2");
  const apiUrl = "http://localhost:7000/user/login";
  const autoClose = () => {
    document.getElementById("close").click();
  };

  console.log(apiData, "data");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm();
  const onSubmit = (data) => {
    const LoginUser = async () => {
      let response = await axios
        .post(apiUrl, {
          email: data.email,
          password: data.password,
        })
        .then((res) => {
          if (res?.data.message === "Logged In") {
            setApiData(res?.data);
            localStorage.setItem("loginToken", res?.data?.results.token);
            localStorage.setItem("UserData", JSON.stringify(res?.data?.results?.verifyUser));

            Swal.fire({
              title: "You have been loggedIn Successfully.",
              text: "",
              icon: "success",
              showCloseButton: true,
              focusConfirm: false,
            });

            setTimeout(() => {
              window.location.reload();
            }, [1000]);
            autoClose();
          }
          if (res?.data.message === "You are not authorised by admin") {
            Swal.fire({
              title: "You are not authorised by admin",
              text: "Do you want to continue",
              icon: "error",
              confirmButtonText: "Cool",
            });
          }
          if (res?.data.message === "Wrong Password") {
            Swal.fire({
              title: "Wrong Password",
              width: 600,
              text: "Do you want to continue",
              icon: "error",
              confirmButtonText: "Cool",
            });
          }
          if (res?.data.message === "Error in Loggin in") {
            Swal.fire({
              title: "Invalid Email and Password",
              width: 600,
              icon: "error",
              confirmButtonText: "Ok",
            });
          }
        });
    };
    LoginUser();
  };
    onSubmit();
  

  return (
    <div>
      <div className="modal-body">
        <button
          type="button"
          className="btn-close"
          id="close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
        <div className="row align-items-center">
          <div className="col-md-12">
            <div className="forms_modal_content"></div>
            <div className="col-md-12">
              <div className="forms_modal_content">
                <div className="row">
                  <div className="col-md-12 heading_forms mb-4">
                    <h3 className="fw-bolder fs-2">
                      Welcome to Star Importers!
                    </h3>
                    <span className=" fs-6 mx-1">
                      Login to your account &amp; place an order
                    </span>
                  </div>
                  <form
                    action=""
                    className="col-12 form-design"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="form-floating mb-4">
                      <input
                        type="email"
                        className={classNames(
                          "form-control  border border-secondary",
                          { "is-invalid": errors.email }
                        )}
                        id="floatingEmail"
                        placeholder="Password"
                        name="email"
                        {...register("email", {
                          required: "Please Enter Your Email",
                        })}
                      />
                      {errors.email && (
                        <small className="errorText mx-1 fw-bold">
                          {errors.email?.message}
                        </small>
                      )}
                      <label htmlFor="floatingEmail" className="mx-2 fw-bolder">
                        Email Address
                      </label>
                    </div>
                    <div className="form-floating mb-4">
                      <input
                        type="password"
                        className={classNames(
                          "form-control  border border-secondary",
                          { "is-invalid": errors.password }
                        )}
                        id="floatingPassword"
                        placeholder="Password"
                        name="password"
                        {...register("password", {
                          required: "Enter Your Password",
                        })}
                      />
                      {errors.password && (
                        <small className="errorText mx-1 fw-bold">
                          {errors.password?.message}
                        </small>
                      )}
                      <label
                        htmlFor="floatingPassword"
                        className="mx-2 fw-bolder"
                      >
                        Password
                      </label>
                    </div>
                    <div className="form-group forgot_password mb-md-3 mb-3">
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop2"
                        href="javascript:;"
                        className="text-decoration-none text-primary fw-bold"
                      >
                        Forgot Your Password?
                      </a>
                    </div>
                    <div className="form-group mb-3">
                      <button type="submit" className="comman_btn py-2">
                        Sign In
                      </button>
                    </div>
                    <div className="form-group comman_text">
                      <span>
                        Don't have an account?{" "}
                        <Link
                          to="/Register"
                          data-bs-dismiss="modal"
                          className="text-decoration-none text-primary fw-bold"
                        >
                          SIGN UP
                        </Link>
                      </span>
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

export default Login;
