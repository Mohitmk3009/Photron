'use client';

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import b1 from "../assets/bg1.jpg";
import b2 from "../assets/bg2.jpg";
import b3 from "../assets/bg3.jpg";
import b4 from "../assets/1.jpg";
import b5 from "../assets/5.jpg";
import b6 from "../assets/bg4.jpg";

const ImageCarousel = () => {
  const slides = [b1, b3, b2, b4, b6, b5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const endX = useRef(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Shared swipe handler
  const handleSwipe = () => {
    const delta = startX.current - endX.current;

    if (delta > 50) {
      // Swipe Left
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    } else if (delta < -50) {
      // Swipe Right
      setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    handleSwipe();
  };

  // Mouse handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    endX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    handleSwipe();
  };

  return (
    <div
      className="relative w-full bg-white lg:h-[600px] h-[180px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setIsDragging(false)}
    >
      {/* Slider */}
      <div
        className="flex transition-transform ease-linear duration-1000 select-none"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full lg:h-[600px] h-[180px] flex-shrink-0">
            <Image
              src={slide}
              width={5000}
              height={5000}
              alt={`Slide ${index + 1}`}
              className="w-full lg:h-[600px] h-[180px] object-cover object-center pointer-events-none"
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute lg:bottom-4 bottom-2 left-1/2 transform -translate-x-1/2 flex py-2 lg:px-3 px-2 bg-black/40 rounded-full space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`lg:w-3 lg:h-3 w-2 h-2 rounded-full ${
              currentIndex === index ? "bg-white lg:scale-125 scale-150" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;



// 'use client';

// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import b1 from "../assets/bg1.jpg";
// import b2 from "../assets/bg2.jpg";
// import b3 from "../assets/bg3.jpg";
// import b4 from "../assets/1.jpg"; 
// import b5 from "../assets/5.jpg"; 
// import b6 from "../assets/bg4.jpg"; 

// const ImageCarousel = () => {
//   const slides = [b1, b4, b2, b3, b6, b5];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [touchStartX, setTouchStartX] = useState(null);
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 3000); 
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const handleTouchStart = (e) => {
//     setTouchStartX(e.touches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     if (!touchStartX) return;

//     const touchEndX = e.touches[0].clientX;
//     const distance = touchStartX - touchEndX;

//     // A swipe is considered significant if the distance is greater than 50px
//     if (distance > 50) {
//       // Swiped left - go to the next slide
//       const newIndex = (currentIndex + 1) % slides.length;
//       setCurrentIndex(newIndex);
//       setTouchStartX(null); // Reset touch start to prevent multiple rapid slides
//     } else if (distance < -50) {
//       // Swiped right - go to the previous slide
//       const newIndex = (currentIndex - 1 + slides.length) % slides.length;
//       setCurrentIndex(newIndex);
//       setTouchStartX(null); // Reset touch start
//     }
//   };
  
//   const handleTouchEnd = () => {
//     setTouchStartX(null);
//   };

//   return (
//     <div 
//       className="relative w-full bg-white h-[600px] overflow-hidden"
//       ref={carouselRef}
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//     >
//       {/* Slider Container */}
//       <div
//         className="flex transition-transform ease-linear duration-1000"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <div key={index} className="w-full h-[800px] flex-shrink-0">
//             <Image
//               src={slide}
//               width={5000}
//               height={5000}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-[800px] object-cover object-center "
//             />
//           </div>
//         ))}
//       </div>

//       {/* Navigation Dots */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 rounded-full ${
//               currentIndex === index ? "bg-[#00B4FF]" : "bg-gray-400"
//             }`}
//             onClick={() => setCurrentIndex(index)}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageCarousel;


// 'use client';
// import React, { useState, useEffect } from "react";
// // import p1 from "../assets/BG1.png";
// // import p2 from "../assets/BG2.png";
// // import p3 from "../assets/BG3.png";
// import p1 from "../assets/b1.jpg";
// import p2 from "../assets/b2.jpg";
// import p3 from "../assets/b3.jpg";
// import Image from "next/image";

// const Slide1 = () => (
//   <div className="w-[1920px] h-[800px] flex-shrink-0 relative">
//     <Image
//       src={p1.src || p1}
//       width={1920}
//       height={1080}
//       alt="Slide 1"
//       className="w-full h-[800px] object-cover"
//     />
//     <div className="absolute inset-0 flex flex-col bg-black/40 items-end justify-center text-center px-20">
//       <div className="bg-white w-[800px] text-black p-10 rounded-xl text-left"> <h1 className=" text-2xl md:text-6xl font-bold mb-4">
//         Grow more, earn more
//       </h1>
//         <h2 className=" text-justify text-xl text-gray-500 mb-4">
//           Chairbord offers innovative opportunities for growth and increased revenue through its diverse range of products, seamlessly interconnected to a unified platform.
//         </h2>
//         <button
//           className="px-6 py-2 bg-black text-white text-lg font-semibold rounded hover:bg-[#008FCC] transition"
//           onClick={() => alert("Navigating to products page!")}
//         >
//           Learn More
//         </button>
//       </div>


//     </div>
//   </div>
// );

// const Slide2 = () => (
//   <div className="w-[1920px] h-[800px] flex-shrink-0 relative">
//     <Image
//       src={p2.src || p2}
//       width={1920}
//       height={1080}
//       alt="Slide 2"
//       className="w-full h-[800px] object-cover"
//     />
//     <div className="absolute inset-0 flex flex-col items-center bg-black/60  justify-center text-center p-4 bg-amber-300">
//       <div className="w-[1000px]"><h2 className="text-white text-2xl md:text-6xl font-bold mb-4">
//         Make your Vehicle an Attention to Drive
//       </h2>
//         <h2 className="text-white text-xl  mb-4">
//           Chairbord provides a wide range of premium products and accessories designed to enhance the luxury of your vehicle while supporting its maintenance and upkeep.
//         </h2>
//         <button
//           className="px-6 py-2 bg-[#00B4FF] text-white text-lg font-semibold rounded hover:bg-[#008FCC] transition"
//           onClick={() => alert("Navigating to sign-up page!")}
//         >
//           Sign Up
//         </button></div>

//     </div>
//   </div>
// );

// const Slide3 = () => (
//   <div className="w-[1920px] h-[800px] flex-shrink-0 relative">
//     <Image
//       src={p3.src || p3}
//       width={1920}
//       height={1080}
//       alt="Slide 3"
//       className="w-full h-[800px] object-cover"
//     />
//     <div className="absolute inset-0 flex flex-col items-end bg-black/40 justify-center text-justify p-20">
//       <div className=" w-[700px]">
//         <h2 className="text-white text-2xl md:text-6xl font-bold mb-4">
//           HDFC Credit Card made for you
//         </h2>
//         <h2 className="text-white text-xl  mb-4">
//           Chairbord offers HDFC Credit Cards tailored to meet your needs, providing a seamless lifestyle experience at no additional cost. Terms and conditions apply.
//         </h2>
//         <div className="flex items-center bg-white rounded-xl shadow-md overflow-hidden p-2 w-full">
//           <input
//             type="email"
//             placeholder="Enter email address"
//             className="flex-1 px-2 py-2 text-gray-700 focus:outline-none"
//           />
//           <button
//             className="px-6 py-2 bg-black rounded-md text-white font-semibold hover:bg-gray-800 transition"
//             onClick={() => alert("Email submitted!")}
//           >
//             Get Free Card
//           </button>
//         </div>
//       </div>

//     </div>
//   </div>
// );


// const ImageCarousel = () => {
//   const slides = [<Slide1 />, <Slide2 />, <Slide3 />];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 5000); // Change slide every 2 seconds
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <div className="relative w-full bg-white h-[600px] overflow-hidden">
//       {/* Slider Container */}
//       <div
//         className="flex transition-transform ease-linear duration-1000"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <div key={index}>{slide}</div>
//         ))}
//       </div>

//       {/* Navigation Dots */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-[#00B4FF]" : "bg-gray-400"
//               }`}
//             onClick={() => setCurrentIndex(index)}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageCarousel;
