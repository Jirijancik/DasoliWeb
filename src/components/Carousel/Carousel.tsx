import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import { useWindowSize } from "utils/hooks/useWindowSize";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export const Carousel = (props: any) => {
  const window = useWindowSize();
  return (
    <>
      <Swiper
        slidesPerView={window.width && window.width > 750 ? 3 : 1}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={false}
        pagination={{
          clickable: true,
        }}
        autoplay={props.autoplay}
        className='mySwiper'
      >
        {props.children &&
          props.children.map((item: any) => (
            <SwiperSlide key={item.key}>{item}</SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
