"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { services } from "@/constant";
import ServiceCard from "./ServiceCard";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

const ServiceCarousel: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top bottom",
            end: "top 40%",
            toggleActions: "restart pause reverse none",
          },
        }
      );
    }
  }, []);

  return (
    <div className="container  mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-16 text-center bg-gray-background">
      <h2 ref={headingRef} className="heading font-bold text-white mb-10">
        Our <span className="text-green-text">Services</span>
      </h2>

      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="w-full max-w-7xl"
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <ServiceCard
              title={service.title}
              description={service.description}
              image={service.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceCarousel;
