import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./buyerComponent/Homepage/Navbar";
import Login from "./buyerComponent/LoginRegister/Login";
import ForgotPassword from "./buyerComponent/LoginRegister/ForgotPassword";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

import Homepage from "./buyerComponent/Homepage/Homepage";
import MyAccount from "./buyerComponent/MyAccount/MyAccount";
import Orders from "./buyerComponent/MyAccount/Orders";
import PaymentMethod from "./buyerComponent/MyAccount/PaymentMethod";
import Address from "./buyerComponent/MyAccount/Address";
import Account from "./buyerComponent/MyAccount/Account";
import Favourites from "./buyerComponent/MyAccount/Favourites";
import Contact from "./buyerComponent/Contact/Contact";
import SignUp from "./buyerComponent/LoginRegister/SignUp";
import AdminLogin from "./AdminComponent/AdminLogin/AdminLogin";
import Dashboard from "./AdminComponent/AdminDashboard/Dashboard";
import CategorySub from "./AdminComponent/AdminDashboard/CategorySub";
import Inventory from "./AdminComponent/AdminDashboard/Inventory";
import UserManage from "./AdminComponent/AdminDashboard/UserManage/UserManage";
import BrandsManage from "./AdminComponent/AdminDashboard/BrandsManage";
import Cms from "./AdminComponent/AdminDashboard/ContentManage/Cms"
import OrderReq from "./AdminComponent/AdminDashboard/OrderReq"
import AgeVerification from "./buyerComponent/AgeVerification";
import AdminForgotPassword from "./AdminComponent/AdminLogin/AdminForgotPassword";
import AdminSendOtp from "./AdminComponent/AdminLogin/AdminSendOtp";
import AdminResetPassword from "./AdminComponent/AdminLogin/AdminResetPassword";
import PendingView from "./AdminComponent/AdminDashboard/UserManage/PendingView";
import ReturnedView from "./AdminComponent/AdminDashboard/UserManage/RetunedView";
import ApprovedView from "./AdminComponent/AdminDashboard/UserManage/ApprovedView";
import EditUser from "./AdminComponent/AdminDashboard/UserManage/EditUser";
import AddUser from "./AdminComponent/AdminDashboard/UserManage/AddUser";

function App() {
  const [apiData, setApiData] = useState([]);

  const getData = (data) => {};

  return (
    <div className="App">
      

      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Register" element={<SignUp />} />
          <Route path="/login" element={<Login newData={getData} />} />
          <Route
            path="/MyAccount"
            element={<MyAccount newData={getData} apiData={apiData} />}
          />
          <Route path="/Order" element={<Orders />} />
          <Route path="/Payment" element={<PaymentMethod />} />
          <Route path="/Address" element={<Address />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Favourites" element={<Favourites />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AgeVerified" element={<AgeVerification />} />

          {/* admin Routes */}
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/AdminForgotPassword" element={<AdminForgotPassword />} />
          <Route path="/AdminVerifyOtp" element={<AdminSendOtp />} />
          <Route path="/AdminResetPassword" element={<AdminResetPassword />} />
          <Route path="/AdminDashboard" element={<Dashboard />} />
          <Route path="/UserManage" element={<UserManage />} />
          <Route path="/UserManage/PendingView" element={<PendingView />} />
          <Route path="/UserManage/ReturnedView" element={<ReturnedView />} />
          <Route path="/UserManage/ApprovedView" element={<ApprovedView />} />
          <Route path="/UserManage/ApprovedView-editUser" element={<EditUser />} />
          <Route path="/UserManage/AddUser" element={<AddUser />} />
          <Route path="/CategorySub" element={<CategorySub />} />
          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/BrandsManage" element={<BrandsManage />} />
          <Route path="/Cms" element={<Cms />} />
          <Route path="/OrderRequest" element={<OrderReq />} />








          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
