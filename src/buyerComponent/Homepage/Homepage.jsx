import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "./Navbar";
import Products from "./Products";
import { useForm } from "react-hook-form";
import { BsFillStarFill } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import banner1 from "../../assets/img/banner_img1.jpg";
import banner2 from "../../assets/img/banner_img2.jpg";
import banner3 from "../../assets/img/banner_img3.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Homepage.css";
import AgeVerification from "../AgeVerification";
import { useEffect } from "react";

const Homepage = () => {
  const modalClose = document.getElementById("age_close")
  useEffect(()=>{
    let x = document.cookie;
    console.log(x);
    if(x === ""){
      const modal= document.getElementById("age_modal")
      setTimeout(()=>{
        modal.click()

      },4000)
    }
    
  },[])
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="home_page">
      <Navbar />

      <form onSubmit={handleSubmit(onSubmit)} className="d-none">
        <input
          type="file"
          className="mb-5 mt-5 mx-5 border "
          name="import"
          {...register("import")}
        />
        <button className="btn btn-primary" type="submit">
          {" "}
          submit
        </button>
      </form>

      <section className="">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <img src={banner3} class="d-block w-100 d" alt="..." />
              <div className="carousel-caption">
                <h5 className="d-flex text-start  Bannertext">
                  Cherry E-Juice , New Taste New Experience
                </h5>
                <p className="d-flex text-start fs-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  saepe error ea tempore officia a reprehenderit id corrupti.
                </p>

                <Link to="/Register" className="text-decoration-none ">
                  <button className="comman_btn2 d-flex">SignUp</button>
                </Link>
              </div>
            </div>
            <div class="carousel-item ">
              <img src={banner2} class="d-block w-100" alt="..." />
              <div className="carousel-caption">
                <h5 className="d-flex text-start  Bannertext">
                  Cherry E-Juice , New Taste New Experience
                </h5>
                <p className="d-flex text-start fs-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  saepe error ea tempore officia a reprehenderit id corrupti.
                </p>

                <Link to="/Register" className="text-decoration-none ">
                  <button className="comman_btn2 d-flex">SignUp</button>
                </Link>
              </div>
            </div>
            <div class="carousel-item">
              <img src={banner1} class="d-block w-100" alt="..." />
              <div className="carousel-caption">
                <h5 className="d-flex text-start  Bannertext">
                  Custom Wood vape Mod
                </h5>
                <p className="d-flex text-start fs-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  saepe error ea tempore officia a reprehenderit id corrupti.
                </p>

                <Link to="/Register" className="text-decoration-none ">
                  <button className="comman_btn2 d-flex">SignUp</button>
                </Link>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon py-4 slideBtn"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon py-4 slideBtn"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section className="featured_category mx-5 shadow pt-3 mb-5">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="p-3">
              <Link
                href="product.html"
                className="featured__box text-center mt-5  text-decoration-none"
              >
                <img
                  src={require("../../assets/img/product_new1.png")}
                  className="mx-5"
                  alt="lorem"
                />
                <span className="d-flex justify-content-center w-100 mx-2 mt-3">
                  BLVK Frznberry
                </span>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-3">
              <Link
                href="product.html"
                className="featured__box text-center mt-5  text-decoration-none"
              >
                <img
                  src={require("../../assets/img/product_new3.png")}
                  className="mx-5"
                  alt="lorem"
                />
                <span className="d-flex justify-content-center w-100 mx-2 mt-3">
                  BLVK Frznberry
                </span>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-3">
              <Link
                href="product.html"
                className="featured__box text-center mt-5  text-decoration-none"
              >
                <img
                  src={require("../../assets/img/product_new2.png")}
                  className="mx-5"
                  alt="lorem"
                />
                <span className="d-flex justify-content-center w-100 mx-2 mt-3">
                  BLVK Frznberry
                </span>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-3">
              <Link
                href="product.html"
                className="featured__box text-center mt-5  text-decoration-none"
              >
                <img
                  src={require("../../assets/img/product_new4.png")}
                  className="mx-5"
                  alt="lorem"
                />
                <span className="d-flex justify-content-center w-100 mx-2 mt-3">
                  BLVK Frznberry
                </span>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-3">
              <Link
                href="product.html"
                className="featured__box text-center mt-5  text-decoration-none"
              >
                <img
                  src={require("../../assets/img/product_new5.png")}
                  className="mx-5"
                  alt="lorem"
                />
                <span className="d-flex justify-content-center w-100 mx-2 mt-3">
                  BLVK Frznberry
                </span>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-3">
              <Link
                href="product.html"
                className="featured__box text-center mt-5  text-decoration-none"
              >
                <img
                  src={require("../../assets/img/product_new6.png")}
                  className="mx-5"
                  alt="lorem"
                />
                <span className="d-flex justify-content-center w-100 mx-2 mt-3">
                  BLVK Frznberry
                </span>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-3">
              <Link
                href="product.html"
                className="featured__box text-center mt-5  text-decoration-none"
              >
                <img
                  src={require("../../assets/img/product_new7.png")}
                  className="mx-5"
                  alt="lorem"
                />
                <span className="d-flex justify-content-center w-100 mx-2 mt-3">
                  BLVK Frznberry
                </span>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-3">
              <Link
                href="product.html"
                className="featured__box text-center mt-5  text-decoration-none"
              >
                <img
                  src={require("../../assets/img/product_new8.png")}
                  className="mx-5"
                  alt="lorem"
                />
                <span className="d-flex justify-content-center w-100 mx-2 mt-3">
                  BLVK Frznberry
                </span>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-3">
              <Link
                href="product.html"
                className="featured__box text-center mt-5  text-decoration-none"
              >
                <img
                  src={require("../../assets/img/product_new9.png")}
                  className="mx-5"
                  alt="lorem"
                />
                <span className="d-flex justify-content-center w-100 mx-2 mt-3">
                  BLVK Frznberry
                </span>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="features_products py-5 bg-white">
        <div className="container py-xl-3">
          <div className="col-12 comman_head mb-4 text-center">
            <h2>Featured Products</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-4">
              <div className="product_parts_box shadow">
                <div className="partsproduct_img ">
                  <img
                    src={require("../../assets/img/product_1.png")}
                    className="mt-3 mb-3"
                    alt="Product"
                  />
                </div>
                <div className="product_content mt-3 text-center">
                  <FontAwesomeIcon icon="check-square" />
                  <Link
                    to=""
                    style={{
                      textDecoration: "none",
                      color: "#3e4093",
                      fontWeight: "600",
                      fontFamily: "poppins",
                    }}
                  >
                    BLVK Frznberry
                  </Link>
                  <div className="rating_box mt-2 mb-1">
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #CACACA" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4">
              <div className="product_parts_box shadow">
                <div className="partsproduct_img ">
                  <img
                    src={require("../../assets/img/product_1.png")}
                    className="mt-3 mb-3"
                    alt="Product"
                  />
                </div>
                <div className="product_content mt-3 text-center">
                  <FontAwesomeIcon icon="check-square" />
                  <Link
                    to=""
                    style={{
                      textDecoration: "none",
                      color: "#3e4093",
                      fontWeight: "600",
                      fontFamily: "poppins",
                    }}
                  >
                    BLVK Frznberry
                  </Link>
                  <div className="rating_box mt-2 mb-1">
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #CACACA" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4">
              <div className="product_parts_box shadow">
                <div className="partsproduct_img ">
                  <img
                    src={require("../../assets/img/product_5.png")}
                    className="mt-3 mb-3"
                    alt="Product"
                  />
                </div>
                <div className="product_content mt-3 text-center">
                  <FontAwesomeIcon icon="check-square" />
                  <Link
                    to=""
                    style={{
                      textDecoration: "none",
                      color: "#3e4093",
                      fontWeight: "600",
                      fontFamily: "poppins",
                    }}
                  >
                    BLVK Frznberry
                  </Link>
                  <div className="rating_box mt-2 mb-1">
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #CACACA" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4">
              <div className="product_parts_box shadow">
                <div className="partsproduct_img ">
                  <img
                    src={require("../../assets/img/product_4.png")}
                    className="mt-3 mb-3"
                    alt="Product"
                  />
                </div>
                <div className="product_content mt-3 text-center">
                  <FontAwesomeIcon icon="check-square" />
                  <Link
                    to=""
                    style={{
                      textDecoration: "none",
                      color: "#3e4093",
                      fontWeight: "600",
                      fontFamily: "poppins",
                    }}
                  >
                    BLVK Frznberry
                  </Link>
                  <div className="rating_box mt-2 mb-1">
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #CACACA" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4">
              <div className="product_parts_box shadow">
                <div className="partsproduct_img ">
                  <img
                    src={require("../../assets/img/product_new3.png")}
                    className="mt-3 mb-3"
                    alt="Product"
                  />
                </div>
                <div className="product_content mt-3 text-center">
                  <FontAwesomeIcon icon="check-square" />
                  <Link
                    to=""
                    style={{
                      textDecoration: "none",
                      color: "#3e4093",
                      fontWeight: "600",
                      fontFamily: "poppins",
                    }}
                  >
                    BLVK Frznberry
                  </Link>
                  <div className="rating_box mt-2 mb-1">
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #CACACA" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4">
              <div className="product_parts_box shadow">
                <div className="partsproduct_img ">
                  <img
                    src={require("../../assets/img/product_new2.png")}
                    className="mt-3 mb-3"
                    alt="Product"
                  />
                </div>
                <div className="product_content mt-3 text-center">
                  <FontAwesomeIcon icon="check-square" />
                  <Link
                    to=""
                    style={{
                      textDecoration: "none",
                      color: "#3e4093",
                      fontWeight: "600",
                      fontFamily: "poppins",
                    }}
                  >
                    BLVK Frznberry
                  </Link>
                  <div className="rating_box mt-2 mb-1">
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #CACACA" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4">
              <div className="product_parts_box shadow">
                <div className="partsproduct_img ">
                  <img
                    src={require("../../assets/img/product_new4.png")}
                    className="mt-3 mb-3"
                    alt="Product"
                  />
                </div>
                <div className="product_content mt-3 text-center">
                  <FontAwesomeIcon icon="check-square" />
                  <Link
                    to=""
                    style={{
                      textDecoration: "none",
                      color: "#3e4093",
                      fontWeight: "600",
                      fontFamily: "poppins",
                    }}
                  >
                    BLVK Frznberry
                  </Link>
                  <div className="rating_box mt-2 mb-1">
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #CACACA" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4">
              <div className="product_parts_box shadow">
                <div className="partsproduct_img ">
                  <img
                    src={require("../../assets/img/product_new6.png")}
                    className="mt-3 mb-3"
                    alt="Product"
                  />
                </div>
                <div className="product_content mt-3 text-center">
                  <FontAwesomeIcon icon="check-square" />
                  <Link
                    to=""
                    style={{
                      textDecoration: "none",
                      color: "#3e4093",
                      fontWeight: "600",
                      fontFamily: "poppins",
                    }}
                  >
                    BLVK Frznberry
                  </Link>
                  <div className="rating_box mt-2 mb-1">
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #FFCC00  " />
                    </Link>
                    <Link className="mx-1">
                      <BsFillStarFill color=" #CACACA" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product_show_home">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="w-100 mb-5">
                <img src={require("../../assets/img/cigars_img.png")} alt="" />
              </div>
              <Link
                className="comman_btn2 text-decoration-none"
                href="product.html"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="features_brands py-5 bg-white border-top">
        <div className="container-fluid px-0">
          <div className="col-lg-12 col-sm-12 comman_head mb-4 text-center">
            <h2>Popular Brands</h2>
          </div>
          <div className="col-sm-12">
            <Swiper
              slidesPerView={5}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              modules={[FreeMode, Pagination, Autoplay]}
              className="mySwiper row"
            >
              <SwiperSlide>
                <Link className="brand_box col-sm-12 p-sm-4" to="">
                  <img src={require("../../assets/img/brand_1.png")} alt="" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link className="brand_box col-sm-12 p-sm-4" to="">
                  <img src={require("../../assets/img/brand_2.png")} alt="" />
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link className="brand_box col-sm-12" to="">
                  <img src={require("../../assets/img/brand_4.png")} alt="" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link className="brand_box col-sm-12" to="">
                  <img src={require("../../assets/img/brand_5.png")} alt="" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link className="brand_box col-sm-12" to="">
                  <img src={require("../../assets/img/brand_6.png")} alt="" />
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <Footer />
      <button
        type="button"
        id="age_modal"
        class="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        class="modal "
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog  modal-fullscreen" >
          <div class="modal-content modalContent">
            <div class="modal-header ">
              <h2 className="fw-bold mt-1 mx-2">
            <img src={require("../../assets/img/logo.png")} width="170" height="80" alt="Brand"></img>

              </h2>

              <button
                type="button"
                class="btn-close"
                id="age_close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
             <AgeVerification modalClose={modalClose} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
