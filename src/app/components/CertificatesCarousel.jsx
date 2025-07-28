"use client";

// ============================================================================
// CertificatesCarousel.jsx  –  Next.js / React 18 / Tailwind CSS / Swiper v10
// ----------------------------------------------------------------------------
// • Displays 4 certificates per view, looping infinitely.
// • Custom left/right arrow buttons positioned outside the slide row (like
//   the reference screenshot).
// • All logic is self‑contained; import this component in any page.
//
// 📦  Install (once):
//     npm i swiper react-icons
// ============================================================================

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// ---- Certificate assets ----------------------------------------------------
import certPage1 from "../assets/c1.png";
import certPage2 from "../assets/c2.png";
import bisApproved from "../assets/c3.png";
import iso9001 from "../assets/c4.png";
import iso14001 from "../assets/c1.png";
// import iso45001 from "@/public/certs/iso-45001.jpg";
// import nabl from "@/public/certs/nabl.jpg";

const certificates = [
  { src: bisApproved, alt: "BIS Approved", label: "BIS Approved" },
  { src: iso9001, alt: "ISO 9001:2015 Certificate", label: "ISO: 9001: 2015" },
  { src: iso14001, alt: "ISO 14001:2015 Certificate", label: "ISO: 14001: 2015" },
  // { src: iso45001, alt: "ISO 45001:2018 Certificate", label: "ISO: 45001: 2018" },
  // { src: nabl, alt: "NABL Accreditation", label: "NABL Accredited" },
  { src: certPage1, alt: "CPCB Recognition – page 1", label: "CPCB/MoEF – Page‑1" },
  { src: certPage2, alt: "CPCB Recognition – page 2", label: "CPCB/MoEF – Page‑2" },
];

// ---- Component -------------------------------------------------------------
export default function CertificatesCarousel({ className = "" }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className={`w-full py-5 flex flex-col items-center bg-gray-50  ${className}`}>
      {/* Heading ----------------------------------------------------------- */}
      <div className="flex items-center justify-center lg:mb-6 lg:px-6 px-5 lg:w-fit w-full">
        <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px]"></div>
        <h2 className="text-center mx-4 lg:text-2xl text-lg font-semibold text-black"> Accreditations &amp; Approvals</h2>
        <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px] "></div>
      </div>
      {/* <div className="w-24 h-[3px] bg-green-500 mx-auto mt-3 mb-8" /> */}

      {/* Slider wrapper to position arrows */}
      <div className="relative max-w-screen-2xl mx-auto px-2">
        {/* Custom navigation buttons */}

        <button
          ref={prevRef}
          aria-label="Previous certificates"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#1d2155] rounded-full p-2 shadow-lg hover:bg-[#1d2155] hover:text-white transition"
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          ref={nextRef}
          aria-label="Next certificates"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#1d2155] rounded-full p-2 shadow-lg hover:bg-[#1d2155] hover:text-white transition"
        >
          <FiChevronRight size={24} />
        </button>

        <Swiper
          modules={[Navigation, A11y]}
          loop={true}
          spaceBetween={0}
          slidesPerView={4}
          onBeforeInit={(swiper) => {
            // Bind custom buttons to Swiper navigation
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.prevEl = prevRef.current;
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        >
          {certificates.map(({ src, alt, label }, idx) => (
            <SwiperSlide key={idx} className="!flex justify-center ">
              <figure className="flex flex-col items-center">
                <div className="relative w-[260px] h-[360px] shadow-lg rounded-md overflow-hidden border-2 border-[#1d2155] bg-white">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="300px"
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