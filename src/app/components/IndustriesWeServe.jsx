// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import automobile from '../assets/automobile.jpg';
// import textile from '../assets/textile.jpg';
// import construction from '../assets/construction.jpg';
// import power from '../assets/power.jpg';
// import publicadmin from '../assets/publicadmin.jpg';
// import manufacturing from '../assets/manufacturing.jpg';
// import refinery from '../assets/refinery.jpg';
// import chemical from '../assets/chemical.jpg';
// import food from '../assets/food.jpg';
// import sugarmill from '../assets/sugarmill.png';
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// // --- Industries Data ---
// // I've replaced the SVG icons with an `imageUrl`. 
// // IMPORTANT: Replace the placeholder URLs with the actual paths to your images in the `public/assets` folder.
// const industries = [
//     { name: 'Automobile', imageUrl: automobile }, // e.g., '/assets/automobile.png'
//     { name: 'Textile Industry', imageUrl: textile }, // e.g., '/assets/textile.png'
//     { name: 'Construction', imageUrl: construction }, // e.g., '/assets/construction.png'
//     { name: 'Power', imageUrl: power }, // e.g., '/assets/power.png'
//     { name: 'Public Administration', imageUrl: publicadmin }, // e.g., '/assets/public-admin.png'
//     { name: 'Manufacturing', imageUrl: manufacturing }, // e.g., '/assets/manufacturing.png'
//     { name: 'Refineries', imageUrl: refinery }, // e.g., '/assets/refineries.png'
//     { name: 'Chemical Manufacturing', imageUrl: chemical }, // e.g., '/assets/chemical.png'
//     { name: 'Food & Beverages', imageUrl: food }, // e.g., '/assets/food.png'
//     { name: 'Sugar Mills', imageUrl: sugarmill }, // e.g., '/assets/sugar.png'
// ];

// // --- Main Component ---
// function IndustriesWeServe() {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isIntersecting, setIsIntersecting] = useState(false);
//     const sectionRef = useRef(null);

//     // --- Intersection Observer for Animation ---
//     // This triggers the animation only when the component is visible on screen.
//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsIntersecting(true);
//                     observer.unobserve(entry.target); // Animate only once
//                 }
//             },
//             {
//                 rootMargin: '0px',
//                 threshold: 0.15 // Trigger when 15% of the element is visible
//             }
//         );

//         if (sectionRef.current) {
//             observer.observe(sectionRef.current);
//         }

//         return () => {
//             if (sectionRef.current) {
//                 observer.unobserve(sectionRef.current);
//             }
//         };
//     }, []);

//     // --- Slider Logic ---
//     const getVisibleSlides = () => {
//         if (typeof window !== 'undefined' && window.innerWidth < 768) {
//             return 1; // Mobile view
//         }
//         return 4; // Desktop view
//     };

//     const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides());

//     useEffect(() => {
//         const handleResize = () => {
//             setVisibleSlides(getVisibleSlides());
//             // Reset index on resize to avoid blank spaces
//             setCurrentIndex(0);
//         };
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % (industries.length - visibleSlides + 1));
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + (industries.length - visibleSlides + 1)) % (industries.length - visibleSlides + 1));
//     };

//     const slideWidthPercentage = 100 / visibleSlides;

//     return (
//         <section
//             ref={sectionRef}
//             className={`bg-gray-50 py-5 lg:pt-5 lg:pb-10 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
//         >
//             <div className="w-[1600px] mx-auto px-4  lg:px-0 ">

//                 <div className="text-center mb-5 flex flex-col items-center">
//                     <div className="flex items-center justify-center lg:mb-2 mb-3 lg:px-6 px-5 lg:w-fit w-full">
//                         <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px] "></div>
//                         <h1 className="lg:text-4xl text-2xl font-extrabold whitespace-nowrap text-gray-900 lg:mb-3 mx-4 text-center">Industries We Serve</h1>
//                         <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px] "></div>
//                     </div>
//                     <p className=" text-lg text-gray-600">
//                         Pioneering solutions across a wide spectrum of industries.
//                     </p>
//                 </div>

//                 {/* --- Slider Container --- */}
//                 <div className="relative">
//                     <div className="overflow-hidden">
//                         <div
//                             className="flex transition-transform duration-500 ease-in-out "
//                             style={{ transform: `translateX(-${currentIndex * slideWidthPercentage}%)` }}
//                         >
//                             {industries.map((industry) => (
//                                 <div
//                                     key={industry.name}
//                                     className="flex-shrink-0 px-1 "
//                                     style={{ width: `${slideWidthPercentage}%` }}
//                                 >
//                                     <div className="flex flex-col items-center text-center group ">
//                                         <div className="w-[300px] h-fit bg-white shadow-lg rounded-2xl flex items-center justify-center mb-4 overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
//                                             <Image
//                                                 src={industry.imageUrl}
//                                                 alt={industry.name}
//                                                 height={2000}
//                                                 width={2000}
//                                                 className="w-full h-44 object-cover"
//                                                 onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/300x300/FEE2E2/374151?text=Error'; }}
//                                             />
//                                         </div>
//                                         <h3 className="text-md font-semibold text-gray-800">{industry.name}</h3>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* --- Navigation Buttons --- */}
//                     <button
//                         onClick={prevSlide}

