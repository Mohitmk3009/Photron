"use client";

// ============================================================================
// CertificatesCarousel.jsx  –  Next.js / React 18 / Tailwind CSS / Swiper v10
// ----------------------------------------------------------------------------
// • Displays 1 certificate per view on mobile and 4 per view on desktop.
// • Loops infinitely.
// • Custom left/right arrow buttons positioned outside the slide row.
// • All logic is self-contained.
// ============================================================================

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// ---- Certificate assets ----------------------------------------------------
import iso45001 from "../assets/c3.png";
import iso17025 from "../assets/c4.png";
import iso9001 from "../assets/c1.png";
import udhyam from "../assets/c5.jpg";
import iso14001 from "../assets/c2.png";

const certificates = [
  { src: iso45001, alt: "ISO 45001:2018 Certificate", label: "ISO 45001:2018" },
  { src: iso17025, alt: "ISO/IEC 17025:2017", label: "ISO/IEC 17025:2017" },
  { src: iso9001, alt: "ISO 9001:2015 Certificate", label: "ISO: 9001:2015" },
  { src: iso14001, alt: "ISO 14001:2015 Certificate", label: "ISO: 14001: 2015" },
  { src: udhyam, alt: "CPCB Recognition – page 1", label: "CPCB/MoEF – Page-1" },
];

// ---- Component -------------------------------------------------------------
export default function CertificatesCarousel({ className = "" }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className={`lg:w-full py-5 flex flex-col items-center bg-gradient-to-br from-cyan-50 to-indigo-50 ${className}`}>
      {/* Heading ----------------------------------------------------------- */}
      {/* <div className="flex items-center justify-center lg:mb-6 lg:px-6 px-5 w-full">
        <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px] "></div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3 mx-4 text-center">Certificates</h1>
        <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px] "></div>
      </div> */}
      <div className="flex items-center justify-center lg:mb-6 lg:px-6 px-8 lg:w-fit w-full">
        <div className="flex-grow border-t border-gray-300 h-[1px] w-[110px] "></div>
        <h1 className="lg:text-4xl text-2xl font-extrabold whitespace-nowrap text-gray-900 lg:mb-3 mx-4 text-center">Certificates</h1>
        <div className="flex-grow border-t border-gray-300 h-[1px] w-[110px] "></div>
      </div>
      {/* Slider wrapper to position arrows */}
      <div className="relative max-w-screen-2xl bg-gray mx-auto w-full px-2 sm:px-4 md:px-6">
        {/* Custom navigation buttons */}
        <button
          ref={prevRef}
          aria-label="Previous certificates"
          className="absolute lg:left-0 left-2 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#1d2155] rounded-full p-2 shadow-lg hover:bg-[#1d2155] hover:text-white transition block"
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          ref={nextRef}
          aria-label="Next certificates"
          className="absolute lg:right-0 right-2 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#1d2155] rounded-full p-2 shadow-lg hover:bg-[#1d2155] hover:text-white transition block"
        >
          <FiChevronRight size={24} />
        </button>

        <Swiper
          modules={[Navigation, A11y]}
          loop={true}
          spaceBetween={0}
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation) {
              // eslint-disable-next-line no-param-reassign
              swiper.params.navigation.prevEl = prevRef.current;
              // eslint-disable-next-line no-param-reassign
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
        >
          {certificates.map(({ src, alt, label }, idx) => (
            <SwiperSlide key={idx} className="!flex justify-center">
              <figure className="flex flex-col items-center p-4">
                <div className="relative w-[260px] h-[360px] shadow-lg rounded-md overflow-hidden border-2 border-[#1d2155] bg-white">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-contain"
                    priority={idx < 2}
                  />
                </div>
                <figcaption className="text-sm font-semibold text-[#1d2155] mt-3 text-center max-w-[200px]">
                  {label}
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}