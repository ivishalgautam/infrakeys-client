"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AhluwaliaContracts from "../../../assets/images/Ahulwalia Contracts logo.png";
import IndianOil from "../../../assets/images/indianoil_logo.jpg";
import Interarch from "../../../assets/images/Interarch_logo.jpeg";
import Kalpatpowr from "../../../assets/images/KALPATPOWR.NS_logo.png";
import Kirby from "../../../assets/images/Kirby.png";
import LT from "../../../assets/images/L&T.webp";
import Navayuga from "../../../assets/images/Navayuga.png";
import Ncrtc from "../../../assets/images/NCRTC_LOGO.png";
import Shapoorji from "../../../assets/images/Shapoorji_Pallonji.png";
import Tata from "../../../assets/images/Tata_Projects_Logo.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import CenterHeading from "@/components/CenterHeading";

export default function Clientele() {
  const [clients, setClients] = useState([]);
  return (
    <section className="plainSection">
      <CenterHeading heading="Our Clients" />
      <div className="container-fluid mt-4">
        <div className="row">
          <Swiper
            breakpoints={{
              480: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            <div className="col-lg-3 col-sm-6">
              <SwiperSlide>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <img
                    {...AhluwaliaContracts}
                    style={{
                      backgroundPosition: "center",
                      backgroundSize: "fill",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <img
                    {...IndianOil}
                    style={{
                      backgroundPosition: "center",
                      backgroundSize: "fill",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <img
                    {...Interarch}
                    style={{
                      backgroundPosition: "center",
                      backgroundSize: "fill",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <img
                    {...Kalpatpowr}
                    style={{
                      backgroundPosition: "center",
                      backgroundSize: "fill",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <img
                    {...Kirby}
                    style={{
                      backgroundPosition: "center",
                      backgroundSize: "fill",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <img
                    {...LT}
                    style={{
                      backgroundPosition: "center",
                      backgroundSize: "fill",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <img
                    {...Navayuga}
                    style={{
                      backgroundPosition: "center",
                      backgroundSize: "fill",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <img
                    {...Ncrtc}
                    style={{
                      backgroundPosition: "center",
                      backgroundSize: "fill",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <img
                    {...Shapoorji}
                    style={{
                      backgroundPosition: "center",
                      backgroundSize: "fill",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <img
                    {...Tata}
                    style={{
                      backgroundPosition: "center",
                      backgroundSize: "fill",
                    }}
                  />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
