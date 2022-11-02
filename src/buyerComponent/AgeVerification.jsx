import React, { useState } from "react";
import "../assets/css/main.css";
import { Link, useNavigate } from "react-router-dom";

const AgeVerification = ({ModalClose}) => {
  const [err,setErr] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    if(document.getElementById("check").value == "on"){
    document.cookie = "cookie=store";
    ModalClose.click();
    }
    else{
      setErr(true)
    }
  };

  return (
    <div className="">
      <section
        className="age_verification"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6 verification_content">
              <h2>Confirm Your Age</h2>
              <span>ARE YOU 21 YEARS OLD OR OLDER?</span>
            <div className="form-group custom_checkboxs mt-3 mb-md-4 mb-3">
                <input
                  type="checkbox"
                  className="custom_check"
                  name="check"
                  id="check"
                />
                <label htmlFor="check" className={err?"text-danger":"text-white"}>
                  I confirm that I am 21 years old or over
                </label>
              </div>
              <button className="comman_btn shadow mx-2"  onClick={handleClick}>
                Submit
              </button>
              <a className="comman_btn2 shadow mx-2" href="javascript:;">
                Exit
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgeVerification;
