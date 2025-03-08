"use client";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import axios from "axios";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.abcpabnabd.com/api/v1/hero-slider"
        );

        setBanners(response?.data?.data || []);
      } catch (error) {
        // Improved error handling
        if (error.response) {
          console.error(
            `Error fetching banners: ${error.response.status} - ${error.response.data}`
          );
        } else if (error.request) {
          console.error("No response received from server:", error.request);
        } else {
          console.error("Error setting up request:", error.message);
        }
      }
    };

    fetchData();
  }, []);

  if (banners?.length === 0) return null;

  return (
    <div id="hero">
      <div className="hero-slider-container">
        <Swiper
          pagination={{
            clickable: true,
          }}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper swiper-wrapper"
        >
          {banners?.map((banner, idx) => (
            <SwiperSlide key={idx} className="hero_slide">
              <div>
                <img src={`https://api.abcpabnabd.com${banner?.slideImg}`} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <!-- Swiper Navigation --> */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
};

export default Hero;
