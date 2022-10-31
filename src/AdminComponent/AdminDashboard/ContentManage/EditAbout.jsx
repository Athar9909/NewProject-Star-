import React from 'react'
import { Link, useNavigate } from "react-router-dom";

import Starlogo from "../../../assets/img/logo.png";
import profile from "../../../assets/img/profile_img1.png";
import axios from "axios";
import { useForm } from "react-hook-form";

const EditAbout = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        trigger,
        reset,
      } = useForm();

  return (
    <div>
      
    </div>
  )
}

export default EditAbout
