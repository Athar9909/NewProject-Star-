import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/main.css";

const TermsCondition = () => {
  const handleClick = (e) => {
    e.preventDefault()
    document.cookie = "Tcookie=storeTerms";
    window.location.reload()
  };

  return (
    <div className="terms_condition">
      <main classname="row justify-content-center wrap">
        <section classname="col-lg-12 modal_content">
          <div classname="TCheading">
            <h2 className="mb-3 fs-2 mt-4">Terms & Conditions</h2>
          </div>
          <div classname="container__content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Curabitur sodales ligula in libero. Sed dignissim
              lacinia nunc.{" "}
            </p>
            <p>
              Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
              sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin
              ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis
              vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula
              lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel,
              tincidunt sed, euismod in, nibh. Quisque volutpat condimentum
              velit.{" "}
            </p>
          </div>
          <div classname="container__nav">
            <small className="">
              By clicking 'Accept' you are agreeing to our terms and conditions
              and Our <Link to="/PrivacyPolicies">PRIVACY POLICIES</Link>
            </small>
          </div>
          <button className="TAccept mt-3"  onClick={handleClick}>
            Accept
          </button>
        </section>
      </main>
    </div>
  );
};

export default TermsCondition;
