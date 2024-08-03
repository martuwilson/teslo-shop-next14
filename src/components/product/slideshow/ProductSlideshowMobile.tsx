'use client'

import {Swiper,SwiperSlide} from "swiper/react"
import { Autoplay, FreeMode, Pagination } from "swiper/modules";


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css'
import Image from "next/image";

interface Props {
    images: string[];
    title: string;
    className?: string;
}

export const ProductSlideshowMobile = ({ images, title, className }: Props) => {

  return (
    <div className={className}>
      <Swiper
        style={{
          width: "100vw",
          height: "500px",
        }}
        pagination={true}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper2"
      >
        {images.map((image, index) => (
          <SwiperSlide key={image}>
            <Image
              width={600}
              height={500}
              src={`/products/${image}`}
              alt={title}
              className="rounded-lg object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};