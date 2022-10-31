import React, { useState, useEffect } from "react";
import "../../assets/css/main.css";
import axios from "axios";
const Profile = () => {
  const [users, setUsers] = useState({firstName:" ",lastName:" ",city:" "});
  const [profile,setProfile] = useState([])

  

    useEffect(() => {
        let Ndata = JSON.parse(localStorage.getItem("UserData"))
        setUsers(Ndata)
      }, []);

 
  return (
    <div className="row  mt-5 mb-5">
      <div className="col-lg-12 bg-white p-4 profile">
        <div className="myaccount_profile row">
          <div className="col-auto">
            <div className="account_profile position-relative">
              <div className="">
                <img
                  className="profile-pic"
                  width={180}
                
                  src={`${process.env.REACT_APP_APIENDPOINTNEW}/${users?.profileImage}`}
                  alt={require("../../assets/img/profile_img1.png")}
                />
              </div>
              <div className="p-image  rounded-end ">
                <img
                  className="upload-button mx-1 "
                  src={require("../../assets/img/Camera_icon.png")}
                  alt=""
                />
                <input className="file-uploads" type="file" accept="" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="account_detailss mt-3">
              <h2>{users?.firstName + " " + users?.lastName}</h2>
              <span>{users?.city}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
