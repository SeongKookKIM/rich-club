import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

function Slide({ data }) {
  return (
    <div className="swiper-slide-wrapper">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        speed={2000}
        className="mySwiper"
      >
        {data && (
          <>
            {data.map((it, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="slide-img">
                    <img src={it.src} alt="slide-img" />
                  </div>
                  <div className="slide-content">
                    <strong>{it.title}</strong>
                    <p>{it.description}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </>
        )}

        {/* <SwiperSlide>
          <div className="slide-img">
            <img src="/assets/image/NFT/Token/9lung.png" alt="slide-img" />
          </div>
          <div className="slide-content">
            <strong>Born To Be Rich</strong>
            <p>
              This token prevents death from heart disease such as heart attack,
              high blood pressure, etc. Protect yourself from sudden death.
            </p>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}

export default Slide;