//                         aria-label="Previous slides"
//                         className="absolute lg:left-0 left-2 mr-2 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#1d2155] rounded-full p-2 shadow-lg hover:bg-[#1d2155] hover:text-white transition block"
//                     >
//                         <FiChevronLeft size={24} />
//                     </button>
//                     <button
//                         onClick={nextSlide}
//                         aria-label="Next slides"
//                         className="absolute lg:right-0 right-2 ml-2 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#1d2155] rounded-full p-2 shadow-lg hover:bg-[#1d2155] hover:text-white transition block"
//                     >
//                         <FiChevronRight size={24} />
//                     </button>
//                     {/* <button
//                         onClick={prevSlide}
//                         className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition z-10"
//                         aria-label="Previous Slide"
//                     >
//                         <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
//                     </button>
//                     <button
//                         onClick={nextSlide}
//                         className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition z-10"
//                         aria-label="Next Slide"
//                     >
//                         <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
//                     </button> */}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default function App() {
//     return (
//         <div className="font-sans">
//             <IndustriesWeServe />
//         </div>
//     );
// }

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

import automobile from '../assets/automobile.jpg';
import textile from '../assets/textile.jpg';
import construction from '../assets/construction.jpg';
import power from '../assets/power.jpg';
import publicadmin from '../assets/publicadmin.jpg';
import manufacturing from '../assets/manufacturing.jpg';
import refinery from '../assets/refinery.jpg';
import chemical from '../assets/chemical.jpg';
import food from '../assets/food.jpg';
import sugarmill from '../assets/sugarmill.png';
// --- Industries Data ---
// I've replaced the SVG icons with an `imageUrl`. 
// IMPORTANT: Replace the placeholder URLs with the actual paths to your images in the `public/assets` folder.
const industries = [
    { name: 'Automobile', imageUrl: automobile, alt: 'Automobile' }, // e.g., '/assets/automobile.png'
    { name: 'Textile Industry', imageUrl: textile, alt: 'Automobile' }, // e.g., '/assets/textile.png'
    { name: 'Construction', imageUrl: construction, alt: 'Automobile' }, // e.g., '/assets/construction.png'
    { name: 'Power', imageUrl: power, alt: 'Automobile' }, // e.g., '/assets/power.png'
    { name: 'Public Administration', imageUrl: publicadmin, alt: 'Automobile' }, // e.g., '/assets/public-admin.png'
    { name: 'Manufacturing', imageUrl: manufacturing, alt: 'Automobile' }, // e.g., '/assets/manufacturing.png'
    { name: 'Refineries', imageUrl: refinery, alt: 'Automobile' }, // e.g., '/assets/refineries.png'
    { name: 'Chemical Manufacturing', imageUrl: chemical, alt: 'Automobile' }, // e.g., '/assets/chemical.png'
    { name: 'Food & Beverages', imageUrl: food, alt: 'Automobile' }, // e.g., '/assets/food.png'
    { name: 'Sugar Mills', imageUrl: sugarmill, alt: 'Automobile' }, // e.g., '/assets/sugar.png'
];


// ---- Component -------------------------------------------------------------
export default function IndustriesWeServe({ className = "" }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className={`lg:w-full py-5 flex flex-col items-center bg-gray-50 ${className}`}>
            {/* Heading ----------------------------------------------------------- */}
            {/* <div className="flex items-center justify-center lg:mb-6 lg:px-6 px-5 w-full">
        <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px] "></div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3 mx-4 text-center">Certificates</h1>
        <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px] "></div>
      </div> */}
            <div className="flex items-center justify-center lg:mb-2 mb-1 lg:px-6 px-8 lg:w-fit w-full">
                <div className="flex-grow border-t border-gray-300 h-[1px] w-[110px] "></div>
                <h1 className="lg:text-4xl text-2xl font-extrabold whitespace-nowrap text-gray-900 lg:mb-3 mx-4 text-center">Industries We Serve</h1>
                <div className="flex-grow border-t border-gray-300 h-[1px] w-[110px] "></div>
            </div>
            <p className=" lg:text-lg text-sm lg:mb-6 mb-4 text-gray-600">
Pioneering solutions across a wide spectrum of industries.
                     </p>
            {/* Slider wrapper to position arrows */}
            <div className="relative max-w-screen-2xl bg-gray mx-auto w-full px-2 sm:px-4 md:px-6">
                {/* Custom navigation buttons */}
                <button
                    ref={prevRef}
                    aria-label="Previous certificates"
                    className="absolute lg:left-0 left-2 lg:top-[120px] top-[70px] -translate-y-1/2 z-10 bg-white border border-[#1d2155] rounded-full p-2 shadow-lg hover:bg-[#1d2155] hover:text-white transition block"
                >
                    <FiChevronLeft size={24} />
                </button>
                <button
                    ref={nextRef}
                    aria-label="Next certificates"
                    className="absolute lg:right-0 right-2 lg:top-[120px] top-[70px] -translate-y-1/2 z-10 bg-white border border-[#1d2155] rounded-full p-2 shadow-lg hover:bg-[#1d2155] hover:text-white transition block"
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
                    {industries.map(({ name, alt, imageUrl }, idx) => (
                        <SwiperSlide key={idx} className="!flex justify-center">
                            <figure className="flex flex-col items-center lg:pt-4">
                                <div className="relative lg:w-[320px] w-[250px] lg:h-[200px] h-[150px] shadow-lg rounded-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105  bg-white">
                                    <Image
                                        src={imageUrl}
                                        alt={alt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 300px"
                                        className="object-contain"
                                        priority={idx < 2}
                                    />
                                </div>
                                <figcaption className="lg:text-xl text-lg font-semibold text-[#1d2155] mt-3 text-center max-w-[200px]">
                                    {name}
                                </figcaption>
                            </figure>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}