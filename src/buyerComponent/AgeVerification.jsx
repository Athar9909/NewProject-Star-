import React from "react";
import "./AgeVerification.css";
import { Link, useNavigate } from "react-router-dom";

const AgeVerification = (modalClose) => {
  const handleClick = () => {
    document.cookie = "cookie=store";
    modalClose.click();
  };

  return (
    <div className="ageVerify">
      <section className="age_verification">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-5 col-md-6 col-sm-10 verification_content mt-5">
              <h2>Confirm Your Age</h2>
              <span>ARE YOU 21 YEARS OLD OR OLDER?</span>
              <div className="form-group custom_checkbox mt-3 mb-md-4 mb-3">
                <input
                  type="checkbox"
                  className="mx-1 checkbox"
                  name="check"
                  id="check"
                />
                <label htmlFor="check">
                  I confirm that I am 21 years old or over
                </label>
              </div>
              <Link
                className="comman_btn shadow mx-2"
                onClick={handleClick}
                to=""
                style={{ textDecoration: "none" }}
              >
                Submit
              </Link>
              <Link
                className="comman_btn2 shadow mx-2"
                to=""
                style={{ textDecoration: "none" }}
              >
                Exit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgeVerification;
