'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import b1 from '../assets/1.jpg';
import b2 from '../assets/2.jpg';
import b3 from '../assets/3.jpg';
import b4 from '../assets/4.jpg';
import b5 from '../assets/5.jpg';
import b6 from '../assets/6.jpg';
import b7 from '../assets/7.jpg';
import b8 from '../assets/8.jpg';
import b9 from '../assets/9.jpg';
import b10 from '../assets/10.jpg';

const images = [
  { src: b1, alt: 'Image 1' },
  { src: b2, alt: 'Image 2' },
  { src: b3, alt: 'Image 3' },
  { src: b4, alt: 'Image 4' },
  { src: b5, alt: 'Image 5' },
  { src: b6, alt: 'Image 6' },
  { src: b7, alt: 'Image 7' },
  { src: b8, alt: 'Image 8' },
  { src: b9, alt: 'Image 9' },
  { src: b10, alt: 'Image 10' },
];

const ImageGallery = () => {
  const imageRefs = useRef([]);
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.3 }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      imageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="bg-white flex flex-col justify-center items-center px-5 lg:px-20 py-5">
      <div className="flex items-center justify-center lg:mb-6 mb-3 lg:px-6 px-5 lg:w-fit w-full">
        <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px] "></div>
        <h1 className="lg:text-4xl text-2xl font-extrabold whitespace-nowrap text-gray-900 lg:mb-3 mx-4 text-center">Gallery</h1>
        <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px] "></div>
      </div>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-4  sm:px-20  space-y-4">
        {images.map((image, index) => (
          <div
            key={index}
            data-index={index}
            ref={(el) => (imageRefs.current[index] = el)}
            className={`break-inside-avoid overflow-hidden rounded-lg shadow-md transition-all duration-700 ease-out transform
              ${visibleIndexes.includes(index)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'}
            `}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              className="w-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
