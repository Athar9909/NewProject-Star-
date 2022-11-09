import React, { useState, useEffect } from "react";
import "../../assets/css/main.css";
import axios from "axios";
const Profile = () => {
  const [users, setUsers] = useState([]);
  const [files, setFiles] = useState();
  const [change, setChange] = useState(false);

  const editImage = `${process.env.REACT_APP_APIENDPOINTNEW}user/editProfile`;
  const userApi = `${process.env.REACT_APP_APIENDPOINTNEW}user/getUserProfile`;

  axios.defaults.headers.common["x-auth-token-user"] =
    localStorage.getItem("loginToken");

  useEffect(() => {
    getUser();
  }, [change]);

  const getUser = async () => {
    await axios.get(userApi).then((res) => {
      let data = res?.data.results;
      setUsers(data);
    });
  };
  console.log(files);
  const changeProfile = async (e, key) => {
    setFiles({ ...files, [key]: e.target.files[0] });
    const formData = new FormData();
    formData.append("profileImage", files?.ImageProfile);
    await axios.post(editImage, formData).then((res) => {
      if (res.data?.message === "Profile updated Successfully") {
        setChange(!change);
      }
    });
  };

  return (
    <div className="row  mt-5 mb-5">
      <div className="col-lg-12 bg-white p-4">
        <div className="myaccount_profile row">
          <div className="col-auto">
            <div className="account_profile ">
              <div className="">
                <img
                  className="profile"
                  
                  src={users?.profileImage}
                  alt={require("../../assets/img/profile_img1.png")}
                />
              </div>
              <div className="">
                <img
                  className="p-camera"
                  src={require("../../assets/img/Camera_icon.png")}
                  alt=""
                />
              </div>
              <input
                className="file-uploadsNew"
                name="ImageProfile"
                type="file"
                onChange={(e) => changeProfile(e, "ImageProfile")}
              />
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
