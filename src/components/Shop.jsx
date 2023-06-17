// import { Carousel } from "@mantine/carousel";
import React from "react";
import "../Shop.css";
// import { BackgroundImage, Center, Text } from "@mantine/core";
import { BsXLg } from "react-icons/bs";
import { FiEye, FiShoppingCart } from "react-icons/fi";
import { BiHeart } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import { BsFillCaretRightFill, BsCaretLeftFill } from "react-icons/bs"
import { RiArrowDropDownLine } from "react-icons/ri"

const Shop = () => {

  return (
    <div>
      <div className=" container">
        <div className=" row">
          <div className=" col-3">
            

            <div className=" tw-relative tw-w-[400px] tw-overflow-hidden">
              <input type="checkbox" className=" peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"/>
              <div className=" tw-bg-blue-600 tw-h-12 tw-w-full tw-flex tw-items-center">
              <h1 className=" tw-text-lg tw-font-semibold tw-text-white">Dashboard
              
              </h1>
              <div className=" tw-absolute tw-top-0 tw-right-4 tw-text-5xl  tw-text-white tw-transition-transform tw-duration-500 tw-rotate-0 peer-checked:rotate-180"><RiArrowDropDownLine/></div>
              </div>
            </div>
            
            <div className=" bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
              <div className=" p-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quis perspiciatis hic distinctio ea fuga laboriosam reiciendis debitis doloremque ad, rerum culpa veniam non animi optio. Facere ab odit doloremque.</p>
              </div>
            </div>
          </div>
         
          <div className=" col-9">
            <div className=" d-flex flex-column">
              <div className=" ">

                <div id="carouselExampleCaptions" className="carousel slide">
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">tw-
                    <div className=" carousel-item active">
                      <div className=" d-flex tw-h-[500px]">
                        <div className=" tw-w-[50%]">
                          
                          <div className="d-none d-md-block bg-img1 tw-h-[100%] ">
                            <div className=" d-flex align-items-center justify-content-center tw-h-[100%]">
                              <div className=" py-4 px-2">
                                <h4 className=" tw-text-4xl tw-font-semibold">
                                  2019 Summer
                                </h4>
                                <span className=" tw-text-4xl tw-font-semibold">
                                  Collection
                                </span>
                                <div className=" tw-mt-4 tw-font-semibold tw-text-lg d-flex justify-content-between align-items-center ">
                                  <a className=" " href="#">
                                    View Collection
                                  </a>
                                  <i className=" ">
                                    <BiRightArrowAlt />
                                  </i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className=" tw-w-[50%] bg-img2"></div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      
                      <div className=" d-none d-md-block bg-img3">
                        <div className=" d-flex justify-content-start align-items-center tw-h-[500px]">
                          <div className=" tw-ms-20 ">
                          <div className=" tw-text-4xl tw-font-semibold tw-mb-7">
                            <h4 className="  ">
                            Get -50% from
                          </h4>
                          <span className="">Summer Collection</span>
                          </div>

                          <p className=" tw-text-xl ">
                            Appear, dry there darkness they're 
                            
                          </p>
                          <span className=" tw-text-xl">seas.</span>
                          <br />
                          <strong className=" tw-text-red-400 tw-text-xl">
                              Use code 4GF5SD
                            </strong>

                          <div className=" tw-mt-7">
                          <a className=" btn btn-lg btn-outline-dark" href="shop.html">
                            Shop Now<span><BiRightArrowAlt className=" "/></span>
                          </a>
                          
                          
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className=" d-flex justify-content-center align-items-center tw-h-[500px] bg-img4">
                      <div className="">
                      <div className="card-body tw-px-md-10 tw-py-11 text-center text-white">

<p className="tw-text-uppercase tw-text-lg tw-font-medium tw-mb-4">Enjoy an extra</p>

<h1 className=" tw-text-uppercase tw-text-7xl tw-font-semibold tw-mb-3">50% off</h1>

<a className="link-underline text-reset tw-font-semibold tw-text-lg" href="shop.html">Shop Collection</a>

</div>
                      </div>
                      </div>
                      
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className=" ">
                <div className=" tw-mt-20  d-flex justify-content-between align-item center">
                  <div className="">
                    <h1 className=" tw-text-3xl">Womens' Clothing</h1>
                    <p className=" tw-text-gray-800 ">Home</p>
                    <span className=" tw-text-gray-800">Womens' Clothing</span>
                  </div>
                  <div className="">
                    <a className=" btn btn-outline-dark btn-lg">Most Popular</a>
                  </div>
                </div>
                <div className="row tw-mb-7">
                  <div className=" tw-flex tw-flex-wrap">
                    <div className=" d-flex justify-content-center align-items-center tw-p-4 bg-light tw-me-4">
                      <h2 className=" tw-me-3">Shift dresses</h2>
                      <span className="">
                        <BsXLg className="" />
                      </span>
                    </div>

                    <div className=" d-flex justify-content-center align-items-center tw-p-4 bg-light tw-me-4">
                      <h2 className=" tw-me-3">Summer</h2>
                      <span className="">
                        <BsXLg className="" />
                      </span>
                    </div>
                    <div className=" d-flex justify-content-center align-items-center tw-p-4 bg-light tw-me-4">
                      <h2 className=" tw-me-3">M</h2>
                      <span className="">
                        <BsXLg className="" />
                      </span>
                    </div>
                    <div className=" d-flex justify-content-center align-items-center tw-p-4 bg-light tw-me-4">
                      <h2 className=" tw-me-3">White</h2>
                      <span className="">
                        <BsXLg className="" />
                      </span>
                    </div>
                    <div className=" d-flex justify-content-center align-items-center tw-p-4 bg-light tw-me-4">
                      <h2 className=" tw-me-3">Dress</h2>
                      <span className="">
                        <BsXLg className="" />
                      </span>
                    </div>
                    <div className=" d-flex justify-content-center align-items-center tw-p-4 bg-light tw-me-4">
                      <h2 className=" tw-me-3">Adidas</h2>
                      <span className="">
                        <BsXLg className="" />
                      </span>
                    </div>
                    <div className=" d-flex justify-content-center align-items-center tw-p-4 bg-light tw-me-4">
                      <h2 className=" tw-me-3">$10.00 - $49.00</h2>
                      <span className="">
                        <BsXLg className="" />
                      </span>
                    </div>
                    <div className=" d-flex justify-content-center align-items-center tw-p-4 bg-light">
                      <h2 className=" tw-me-3">$50.00 - $99.00</h2>
                      <span className="">
                        <BsXLg className="" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 col-md-4">
                    <div className=" card tw-mb-7">
                      <div className="badge bg-white text-body card-badge card-badge-start text-uppercase">
                        New
                      </div>

                      <div className=" card-img">
                        <a className="card-img-hover">
                          <img
                            className="card-img-top card-img-back"
                            src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-5.jpg"
                            alt="..."
                          />
                          <img
                            className="card-img-top card-img-front"
                            src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-120.jpg"
                            alt="..."
                          />
                        </a>

                        <div className="card-actions">
                          <span className="card-action eye">
                            <a
                              className="btn btn-lg btn-circle btn-white"
                              data-bs-toggle="modal"
                              data-bs-target="#modalProduct"
                            >
                              <i className="">
                                <FiEye className=" tw-text-2xl" />
                              </i>
                            </a>
                          </span>
                          <span className="card-action shop">
                            <a
                              className="btn btn-lg btn-circle btn-white"
                              data-toggle="button"
                            >
                              <i className="">
                                <FiShoppingCart className=" tw-text-2xl" />
                              </i>
                            </a>
                          </span>
                          <span className="card-action heart">
                            <a
                              className="btn btn-xs btn-circle btn-white"
                              data-toggle="button"
                            >
                              <i className="">
                                <BiHeart className=" tw-text-2xl" />
                              </i>
                            </a>
                          </span>
                        </div>
                      </div>

                      <div className="card-body px-0">
                        <div className="fs-xs card-title">
                          <a className="text-muted" href="">
                            Shoes
                          </a>
                        </div>

                        <div className="fw-bold">
                          <a className="text-body" href="product.html">
                            Leather mid-heel Sandals
                          </a>
                        </div>

                        <div className="fw-bold text-muted">$129.00</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-4">
                    <div className="card tw-mb-7">
                      <div className="badge bg-white text-body card-badge card-badge-start tw-text-uppercase">
                        New
                      </div>

                      <div className="card-img">
                        <a className="card-img-hover">
                          <img
                            className="card-img-top card-img-back"
                            src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-6.jpg"
                            alt="..."
                          />
                          <img
                            className="card-img-top card-img-front"
                            src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-121.jpg"
                            alt="..."
                          />
                        </a>

                        <div className="card-actions">
                          <span className="card-action eye">
                            <a
                              className="btn btn-lg btn-circle btn-white"
                              data-bs-toggle="modal"
                              data-bs-target="#modalProduct"
                            >
                              <i className="">
                                <FiEye className=" tw-text-2xl" />
                              </i>
                            </a>
                          </span>
                          <span className="card-action shop">
                            <a
                              className="btn btn-lg btn-circle btn-white"
                              data-toggle="button"
                            >
                              <i className="">
                                <FiShoppingCart className=" tw-text-2xl" />
                              </i>
                            </a>
                          </span>
                          <span className="card-action heart">
                            <a
                              className="btn btn-xs btn-circle btn-white"
                              data-toggle="button"
                            >
                              <i className="">
                                <BiHeart className=" tw-text-2xl" />
                              </i>
                            </a>
                          </span>
                        </div>
                      </div>

                      <div className="card-body tw-px-0">
                        <div className="fs-xs card-title">
                          <a className="text-muted" href="">
                            Shoes
                          </a>
                        </div>

                        <div className="fw-bold">
                          <a className="text-body" href="product.html">
                            Leather mid-heel Sandals
                          </a>
                        </div>

                        <div className="fw-bold text-muted">$129.00</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-4">
                    <div className="card mb-7">
                      <div className="badge bg-dark card-badge card-badge-start text-uppercase">
                        Sale
                      </div>

                      <div className="card-img">
                        <a className="card-img-hover">
                          <img
                            className="card-img-top card-img-back"
                            src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-122.jpg"
                            alt="..."
                          />
                          <img
                            className="card-img-top card-img-front"
                            src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-7.jpg"
                            alt="..."
                          />
                        </a>

                        <div className="card-actions">
                          <span className="card-action eye">
                            <a
                              className="btn btn-lg btn-circle btn-white"
                              data-bs-toggle="modal"
                              data-bs-target="#modalProduct"
                            >
                              <i className="">
                                <FiEye className=" tw-text-2xl" />
                              </i>
                            </a>
                          </span>
                          <span className="card-action shop">
                            <a
                              className="btn btn-lg btn-circle btn-white"
                              data-toggle="button"
                            >
                              <i className="">
                                <FiShoppingCart className=" tw-text-2xl" />
                              </i>
                            </a>
                          </span>
                          <span className="card-action heart">
                            <a
                              className="btn btn-xs btn-circle btn-white"
                              data-toggle="button"
                            >
                              <i className="">
                                <BiHeart className=" tw-text-2xl" />
                              </i>
                            </a>
                          </span>
                        </div>
                      </div>
                      <div className="card-body px-0">
                        <div className="fs-xs">
                          <a className="text-muted" href="">
                            Shoes
                          </a>
                        </div>

                        <div className="fw-bold">
                          <a className="text-body" href="product.html">
                            Leather mid-heel Sandals
                          </a>
                        </div>

                        <div className="fw-bold text-muted">$129.00</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-4">
                    <div className="card mb-7">
                      <div className="badge bg-white text-body card-badge card-badge-start text-uppercase">
                        New
                      </div>

                      <div className="card-img">
                        <a className="card-img-hover">
                          <img
                            className="card-img-top card-img-back"
                            src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-8.jpg"
                            alt="..."
                          />
                        </a>

                        <div className="card-actions">
                          <span className="card-action eye">
                            <a
                              className="btn btn-lg btn-circle btn-white"
                              data-bs-toggle="modal"
                              data-bs-target="#modalProduct"
                            >
                              <i className="">
                                <FiEye className=" tw-text-2xl" />
                              </i>
                            </a>
                          </span>
                          <span className="card-action shop">
                            <a
                              className="btn btn-lg btn-circle btn-white"
                              data-toggle="button"
                            >
                              <i className="">
                                <FiShoppingCart className=" tw-text-2xl" />
                              </i>
                            </a>
                          </span>
                          <span className="card-action heart">
                            <a
                              className="btn btn-xs btn-circle btn-white"
                              data-toggle="button"
                            >
                              <i className="">
                                <BiHeart className=" tw-text-2xl" />
                              </i>
                            </a>
                          </span>
                        </div>
                      </div>

                      <div className="card-body px-0">
                        <div className="fs-xs card-title">
                          <a className="text-muted" href="">
                            Shoes
                          </a>
                        </div>

                        <div className="fw-bold">
                          <a className="text-body" href="product.html">
                            Leather mid-heel Sandals
                          </a>
                        </div>

                        <div className="fw-bold text-muted">$129.00</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-4">
                    <div className="card mb-7">
                      <div className="badge bg-white text-body card-badge card-badge-start text-uppercase">
                        New
                      </div>

                      <div className="card-img">
                        <a className="card-img-hover">
                          <img
                            className="card-img-top card-img-back"
                            src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-9.jpg"
                            alt="..."
                          />
                        </a>

                        <div className="card-actions">
                          <span className="card-action eye">
                            <a
                              className="btn btn-lg btn-circle btn-white"
                              data-bs-toggle="modal"
                              data-bs-target="#modalProduct"
                            >
                              <i className="">
                                <FiEye className=" tw-text-2xl" />
                              </i>
                            </a>
                          </span>
                          <span className="card-action shop">
                            <a
                              className="btn btn-lg btn-circle btn-white"
                              data-toggle="button"
                            >
                              <i className="">
                                <FiShoppingCart className=" tw-text-2xl" />
                              </i>
                            </a>
                          </span>
                          <span className="card-action heart">
                            <a
                              className="btn btn-xs btn-circle btn-white"
                              data-toggle="button"
                            >
                              <i className="">
                                <BiHeart className=" tw-text-2xl" />
                              </i>
                            </a>
                          </span>
                        </div>
                      </div>

                      <div className="card-body px-0">
                        <div className="fs-xs card-title">
                          <a className="text-muted" href="">
                            Shoes
                          </a>
                        </div>

                        <div className="fw-bold">
                          <a className="text-body" href="product.html">
                            Leather mid-heel Sandals
                          </a>
                        </div>

                        <div className="fw-bold text-muted">$129.00</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-4">
                    <div className="card mb-7">
                      <div className="badge bg-dark card-badge card-badge-start text-uppercase">
                        Sale
                      </div>

                      <div className="card-img">
                        <a className="card-img-hover">
                          <img
                            className="card-img-top card-img-back"
                            src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-10.jpg"
                            alt="..."
                          />
                          <img
                            className="card-img-top card-img-front"
                            src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-123.jpg"
                            alt="..."
                          />
                        </a>

                        <div className="card-actions">
                          <span className="card-action eye">
                            <a
                              className="btn btn-lg btn-circle btn-white"
                              data-bs-toggle="modal"
                              data-bs-target="#modalProduct"
                            >
                              <i className="">
                                <FiEye className=" tw-text-2xl" />
                              </i>
                            </a>
                          </span>
                          <span className="card-action shop">
                            <a
                              className="btn btn-lg btn-circle btn-white"
                              data-toggle="button"
                            >
                              <i className="">
                                <FiShoppingCart className=" tw-text-2xl" />
                              </i>
                            </a>
                          </span>
                          <span className="card-action heart">
                            <a
                              className="btn btn-xs btn-circle btn-white"
                              data-toggle="button"
                            >
                              <i className="">
                                <BiHeart className=" tw-text-2xl" />
                              </i>
                            </a>
                          </span>
                        </div>
                      </div>

                      <div className="card-body px-0">
                        <div className="fs-xs card-title">
                          <a className="text-muted" href="">
                            Shoes
                          </a>
                        </div>

                        <div className="fw-bold">
                          <a className="text-body" href="product.html">
                            Leather mid-heel Sandals
                          </a>
                        </div>

                        <div className="fw-bold text-muted">$129.00</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-4">
                    <div className="card mb-7">
                      <div className="badge bg-white text-body card-badge card-badge-start text-uppercase">
                        New
                      </div>

                      <div className="card-img">
                        <a className="card-img-hover">
                          <img
                            className="card-img-top card-img-back"
                            src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-11.jpg"
                            alt="..."
                          />
                          <img
                            className="card-img-top card-img-front"
                            src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-124.jpg"
                            alt="..."
                          />
                        </a>

                        <div className="card-actions">
                          <span className="card-action eye">
                            <a
                              className="btn btn-lg btn-circle btn-white"
                              data-bs-toggle="modal"
                              data-bs-target="#modalProduct"
                            >
                              <i className="">
                                <FiEye className=" tw-text-2xl" />
                              </i>
                            </a>
                          </span>
                          <span className="card-action shop">
                            <a
                              className="btn btn-lg btn-circle btn-white"
                              data-toggle="button"
                            >
                              <i className="">
                                <FiShoppingCart className=" tw-text-2xl" />
                              </i>
                            </a>
                          </span>
                          <span className="card-action heart">
                            <a
                              className="btn btn-xs btn-circle btn-white"
                              data-toggle="button"
                            >
                              <i className="">
                                <BiHeart className=" tw-text-2xl" />
                              </i>
                            </a>
                          </span>
                        </div>
                      </div>

                      <div className="card-body px-0">
                        <div className="fs-xs card-title">
                          <a className="text-muted" href="">
                            Shoes
                          </a>
                        </div>

                        <div className="fw-bold">
                          <a className="text-body" href="product.html">
                            Leather mid-heel Sandals
                          </a>
                        </div>

                        <div className="fw-bold text-muted">$129.00</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-4">
                    <div className="card mb-7" >
                      <div className="badge bg-white text-body card-badge card-badge-start text-uppercase">
                        New
                      </div>

                      <div className="card-img">
                        <a className="card-img-hover">
                          <img
                            className="card-img-top card-img-back"
                            src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-12.jpg"
                            alt="..."
                          />
                        </a>

                        <div className="card-actions">
                          <span className="card-action eye">
                            <a
                              className="btn btn-lg btn-circle btn-white"
                              data-bs-toggle="modal"
                              data-bs-target="#modalProduct"
                            >
                              <i className="">
                                <FiEye className=" tw-text-2xl" />
                              </i>
                            </a>
                          </span>
                          <span className="card-action shop">
                            <a
                              className="btn btn-lg btn-circle btn-white"
                              data-toggle="button"
                            >
                              <i className="">
                                <FiShoppingCart className=" tw-text-2xl" />
                              </i>
                            </a>
                          </span>
                          <span className="card-action heart">
                            <a
                              className="btn btn-xs btn-circle btn-white"
                              data-toggle="button"
                            >
                              <i className="">
                                <BiHeart className=" tw-text-2xl" />
                              </i>
                            </a>
                          </span>
                        </div>
                      </div>

                      <div className="">
                        <div className="">
                        <div className="">
                          <a className="text-muted text-lg " href="">
                            Shoes
                          </a>
                        </div>

                        <div className=" fw-semibold text-xl">
                          <a className="text-body mb-3" href="#">
                            Leather mid-heel Sandals
                          </a>
                        </div>

                        <div className=" fw-bold text-muted text-lg ">$129.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
        <div className=" d-flex justify-content-end tw-mb-8">
            

<nav aria-label="...">
  <ul className="pagination">
    <li className="page-item disabled">
      <a className="page-link" href="#" tabIndex="-1"><BsCaretLeftFill className=" tw-text-2xl"/></a>
    </li>
    <li className="page-item"><a className="page-link px-4" href="#">1</a></li>
    <li className="page-item">
      <a className="page-link px-4" href="#">2</a>
    </li>
    <li className="page-item"><a className="page-link px-4" href="#">3</a></li>
    <li className="page-item"><a className="page-link px-4" href="#">4</a></li>
    <li className="page-item"><a className="page-link px-4" href="#">5</a></li>
    <li className="page-item"><a className="page-link px-4" href="#">6</a></li>
    <li className="page-item">
      <a className="page-link" href="#"><BsFillCaretRightFill className=" tw-text-2xl"/></a>
    </li>
  </ul>
</nav>
          </div>
      </div>
    </div>
  );
};

export default Shop;
