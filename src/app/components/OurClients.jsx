'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

import lnt from '../assets/LT.png'
import ascott from '../assets/ascott.png'
import mak_e from '../assets/mak-e.png'
import reliancemall from '../assets/reliancemall.png'
import wipro from '../assets/wipro.png'
import hira from '../assets/hirasweets.png'
import andromeda from '../assets/andromeda.png'
import jiwan from '../assets/jiwan.png'
import vivanta from '../assets/vivanta.png'
import crystalbalaji from '../assets/crystalbalaji.png'
import indianoil from '../assets/indianoil.png'
import hae from '../assets/hae.png'

const logos = [
  { id: 1, src: lnt, alt: 'L&T' },
  { id: 2, src: ascott, alt: 'Ascott' },
  { id: 3, src: mak_e, alt: 'Mak-e' },
  { id: 4, src: reliancemall, alt: 'Reliance Mall' },
  { id: 5, src: wipro, alt: 'Wipro' },
  { id: 6, src: hira, alt: 'Hira Sweets' },
  { id: 7, src: andromeda, alt: 'Andromeda' },
  { id: 8, src: jiwan, alt: 'Jiwan' },
  { id: 9, src: vivanta, alt: 'Vivanta' },
  { id: 10, src: crystalbalaji, alt: 'Crystal Balaji' },
  { id: 11, src: indianoil, alt: 'Indian Oil' },
  { id: 12, src: hae, alt: 'HAE' },
]

export default function OurClients() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-br from-cyan-50 to-indigo-50 py-5  lg:py-14 flex flex-col items-center justify-center font-sans"
    >
      <div className="flex items-center justify-center lg:mb-3 mb-1 lg:px-6 px-10 lg:w-fit w-full  lg:mt-[-30px]">
                <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px] "></div>
                <h1 className="lg:text-4xl text-2xl font-extrabold whitespace-nowrap text-gray-900 lg:mb-3 mx-4 text-center">Our Clients</h1>
                <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px] "></div>
            </div>
      <div className="lg:mx-auto lg:max-w-[1400px] max-w-[380px] px-0 lg:px-8">
        <div className="text-center">
          <h2 className="lg:text-3xl text-xl font-bold tracking-tight text-gray-900 ">
            Trusted by the world's best companies
          </h2>
          <p className="mt-1 lg:text-lg text-sm leading-8 text-center text-gray-600">
            We've built solutions for brands that are household names.
          </p>
        </div>

        {/* Continuous Logo Scroller */}
        <div className="lg:mt-14 mt-4 relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          
          <div className="flex animate-marquee">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 mx-2 lg:mx-10  flex items-center justify-center"
                style={{ width: '160px' }}
              >
                <Image
                  className="w-full object-contain  lg:h-[120px] h-[60px] hover:scale-105 transition-transform duration-200"
                  src={logo.src}
                  alt={logo.alt}
                  height={80}
                  width={160}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS inside JSX */}
      <style jsx>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* move one full set */
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite; /* adjust speed here */
        }
      `}</style>
    </motion.div>
  )
}
