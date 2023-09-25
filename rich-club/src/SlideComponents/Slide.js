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
      </Swiper>
    </div>
  );
}

export default Slide;
