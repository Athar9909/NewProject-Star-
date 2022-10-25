import React from "react";
import "./Product.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";   

import { Pagination, Navigation, Grid } from "swiper";
import P1 from "../../assets/img/product_1.png";
const Products = () => {
  return (
    <div>
        <div className="bg-white w-100">
          <div className="row justify-content-center  mt-5">
            <div className="col-sm-12 col-lg-12 d-flex ">
              <h1 className="productheader fs-4 fw-bold ">FEATURED</h1>
              <h1 className=" productheader fs-4 fw-bold mx-3">NEW ARRIVAL</h1>
              <h1 className="productheader fs-4 fw-bold mx-2">ON SALE</h1>
            </div>
            </div>
            <div className="row justify-content-center  ">
              <div className="col-sm-12 col-lg-12">
                <Swiper
                  slidesPerView={4}
                  grid={{
                    rows: 1,
                    
                  }}
                  spaceBetween={1}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Grid,Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="col-lg-12 col-md-12 border">
                      <div className="productImg mx-3 mb-2">
                        <img src={P1} width={220} height={220}></img>
                        <p className="text-center text-secondary">Fast Food, Vegetables</p>
                        <h2 className="fs-5 text-center fw-bold">Cocumber Fresh and organic</h2>
                        <div className="d-flex justify-content-center ">
                            <span className="text-secondary mt-1"><del>$89.00</del></span>
                            <span className="discounted-price mx-2 fs-5 text-danger ">$80.00</span>
                          </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="col-lg-12 col-md-12 border">
                      <div className="productImg mx-3 mb-2">
                        <img src={P1} width={220} height={220}></img>
                        <p className="text-center text-secondary">Fast Food, Vegetables</p>
                        <h2 className="fs-5 text-center fw-bold">Cocumber Fresh and organic</h2>
                        <div className="d-flex justify-content-center ">
                            <span className="text-secondary mt-1"><del>$89.00</del></span>
                            <span className="discounted-price mx-2 fs-5 text-danger ">$80.00</span>
                          </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="col-lg-12 col-md-12 border">
                      <div className="productImg mx-3 mb-2">
                        <img src={P1} width={220} height={220}></img>
                        <p className="text-center text-secondary">Fast Food, Vegetables</p>
                        <h2 className="fs-5 text-center fw-bold">Cocumber Fresh and organic</h2>
                        <div className="d-flex justify-content-center ">
                            <span className="text-secondary mt-1"><del>$89.00</del></span>
                            <span className="discounted-price mx-2 fs-5 text-danger ">$80.00</span>
                          </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="col-lg-12 col-md-12 border">
                      <div className="productImg mx-3 mb-2">
                        <img src={P1} width={220} height={220}></img>
                        <p className="text-center text-secondary">Fast Food, Vegetables</p>
                        <h2 className="fs-5 text-center fw-bold">Cocumber Fresh and organic</h2>
                        <div className="d-flex justify-content-center ">
                            <span className="text-secondary mt-1"><del>$89.00</del></span>
                            <span className="discounted-price mx-2 fs-5 text-danger ">$80.00</span>
                          </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="col-lg-12 col-md-12 border">
                      <div className="productImg mx-3 mb-2">
                        <img src={P1} width={220} height={220}></img>
                        <p className="text-center text-secondary">Fast Food, Vegetables</p>
                        <h2 className="fs-5 text-center fw-bold">Cocumber Fresh and organic</h2>
                        <div className="d-flex justify-content-center ">
                            <span className="text-secondary mt-1"><del>$89.00</del></span>
                            <span className="discounted-price mx-2 fs-5 text-danger ">$80.00</span>
                          </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide><div className="col-lg-12 col-md-12 border">
                      <div className="productImg mx-3 mb-2">
                        <img src={P1} width={220} height={220}></img>
                        <p className="text-center text-secondary">Fast Food, Vegetables</p>
                        <h2 className="fs-5 text-center fw-bold">Cocumber Fresh and organic</h2>
                        <div className="d-flex justify-content-center ">
                            <span className="text-secondary mt-1"><del>$89.00</del></span>
                            <span className="discounted-price mx-2 fs-5 text-danger ">$80.00</span>
                          </div>
                      </div>
                    </div></SwiperSlide>
                  <SwiperSlide>
                  <div className="col-lg-12 col-md-12 border">
                      <div className="productImg mx-3 mb-2">
                        <img src={P1} width={220} height={220}></img>
                        <p className="text-center text-secondary">Fast Food, Vegetables</p>
                        <h2 className="fs-5 text-center fw-bold">Cocumber Fresh and organic</h2>
                        <div className="d-flex justify-content-center ">
                            <span className="text-secondary mt-1"><del>$89.00</del></span>
                            <span className="discounted-price mx-2 fs-5 text-danger ">$80.00</span>
                          </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="col-lg-12 col-md-12 border">
                      <div className="productImg mx-3 mb-2">
                        <img src={P1} width={220} height={220}></img>
                        <p className="text-center text-secondary">Fast Food, Vegetables</p>
                        <h2 className="fs-5 text-center fw-bold">Cocumber Fresh and organic</h2>
                        <div className="d-flex justify-content-center ">
                            <span className="text-secondary mt-1"><del>$89.00</del></span>
                            <span className="discounted-price mx-2 fs-5 text-danger ">$80.00</span>
                          </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="col-lg-12 col-md-12 border">
                      <div className="productImg mx-3 mb-2">
                        <img src={P1} width={220} height={220}></img>
                        <p className="text-center text-secondary">Fast Food, Vegetables</p>
                        <h2 className="fs-5 text-center fw-bold">Cocumber Fresh and organic</h2>
                        <div className="d-flex justify-content-center ">
                            <span className="text-secondary mt-1"><del>$89.00</del></span>
                            <span className="discounted-price mx-2 fs-5 text-danger ">$80.00</span>
                          </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="col-lg-12 col-md-12 border">
                      <div className="productImg mx-3 mb-2">
                        <img src={P1} width={220} height={220}></img>
                        <p className="text-center text-secondary">Fast Food, Vegetables</p>
                        <h2 className="fs-5 text-center fw-bold">Cocumber Fresh and organic</h2>
                        <div className="d-flex justify-content-center ">
                            <span className="text-secondary mt-1"><del>$89.00</del></span>
                            <span className="discounted-price mx-2 fs-5 text-danger ">$80.00</span>
                          </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="col-lg-12 col-md-12 border">
                      <div className="productImg mx-3 mb-2">
                        <img src={P1} width={220} height={220}></img>
                        <p className="text-center text-secondary">Fast Food, Vegetables</p>
                        <h2 className="fs-5 text-center fw-bold">Cocumber Fresh and organic</h2>
                        <div className="d-flex justify-content-center ">
                            <span className="text-secondary mt-1"><del>$89.00</del></span>
                            <span className="discounted-price mx-2 fs-5 text-danger ">$80.00</span>
                          </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="col-lg-12 col-md-12 border">
                      <div className="productImg mx-3 mb-2">
                        <img src={P1} width={220} height={220}></img>
                        <p className="text-center text-secondary">Fast Food, Vegetables</p>
                        <h2 className="fs-5 text-center fw-bold">Cocumber Fresh and organic</h2>
                        <div className="d-flex justify-content-center ">
                            <span className="text-secondary mt-1"><del>$89.00</del></span>
                            <span className="discounted-price mx-2 fs-5 text-danger ">$80.00</span>
                          </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide><div className="col-lg-12 col-md-12 border">
                      <div className="productImg mx-3 mb-2">
                        <img src={P1} width={220} height={220}></img>
                        <p className="text-center text-secondary">Fast Food, Vegetables</p>
                        <h2 className="fs-5 text-center fw-bold">Cocumber Fresh and organic</h2>
                        <div className="d-flex justify-content-center ">
                            <span className="text-secondary mt-1"><del>$89.00</del></span>
                            <span className="discounted-price mx-2 fs-5 text-danger ">$80.00</span>
                          </div>
                      </div>
                    </div></SwiperSlide>
                  <SwiperSlide>
                  <div className="col-lg-12 col-md-12 border">
                      <div className="productImg mx-3 mb-2">
                        <img src={P1} width={220} height={220}></img>
                        <p className="text-center text-secondary">Fast Food, Vegetables</p>
                        <h2 className="fs-5 text-center fw-bold">Cocumber Fresh and organic</h2>
                        <div className="d-flex justify-content-center ">
                            <span className="text-secondary mt-1"><del>$89.00</del></span>
                            <span className="discounted-price mx-2 fs-5 text-danger ">$80.00</span>
                          </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              
            </div>
          </div>
        </div>
    </div>
  );
};

export default Products;
